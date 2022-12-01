// axios 모듈 함수 작성
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  ResponseType,
} from "axios";
import isAuth from "../common/isAuth";
import RouterDefine from "@/routing/router-define";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
  // header 백엔드 요구에 맞춰서 담을 수 있도록
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});

// request handler
// axios 설정 통해 요청을 보낼 때 환경 설정
const requestHandler = (request: AxiosRequestConfig) => {
  // logs for dev
  console.log(`Request API: ${request.url}`);
  console.log(`  + Params:     `, request.params);
  console.log(`  + Data:       `, request.data);
  return request;
};
// apply requestHandler
axiosInstance.interceptors.request.use((_config) => requestHandler(_config));

// error handler
const errorHandler = (error: AxiosError) => {
  const resError: AxiosResponse | undefined = error.response;
  // JWT error exception handling
  // access token expired
  if ((resError.status = 401)) {
    // get access token from localstorage
    const getRefresh = JSON.parse(localStorage.getItem("token"));
    // get
    return post<any, any>(RouterDefine.ERROR_EXPIRED_ACCESS_TOKEN, {
      refresh: getRefresh,
    }).then((res) => {
      // 토큰 값 갱신
      return localStorage.setItem("token", res);
    });
  } else if ((resError.status = 402)) {
    // refresh token expired
    const getRefresh = JSON.parse(localStorage.getItem("token"));
    // get new access&refresh token
    return post<any, any>(RouterDefine.ERROR_EXPIRED_ACCESS_TOKEN, {
      refresh: getRefresh,
    }).then((res) => {
            // 토큰 값 갱신
      // 토큰 값 갱신
      // 토큰 값 갱신

      return localStorage.setItem("token", res);
    });
  } else if ((resError.status = 403)) {
    // access token 불일치 시
    alert("access token 불일치 시");
    return;
  }
};

// success handler
const successHandler = async (response: AxiosResponse) => {
  const data: any = response.data;
  // 토큰 만료 시
  if (data.status === "INVALID_TOKEN") {
    // 토큰 만료 시 어떻게 처리할 것인지?
    return;
  }
  return data;
};

// apply response res&err handler
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

// 헤더 isAuth 여부 체크
interface CustomHeaders {
  isAuth: boolean;
}
const initHeader: CustomHeaders = { isAuth: true };

// 각 메소드에 담을 header 생성 함수 작성
const getHeader = (customHeader?: CustomHeaders) => {
  const header: any = customHeader || {};
  const initCustomHeader = customHeader ? customHeader : initHeader;

  if (!initCustomHeader?.isAuth) {
    delete header.Authorization;
  } else {
    // isAuth로 토큰 여부 검사 후 토큰 값
    const token = isAuth();
    // 헤더에 토큰 담아서 전달
    header.Authorization = `Bearer ${token.access}`;
  }
  return { ...header };
};

async function fetch<ReqType, ResType>(
  url: string,
  params?: ReqType,
  // 백엔드 단에서 header 요청시 포함하여 전달,
  customHeaders?: CustomHeaders,
  responseType?: ResponseType
): Promise<ResType> {
  const headers = getHeader(customHeaders);
  return axiosInstance.get(url, { ...params, headers: headers, responseType });
}

async function post<ReqType, ResType>(
  url: string,
  data?: ReqType,
  customHeaders?: CustomHeaders
): Promise<ResType> {
  const headers = getHeader(customHeaders);
  // 백엔드 단에서 header 요청시 포함하여 전달
  return axiosInstance.post(url, { ...data }, { headers: headers });
}

async function put<ReqType, ResType>(
  url: string,
  data?: ReqType,
  customHeaders?: CustomHeaders
): Promise<ResType> {
  const headers = getHeader(customHeaders);
  // 백엔드 단에서 header 요청시 포함하여 전달
  return axiosInstance.put(url, { ...data }, { headers: headers });
}

async function patch<ReqType, ResType>(
  url: string,
  data?: ReqType,
  customHeaders?: CustomHeaders
): Promise<ResType> {
  // 백엔드 단에서 header 요청시 포함하여 전달
  const headers = getHeader(customHeaders);
  return axiosInstance.patch(url, { ...data }, { headers: headers });
}

async function remove<ResType>(
  url: string,
  customHeaders?: CustomHeaders
): Promise<ResType> {
  // 백엔드 단에서 header 요청시 포함하여 전달
  const headers = getHeader(customHeaders);
  return axiosInstance.delete(url, { headers: headers });
}

const ApiUtils = { post, fetch, put, patch, remove };

export default ApiUtils;

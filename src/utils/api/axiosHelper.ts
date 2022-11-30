// axios 모듈 함수 작성
import axios, { AxiosError, ResponseType } from "axios";
import isAuth from "../common/isAuth";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
  // header 백엔드 요구에 맞춰서 담을 수 있도록
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials : true
});

// 응답 인터센터 추가
axiosInstance.interceptors.response.use(
  (res) => {
    const data = res.data;
    return data;
  },
  // 에러 처리
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// error handler
const errorHandler = (error: AxiosError) => {
  const resError = error.response;
  // 토큰 갱신 로직 작성
};

// success handler
const successHandler = () => {};

// 헤더 isAuth 여부 체크
interface CustomHeaders {
  isAuth: boolean;
}
const initHeader: CustomHeaders = { isAuth: true };
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
  ResponseType?: ResponseType
): Promise<ResType> {
  const headers = getHeader(customHeaders);
  return axiosInstance.get(url, { ...params, headers, ResponseType });
}

async function post<ReqType, ResType>(
  url: string,
  data?: ReqType,
  customHeaders?: CustomHeaders
): Promise<ResType> {
  const headers = getHeader(customHeaders);
  // 백엔드 단에서 header 요청시 포함하여 전달
  return axiosInstance.post(url, { ...data });
}

async function put<ReqType, ResType>(
  url: string,
  data?: ReqType,
  customHeaders?: CustomHeaders
): Promise<ResType> {
  const headers = getHeader(customHeaders);
  // 백엔드 단에서 header 요청시 포함하여 전달
  return axiosInstance.put(url, { ...data });
}

async function patch<ReqType, ResType>(
  url: string,
  data?: ReqType,
  customHeaders?: CustomHeaders
): Promise<ResType> {
  // 백엔드 단에서 header 요청시 포함하여 전달
  const headers = getHeader(customHeaders);
  return axiosInstance.patch(url, { ...data });
}

async function remove<ResType>(
  url: string,
  customHeaders?: CustomHeaders
): Promise<ResType> {
  // 백엔드 단에서 header 요청시 포함하여 전달
  const headers = getHeader(customHeaders);
  return axiosInstance.delete(url);
}

const ApiUtils = { post, fetch, put, patch, remove };

export default ApiUtils;

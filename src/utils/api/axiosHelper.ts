// axios 모듈 함수 작성

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials : true
});

// 응답 인터센터 추가
axiosInstance.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

async function fetch<ReqType, ResType>(
  url: string,
  params?: ReqType
  // 백엔드 단에서 header 요청시 포함하여 전달
): Promise<ResType> {
  return axiosInstance.get(url, { ...params });
}

async function post<ReqType, ResType>(
  url: string,
  data?: ReqType
): Promise<ResType> {
  // 백엔드 단에서 header 요청시 포함하여 전달
  return axiosInstance.post(url, { ...data });
}

async function put<ReqType, ResType>(
  url: string,
  params?: ReqType
): Promise<ResType> {
  // 백엔드 단에서 header 요청시 포함하여 전달
  return axiosInstance.put(url, { ...params });
}

async function patch<ReqType, ResType>(
  url: string,
  data?: ReqType
): Promise<ResType> {
  // 백엔드 단에서 header 요청시 포함하여 전달
  return axiosInstance.patch(url, { ...data });
}

async function remove<ReqType, ResType>(
  url: string,
  params?: ReqType
): Promise<ResType> {
  // 백엔드 단에서 header 요청시 포함하여 전달
  return axiosInstance.delete(url, { ...params });
}

const ApiUtils = { post, fetch, put, patch, remove };

export default ApiUtils;

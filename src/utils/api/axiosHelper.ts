import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
});

async function post<ReqType, ResType>(
  url: string,
  data?: ReqType
): Promise<ResType> {
  return axiosInstance.post(url, { ...data });
}

async function fetch<ReqType, ResType>(
  url: string,
  params?: ReqType
): Promise<ResType> {
  return axiosInstance.get(url, { ...params });
}
const ApiUtils = { post };

export default ApiUtils;

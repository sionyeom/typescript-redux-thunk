import ApiUtils from "@/utils/api/axiosHelper";
import { LoginInputType } from "./types";
const apiName = {
  handleLogin: "/api/user/login",
};

export async function handleLogin(id: string, pw: string) {
  const res = await ApiUtils.post<LoginInputType, any>(apiName.handleLogin, {
    id: id,
    pw: pw,
  });
  return res;
}

import ApiUtils from "@/utils/api/axiosHelper";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/modules";
import { postLoginAllThunk } from "@/modules/Login";
import { LoginDescription } from "@/types/common";
interface Utils {
  handleLogin: () => void;
  handleData: () => void;
  data: any;
}

export default function LoginUtils(): Utils {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.Login.Login
  );

  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      dispatch(
        postLoginAllThunk("yeom", "yeom").then((e: any) => {
          console.log(e);
        })
      );
    } catch (e) {}
  };

  const handleData = () => {
    console.log(JSON.parse(localStorage.getItem(LoginDescription.TOKEN_KEY)));
  };

  return { handleLogin, handleData, data };
}

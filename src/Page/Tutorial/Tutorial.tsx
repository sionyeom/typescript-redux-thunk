import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/modules";
import {
  getTutorialAllThunk,
  PostTutorialThunk,
  UpdateTutorialThunk,
  DeleteTutorialThunk,
} from "@/modules/tutorial";
import TutorialInfo from "./components/TutorialInfo";
import { useNavigate } from "react-router-dom";

type Props = {};

const Tutorial = (props: Props) => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.tutorial.tutorialAll
  );
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTutorialAllThunk());
  }, []);

  // post
  const handleSumbit = (e: any) => {
    dispatch(PostTutorialThunk("123", "내용"));
    // 페이지 이동
    location.reload();
  };
  const handle = (e: any) => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  // update
  const handleUpdate = (e: any) => {
    let data = {
      title: "updatedTitle111",
      description: "updatedDescription",
    };
    // id, data = {title: title,description : description}
    dispatch(UpdateTutorialThunk("63859be5d04705f508024073", data));
    location.reload();
  };

  // delete
  const handleDelete = (e: any) => {
    dispatch(DeleteTutorialThunk("63859be5d04705f508024073"));
  };

  return (
    <>
      <button onClick={handleSumbit}>테스트</button>
      <button onClick={handleUpdate}>수정 테스트</button>
      <button onClick={handleDelete}>삭제 테스트</button>
      <button onClick={handle}>로그아웃</button>

      {loading && console.log("로딩중!")}
      {error && console.log(0)}
      {data &&
        data?.map((e: any, index: number) => {
          return (
            <TutorialInfo
              key={index}
              title={e.title}
              description={e.description}
              createdAt={e.createdAt}
              updatedAt={e.updatedAt}
            />
          );
        })}
    </>
  );
};

export default Tutorial;

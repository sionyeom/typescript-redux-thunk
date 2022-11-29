import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/modules";
import { getTutorialAllThunk, PostTutorialThunk } from "@/modules/tutorial";
import TutorialInfo from "./components/TutorialInfo";
type Props = {};

const Tutorial = (props: Props) => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.tutorial.tutorialAll
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTutorialAllThunk());
  }, []);

  const handleSumbit = (e: any) => {
    dispatch(PostTutorialThunk("123", "내용"));
    // 페이지 이동
    location.reload();
  };

  return (
    <>
      <button onClick={handleSumbit}>테스트</button>
      <button onClick={handleSumbit}>수정 테스트</button>
      <button onClick={handleSumbit}>삭제 테스트</button>

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

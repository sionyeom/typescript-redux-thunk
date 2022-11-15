import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/modules";
import { getTutorialAllThunk } from "@/modules/tutorial";
import TutorialInfo from "@/components/tutorial/TutorialInfo";
type Props = {};

const TutorialLoader = (props: Props) => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.tutorial.tutorialAll
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTutorialAllThunk());
  }, []);

  return (
    <>
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

export default TutorialLoader;

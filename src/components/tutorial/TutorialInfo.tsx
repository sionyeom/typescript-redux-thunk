import React from "react";

type Props = {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

const TutorialInfo = ({ title, description, createdAt, updatedAt }: Props) => {
  return (
    <div>
      <p>제목: {title}</p>
      <p>내용: {description}</p>
      <p>작성일자: {createdAt}</p>
      <p>수정일자:{updatedAt}</p>
    </div>
  );
};

export default TutorialInfo;

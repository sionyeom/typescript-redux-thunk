import axios from "axios";
import ApiUtils from "@/utils/api/axiosHelper";

const apiName = {
  getTutorial: "api/tutorial",
  postTutorial: "api/tutorial",
};

// READ
export async function getAllTutorial() {
  const res = await ApiUtils.fetch<undefined, Tutorial>(apiName.getTutorial);

  return res;
}

// CREATE
export async function postTutorial(title: string, description: string) {
  const res = await ApiUtils.post<InputType, any>(apiName.postTutorial, {
    title: title,
    description: description,
  });

  return res;
}

// UPDATE
export async function UpdateTutorial(id: string, data: string[]) {
  const response = await axios<Tutorial>({
    method: "patch",
    url: "http://localhost:8080/api/tutorial",
    data: {
      title: id,
      description: data,
    },
  });

  return response.data;
}

// DELETE
export async function deleteTutorial(id: string) {
  const response = await axios<Tutorial>({
    method: "delete",
    url: "http://localhost:8080/api/tutorial",
    data: {
      id: id,
    },
  });

  return response.data;
}

// 각 CRUD에 맞는 타입 인터페이스를 작성할 필요가 있음
export interface Tutorial {
  _id: string;
  title: string;
  description: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  [key: string]: any;
}

export interface InputType {
  title: string;
  description: string;
}

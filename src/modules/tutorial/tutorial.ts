import axios from "axios";
import ApiUtils from "@/utils/api/axiosHelper";

const apiName = {
  getTutorial: "api/tutorial",
  postTutorial: "api/tutorial",
  updateTutorial: "api/tutorial",
  deleteTutorial: "api/tutorial",
};

// READ
export async function getAllTutorial() {
  const res = await ApiUtils.fetch<undefined, Tutorial>(apiName.getTutorial);
  return res;
}

// CREATE
export async function postTutorial(title: string, description: string) {
  const res = await ApiUtils.post<CreateInputType, any>(apiName.postTutorial, {
    title: title,
    description: description,
  });
  return res;
}

// UPDATE
export async function updateTutorial(id: string, data: UpdateInputType) {
  const res = await ApiUtils.patch<UpdateInputType, any>(
    `${apiName.updateTutorial}/${id}`,
    data
  );
  return res;
}

// DELETE
// 삭제 각 status에 따른 ReqType,ResType 지정 필요
export async function deleteTutorial(id: string) {
  const res = await ApiUtils.remove<any>(`${apiName.updateTutorial}/${id}`);
  return res;
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

export interface CreateInputType {
  title: string;
  description: string;
}

export interface UpdateInputType {
  title: string;
  description: string;
}

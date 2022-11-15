import axios from "axios";

// READ
export async function getAllTutorial() {
  const response = await axios.get<Tutorial>(
    `http://localhost:8080/api/tutorial`
  );
  console.log(response.data);

  return response.data;
}

// CREATE
export async function postTutorial(title: string, description: string) {
  const response = await axios<Tutorial>({
    method: "post",
    url: "http://localhost:8080/api/tutorial",
    data: {
      title: title,
      description: description,
    },
  });

  return response.data;
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

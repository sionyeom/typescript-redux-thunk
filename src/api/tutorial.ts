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
  axios({
    method: "post",
    url: "http://localhost:8080/api/tutorial",
    data: {
      title: title,
      description: description,
    },
  });
}

// UPDATE
export async function UpdateTutorial(id: string, data: string[]) {
  axios({
    method: "patch",
    url: "http://localhost:8080/api/tutorial",
    data: { id: id, data: data },
  });
}

// DELETE
export async function deleteTutorial(title: string, description: string) {
  axios({
    method: "delete",
    url: "http://localhost:8080/api/tutorial",
    data: {
      title: title,
      description: description,
    },
  });
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

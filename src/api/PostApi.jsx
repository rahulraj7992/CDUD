import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// get method
export const getPost = () => {
  return api.get("/users");
};

// delete method
export const deletePost = (id) => {
  return api.delete(`/users/1${id}`);
};

//post method
export const postData = (post) => {
  return api.post("/users", post);
};

//put method
export const updateData = (id, post) => {
  return api.put(`/users/1${id}`, post);
};

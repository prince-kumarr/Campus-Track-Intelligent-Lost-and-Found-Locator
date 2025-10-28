import axios from "axios";

const BASE_URL = "http://localhost:9999/lost-found/login";

export const registerNewUser = (user) => axios.post(BASE_URL, user);

export const validateUser = (userId, password) =>
  axios.get(`${BASE_URL}/${userId}/${password}`);

export const getUserDetails = () => axios.get(BASE_URL);

export const getAllStudents = () => axios.get(`${BASE_URL}/students`);

export const deleteStudentByUsername = (username) =>
  axios.delete(`${BASE_URL}/student/${username}`);

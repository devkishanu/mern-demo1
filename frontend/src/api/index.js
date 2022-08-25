import axios from "axios";
import { message } from "antd";

// const url = "http://localhost:5001/";
const api = axios.create({baseURL: "http://localhost:5001/"});

api.interceptors.request.use((req) => {

    if (localStorage.getItem("profile")) {
        const profile = JSON.parse(localStorage.getItem("profile"));

        req.headers.Authorization = `Bearer ${profile.token}`;
    }

    return req;
});

api.interceptors.response.use((response) => response, (error) => {
    // whatever you want to do with the error
    // if (error.response.status == '200') {
    //     message.success(error.response.data);
    // } else if (error.response.status == '500' && error.response.status == '404') {
    //     message.error('Something went wrong');
    // } else {
    //     message.error(error.response.data);
    // }
    throw error;
});

export const fetchStories = async () => api.get("/stories");
export const createStory = async (story) => api.post("/stories", story);
export const updateStory = async (id, story) => api.patch(`${"/stories"}/${id}`, story);
export const deleteStory = async (id) => api.delete(`${"/stories"}/${id}`);
export const likeStory = async (id) => api.patch(`${"/stories"}/${id}/likestory`);

export const login = async (fromValues) => api.post("/user/login", fromValues);
export const signup = async (fromValues) => api.post("/user/signup", fromValues);
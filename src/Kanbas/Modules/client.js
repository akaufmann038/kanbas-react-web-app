import axios from "axios";
export const COURSES_URL = "https://homework6-server.onrender.com/api/courses";
export const MODULES_URL = "https://homework6-server.onrender.com/api/modules";
export const BASE_API = "https://homework6-server.onrender.com";
//export const COURSES_URL = "http://localhost:4000/api/courses";
//export const MODULES_URL = "http://localhost:4000/api/modules";
//export const BASE_API = "http://localhost:4000";

export const updateModuleClient = async (module) => {
  const response = await axios.put(`${MODULES_URL}/${module._id}`, module);
  return response.data;
};

export const deleteModuleClient = async (moduleId) => {
  const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};

export const createModule = async (courseId, module) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/modules`,
    module
  );
  return response.data;
};

export const findModulesForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};

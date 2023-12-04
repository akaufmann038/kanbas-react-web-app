import { Link } from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import { COURSES_URL as URL } from "./Modules/client";
import Signin from "../users/signin";
import Account from "../users/account";
import UserTable from "../users/table";
import Signup from "../users/signup";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([response.data, ...courses]);
  };

  const deleteCourse = async (courseId) => {
    const response = await axios.delete(`${URL}/${courseId}`);

    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    console.log(course);
    const response = await axios.put(`${URL}/${course._id}`, course);

    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        } else {
          return c;
        }
      })
    );
  };

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    const mappedData = response.data.map((data) => {
      return {
        ...data,
        _id: data["_id"]["$oid"],
      };
    });
    setCourses(mappedData);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
          <Route
            path="Dashboard"
            element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              />
            }
          />
          <Route
            path="Courses/:courseId/*"
            element={<Courses courses={courses} />}
          />
          <Route path="Courses" element={<Courses courses={courses} />} />
        </Routes>
      </div>
    </Provider>
  );
}
export default Kanbas;

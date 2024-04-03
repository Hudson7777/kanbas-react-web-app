import { Link } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
import { useSelector, useDispatch } from "react-redux";
import {
  addNewCourse,
  deleteCourse,
  updateCourse,
  setCourse,
} from "../store/coursesReducer";
import { KanbasState } from "../store/store";

function Dashboard() {
  const courses = useSelector(
    (state: KanbasState) => state.coursesReducer.courses
  );
  const course = useSelector(
    (state: KanbasState) => state.coursesReducer.course
  );
=======
=======
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
import { useState, useEffect } from "react";
import axios from "axios";
import * as courseClient from "../Courses/client";
import { useSelector, useDispatch } from "react-redux";
// import {
//   addNewCourse,
//   deleteCourse,
//   updateCourse,
//   setCourse,
// } from "../store/coursesReducer";
// import { KanbasState } from "../store/store";

function Dashboard() {
  const [course, setCourse] = useState({
    name: " ",
    number: " ",
    startDate: " ",
    endDate: " ",
  });
  const [courses, setCourses] = useState<any[]>([]);
  const fetchAllCourses = async () => {
    const courses = await courseClient.fetchAllCourses();
    setCourses(courses);
  };

  const addNewCourse = async () => {
    const courses = await courseClient.createCourse(course);
    setCourses(courses);
  };

  const deleteCourse = async (courseId: string) => {
    try {
      await courseClient.deleteCourse(courseId);
      setCourses(courses.filter((course: any) => course._id !== courseId));
    } catch (err) {
      console.log("Error deleting the course", err);
    }
  };

  const updateCourse = async (course: any) => {
    const updatedCourse = await courseClient.updateCourse(course);
    setCourses(
      courses.map((course: any) =>
        course._id === updatedCourse._id ? updatedCourse : course
      )
    );
  };
  useEffect(() => {
    fetchAllCourses();
  }, []);

  // const courses = useSelector(
  //   (state: KanbasState) => state.coursesReducer.courses
  // );
  // const course = useSelector(
  //   (state: KanbasState) => state.coursesReducer.course
  // );
<<<<<<< HEAD
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
=======
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
  const dispatch = useDispatch();
  return (
    <div className="p-4">
      <h1>Dashboard</h1> <hr />
      <h5>Course</h5>
      <div>
        <div className="d-flex">
          <input
            value={course.name}
            className="form-control m-1"
            style={{ maxWidth: "200px", flexGrow: 1 }}
            onChange={(e) =>
<<<<<<< HEAD
<<<<<<< HEAD
              dispatch(setCourse({ ...course, name: e.target.value }))
=======
              // dispatch(setCourse({ ...course, name: e.target.value }))
              setCourse({ ...course, name: e.target.value })
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
=======
              // dispatch(setCourse({ ...course, name: e.target.value }))
              setCourse({ ...course, name: e.target.value })
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
            }
          />
          <input
            value={course.number}
            className="form-control m-1"
            style={{ maxWidth: "200px", flexGrow: 1 }}
            onChange={(e) =>
<<<<<<< HEAD
<<<<<<< HEAD
              dispatch(setCourse({ ...course, number: e.target.value }))
=======
              // dispatch(setCourse({ ...course, number: e.target.value }))
              setCourse({ ...course, number: e.target.value })
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
=======
              // dispatch(setCourse({ ...course, number: e.target.value }))
              setCourse({ ...course, number: e.target.value })
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
            }
          />
          <input
            value={course.startDate}
            className="form-control m-1"
            style={{ maxWidth: "200px", flexGrow: 1 }}
            type="date"
            onChange={(e) =>
<<<<<<< HEAD
<<<<<<< HEAD
              dispatch(setCourse({ ...course, startDate: e.target.value }))
=======
              // dispatch(setCourse({ ...course, startDate: e.target.value }))
              setCourse({ ...course, startDate: e.target.value })
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
=======
              // dispatch(setCourse({ ...course, startDate: e.target.value }))
              setCourse({ ...course, startDate: e.target.value })
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
            }
          />
          <input
            value={course.endDate}
            className="form-control m-1"
            style={{ maxWidth: "200px", flexGrow: 1 }}
            type="date"
            onChange={(e) =>
<<<<<<< HEAD
<<<<<<< HEAD
              dispatch(setCourse({ ...course, endDate: e.target.value }))
=======
              // dispatch(setCourse({ ...course, endDate: e.target.value }))
              setCourse({ ...course, endDate: e.target.value })
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
=======
              // dispatch(setCourse({ ...course, endDate: e.target.value }))
              setCourse({ ...course, endDate: e.target.value })
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
            }
          />
        </div>
        <button
<<<<<<< HEAD
<<<<<<< HEAD
          onClick={() => dispatch(addNewCourse({ ...course }))}
=======
          // onClick={() => dispatch(addNewCourse({ ...course }))}
          onClick={() => addNewCourse()}
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
=======
          // onClick={() => dispatch(addNewCourse({ ...course }))}
          onClick={() => addNewCourse()}
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
          className="btn btn-success m-1"
        >
          Add
        </button>
        <button
<<<<<<< HEAD
<<<<<<< HEAD
          onClick={() => dispatch(updateCourse(course))}
=======
          // onClick={() => dispatch(updateCourse(course))}
          onClick={() => updateCourse(course)}
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
=======
          // onClick={() => dispatch(updateCourse(course))}
          onClick={() => updateCourse(course)}
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
          className="btn btn-info m-1"
        >
          Update
        </button>
      </div>
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
<<<<<<< HEAD
<<<<<<< HEAD
          {courses.map((course) => (
=======
          {courses.map((course: any) => (
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
=======
          {courses.map((course: any) => (
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img
                  src={`/images/${course.image}`}
                  alt="..."
                  className="card-img-top"
                  style={{ height: 150 }}
                />
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {course.name}{" "}
                    <button
                      onClick={(event) => {
                        event.preventDefault();
<<<<<<< HEAD
<<<<<<< HEAD
                        dispatch(deleteCourse(course._id));
=======
                        // dispatch(deleteCourse(course._id));
                        deleteCourse(course._id);
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
=======
                        // dispatch(deleteCourse(course._id));
                        deleteCourse(course._id);
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
                      }}
                      className="btn btn-danger m-1"
                    >
                      Delete
                    </button>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
<<<<<<< HEAD
<<<<<<< HEAD
                        dispatch(setCourse(course));
=======
                        // dispatch(setCourse(course));
                        setCourse(course);
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
=======
                        // dispatch(setCourse(course));
                        setCourse(course);
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
                      }}
                      className="btn btn-primary m-1"
                    >
                      Edit
                    </button>
                  </Link>
                  <p className="card-text">{course.name}</p>
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="btn btn-primary"
                  >
                    Go{" "}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;

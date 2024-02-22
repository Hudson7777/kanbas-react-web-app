import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
            <input className="form-control w-auto" placeholder="Search for Assignments" style={{ flexGrow: 1, maxWidth: 200 }} />
        
            <div className="ms-2 d-flex align-items-center">
                <button className="btn btn-outline-secondary me-2">+ Group</button>
                <button className="btn btn-danger me-2">+ Assignment</button>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li><a className="dropdown-item" href="#">Edit Assignment Dates</a></li>
                      <li><a className="dropdown-item" href="#">Add Assignment Date</a></li>
                      <li><a className="dropdown-item" href="#">Delete Assignment Date</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;


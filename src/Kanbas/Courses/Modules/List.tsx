<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
=======
import React, { useState, useEffect } from "react";
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
import "./index.css";
import { FaEllipsisV } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { KanbasState } from "../../store/store";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
<<<<<<< HEAD
<<<<<<< HEAD
} from "../../store/modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
=======
=======
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
  setModules,
} from "../../store/modulesReducer";
import * as client from "./client";
// import { findModulesForCourse, createModule, deleteModule } from "./client";

function ModuleList() {
  const { courseId } = useParams();

<<<<<<< HEAD
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
=======
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  useEffect(() => {
    client
      .findModulesForCourse(courseId)
      .then((modules) => dispatch(setModules(modules)));
  }, [courseId]);
<<<<<<< HEAD
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
=======
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472

  return (
    <>
      {/* <!-- Add buttons here --> */}
      <div className="w-100 d-flex justify-content-end">
        <div>
          <button className="wd-modules-button">Collapse All</button>
          <button className="wd-modules-button">View Progress</button>
          <select className="wd-modules-dropdown">
            <option>Publish All</option>
            <option>Unpublish All</option>
          </select>
          <button className="wd-modules-button-alert"> Module +</button>
          <button className="wd-modules-button">
            {" "}
            <FaEllipsisV />
          </button>
        </div>
      </div>
      <ul className="list-group">
        <li className="list-group-item d-flex m-2">
          <input
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
            className="form-control m-1"
            style={{ maxWidth: "200px" }}
          />
          <textarea
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
            className="form-control m-1"
            style={{ maxWidth: "500px" }}
          />
          <button
<<<<<<< HEAD
<<<<<<< HEAD
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
=======
            // onClick={() => dispatch(addModule({ ...module, course: courseId }))}
            onClick={handleAddModule}
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
=======
            // onClick={() => dispatch(addModule({ ...module, course: courseId }))}
            onClick={handleAddModule}
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
            className="btn btn-success m-1"
          >
            Add
          </button>
          <button
<<<<<<< HEAD
<<<<<<< HEAD
            onClick={() => dispatch(updateModule(module))}
=======
            // onClick={() => dispatch(updateModule(module))}
            onClick={handleUpdateModule}
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
=======
            // onClick={() => dispatch(updateModule(module))}
            onClick={handleUpdateModule}
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
            className="btn btn-info m-1"
          >
            Update
          </button>
        </li>
        <div>
          {moduleList
            .filter((module: any) => module.course === courseId)
            .map((module: any, index: any) => (
              <li key={index} className="list-group-item">
                <button
                  onClick={() => dispatch(setModule(module))}
                  className="btn btn-primary m-1"
                >
                  Edit
                </button>
                <button
<<<<<<< HEAD
<<<<<<< HEAD
                  onClick={() => dispatch(deleteModule(module._id))}
=======
                  // onClick={() => dispatch(deleteModule(module._id))}
                  onClick={() => handleDeleteModule(module._id)}
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
=======
                  // onClick={() => dispatch(deleteModule(module._id))}
                  onClick={() => handleDeleteModule(module._id)}
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
                  className="btn btn-danger m-1"
                >
                  Delete
                </button>
                <h3>{module.name}</h3>
                <p>{module.description}</p>
              </li>
            ))}
        </div>
      </ul>
    </>
  );
}
export default ModuleList;

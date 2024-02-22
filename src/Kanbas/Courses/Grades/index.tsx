import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>

        <div className="d-flex justify-content-end align-items-center">
                <div className="ms-2 d-flex align-items-center">
                    <button className="btn btn-outline-secondary me-2">
                        <i className="fa fa-indent" aria-hidden="true"></i>
                        Import
                    </button>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa fa-outdent" aria-hidden="true"></i>
                            Export
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item" href="#">Edit Assignment Dates</a></li>
                            <li><a className="dropdown-item" href="#">Add Assignment Date</a></li>
                            <li><a className="dropdown-item" href="#">Delete Assignment Date</a></li>
                        </ul>
                    </div>
                    <button className="btn btn-outline-secondary me-2 custom-margin-right">
                        <i className="fa fa-cog" aria-hidden="true"></i>
                    </button>
                </div>
            </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="studentName">Student Name</label>
          </div>
          <div className="col-md-6">
            <label htmlFor="assignmentName">Assignment Name</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="col-md-6">
              <input id="studentName" className="form-control" placeholder="Search Students" />
            </div>
          </div>
          <div className="col-md-6">
            <input id="assignmentName" className="form-control" placeholder="Search Assignments" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <button className="btn btn-secondary">
              <i className="fa fa-filter" aria-hidden="true"></i>
              Apply Filters
            </button>
          </div>
        </div>
      </div>


      <div className="table-responsive">
        <table className="table">
          <thead>
            <th>Student Name</th>
            {as.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>


          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                  <td>{user?.firstName} {user?.lastName}</td>
                  {assignments.map((assignment) => {
                    const grade = grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                    return (<td>{grade?.grade || ""}</td>);
                  })}
                </tr>);
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;


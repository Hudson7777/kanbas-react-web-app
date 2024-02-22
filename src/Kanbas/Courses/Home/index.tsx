import ModuleList from "../Modules/List";
import HomeBreadCrumb from "./breadcrumb";
import HomeSideBar from "./sidebar";
import "./index.css";

function Home() {
  return (
    <div>
      <HomeBreadCrumb />
      <h2>Home</h2>
      <div className="content-flex-container">
        <ModuleList />
        <HomeSideBar />
      </div>
    </div>
  );
}
export default Home;
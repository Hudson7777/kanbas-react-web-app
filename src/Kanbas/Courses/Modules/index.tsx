import ModuleList from "./List";
import ModuleBreadCrumb from "./breadcrumb";
import ModuleTopBar from "./topbar";

function Modules() {
  return (
    <div>
      <ModuleBreadCrumb />
      <ModuleTopBar />
      <h2>Modules</h2>
      <ModuleList />
    </div>
  );
}
export default Modules;
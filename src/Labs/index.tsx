import store from "./store";
import { Provider } from "react-redux";

import Nav from "../Nav";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Assignment5 from "./a5";
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
=======
import Assignment5 from "./a5";
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
import { Routes, Route, Navigate } from "react-router";
function Labs() {
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="a3" />} />
          <Route path="a3" element={<Assignment3 />} />
          <Route path="a4" element={<Assignment4 />} />
<<<<<<< HEAD
<<<<<<< HEAD
=======
          <Route path="a5" element={<Assignment5 />} />
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
=======
          <Route path="a5" element={<Assignment5 />} />
>>>>>>> a7cc2d2ce83599c0864fa3b13b57bee94e856472
        </Routes>
      </div>
    </Provider>
  );
}
export default Labs;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import App from "./Admits";
import Add from "./Add";
import AddAdmit from "components/addAdmit";
import Admin from "./Admin";
import SearchModal from "components/SearchModal";
import UnivPage from "UnivPage";
import ToolsPage from "pages/Tools";
import Profile from "pages/profile";

const SignupDefault = React.lazy(() => import("pages/SignupDefault"));
const SigninDefault = React.lazy(() => import("pages/SigninDefault"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/signin" element={<SigninDefault />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/signup" element={<SignupDefault />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/contribute" element={<AddAdmit />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/university/:univ_name" element={<UnivPage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

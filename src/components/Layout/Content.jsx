import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Blog from "./Blog";
import LoginPage from "./LoginPage";
import Home from "./Home";
import Privacy from "./Privacy";
import HomeCompany from "./CompanyLayout/HomeCompany";
import MyStuff from "./CompanyLayout/MyStuff";
import Profile from "./CompanyLayout/Profile";
import CreateJobs from "./CompanyLayout/CreateJobs";
import CreateQuestionnaire from "./CompanyLayout/CreateQuestionnaire";
import CvLibrary from "./CompanyLayout/CvLibrary";
import {Profile as EmployeeProfile} from "./EmployeeLayout/Profile";
import FindJob from "./EmployeeLayout/FindJob";
import CookiePage from "./CookiePage";
import Job from "./EmployeeLayout/Job";
import AllJobs from "./AllJobs";
import Backend from "./Backend";

const Content = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contacts" element={<Contact />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/company" element={<HomeCompany />} />
    <Route path="/mystuff" element={<MyStuff />} />
    <Route path="/companyprofile" element={<Profile />} />
    <Route path="/createjobs" element={<CreateJobs />} />
    <Route path="/createquestionnaire" element={<CreateQuestionnaire />} />
    <Route path="/cvlibrary" element={<CvLibrary />} />
    <Route path="/profile" element={<EmployeeProfile />} />
    <Route path="/findjob" element={<FindJob />} />
    <Route path="/cookie" element={<CookiePage />} />
    <Route path="/alljobs" element={<AllJobs />} />
    <Route path="/backend" element={<Backend />} />
    <Route path="/:id" element={<Job />} />
  </Routes>
);

export default Content;

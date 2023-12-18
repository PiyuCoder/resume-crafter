import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import DemoComponent from "./DemoComponent";
import CreateResume from "./pages/CreateResume";
import { ResumeProvider } from "./context.js";
import AboutMe from "./pages/AboutMe.js";
import Academics from "./pages/Academics.js";
import Experience from "./pages/Experience.js";
import Projects from "./pages/Projects.js";
import Skills from "./pages/Skills.js";
import Resume from "./pages/Resume.js";
import Profile from "./pages/Profile.js";
import FormLayout from "./components/formLayout.js";
import LandingPage from "./pages/LandingPage.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route path="home" element={<Home />} />
      <Route path="" element={<LandingPage />} />
      <Route path="" element={<FormLayout />}>
        <Route path="profile" element={<Profile />} />
        <Route path="about_me" element={<AboutMe />} />
        <Route path="academics" element={<Academics />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
      </Route>

      <Route path="resume" element={<Resume />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

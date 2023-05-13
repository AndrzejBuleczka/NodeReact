import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/header" element={<Header />} />
      <Route path="/dash" element={<Dashboard />} />
      <Route path="/survey" element={<SurveyNew />} />
      <Route path="/" element={<Landing />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

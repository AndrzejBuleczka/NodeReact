import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";

import Header from "./components/Header";
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  useEffect(() => {
    actions.fetchUser();
  }, []);

  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/surveys" element={<Dashboard />} />
          <Route path="/surveys/new" element={<SurveyNew />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
};

export default connect(null, actions)(App);

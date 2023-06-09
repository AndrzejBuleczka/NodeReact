// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";

import Header from "./components/Header";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import SurveyNew from "./components/surveys/SurveyNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
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
  }
}

export default connect(null, actions)(App);

import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Form from "./Form"
// import Header from "./Header";

const AppRouter = () => {

  return (
    <Router>
      <main className="main-container" >
        <Form />
      </main>
    </Router>
  );
};

export default AppRouter;

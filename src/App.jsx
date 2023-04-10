import { createContext, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./Component/Header/Header";

export const JobsContext = createContext([]);

function App() {
  const allJobs = useLoaderData()
  console.log(allJobs)
  return (
      <div className="App">
        <JobsContext.Provider value={allJobs}>
        <Header></Header>
        <Outlet></Outlet>
        </JobsContext.Provider>
      </div>
  );
}

export default App;

import React, { useContext } from "react";
import Lottie from "lottie-react";
import reader from "../assets/lotti.json";
import { useLoaderData } from "react-router-dom";
import JobCatogory from "../Component/JobCatgory/JobCatogory";
import FeatureJob from "../Component/FeatureJob/FeatureJob";
import Job from "../Component/Job/Job";

const Home = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  return (
    <div className="container">
      <div
        className="d-flex align-items-center justify-content-between
        gap-1 flex-column-reverse flex-md-row mt-3 w-100"
      >
        <div className="text-left">
          <h2>
            <span>Connecting</span>
          </h2>
          <h2>
            <span> You with Your Dream Job</span>
          </h2>
          <h2>
            <span className="fw-semibold text-info">The Ultimate Job </span>
            Search Platform
          </h2>
          <p>
            Comprehensive Career Resources: In addition to job listings, we
            offer a wide range of career resources such as resume building
            tools, interview tips, and career advice to help job seekers enhance
            their skills and improve their chances of landing their dream job
          </p>
          <button className="btn btn-info text-white fs-5 fw-semibold">
            Get Started
          </button>
        </div>
        <div className="w-100">
          <Lottie animationData={reader} loop={true}></Lottie>
        </div>
      </div>
      <div className="mt-3">
        <h1 className="text-center fw-bold">Job Category List</h1>
        <p className="text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future{" "}
        </p>
      </div>
      <div className="d-flex flex-column flex-md-row gap-2 justify-content-center align-items-center">
        { Array.isArray(jobs)? 
          jobs.map((job)=> <JobCatogory   job={job}key={job.id}></JobCatogory>): ''
        }
        {/* {
        jobs.map(job => (
          <JobCatogory key={job.id} job={job}></JobCatogory>

        ))} */}
      </div>

      {/* //Featured job section */}
      <div className="mt-4">
        <div className="text-center">
        <h1 className="fw-bold">Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <FeatureJob></FeatureJob>
        </div>
      </div>
    </div>
  );
};

export default Home;

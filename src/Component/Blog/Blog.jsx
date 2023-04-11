import React from "react";

const Blog = () => {
  return (
    <div className="container mt-5">
      <div className="card p-2">
        <h5 className="bg-info text-white p-2 rounded">
          When should you use context API?{" "}
        </h5>
        <p className="p-2">
          <span className="fw-bold">Ans: </span>When I need to share Data across
          multiple components without passing props manually.
        </p>
        <h5 className="bg-info text-white p-2 rounded">
          {" "}
          What is a custom hook?
        </h5>
        <p className="p-2">
          <span className="fw-bold">Ans: </span>A custom hook is a reusable
          JavaScript function in React. It allows to share stateful logic
          across multiple components..
        </p>
        <h5 className="bg-info text-white p-2 rounded">
        What is useRef? 
        </h5>
        <p className="p-2">
          <span className="fw-bold">Ans: </span>useRef is a hook in React that creates a mutable reference to a value or DOM element.
        </p>
        <h5 className="bg-info text-white p-2 rounded">
        What is useMemo? 
        </h5>
        <p className="p-2">
          <span className="fw-bold">Ans: </span>useMemo is a hook in React that allows to memoize a value or a computation, and recompute it only when its dependencies change
        </p>
      </div>
    </div>
  );
};

export default Blog;

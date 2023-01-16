import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <div className="d-flex flex-column">
        <h2>Welcome to Nagwa</h2>
        <Link to="/practice/1" className="">
          <Button className="my-4 w-100" variant="warning">
            Get Start
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

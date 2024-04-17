import React from "react";
import Appbar from "../../components/appbar";
import Table from "./userTable";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <section className="flex  bg-gray-100 h-screen">
        
     
      <div class="flexbox justify-center ml-8 mr-6 w-5/6">
        <Appbar />
        <Table  class="mb-8"/>
        <Link to="/userrequest">
          <Button sx={{ bgcolor: "#1d4ed8" }} variant="contained">
            Make a request
          </Button>
        </Link>
        <Link to="/login">
          <Button
            style={{ marginLeft: "10px" }}
            sx={{ bgcolor: "#1d4ed8" }}
            variant="contained"
          >
            Log Out here
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default UserProfile;

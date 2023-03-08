import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";
import { UserPage } from "./UserPage";
import { Users } from "./Users";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/usersPage" element={<UserPage/>} />
      </Routes>
    </div>
  );
};

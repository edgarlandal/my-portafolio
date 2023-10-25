import React from "react";

function NavBarComponent() {
  return (
    <div className=" flex items-center justify-between w-screen h-20 bg-blue-500">
      <h1 className=" text-3xl font-bold px-5">Software</h1>
      <nav className=" flex justify-around gap-5 px-5 items-center text-xl text-white font-bold ">
        <a href="#">Home</a>
        <a href="#">About me</a>
        <a href="#">Projects</a>
        <a href="#">Skills</a>
      </nav>
    </div>
  );
}

export default NavBarComponent;

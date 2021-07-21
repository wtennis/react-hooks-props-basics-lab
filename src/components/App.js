import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";

function App() {

  return (
    <div>
      <NavBar />
      <Home username = {user.name} color = {user.color} city = {user.city}/>
      <About links = {user.links} bio = {user.bio}/>
    </div>
  );
}

export default App;

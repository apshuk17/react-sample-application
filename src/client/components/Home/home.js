import React, { useEffect } from "react";
import { HomeComponentWrapper } from "./home.style";

const Home = () => {
  useEffect(() => {
    console.log('##homeComp');
  }, []);
  return (
    <HomeComponentWrapper className="home-warpper">
      <h1>This is a very good Home Component</h1>
      <button onClick={() => console.log("Click me")}>Click me</button>
    </HomeComponentWrapper>
  );
};

export default Home;

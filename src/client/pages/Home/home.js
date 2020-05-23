import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { HomeComponentWrapper } from "./home.style";

const Home = () => {
  useEffect(() => {
    console.log("##homeComp");
  }, []);
  return (
    <HomeComponentWrapper className="home-warpper">
      <h1>This is a very good Home Component</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => console.log("Click me")}
      >
        Click me
      </Button>
    </HomeComponentWrapper>
  );
}; 

export default Home;

import { Button } from "@material-tailwind/react";
import React from "react";
import BannerSlider from "../../components/slider/BannerSlider";
const Home = () => {
  return (
    <div>
      <div className="z-0">
        <BannerSlider />
      </div>
      <Button>Button</Button>
    </div>
  );
};

export default Home;

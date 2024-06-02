import React from "react";
import BannerSlider from "../../components/slider/BannerSlider";
import Title from "../../components/title/Title";
const Home = () => {
  return (
    <main>
      {/* Banner section  */}
      <section className="z-0">
        <BannerSlider />
      </section>
      {/* Featured Section  */}
      <section>
        <Title
          title={"Featured Products"}
          description={
            "Explore a platform where tech enthusiasts can discover, review, and share cutting-edge products like web apps, AI tools, software, games, and mobile apps. Stay ahead of the curve by finding the latest innovations in technology and connect with a community of like-minded individuals."
          }
        />
      </section>
    </main>
  );
};

export default Home;

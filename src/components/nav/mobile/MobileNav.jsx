import React from "react";
import { NavLink } from "react-router-dom";

const MobileNav = () => {

  return (
    <div className="flex flex-col bg-gray-200 rounded-md  py-4 px-8 gap-2 absolute right-0 top-14">
      <NavLink
        to="/"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "text_brand_sec font-bold" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "text_brand_sec font-bold" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        Products
      </NavLink>
      <NavLink
        to="/news"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "text_brand_sec font-bold" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        News
      </NavLink>
      <NavLink
        to="/community"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "text_brand_sec font-bold" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        Community
      </NavLink>
    </div>
  );
};

export default MobileNav;

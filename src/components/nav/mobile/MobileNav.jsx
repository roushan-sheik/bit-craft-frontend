import React from "react";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
    return (
      <div>
        <NavLink
          to="/messages"
          className={({ isActive, isPending, isTransitioning }) =>
            [
              isPending ? "pending" : "",
              isActive ? "active" : "text_brand_sec font-bold",
              isTransitioning ? "transitioning" : "",
            ].join(" ")
          }
        >
          Home
        </NavLink>
      </div>
    );
};

export default MobileNav;

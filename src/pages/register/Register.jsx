import { Button } from "@material-tailwind/react";
import axios from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Inp from "../../components/input/Inp";
import useUserContext from "../../hooks/useUserContext";
import auth from "../../services/firebase";

const Register = () => {
  const location = useLocation();
  const { updateUserProfile } = useUserContext();
  // navigate
  const navigate = useNavigate();
  const [error, setError] = React.useState(null);
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    photoUrl: "",
    password: "",
  });
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  // handle the form
  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    // validation
    // Password should be minimum 8 characters
    if (user.password.length < 8) {
      setError("Password should be minimum 8 characters.");
      toast.error("Password should be minimum 8 characters.", {
        position: "top-right",
      });
      return;
    }
    // Must have an Lowercase letter in the password
    const checkLower = /^(?=.*[a-z]).+$/;
    if (!checkLower.test(user.password)) {
      setError("Must have an Lowercase letter in the password");
      toast.warn("Must have an Lowercase letter in the password", {
        position: "top-right",
      });
      return;
    }
    // Must have an Uppercase letter in the password
    const checkUpper = /^(?=.*[A-Z]).+$/;
    if (!checkUpper.test(user.password)) {
      setError("Must have an Uppercase letter in the password");
      toast.warn("Must have an Uppercase letter in the password", {
        position: "top-right",
      });
      return;
    }

    // const route = "/login";
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((result) => {
        updateUserProfile(user.name, user.photoUrl)
          .then(() => {
            // jwt tokent request
            const userObj = { user: user.email };
            axios
              .post("https://blog-api-a11.vercel.app/jwt", userObj, {
                withCredentials: true,
              })
              .then((res) => {
                console.log(res);
                if (res.data.success) {
                  toast.success("Successfully logged in", {
                    position: "top-center",
                  });
                  setTimeout(() => {
                    navigate(location?.state || "/");
                  }, 3000);
                }
              });
          })
          .catch();
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-right",
        });
      });

    setUser({ name: "", email: "", photoUrl: "", password: "" });
    e.target.reset();
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <Helmet>
        <title>CinemaGhor | register</title>
      </Helmet>
      <h2 className=" text_pri text-4xl my-4 font-bold text-center">
        Register
      </h2>
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="flex max-w-md flex-col md:w-[50%] w-[94%] gap-4"
        action="#"
      >
        {/* inputs  */}
        <Inp
          type="text"
          name={"name"}
          required={true}
          label={"Name"}
          value={user.name}
          placeholder={"name"}
          onChange={handleChange}
        />
        <Inp
          type="text"
          name={"email"}
          value={user.email}
          label={"Email"}
          required={true}
          placeholder={"email"}
          onChange={handleChange}
        />
        <Inp
          type="text"
          name={"photoUrl"}
          label={"Photo Url"}
          value={user.photoUrl}
          required={true}
          placeholder={"http://server/arifamoni.jpg"}
          onChange={handleChange}
        />
        <Inp
          type="password"
          name={"password"}
          required={true}
          value={user.password}
          label={"Password"}
          onChange={handleChange}
        />
        {/* error message */}
        <span className="text-red-500">{error}</span>
        {/* submit button  */}
        <Button type={"submit"}> Register</Button>
        <p className=" text-base text_sec text-center ">
          Already have an Account?{" "}
          <Link to="/login">
            <span className="text-sky-500">Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

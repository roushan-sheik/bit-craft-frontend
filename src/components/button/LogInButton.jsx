// import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useUserContext from "../../hooks/useUserContext";

function LogInButton({ userEmail }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { signinWithGoogle } = useUserContext();
  // google login
  function handleGoogleLogin() {
    signinWithGoogle()
      .then((result) => {
        // create a json web token
        const userObj = { user: result.user.email };
        // https://blog-api-a11.vercel.app/
        // http://localhost:8000/jwt
        axios
          .post("http://localhost:8000/jwt", userObj, {
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
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div className=" flex gap-4 flex-col justify-between md:flex-row">
      <ToastContainer />
      <button
        onClick={handleGoogleLogin}
        className="flex gap-2 px-3 py-2 rounded-xl  justify-center items-center bg-white text_pri border-2 "
      >
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-google-160-189824.png"
          alt=""
          className="w-4 h-4  "
        />
        <span> Sign in with Google</span>
      </button>
    </div>
  );
}
export default LogInButton;

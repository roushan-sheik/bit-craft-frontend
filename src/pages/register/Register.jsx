import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { imageUpload } from "../../api/utils";
import Btn from "../../components/button/Btn";
import Inp from "../../components/input/Inp";
import useUserContext from "../../hooks/useUserContext";

const Register = () => {
  const navigate = useNavigate();
  const {
    createUser,
    signinWithGoogle,
    updateUserProfile,
    loading,
    setLoading,
  } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    try {
      setLoading(true);
      // 1. Upload image and get image url
      const image_url = await imageUpload(image);
      // console.log(image_url);
      //2. User Registration
      // console.log({ email, password });
      const result = await createUser(email, password);
      console.log(result);

      // 3. Save username and photo in firebase
      await updateUserProfile(name, image_url);
      setLoading(false);
      navigate("/");
      toast.success("register Successful");
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error(err.message);
    }
  };

  // handle google signin
  const handleGoogleSignIn = async () => {
    try {
      await signinWithGoogle();

      navigate("/");
      toast.success("Signup Successful");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <div className="flex px-8 justify-center items-center mt-6 min-h-screen">
      <div className="flex flex-col max-w-md p-4 rounded-md sm:p-10 border-2 text-gray-900">
        <div className="mb-6 text-center">
          <h1 className="my-2 text-4xl font-bold">Register</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-base font-medium"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500  text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label
                htmlFor="image"
                className="block mb-2 text-base font-medium"
              >
                Select Image:
              </label>
              <Inp type="file" id="image" name="image" accept="image/*" />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-base font-medium"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500  text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="password"
                  className="text-base font-medium mb-2"
                >
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500   text-gray-900"
              />
            </div>
          </div>

          <div>
            <Btn
              className={"w-full text-center mb-4"}
              type={"submit"}
              disabled={loading}
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Continue"
              )}
            </Btn>
          </div>
        </form>
        <div className="flex items-center space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Register with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <button
          disabled={loading}
          onClick={handleGoogleSignIn}
          className="disabled:cursor-not-allowed flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </button>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;

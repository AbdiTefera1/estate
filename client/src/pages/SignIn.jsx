import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";
// import { toast } from "react-toastify";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      // setLoading(true);
      dispatch(signInFailure(""));
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        // setError(data.message);
        // setLoading(false);
        // toast.error(data.message)
        dispatch(signInFailure(data.message));
        return;
      }
      // setLoading(false);
      // setError(null);
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      // setError(error.message);
      // setLoading(false);
      dispatch(signInFailure(error.message));
      // toast.error(error.message)
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg focus:outline-blue-500"
          id="email"
          onChange={handleOnChange}
        />

        <div className="flex flex-row focus:outline-blue-500 bg-white rounded-lg p-3">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            className="border-none p-1 outline-none focus:outline-none  w-full"
            id="password"
            onChange={handleOnChange}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="border-none"
          >
            {showPassword ? <FaEye style={{fontSize: 30, padding: 3}} /> : <FaEyeSlash style={{fontSize: 30, padding: 3}} />}
          </button>
        </div>

        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>dont have an account?</p>
        <Link to={"/signup"}>
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default SignIn;

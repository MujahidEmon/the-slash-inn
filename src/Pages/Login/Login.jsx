import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const { login } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        login(email, password)
            .then(res => {
                console.log(res.user);
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, { email: res.user.email }, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
                navigate(location?.state ? location?.state : '/');

            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })
    }

    return (
        <div className="bg-gray-50">
            <div className="min-h-content flex flex-col items-center justify-center py-6 px-4">
                <div className="max-w-[480px] w-full">


                    <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
                        <h1 className="text-slate-900 text-center text-3xl font-semibold">Sign in</h1>
                        <form onSubmit={handleLogin}
                            className="mt-12 space-y-6">
                            <div>
                                <label className="text-slate-900 text-sm font-medium mb-2 block">
                                    Email
                                </label>
                                <div className="relative flex items-center">
                                    <input
                                        name="email"
                                        type="text"
                                        required
                                        className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                                        placeholder="Enter user name"
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#bbb"
                                        stroke="#bbb"
                                        className="w-4 h-4 absolute right-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle cx="10" cy="7" r="6" />
                                        <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <label className="text-slate-900 text-sm font-medium mb-2 block">
                                    Password
                                </label>
                                <div className="relative flex items-center">
                                    <input
                                        name="password"
                                        type={showPass ? "text" : "password"}
                                        required
                                        className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                                        placeholder="Enter password"
                                    />
                                    <button className="absolute right-4" onClick={() => {setShowPass(!showPass)}}>
                                        {showPass ? <BsEyeSlash></BsEyeSlash> : <BsEye></BsEye>}
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                                    />
                                    <label
                                        htmlFor="remember-me"
                                        className="ml-3 block text-sm text-slate-900"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <a
                                        href="javascript:void(0);"
                                        className="text-blue-600 hover:underline font-semibold"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div className="!mt-12">
                                <button
                                    className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
                                >
                                    Sign in
                                </button>
                            </div>

                            <p className="text-slate-900 text-sm !mt-6 text-center">
                                Don't have an account?
                                <Link to={'/register'} className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                                >
                                    Register here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
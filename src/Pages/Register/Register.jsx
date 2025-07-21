import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Register = () => {
    const { register } = useAuth();
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get("name");
        const email = form.get("email");
        const password = form.get("password");
        const cpassword = form.get("cpassword");
        const photo = form.get("photo");

        if (password !== cpassword) {
            toast.error("your password and confirm password doesn't match");
            return;
        }


        register(email, password, name, photo)
            .then(res => {
                console.log(res.user);
                updateProfile(auth.currentUser, {
                    photoURL: photo,
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                toast.success("Registered Successfully")
                navigate('/')
            })
            .catch(error => {
                console.error(error);

            })

        console.log('clicked');
    }


    return (
        <div className="flex flex-col justify-center  p-4">
            <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
                <form onSubmit={handleRegister}>
                    <div className="space-y-6">
                        <div>
                            <label className="text-slate-900 text-sm font-medium mb-2 block">
                                Full Name
                            </label>
                            <input
                                name="name"
                                required
                                type="text"
                                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                                placeholder="Enter name"
                            />
                        </div>
                        <div>
                            <label className="text-slate-900 text-sm font-medium mb-2 block">
                                Email Id
                            </label>
                            <input
                                name="email"
                                required
                                type="text"
                                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                                placeholder="Enter email"
                            />
                        </div>
                        <div>
                            <label className="text-slate-900 text-sm font-medium mb-2 block">
                                Photo URL
                            </label>
                            <input
                                name="photo"
                                type="text"
                                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                                placeholder="Enter email"
                            />
                        </div>
                        <div>
                            <label className="text-slate-900 text-sm font-medium mb-2 block">
                                Password
                            </label>
                            <input
                                name="password"
                                required
                                type="password"
                                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                                placeholder="Enter password"
                            />
                        </div>
                        <div>
                            <label className="text-slate-900 text-sm font-medium mb-2 block">
                                Confirm Password
                            </label>
                            <input
                                name="cpassword"
                                required
                                type="password"
                                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                                placeholder="Enter confirm password"
                            />
                        </div>

                        <div className="flex items-center">
                            <input
                                id="tNc"
                                name="tNc"
                                type="checkbox"
                                onChange={() => setIsChecked(!isChecked)}
                                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember-me"
                                className="text-slate-600 ml-3 block text-sm"
                            >
                                I accept the
                                <a
                                    href="javascript:void(0);"
                                    className="text-blue-600 font-medium hover:underline ml-1"
                                >
                                    Terms and Conditions
                                </a>
                            </label>
                        </div>
                    </div>

                    <div className="mt-12">
                        <button
                            disabled={!isChecked}
                            className={`w-full py-3 px-4 text-sm tracking-wider font-medium rounded-md text-white  focus:outline-none cursor-pointer ${!isChecked ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                                }`}
                        >
                            Create an account
                        </button>
                    </div>
                    <p className="text-slate-600 text-sm mt-6 text-center">
                        Already have an account?
                        <Link to={'/login'}

                            className="text-blue-600 font-medium hover:underline ml-1"
                        >
                            Login here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
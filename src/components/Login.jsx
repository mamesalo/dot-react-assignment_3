import React, { useState } from "react";

const Login = ({ onLogin, setType }) => {
  const USER_EMAIL = "user";
  const USER_PASSWORD = "user";
  const ADMIN_EMAIL = "admin";
  const ADMIN_PASSWPRD = "admin";
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const handleLogin = () => {
    seterror("");
    if (email == USER_EMAIL && password == USER_PASSWORD) {
      setType("user");
      onLogin(true);
    } else if (email == ADMIN_EMAIL && password == ADMIN_PASSWPRD) {
      setType("admin");
      onLogin(true);
    } else {
      seterror("Wrong credential");
    }
  };
  return (
    <div>
      <section className="bg-gray-50 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 shadow-lg">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            {error && (
              <div className="flex items-center justify-center rounded text-red-600 bg-red-200 font-semibold py-5">
                {error}
              </div>
            )}
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
              >
                <div>
                  <label
                    for="user"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    User Name
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    type="text"
                    name="user"
                    id="user"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="user/admin"
                    required={true}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required={true}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Sign in
                </button>
                <p>Note</p>
                <div className="flex flex-col">
                  <p>For user Enter: </p>
                  <p>
                    User Name:{" "}
                    <span className="text-blue-600 underline underline-offset-4">
                      user
                    </span>
                  </p>
                  <p>
                    Password:{" "}
                    <span className="text-blue-600 underline underline-offset-4">
                      User
                    </span>{" "}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p>For Admin Enter: </p>
                  <p>
                    User Name:{" "}
                    <span className="text-blue-600 underline underline-offset-4">
                      admin
                    </span>
                  </p>
                  <p>
                    Password:{" "}
                    <span className="text-blue-600 underline underline-offset-4">
                      admin
                    </span>{" "}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

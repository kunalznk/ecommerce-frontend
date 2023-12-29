<<<<<<< HEAD
import { Typography, Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";

const LoginPage = () => {
  return (
    <div className="w-4/5 flex h-4/5">
      <div className="w-full h-full hidden sm:block">
        <img
          className="h-full w-full object-cover object-center"
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt="nature image"
        />
      </div>
      <div className="w-full flex justify-end items-center">
        <div className="flex flex-col gap-10 justify-center">
          <div className="flex flex-col gap-6">
            <Typography className="font-medium text-4xl">
              Log in Into Exclusive
            </Typography>
            <Typography className="font-normal text-base">
              Enter your details below
            </Typography>
          </div>
          <div className="flex flex-col gap-10">
            <Input
              variant="standard"
              label="Email or Phone Number"
              placeholder="Email or Phone Number"
            />
            <Input
              variant="standard"
              label="Password"
              placeholder="Passwordr"
              type="password"
            />
          </div>
          <Button variant="gradient" size="sm">
            {" "}
            Login{" "}
          </Button>
          <Button variant="text" size="sm">
            Forget Password?
          </Button>
        </div>
      </div>
    </div>
  );
};

=======
import { Typography, Button, Alert } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const [validation, setValidation] = useState({
    username: "",
    password: "",
  });

  const [serverMessages, setServerMessages] = useState({
    message: "",
    color: "",
  });

  function handleChange(e) {
    const value = e.target.value;
    const key = e.target.name;
    setLoginForm({
      ...loginForm,
      [key]: value,
    });
  }

  function handleClick(e) {
    // RESET Errors

    setServerMessages({
      message: "",
      color: "",
    });

    setValidation({
      username: "",
      password: "",
    });

    if (loginForm.username.length < 5) {
      setValidation({
        ...validation,
        username: "Please enter a valid username",
      });
      return;
    }
    const passwordTest =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const isValidPassword = passwordTest.test(loginForm.password);
    if (loginForm.password.length < 8 || !isValidPassword) {
      setValidation({
        ...validation,
        password: "Please enter a valid password",
      });
      return;
    }
    const apiUrl = "https://fakestoreapi.com/auth/login";
    axios
      .post(apiUrl, loginForm)
      .then((resp) => {
        // TO check routing invert this if condition
        if (resp.status == 200) {
          setServerMessages({
            message: "Login Successfully",
            color: "green",
          });
          navigate("/home");
        } else {
          setServerMessages({
            message: "Bad Credentials",
            color: "red",
          });
        }
      })
      .catch((e) => {
        setServerMessages({
          message: "Sorry, something went wrong please try again.",
          color: "red",
        });
      });
  }

  return (
    <>
      <div className="w-4/5 flex h-4/5">
        <div className="w-full h-full hidden sm:block">
          <img
            className="h-full w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt="nature image"
          />
        </div>
        <div className="w-full flex justify-end items-center">
          <div className="flex flex-col gap-10 justify-center">
            <div className="flex flex-col gap-6">
              <Typography className="font-medium text-4xl">
                Log in Into Exclusive
              </Typography>
              <Typography className="font-normal text-base">
                Enter your details below
              </Typography>
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <Input
                  name="username"
                  variant="standard"
                  label="Email or Phone Number"
                  placeholder="Email or Phone Number"
                  value={loginForm.username}
                  onChange={handleChange}
                  error={Boolean(validation.username)}
                />
                {validation.username && (
                  <Typography variant="small" className="text-button2 mt-1">
                    {validation.username}
                  </Typography>
                )}
              </div>
              <div>
                <Input
                  name="password"
                  variant="standard"
                  label="Password"
                  placeholder="Password"
                  type="password"
                  value={loginForm.password}
                  onChange={handleChange}
                  error={Boolean(validation.password)}
                />
                {validation.password && (
                  <Typography variant="small" className="text-button2 mt-1">
                    {validation.password}
                  </Typography>
                )}
              </div>
            </div>
            <Button variant="gradient" size="sm" onClick={handleClick}>
              {" "}
              Login{" "}
            </Button>
            <Button variant="text" size="sm">
              Forget Password?
            </Button>
          </div>
        </div>
      </div>
      <div className="py-3">
        {serverMessages.message && (
          <Alert
            message={serverMessages.message}
            color={serverMessages.color}
            children={<div>{serverMessages.message}</div>}
          />
        )}
      </div>
    </>
  );
};

>>>>>>> 3ac6b0c8dbe7fa46010553002b3bd98683a65beb
export default LoginPage;

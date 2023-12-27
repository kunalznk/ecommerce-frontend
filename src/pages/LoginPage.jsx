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

export default LoginPage;

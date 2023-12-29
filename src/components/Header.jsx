import { IconButton, Input, Typography } from "@material-tailwind/react";
import {
  HeartIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as FHeartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between ">
      <Typography className="text-2xl font-bold">Exclusive</Typography>
      <div className="flex justify-center items-center gap-12">
        {["Home", "Contact", "About", "Sign Up"].map((label) => (
          <Link to={"register"}>
            {" "}
            <Typography className="text-base font-base">{label}</Typography>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center gap-6">
        <div>
          <Input
            variant="outlined"
            label="What are you looking for?"
            className="h-full w-full"
            size="md"
            icon={<MagnifyingGlassIcon />}
          />
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="w-6 aspect-square text-black">
            <HeartIcon className="h-full w-full" />
          </div>
          <div className="w-6 aspect-square text-black">
            <ShoppingCartIcon className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

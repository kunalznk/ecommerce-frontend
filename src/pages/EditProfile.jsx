import { Typography, Input, Button } from "@material-tailwind/react";

const EditProfile = () => {
  return (
    <div className=" w-4/5 flex-row h-4/5">
      <div className=" w-full h-20 flex flex-row justify-between">
        <Typography variant="h8">Home / My account </Typography>
        <Typography variant="h8">Welcome! Md Rimel </Typography>
      </div>
      <div className="  h-full w-full flex ">
        <div className=" flex flex-col h-full w-96 gap-2">
          <Typography variant="h6">Manage my Account </Typography>
          <div className="flex flex-col mark justify-end items-end w-56 h-88 gap-0">
            <Button size="sm" color="red" variant="text" s>
              My Profile
            </Button>
            <Button size="sm" variant="text">
              Address book
            </Button>
            <Button size="sm" variant="text">
              My Payment Option
            </Button>
          </div>
          <Typography variant="h6">My Orders </Typography>
          <div className="  w-56 h-88 flex-col">
            <Button size="sm" variant="text">
              My Account
            </Button>
            <Button size="sm" variant="text">
              Address book
            </Button>
          </div>
          <Typography variant="h6">My Wishlist</Typography>
        </div>
        <div className="  h-full w-4/5 flex flex-col gap-8">
          <Typography color="red" variant="h4">
            Edit your profile{" "}
          </Typography>
          <div className="  w-full h-82 flex flex-row justify-between gap-5">
            <Input
              color="black"
              variant="static"
              label="First Name"
              placeholder="First Name"
            />
            <Input
              color="black"
              variant="static"
              label="Last Name"
              placeholder="Last Name"
            />
          </div>
          <div className="  w-full h-82 flex flex-row justify-between gap-5">
            <Input
              color="black"
              variant="static"
              label="E-mail"
              placeholder="E-mail"
            />
            <Input
              color="black"
              variant="static"
              label="Address"
              placeholder="Address"
            />
          </div>
          <div className=" flex flex-col gap-5">
            <Typography variant="h6">Password Changes </Typography>
            <Input
              variant="outlined"
              label="Current Password"
              placeholder="Outlined"
            />
            <Input
              variant="outlined"
              label="New Password"
              placeholder="Outlined"
            />
            <Input
              variant="outlined"
              label="Confirm New Password"
              placeholder="Outlined"
            />
          </div>
          <div className="  w-full h-15 flex flex-row justify-end gap-2">
            <Button size="sm" variant="text">
              Cancel
            </Button>
            <Button size="lg" color="red">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

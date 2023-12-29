import {
  Breadcrumbs,
  Typography,
  Input,
  checkbox,
  Checkbox,
} from "@material-tailwind/react";

const BillingDetails = () => {
  return (
    <div className="h-4/5 flex w-4/5 flex-row justify-center">
      <div className=" h-4/5 flex w-4/5  flex-col gap-20">
        <div className=" h-full w-full">
          <div className="  h-32 w-full flex flex-col justify-end ">
            <Breadcrumbs>
              <a href="#" className="opacity-60">
                Account
              </a>
              <a href="#" className="opacity-60">
                My Account
              </a>
              <a href="#" className="opacity-60">
                Product
              </a>
              <a href="#" className="opacity-60">
                View Cart
              </a>
              <a href="#">Checkout</a>
            </Breadcrumbs>
          </div>
        </div>
        <div className="  h-full w-full flex flex-col gap-10 ">
          <Typography variant="h3">Billing Details</Typography>
          <div className="  full w-2/4  flex flex-col gap-4 ">
            <Typography variant="h10">First Name</Typography>
            <Input variant="outlined"></Input>
            <Typography variant="h10">Company Name</Typography>
            <Input variant="outlined"></Input>
            <Typography variant="h10">Street Address*</Typography>
            <Input variant="outlined"></Input>
            <Typography variant="h10">
              Apartment, floor, etc. (optional)
            </Typography>
            <Input variant="outlined"></Input>
            <Typography variant="h10">Town/City*</Typography>
            <Input variant="outlined"></Input>
            <Typography variant="h10">Phone Number*</Typography>
            <Input variant="outlined"></Input>
            <Typography variant="h10">Email Address*</Typography>
            <Input variant="outlined"></Input>
            <Checkbox
              color="red"
              label="Save this information for faster check-out next time"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BillingDetails;

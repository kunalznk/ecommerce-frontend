import { Button } from "@material-tailwind/react";
import JBL from "../assets/JBL.svg";

const CategoryOffer = () => {
  return (
    <div className="flex bg-black p-10">
      <div className="flex flex-col justify-around w-full">
        <div className="text-button1 font-semibold text-base">Categories</div>
        <div className="font-semibold text-5xl text-Text">
          Enhance Your Music Experience
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col items-center justify-center w-16 aspect-square rounded-full bg-primary">
            <div className="font-semibold text-base"> 23 </div>
            <div> Hours </div>
          </div>
          <div className="flex flex-col items-center justify-center w-16 aspect-square rounded-full bg-primary">
            <div className="font-semibold text-base"> 23 </div>
            <div> Hours </div>
          </div>
        </div>
        <div>
          <Button size="lg" className="bg-button1 text-Text">
            Buy Now
          </Button>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-full aspect-square max-w-xs">
          <img className="h-full w-full object-center" src={JBL} />
        </div>
      </div>
    </div>
  );
};

export default CategoryOffer;

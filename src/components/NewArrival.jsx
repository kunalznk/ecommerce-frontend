import Frame1 from "../assets/Frame1.svg";
import Frame2 from "../assets/Frame2.svg";
import Frame3 from "../assets/Frame3.svg";
import Frame4 from "../assets/Frame4.svg";

const NewArrival = () => {
  return (
    <>
      <div className="flex flex-col gap-5 mb-8">
        <div className="flex items-center gap-4 text-secondary2 font-semibold text-base">
          <div className="w-5 h-10 bg-secondary2"></div>
          <div>Feature</div>
        </div>
        <div className="text-4xl font-semibold">New Arrival</div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="row-span-2 w-full">
          <img
            className="h-full w-full object-cover object-center"
            src={Frame1}
          />
        </div>
        <div className="w-full col-span-1">
          <img
            className="h-full w-full object-cover object-center"
            src={Frame2}
          />
        </div>
        <div className="col-span-2 col-start-2 grid grid-cols-2 w-full gap-3">
          <img
            className="col-span-1 h-full w-full object-cover object-center"
            src={Frame3}
          />
          <img
            className="col-span-1 h-full w-full object-cover object-center"
            src={Frame4}
          />
        </div>
      </div>
    </>
  );
};

export default NewArrival;

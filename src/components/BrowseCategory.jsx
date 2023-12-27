import { IconButton } from "@material-tailwind/react";
import CategoryCard from "./CategoryCard";
import {
  DevicePhoneMobileIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const BrowseCategory = () => {
  return (
    <>
      <div className="flex flex-col gap-5 mb-8">
        <div className="flex items-center gap-4 text-secondary2 font-semibold text-base">
          <div className="w-5 h-10 bg-secondary2"></div>
          <div>Categories</div>
        </div>
        <div className="flex justify-between">
          <div className="text-4xl font-semibold">Browse By Category</div>
          <div className="flex gap-3">
            <IconButton className="w-12 aspect-square rounded-full bg-secondary">
              <ArrowLeftIcon className="text-button h-full w-full" />
            </IconButton>
            <IconButton className="w-12 aspect-square rounded-full bg-secondary">
              <ArrowRightIcon className="text-button h-full w-full" />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="flex gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(() => (
          <CategoryCard Icon={DevicePhoneMobileIcon} label={"Phones"} />
        ))}
      </div>
      <div className="py-3">
        <hr className="mt-3" />
      </div>
    </>
  );
};

export default BrowseCategory;

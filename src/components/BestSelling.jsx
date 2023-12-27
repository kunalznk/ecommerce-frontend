import { Button, IconButton } from "@material-tailwind/react";
import CategoryCard from "./CategoryCard";
import {
  DevicePhoneMobileIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import ProductCard from "./ProductCard";

const BestSelling = () => {
  return (
    <>
      <div className="flex flex-col gap-5 mb-8">
        <div className="flex items-center gap-4 text-secondary2 font-semibold text-base">
          <div className="w-5 h-10 bg-secondary2"></div>
          <div>This Month</div>
        </div>
        <div className="flex justify-between">
          <div className="text-4xl font-semibold">Best Selling Products</div>
          <Button className="text-Text bg-button2 px-8 py-4">View All</Button>
        </div>
      </div>
      <div className="flex gap-8 overflow-x-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(() => (
          <ProductCard />
        ))}
      </div>
    </>
  );
};

export default BestSelling;

import { IconButton } from "@material-tailwind/react";
import CategoryCard from "./CategoryCard";
import {
  DevicePhoneMobileIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import axios from "axios";

const BrowseCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const apiUrl = "https://fakestoreapi.com/products/categories";
        const resp = await axios.get(apiUrl);
        setCategories(resp.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (categories.length === 0) {
      fetchCategories();
    }
  }, [categories]);

  console.log(categories);
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
        {categories.length > 0 &&
          categories.map((category) => (
            <CategoryCard Icon={DevicePhoneMobileIcon} label={category} />
          ))}
      </div>
      <div className="py-3">
        <hr className="mt-3" />
      </div>
    </>
  );
};

export default BrowseCategory;

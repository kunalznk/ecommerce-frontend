import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import BrowseCategory from "../components/BrowseCategory";
import BestSelling from "../components/BestSelling";
import CategoryOffer from "../components/CategoryOffer";
import NewArrival from "../components/NewArrival";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col  gap-6">
      {/* <Typography variant="h2">Count value is {count}</Typography>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
        size="md"
      >
        {" "}
        Add 1{" "}
      </Button> */}
      <BrowseCategory />
      <BestSelling />
      <CategoryOffer />
      <NewArrival />
    </div>
  );
};

export default Home;

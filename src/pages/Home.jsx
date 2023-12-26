import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-between items-end gap-2 py-3">
      <Typography variant="h2">Count value is {count}</Typography>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
        size="md"
      >
        {" "}
        Add 1{" "}
      </Button>
    </div>
  );
};

export default Home;

import { Button } from "@material-tailwind/react";

const NotFound = () => {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center gap-10">
      <div className="text-Text2 font-medium text-8xl">404 Not Found</div>
      <div className="text-lg text-Text2">
        Your visited page not found. You may go home page.
      </div>
      <Button className="text-Text text-lg font-medium py-2 px-4 bg-button2">
        Back to home page
      </Button>
    </div>
  );
};

export default NotFound;

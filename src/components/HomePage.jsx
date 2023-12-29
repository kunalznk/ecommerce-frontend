import { Button, Carousel } from "@material-tailwind/react";

const HomePage = () => {
  return (
    <div className="  h-full w-full flex flex-col justify center">
      <div className="   h-full w-full flex flex-row justify-center mt-10">
        <div className="h-4/5 w-4/5 flex flex-row gap-14  ">
          <div className="  h-full w-1/3 flex flex-col items-start gap-1">
            <div className="h-full w-full flex flex-row justify-between">
              <Button variant="text">Woman’s Fashion</Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="h-full w-full flex flex-row justify-between">
              <Button variant="text">Men’s Fashion</Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <Button variant="text">Electronics</Button>
            <Button variant="text">Home & Lifestyle</Button>
            <Button variant="text">Medicine</Button>
            <Button variant="text">Sports & Outdoor</Button>
            <Button variant="text">Baby’s & Toys</Button>
            <Button variant="text">Groceries & Pets</Button>
            <Button variant="text">Health & Beauty</Button>
          </div>
          <div className="  h-96 w-full flex object-center ">
            <Carousel className="aspect-square-xl">
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-full w-full object-center"
              />
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-full w-full object-center"
              />
              <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-full w-full object-center"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

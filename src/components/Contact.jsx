import { BellAlertIcon } from "@heroicons/react/24/outline";
import {
  Breadcrumbs,
  Typography,
  Input,
  Button,
  Textarea,
} from "@material-tailwind/react";

const Contact = () => {
  return (
    <div className="  h-full w-full flex flex-row justify-center">
      <div className="  h-full w-4/5 flex flex-row  ">
        <div className="h-full w-full flex flex-col gap-24 ">
          <div className="  h-20 w-full flex flex-col justify-end ">
            <Breadcrumbs>
              <a href="#" className="opacity-60">
                Home
              </a>
              <a href="#">Contact</a>
            </Breadcrumbs>
          </div>
          <div className="    h-full w-full flex flex-row gap-20 ">
            <div className="  h-full w-1/3 flex flex-col gap-8">
              <div className="   h-full w-full flex flex-col gap-6">
                <div className=" h-full w-full flex flex-row gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Typography variant="h5"> Call To Us</Typography>{" "}
                </div>
                <div className=" h-full w-full flex flex-col gap-2 ">
                  <h8>We are available 24/7, 7 days a week.</h8>
                  <h8>Phone: +8801611112222</h8>
                </div>
              </div>
              <div>
                <h4>---------------------------------------------------</h4>
              </div>
              <div className="  h-full w-full flex flex-col gap-6">
                <div className=" h-full w-full flex flex-row gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                  <Typography variant="h5">Write To Us</Typography>{" "}
                </div>
                <div className="  h-full w-full flex flex-col gap-3">
                  <h8>
                    Fill out our form and we will contact you within 24 hours..
                  </h8>
                  <h8>Emails: customer@exclusive.com</h8>
                  <h8>Emails: support@exclusive.com</h8>
                </div>
              </div>
            </div>
            <div className=" h-full w-full flex flex-col">
              <div className="  h-full w-full flex flex-row gap-3">
                <Input
                  variant="outlined"
                  label="Your Name"
                  placeholder=""
                ></Input>
                <Input
                  variant="outlined"
                  label="Your Email"
                  placeholder=""
                ></Input>
                <Input
                  variant="outlined"
                  label="Your Phone"
                  placeholder=""
                ></Input>
              </div>
              <div className="  h-80 w-full flex flex-col justify-center">
                <Textarea color="gray" label="Message" rows={"10"} />
              </div>
              <div className="h-full w-full flex flex-row justify-end">
                <Button color="red" variant="Send Message" size="sm">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

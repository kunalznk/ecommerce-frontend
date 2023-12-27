import { Typography ,Input, Button} from "@material-tailwind/react";


const RegisterPage = () =>{
    return(
        <div className="w-4/5 flex h-4/5"> 
        <div className=" w-full h-full hidden sm:block">
        <img
        className=" h-full w-full  object-cover object-right-top"
        src="https://img.freepik.com/premium-photo/black-friday-shopping-concept-black-shopping-papper-bags-black-trolley-black-backgr_1001450-58.jpg"
        alt="Login-Page.png"

        />  
        </div>
    <div className=" w-full flex justify-center items-center">
    <div className="flex justify-center flex-col gap-4">
    <Typography variant="h3">Create an account</Typography> 
    <Typography variant="h6">Enter your detail below</Typography>

    <Input variant="standard" label="Name" placeholder="Standard"/>
    <Input variant="standard" label="Email or Phone Number" placeholder="Standard"/>
    <Input variant="standard" label="Password" placeholder="Standard"/>

    <Button variant="color red">Create account</Button>
    <Typography variant="h8">Already have a account?<Button variant="text">Login</Button></Typography>
    </div>
    </div>
    </div>

    );
}
export default RegisterPage;
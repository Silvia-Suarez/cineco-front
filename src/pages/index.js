import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Signup from "@/components/Signup";
import Login from "@/components/Login";
import { Account } from "@/components/Account";
import StatusSession from "@/components/StatusSession";

export default function Home() {
  return (
    <>
      {/* <Card></Card> */}
      {/* <Navbar></Navbar> */}
      {/* <Footer></Footer> */}
      <Account>
        <StatusSession></StatusSession>
        <h1 className=" text-6xl ">SignUp</h1>
        <Signup></Signup>
        <h1 className=" text-6xl ">Login</h1>
        <Login></Login>
      </Account>
    </>
  );
}

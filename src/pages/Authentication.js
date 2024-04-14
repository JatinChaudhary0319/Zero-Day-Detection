import { json, redirect } from "react-router-dom";
import SignIn from "../components/Login";

import store from "../redux/index";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { authActions } from "../redux/authData/authDataSlice";

function AuthenticationPage() {
  return (
    <>
      <SignIn />
      <ToastContainer />
    </>
  );
}

export default AuthenticationPage;

export async function action({ request }) {
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  if (!authData.email || !authData.password) {
    toast.error("Invalid Credentials!");
    return null;
  }

  try{
    toast.loading("Processing in...");

    const response = await axios.post("http://localhost:8080/login", {
      email: authData.email,
      password: authData.password
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (response.status !== 200) {
      throw json({ message: "Could not authenticate user." }, { status: 500 });
    }
  
    const resData = response?.data || null;

    console.log(resData);
    const token = resData.token;
  
    localStorage.setItem("token", token);
  
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem("expiration", expiration.toISOString());

    store.dispatch(authActions.setAuthData(resData));
  
    return redirect("/home");

  }catch(error){
    toast.dismiss();

    if(error.status === 500){
      toast.error(error.message);
    }else{
      toast.error(error.response.data.message);
    }

    return null;
  }
}

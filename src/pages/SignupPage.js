import { json, redirect } from "react-router-dom";
import SignUp from "../components/Signup";

import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { validateEmail, validatePhoneNumber } from "../utils/helperData";
import { useEffect } from "react";
// import toast from 'react-hot-toast';

function SignupPage() {
  return (
    <>
      <SignUp />
      <ToastContainer />
    </>
  );
}

export default SignupPage;

export async function action({ request }) {
  const data = await request.formData();
  const authData = {
    username: data.get("username"),
    email: data.get("email"),
    phone: data.get("phone"),
    password: data.get("password"),
  };

  const confirmPassword = data.get("confirmPassword");

  if (!authData.username) {
    toast.error("Username is required!");
    return null;
  } else if (!validateEmail(authData.email)) {
    toast.error("Invalid Email!");
    return null;
  } else if (!validatePhoneNumber(authData.phone)) {
    toast.error("Invalid Phone number!");
    return null;
  } else if (authData.password !== confirmPassword) {
    toast.error("Password mismatch!");
    return null;
  }

  try{
    toast.loading("Processing in...");

    const response = await axios.post("http://localhost:8080/signup", {
      username: authData.username, 
      email: authData.email, 
      phone: authData.phone, 
      password: authData.password
    },
    {
      headers: {
        "Content-Type": "application/json",
      }
    });
  
    // if (response.status === 422) {
    //   console.log(response);
    //   toast.error("User signup failed due to validation errors.");
    //   return null;
    // }
  
    if (response.status !== 201) {
      throw json({ message: "Could not authenticate user." }, { status: 500 });
    }
  
    // const resData = response?.data || null;

    // console.log(resData);
  
    toast.dismiss();
    toast.success(<b>Process completed successfully!</b>);
    
    return redirect("/");
}catch(error){
    toast.dismiss();

    if(error.status === 500){
      toast.error(error.message);
    }else{
      {Object.values(error.response.data.errors).map((err) => toast.error(err) )};
    }

    return null;
}

  // const response = await axios.post("http://localhost:8080/signup", {
  //   username: authData.username, 
  //   email: authData.email, 
  //   phone: authData.phone, 
  //   password: authData.password
  // },
  // {
  //   headers: {
  //     "Content-Type": "application/json",
  //   }
  // });

  // if (response.status === 422) {
  //   console.log(response);
  //   toast.error("User signup failed due to validation errors.");
  //   return null;
  // }

  // if (!response.ok) {
  //   console.log(response);
  //   throw json({ message: "Could not authenticate user." }, { status: 500 });
  // }

  // const resData = await response.json();
  // const token = resData.token;

  // localStorage.setItem("token", token);

  // const expiration = new Date();
  // expiration.setHours(expiration.getHours() + 1);
  // localStorage.setItem("expiration", expiration.toISOString());

  // return redirect("/");
}

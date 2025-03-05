"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";


export default function SigninPage(){
  
  const router = useRouter();

  const [user,setUser]=React.useState({
    name:"",
    email:"",
    password:""
  })
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  console.log(error);
  console.log(loading);
  
  
  const onSignup = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form reload
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || "Signup failed");

      alert("Signup successful! Redirecting to login...");
      router.push("/login"); // Redirect to login after successful signup

    } catch (err: unknown) {  
      if (err instanceof Error) {  
        setError(err.message);  
      } else {  
        setError("An unknown error occurred");  
      }  
    }
    setLoading(false);
  };



    return(
        <div className="  border border-gray-200 rounded-lg flex items-center justify-center h-screen p-4 sm:p-6 lg:p-8   dark:bg-gray-700">
			<div className="w-96 p-6 dark:bg-gray-800 shadow-lg rounded-md">
				<form className="space-y-6" action="#">
					<h3 className="text-xl font-medium text-gray-900 dark:text-white">signin to SpringField</h3>
					<div>
						<label htmlFor="username" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Name</label>
						<input  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
            type="text" 
            name="username" 
            id="username"
            value={user.name}
            onChange={(e)=>setUser({...user,name:e.target.value})}
            placeholder="abc" required/>
          </div>
          <div>
						<label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
						<input 
            type="email" 
            name="email" 
            id="email" 
            value={user.email}
            onChange={(e)=>setUser({...user,email:e.target.value})}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
          </div>
					<div>
						<label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
						<input type="password" 
            name="password" 
            id="password" 
            placeholder="**********" 
            value={user.password}
            onChange={(e)=>setUser({...user,password:e.target.value})}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
          </div>
						<button 
            onClick={onSignup}
            type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">sign
            in to your account</button>
						<div className="text-sm font-medium text-gray-500 dark:text-gray-300">
							<Link href="/login"> Go to Login</Link>
						</div>
				</form>
			</div>
		</div>
    )
}
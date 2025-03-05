"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login"); // Redirect to login if not authenticated
      return;
    }

    // Decode token (normally done on backend, but for demo, storing email)
    const storedEmail = localStorage.getItem("email"); 
    setUserEmail(storedEmail || "User");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    router.push("/login");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[url('/dashb.avif')] bg-cover bg-center">
      <div className="w-96 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Welcome, {userEmail}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">You are now logged in!</p>
        <div className="mt-6">
          <button
            onClick={handleLogout}
            className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

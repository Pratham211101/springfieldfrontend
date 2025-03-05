"use client"
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Welcome to Springfield</h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2">Your simple authentication app</p>
      <div className="mt-6 space-x-4">
        <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Login
        </Link>
        <Link href="/signup" className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">
          Signup
        </Link>
      </div>
    </div>
  )
}

export default page
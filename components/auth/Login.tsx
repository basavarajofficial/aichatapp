"use client"

import Image from "next/image";
// import heroImage from "@/assets/hero.jpg";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
          const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });

          if (!res.ok) {
            const errorData = await res.json();
            alert(errorData.message || "Login failed!");
            return;
          }

          // Debugging: Log the response
          const data = await res.json();
          console.log("Login response:", data);

          // Redirect to /dashboard
          router.push("/chat");

          // Refresh the page to ensure middleware runs
          router.refresh();
        } catch (error) {
          console.error("Login error:", error);
          alert("An error occurred during login.");
        }
      };


  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
      {/* Hero Section */}
      <div className="lg:w-2/3 relative min-h-[60vh] lg:min-h-screen">
        <Image
          src="/assets/hero.jpg"
          alt="SourceBytes.AI Background"
            layout="fill" // Makes the image fill the parent container
            objectFit="cover" // Ensures the image covers the container without distortion
            priority // Prioritizes loading this image
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/20 flex items-center lg:items-end p-6 lg:p-10 z-10">
          <div className="text-white max-w-2xl lg:mb-24">
            <h1 className="text-2xl lg:text-4xl font-bold mb-4 leading-tight">
              Trusted by Early Adopters to Transform Enterprise Intelligence -
              Join the Growing Revolution with{" "}
              <span className="text-[#EF6A37]">SourceBytes.AI</span>
            </h1>

            <div className="flex flex-wrap gap-4 mt-6 text-sm lg:text-base">
              <div className="bg-white/10 px-4 py-2 rounded-full">
                12+ Data source formats
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-full">
                25+ GenAI features
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Form Section */}
      <div className="lg:w-1/3 flex items-center justify-center bg-white p-6 lg:p-8 relative lg:static">
        <div className="w-full max-w-md lg:max-w-none">
          <div className="text-center mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Welcome to SourceBytes.AI
            </h2>
            <p className="text-gray-600 mt-2 text-sm lg:text-base">
              Get started with your email
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              value={formData.email}
              placeholder="Enter your email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm lg:text-base"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <input
              type="password"
              value={formData.password}
              placeholder="Enter your password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm lg:text-base"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors duration-200 text-sm lg:text-base"
            >
              Continue
            </button>
          </form>

          <div className="text-center text-xs text-gray-500 mt-6">
            By continuing you agree to our{" "}
            <Link href="/privacy" className="underline hover:text-orange-600 transition-colors">
              privacy policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="underline hover:text-orange-600 transition-colors">
              terms of use
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

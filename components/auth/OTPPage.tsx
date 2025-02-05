"use client"
import Image from "next/image";
import heroImage from "@/assets/hero.jpg";
import Link from "next/link";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { useState } from "react";

export default function OTPPage() {

    const [value, setValue] = useState("");

    const subHandler = async () => {
        alert(value);
    }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
      {/* Hero Section */}
      <div className="lg:w-2/3 relative min-h-[60vh] lg:min-h-screen">
        <Image
          src={heroImage}
          alt="SourceBytes.AI Background"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/20 flex items-center lg:items-end p-6 lg:p-10 z-10">
          <div className="text-white max-w-3xl lg:mb-24 ">
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

          <form className="space-y-4 flex flex-col items-center" onSubmit={subHandler}>
            <label>Enter OTP</label>
          <InputOTP
            value={value}
            onChange={(v) => setValue(v)}
          maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
            <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
            </InputOTPGroup>
            </InputOTP>
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

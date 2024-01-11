import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StudentInfo from "./components/StudentInfo";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#172227] font-[Inter] text-white">
      <Navbar />
      <HeroSection />
      <StudentInfo />
      <Footer />
    </div>
  );
}

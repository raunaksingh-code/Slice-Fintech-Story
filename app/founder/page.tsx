"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { User, Briefcase, GraduationCap, Trophy, MapPin, Target, AlertTriangle, Building2, Landmark } from "lucide-react";
import { GlassCard, BentoGrid, BentoCard } from "@/components/ui/Cards";
import NextPageButton from "@/components/ui/NextPageButton";

export default function FounderPage() {
  const milestones = [
    {
      year: "Before 2016",
      title: "Early Ventures",
      description: "Started as a business analyst intern at Walmart. Founded Mesh Internet, which failed—but the experience shaped his approach.",
      icon: <Briefcase className="w-5 h-5 text-white" />,
      color: "bg-blue-500",
    },
    {
      year: "Jan 2016",
      title: "Inception of SlicePay",
      description: "Founded SlicePay (Garagepreneurs Internet Pvt Ltd) with Deepak Malhotra to give India's youth transparent credit access.",
      icon: <Target className="w-5 h-5 text-white" />,
      color: "bg-[var(--color-purple-slice)]",
    },
    {
      year: "Nov 2021",
      title: "Unicorn Status",
      description: "Crossed $1 billion valuation (unicorn) with 300,000+ customers.",
      icon: <Trophy className="w-5 h-5 text-white" />,
      color: "bg-orange-500",
    },
    {
      year: "June 2022",
      title: "Regulatory Shock",
      description: "RBI banned non-banks from loading credit lines onto prepaid instruments, breaking the core model.",
      icon: <AlertTriangle className="w-5 h-5 text-white" />,
      color: "bg-red-500",
    },
    {
      year: "Oct 2024",
      title: "The Pivot & Merger",
      description: "Merged with North East Small Finance Bank to officially become slice Small Finance Bank.",
      icon: <Building2 className="w-5 h-5 text-white" />,
      color: "bg-[var(--color-green-success)]",
    },
    {
      year: "Feb 2026",
      title: "Bank Leadership",
      description: "Rajan Bajaj approved by the RBI as MD & CEO of the merged bank.",
      icon: <Landmark className="w-5 h-5 text-white" />,
      color: "bg-[var(--color-dark)]",
    }
  ];

  return (
    <div className="flex flex-col gap-24 pb-24 pt-20">
      {/* Profile Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full md:w-1/3"
          >
            <div className="relative group rounded-[2rem] overflow-hidden bg-gray-100 aspect-[3/4] border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] hover:-translate-y-2 hover:translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] transition-all">
              {/* Abstract Profile Representation */}
              <div className="absolute inset-0 bg-[var(--color-purple-slice)] mix-blend-overlay opacity-30 z-10" />
              
              <Image 
                src="/founder_cartoon.png" 
                alt="Founder Cartoon Portrait"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                priority
              />

              <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-8 z-20 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent">
                <h2 className="text-4xl font-space-grotesk font-black uppercase tracking-tighter text-white mt-12">Rajan Bajaj</h2>
                <p className="text-[var(--color-green-success)] font-bold text-lg uppercase tracking-widest mt-1">Founder & CEO</p>
                
                <div className="flex gap-4 mt-6">
                   <div className="flex items-center gap-2 text-sm font-bold text-gray-900 bg-yellow-300 border-2 border-gray-900 px-4 py-2 shadow-[2px_2px_0px_0px_rgba(17,24,39,1)] uppercase">
                     <MapPin className="w-4 h-4 stroke-[3]" /> Bengaluru
                   </div>
                   <div className="flex items-center gap-2 text-sm font-bold text-gray-900 bg-[#bf00ff] text-white border-2 border-gray-900 px-4 py-2 shadow-[2px_2px_0px_0px_rgba(17,24,39,1)] uppercase">
                     <GraduationCap className="w-4 h-4 stroke-[3]" /> IIT Kharagpur
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="w-full md:w-2/3">
            <h1 className="text-5xl md:text-7xl font-space-grotesk font-black tracking-tighter mb-10 uppercase leading-none text-gray-900">
              "We didn't want to build just another bank. We wanted to build a <span className="text-white bg-[var(--color-purple-slice)] px-2 inline-block -rotate-1 border-4 border-gray-900 shadow-[4px_4px_0px_0px_rgba(17,24,39,1)]">financial companion</span>."
            </h1>
            
            <BentoGrid className="grid-cols-1 md:grid-cols-2">
              <BentoCard 
                title="Engineering Background"
                description="Civil engineering graduate from IIT Kharagpur, bringing analytical rigor to financial architecture."
                icon={<GraduationCap className="w-6 h-6" />}
              />
              <BentoCard 
                title="Personal Mission"
                description="Driven to give India's youth an easier way to build a credit score early after experiencing the credit gap firsthand."
                icon={<User className="w-6 h-6" />}
              />
            </BentoGrid>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="bg-yellow-300 py-32 border-y-8 border-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(0,0,0,0.05)_20px,rgba(0,0,0,0.05)_40px)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-space-grotesk font-black uppercase tracking-tighter drop-shadow-[4px_4px_0_rgba(17,24,39,1)] text-white">The Journey</h2>
          </div>
          
          <div className="space-y-12 relative">
            <div className="absolute left-8 top-4 bottom-4 w-2 bg-gray-900" />
            
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-8 relative z-10 group"
              >
                <div className={`w-16 h-16 rounded-none border-4 border-gray-900 ${milestone.color} shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  {milestone.icon}
                </div>
                <div className="flex-1 p-8 bg-white border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(17,24,39,1)] transition-all">
                  <div className="text-sm font-black text-gray-900 bg-[#10B981] inline-block px-3 py-1 border-2 border-gray-900 shadow-[2px_2px_0px_0px_rgba(17,24,39,1)] mb-4 uppercase tracking-widest">{milestone.year}</div>
                  <h3 className="text-3xl font-space-grotesk font-black mb-3 uppercase tracking-tight">{milestone.title}</h3>
                  <p className="text-xl font-medium text-gray-700">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Next Page Navigation */}
      <NextPageButton href="/business-model" label="Business Model" />
    </div>
  );
}

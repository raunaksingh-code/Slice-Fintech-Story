"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Globe, TrendingUp, Users, ArrowUpRight } from "lucide-react";
import { BentoGrid, BentoCard, MetricCard } from "@/components/ui/Cards";
import NextPageButton from "@/components/ui/NextPageButton";

export default function ScalePage() {
  return (
    <div className="flex flex-col gap-24 pb-24 pt-32">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <h1 className="text-5xl md:text-8xl font-space-grotesk font-black tracking-tighter mb-10 uppercase text-gray-900">
          Geography & <span className="text-white bg-[#bf00ff] px-2 border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] inline-block rotate-2">Scale</span>
        </h1>
        <p className="text-lg md:text-2xl font-bold text-gray-700 max-w-3xl mx-auto border-4 border-gray-900 p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] bg-yellow-300 transform -rotate-1 mb-16">
          From a small startup in Bengaluru to a financial powerhouse operating across India.
        </p>

        {/* KPI Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <MetricCard title="Peak Issuance" value="400K+" trend="Cards issued in a single month" />
          <MetricCard title="Registered Users" value="20M+" trend="Nationwide reach" />
          <MetricCard title="Team Size" value="3,000+" trend="Across India" />
          <MetricCard title="Peak Valuation" value="$1.5B+" trend="Reached in 2022-23" />
        </div>

        {/* Abstract Map/Network visualization */}
        <div className="w-full bg-gray-900 border-4 border-gray-900 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] p-12 relative overflow-hidden h-[500px] flex items-center justify-center text-white mb-24">
          <div className="absolute inset-0 opacity-20">
             {/* Abstract grid background */}
             <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          </div>

          <div className="relative z-10 text-center">
            <Globe className="w-24 h-24 text-[var(--color-purple-slice)] mx-auto mb-6 opacity-100 stroke-[3]" />
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-black mb-6 uppercase tracking-tighter drop-shadow-[4px_4px_0_rgba(191,0,255,1)]">Pan-India Presence</h2>
            <p className="text-base md:text-xl font-bold bg-[#10B981] text-gray-900 p-3 md:p-4 border-4 border-gray-900 inline-block max-w-2xl shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] uppercase tracking-tight">
              HQ in Bengaluru, registered office in Guwahati. From targeting metro students in 2016 to serving a nationwide audience as a Small Finance Bank today.
            </p>
          </div>

          {/* Animated Nodes representing cities */}
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/4 left-1/4">
             <div className="flex items-center gap-1 md:gap-2 bg-yellow-300 border-2 border-gray-900 text-gray-900 font-bold px-2 md:px-4 py-1 md:py-2 shadow-[2px_2px_0px_0px_rgba(17,24,39,1)] uppercase tracking-widest">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-gray-900 stroke-[3]" /> <span className="text-xs md:text-sm">Delhi NCR</span>
             </div>
          </motion.div>
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, delay: 1, repeat: Infinity }} className="absolute bottom-1/3 right-1/4">
             <div className="flex items-center gap-1 md:gap-2 bg-[#bf00ff] border-2 border-gray-900 text-white font-bold px-2 md:px-4 py-1 md:py-2 shadow-[2px_2px_0px_0px_rgba(17,24,39,1)] uppercase tracking-widest">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-white stroke-[3]" /> <span className="text-xs md:text-sm">Bengaluru</span>
             </div>
          </motion.div>
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 5, delay: 0.5, repeat: Infinity }} className="absolute top-1/3 right-1/3">
             <div className="flex items-center gap-1 md:gap-2 bg-white border-2 border-gray-900 text-gray-900 font-bold px-2 md:px-4 py-1 md:py-2 shadow-[2px_2px_0px_0px_rgba(17,24,39,1)] uppercase tracking-widest">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-gray-900 stroke-[3]" /> <span className="text-xs md:text-sm">Mumbai</span>
             </div>
          </motion.div>
        </div>

        <BentoGrid className="grid-cols-1 md:grid-cols-2 text-left">
          <BentoCard 
            title="Milestone Journey"
            icon={<ArrowUpRight className="w-6 h-6" />}
          >
            <div className="mt-6 space-y-4">
               <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                 <span className="font-semibold text-gray-700">Nov 2021 (Unicorn)</span>
                 <span className="text-[var(--color-purple-slice)] font-mono">$1B+ Valuation</span>
               </div>
               <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                 <span className="font-semibold text-gray-700">Peak Scale (2022-23)</span>
                 <span className="text-[var(--color-purple-slice)] font-mono">$1.5B–$1.8B Valuation</span>
               </div>
               <div className="flex justify-between items-center pb-2">
                 <span className="font-semibold text-gray-700">Sept 2022 (Bank Stake)</span>
                 <span className="text-[var(--color-purple-slice)] font-mono">5% in NESFB ($3.4M)</span>
               </div>
            </div>
          </BentoCard>

          <BentoCard 
            title="User Growth"
            icon={<Users className="w-6 h-6" />}
            className="overflow-hidden"
          >
            <div className="flex-1 flex items-end mt-4 -mb-6 h-32 min-h-[120px]">
               <div className="w-full flex items-end gap-2 h-full">
                 <div className="w-1/4 bg-[var(--color-purple-slice)]/20 rounded-t-lg h-[20%] relative group">
                   <span className="absolute -top-6 text-xs text-gray-400 hidden group-hover:block transition-all">2019</span>
                 </div>
                 <div className="w-1/4 bg-[var(--color-purple-slice)]/40 rounded-t-lg h-[40%] relative group">
                   <span className="absolute -top-6 text-xs text-gray-400 hidden group-hover:block transition-all">2020</span>
                 </div>
                 <div className="w-1/4 bg-[var(--color-purple-slice)]/70 rounded-t-lg h-[60%] relative group">
                   <span className="absolute -top-6 text-xs text-gray-400 hidden group-hover:block transition-all">2021</span>
                 </div>
                 <div className="w-1/4 bg-[var(--color-purple-slice)] rounded-t-lg h-[100%] relative group">
                   <span className="absolute -top-6 left-1 text-xs font-bold text-[var(--color-purple-slice)]">15M+</span>
                 </div>
               </div>
            </div>
          </BentoCard>
        </BentoGrid>
      </section>
      {/* Next Page Navigation */}
      <NextPageButton href="/financials" label="Status" />
    </div>
  );
}

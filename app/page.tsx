"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Zap, Shield, Sparkles, PieChart, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import { GlassCard, BentoGrid, BentoCard, MetricCard } from "@/components/ui/Cards";
import NextPageButton from "@/components/ui/NextPageButton";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-black -mt-24 pt-24 pb-20">
        {/* Background Image */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/slice_hero_bg.png')" }}
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-4 w-full mt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-6 uppercase leading-none"
          >
            Do right <br className="md:hidden"/> by the money
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-2xl md:text-3xl text-white/90 mb-12 font-medium tracking-wide"
          >
            Simple, fast, intelligent banking
          </motion.p>
          
          {/* CTA Pill */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex items-center bg-white/10 backdrop-blur-xl rounded-full p-2 border border-white/20 shadow-2xl mb-8 group hover:bg-white/20 transition-all cursor-pointer"
          >
             <span className="px-8 text-white font-semibold text-sm md:text-lg tracking-tight">
               Trusted by 20mn+ Indians
             </span>
             <button className="bg-[#bf00ff] hover:bg-[#a600e6] transition-colors text-white font-bold px-10 py-4 rounded-full text-sm md:text-lg shadow-[0_0_20px_rgba(191,0,255,0.4)] group-hover:shadow-[0_0_40px_rgba(191,0,255,0.6)]">
               Get slice
             </button>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/70 text-xs md:text-sm max-w-lg mx-auto text-center font-medium leading-relaxed tracking-wide"
          >
            slice small finance bank is a scheduled commercial bank<br />
            regulated by the Reserve Bank of India (RBI)
          </motion.p>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center p-2 backdrop-blur-md">
            <div className="w-1 h-3 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* KPI Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard title="Total Users" value="15M+" trend="+2M this year" className="bg-white/80 backdrop-blur-xl" />
          <MetricCard title="Transactions Processed" value="₹50K Cr+" trend="All time" className="bg-white/80 backdrop-blur-xl" />
          <MetricCard title="App Rating" value="4.7/5" trend="Based on 500K+ reviews" className="bg-white/80 backdrop-blur-xl" />
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-[10rem] font-black text-gray-900/5 rotate-[-5deg] pointer-events-none whitespace-nowrap">PRODUCTS</div>
          <h2 className="text-5xl md:text-7xl font-space-grotesk font-black mb-6 uppercase tracking-tighter relative z-10 text-gray-900">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium relative z-10 border-4 border-gray-900 p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] bg-white">
            A comprehensive suite of financial products designed for speed, simplicity, and transparency.
          </p>
        </div>
        
        <BentoGrid className="grid-cols-1 md:grid-cols-3">
          <BentoCard 
            title="slice account" 
            description="Your everyday banking companion. Lightning-fast UPI payments, auto-pay for bills, and intelligent expense tracking built right into the app."
            icon={<Smartphone className="w-6 h-6" />}
          >
             <div className="mt-8 flex justify-center opacity-50">
                <Sparkles className="w-16 h-16 text-[var(--color-purple-slice)]" />
             </div>
          </BentoCard>

          <BentoCard 
            title="slice borrow" 
            description="Flexible, paperless loans tailored for you. Get instant approval, transparent interest rates, and flexible repayment tenures up to 12 months."
            icon={<TrendingUp className="w-6 h-6" />}
          >
             <div className="mt-8 flex justify-center opacity-50">
                <Zap className="w-16 h-16 text-yellow-500" />
             </div>
          </BentoCard>

          <BentoCard 
            title="slice mini" 
            description="A dedicated prepaid account perfect for teens and students. Learn financial discipline early with a secure, zero-balance required account."
            icon={<Shield className="w-6 h-6" />}
          >
             <div className="mt-8 flex justify-center opacity-50">
                <Shield className="w-16 h-16 text-[var(--color-green-success)]" />
             </div>
          </BentoCard>
        </BentoGrid>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 relative">
          <h2 className="text-5xl md:text-7xl font-space-grotesk font-black mb-6 uppercase tracking-tighter relative z-10 text-gray-900">
            Our Core Philosophy
          </h2>
          <div className="inline-block bg-[var(--color-purple-slice)] text-white text-xl font-bold max-w-2xl mx-auto border-4 border-gray-900 p-4 rounded-xl shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] rotate-1">
            We are fundamentally redesigning the financial experience for the young, ambitious, and fast-moving generation.
          </div>
        </div>
        
        <BentoGrid>
          <BentoCard 
            title="The Mission" 
            description="Build a transparent, simple, and intuitive financial platform that empowers the youth to take control of their money."
            icon={<Zap className="w-6 h-6" />}
            className="md:col-span-2"
          >
            <div className="mt-8 h-40 bg-gray-50 rounded-2xl flex items-center justify-center border border-dashed border-gray-200">
              {/* Placeholder for an infographic doodle */}
              <div className="flex items-center gap-4 opacity-50">
                <Users className="w-8 h-8" />
                <ArrowRight className="w-6 h-6" />
                <Smartphone className="w-8 h-8" />
                <ArrowRight className="w-6 h-6" />
                <PieChart className="w-8 h-8" />
              </div>
            </div>
          </BentoCard>
          <BentoCard 
            title="The Vision" 
            description="To be the primary financial ecosystem for every digitally-native Indian."
            icon={<TrendingUp className="w-6 h-6" />}
          >
             <div className="mt-8 flex justify-center">
               <div className="relative w-32 h-32 rounded-full border-4 border-[var(--color-purple-slice)] flex items-center justify-center">
                 <div className="absolute w-40 h-40 border border-gray-200 rounded-full animate-[spin_10s_linear_infinite]" />
                 <Shield className="w-10 h-10 text-[var(--color-purple-slice)]" />
               </div>
             </div>
          </BentoCard>
        </BentoGrid>
      </section>

      {/* Visual Journey Preview */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h2 className="text-5xl md:text-7xl font-space-grotesk font-black mb-8 uppercase tracking-tighter leading-none">
                From <span className="text-red-500 line-through decoration-8 decoration-gray-900">Complexity</span> <br/>
                <span className="text-[var(--color-purple-slice)]">to Simplicity</span>
              </h2>
              <p className="text-xl text-gray-700 font-medium mb-10 border-l-8 border-[var(--color-purple-slice)] pl-6 py-2">
                Traditional banking is broken. It's slow, opaque, and hostile. We stripped away the jargon, the hidden fees, and the unnecessary paperwork to create a truly seamless experience.
              </p>
              <Link href="/friction" className="inline-flex items-center gap-4 bg-gray-900 text-white font-black text-xl uppercase px-8 py-4 rounded-full border-4 border-transparent hover:bg-[var(--color-purple-slice)] hover:border-gray-900 hover:shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] transition-all">
                See the problem <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
            <div className="flex-1 w-full">
              <GlassCard className="p-8 bg-white">
                <div className="flex flex-col gap-6">
                  {/* Before */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 opacity-60 grayscale">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xl">📄</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Old Banking</div>
                      <div className="text-sm text-gray-500">Days of paperwork</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center -my-2 z-10 relative">
                    <div className="bg-white p-2 rounded-full border border-gray-100 shadow-sm">
                      <ArrowRight className="w-5 h-5 text-gray-400 rotate-90 md:rotate-0" />
                    </div>
                  </div>

                  {/* After */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--color-purple-slice)]/10 border border-[var(--color-purple-slice)]/20 shadow-[0_0_30px_rgba(108,60,240,0.1)]">
                    <div className="w-12 h-12 bg-[var(--color-purple-slice)] rounded-full flex items-center justify-center shadow-lg shadow-[var(--color-purple-slice)]/30">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--color-purple-slice)]">Slice</div>
                      <div className="text-sm text-[var(--color-purple-slice)]/70">Instant approval</div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
      {/* Next Page Navigation */}
      <NextPageButton href="/friction" label="Friction" />
    </div>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, FileText, Ban, AlertCircle, ArrowDown, CheckCircle2, Zap } from "lucide-react";
import { BentoGrid, BentoCard, GlassCard } from "@/components/ui/Cards";
import NextPageButton from "@/components/ui/NextPageButton";

export default function FrictionPage() {
  return (
    <div className="flex flex-col gap-24 pb-24 pt-32">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 border-4 border-gray-900 bg-[#ff3b3b] text-gray-900 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] mb-8 transform -rotate-2">
            <AlertCircle className="w-6 h-6 stroke-[3]" />
            <span className="text-xl font-black uppercase tracking-widest">The Problem</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-space-grotesk font-black tracking-tighter mb-8 uppercase text-gray-900">
            The <span className="text-[#ff3b3b] underline decoration-8 underline-offset-8">Friction</span>
          </h1>
          <p className="text-lg md:text-2xl font-bold text-gray-700 max-w-3xl mx-auto border-4 border-gray-900 p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] bg-yellow-300 transform rotate-1">
            India had ~1.4 billion people but fewer than 80 million active credit-card holders.
          </p>
        </motion.div>
      </section>

      {/* Journey Map */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative">
          {/* Connecting Line - Made thicker and more visible */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-gray-300 via-gray-300 to-[var(--color-purple-slice)] -translate-x-1/2 rounded-full shadow-inner" />
          
          <div className="space-y-16">
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center justify-between gap-12 relative"
            >
              <div className="w-1/2 text-right pr-12">
                <h3 className="text-4xl font-space-grotesk font-black mb-3 text-gray-900 uppercase tracking-tighter">The Gap</h3>
                <p className="text-xl font-medium text-gray-700">Students, fresh graduates, gig workers, and young professionals had no formal credit history.</p>
              </div>
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full border-4 border-gray-200 shadow-md items-center justify-center z-10 hover:scale-110 transition-transform">
                <FileText className="w-6 h-6 text-gray-500" />
              </div>
              <div className="w-full md:w-1/2 md:pl-12">
                <GlassCard className="p-8 bg-white border border-gray-200 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gray-100 rounded-bl-3xl -mr-8 -mt-8" />
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center"><div className="w-4 h-1 bg-gray-300 rounded" /></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center"><div className="w-4 h-1 bg-gray-300 rounded" /></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3" />
                    </div>
                    <div className="flex items-center gap-3 opacity-50">
                      <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center"><div className="w-4 h-1 bg-gray-300 rounded" /></div>
                      <div className="h-4 bg-gray-200 rounded w-1/3" />
                    </div>
                  </div>
                </GlassCard>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col md:flex-row-reverse items-center justify-between gap-6 md:gap-12 relative text-center md:text-left"
            >
              <div className="w-full md:w-1/2 md:text-left md:pl-12">
                <h3 className="text-4xl font-space-grotesk font-black mb-3 text-gray-900 uppercase tracking-tighter">The Exclusion</h3>
                <p className="text-xl font-medium text-gray-700">Traditional banks simply wouldn't issue cards to the youth without existing credit scores.</p>
              </div>
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full border-4 border-gray-200 shadow-md items-center justify-center z-10 hover:scale-110 transition-transform">
                <Clock className="w-6 h-6 text-gray-500" />
              </div>
              <div className="w-full md:w-1/2 md:pr-12">
                <GlassCard className="p-8 bg-white border border-gray-200 shadow-lg flex flex-col justify-center items-center h-40 relative overflow-hidden">
                   <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.02)_10px,rgba(0,0,0,0.02)_20px)]" />
                   <div className="w-16 h-16 rounded-full border-4 border-gray-100 border-t-gray-400 animate-spin relative z-10 shadow-sm" />
                   <p className="mt-4 text-sm font-medium text-gray-400 relative z-10 tracking-widest uppercase">Processing...</p>
                </GlassCard>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center justify-between gap-12 relative"
            >
              <div className="w-1/2 text-right pr-12">
                <h3 className="text-4xl font-space-grotesk font-black mb-3 text-[#ff3b3b] uppercase tracking-tighter">The Result</h3>
                <p className="text-xl font-medium text-gray-700">300+ million new-to-credit people locked out of building a score, pushed toward informal or high-cost credit.</p>
              </div>
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full border-4 border-red-200 shadow-md items-center justify-center z-10 hover:scale-110 transition-transform">
                <Ban className="w-6 h-6 text-red-500" />
              </div>
              <div className="w-full md:w-1/2 md:pl-12">
                <div className="bg-[#ff3b3b] border-4 border-gray-900 text-gray-900 p-8 rounded-[2rem] flex flex-col items-center justify-center text-center shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] relative overflow-hidden transform hover:-translate-y-2 hover:translate-x-2 hover:shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] transition-all">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
                    <span className="text-[6rem] font-black text-gray-900/10 rotate-[-15deg] block pointer-events-none">DENIED</span>
                  </div>
                  <Ban className="w-16 h-16 mb-4 relative z-10 stroke-[3]" />
                  <span className="font-black text-2xl relative z-10 uppercase tracking-widest">Insufficient CIBIL Score</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-gray-900 py-32 rounded-[3rem] text-white my-12 relative overflow-hidden border-4 border-gray-900 shadow-[0_20px_50px_rgba(191,0,255,0.2)] mx-4">
        <div className="absolute top-0 inset-x-0 flex justify-center -mt-8 z-20">
          <div className="bg-[var(--color-purple-slice)] rounded-full p-4 border-4 border-gray-900 shadow-[4px_4px_0px_0px_rgba(17,24,39,1)]">
            <ArrowDown className="w-10 h-10 text-gray-900 stroke-[3] animate-bounce" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-20 mt-10">
          <h2 className="text-5xl md:text-8xl font-space-grotesk font-black mb-10 uppercase tracking-tighter text-[var(--color-purple-slice)] drop-shadow-[4px_4px_0_rgba(17,24,39,1)]">
            The Slice Solution
          </h2>
          <p className="text-lg md:text-2xl text-gray-900 font-black border-4 border-gray-900 inline-block px-4 md:px-8 py-2 md:py-4 bg-[#10B981] -rotate-1 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] uppercase tracking-tight">
            Data-driven underwriting. Instant approval.
          </p>
        </div>

        <BentoGrid className="px-4 sm:px-6 lg:px-8">
          <BentoCard 
            title="Alternative Data" 
            description="We look beyond traditional credit scores using thousands of data points."
            icon={<CheckCircle2 className="w-6 h-6" />}
            className="bg-white/5 border-white/10 text-white group-hover:bg-white/10"
            dark={true}
          />
          <BentoCard 
            title="Instant Approval" 
            description="Our proprietary engine processes applications in under 60 seconds."
            icon={<Zap className="w-6 h-6" />}
            className="bg-white/5 border-white/10 text-white group-hover:bg-white/10"
            dark={true}
          />
          <BentoCard 
            title="No Hidden Fees" 
            description="Absolute transparency in every transaction and fee structure."
            icon={<FileText className="w-6 h-6" />}
            className="bg-white/5 border-white/10 text-white group-hover:bg-white/10"
            dark={true}
          />
        </BentoGrid>
      </section>
      {/* Next Page Navigation */}
      <NextPageButton href="/founder" label="Founders" />
    </div>
  );
}

"use client";

import React from "react";
import { BentoGrid, BentoCard, MetricCard, GlassCard } from "@/components/ui/Cards";
import { LineChart, BarChart } from "@/components/ui/Charts";
import { TrendingUp, Activity, BarChart3, LineChart as LineChartIcon } from "lucide-react";
import NextPageButton from "@/components/ui/NextPageButton";

export default function FinancialsPage() {
  const valuationData = {
    labels: ["2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"],
    datasets: [
      {
        label: "Estimated Valuation ($ Millions)",
        data: [50, 200, 1000, 1500, 1800, 1600, 1600, 1800],
        borderColor: "#6C3CF0",
        backgroundColor: "rgba(108, 60, 240, 0.1)",
        fill: true,
      }
    ]
  };

  const userGrowthData = {
    labels: ["2020", "2021", "2022", "2023", "2024", "2025", "2026"],
    datasets: [
      {
        label: "Registered Users (Millions)",
        data: [0.1, 0.3, 5.0, 10.0, 15.0, 18.0, 20.0],
        backgroundColor: "#10B981",
        borderRadius: 8,
      }
    ]
  };

  return (
    <div className="flex flex-col gap-24 pb-24 pt-32 bg-gray-50 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <h1 className="text-5xl md:text-8xl font-space-grotesk font-black tracking-tighter mb-8 uppercase text-gray-900">
          Status <span className="bg-[#10B981] text-gray-900 px-4 border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] inline-block -rotate-2">Today</span>
        </h1>
        <p className="text-lg md:text-2xl font-bold text-gray-700 max-w-3xl mx-auto border-4 border-gray-900 p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] bg-white transform rotate-1 mb-16">
          Still operating, growing, and fully transformed into a regulated bank.
        </p>

        {/* Executive KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <MetricCard title="First Profit (FY26)" value="₹27.97 Cr" trend="Over three quarters" />
          <MetricCard title="Savings Accounts" value="4M+" trend="Within 1 year of banking ops" />
          <MetricCard title="Total Funding" value="$250M+" trend="Tiger Global, Insight Partners" />
        </div>

        <BentoGrid className="grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <BentoCard 
            title="Valuation Growth" 
            icon={<LineChartIcon className="w-5 h-5" />}
            className="h-[300px] md:h-[400px]"
          >
            <div className="h-48 md:h-64 mt-4 w-full overflow-x-auto">
              <div className="min-w-[400px] h-full">
                <LineChart data={valuationData} />
              </div>
            </div>
          </BentoCard>

          <BentoCard 
            title="User Acquisition" 
            icon={<BarChart3 className="w-5 h-5" />}
            className="h-[300px] md:h-[400px]"
          >
            <div className="h-48 md:h-64 mt-4 w-full overflow-x-auto">
              <div className="min-w-[400px] h-full">
                <BarChart data={userGrowthData} />
              </div>
            </div>
          </BentoCard>
        </BentoGrid>

        <BentoGrid className="grid-cols-1 md:grid-cols-2 gap-4">
          <BentoCard 
            title="The Merger & Leadership" 
            icon={<Activity className="w-5 h-5" />}
            className="md:col-span-1"
          >
            <ul className="text-sm text-gray-600 space-y-4 list-disc list-inside mt-4 text-left">
              <li>Merged with North East Small Finance Bank (completed October 2024) to officially become slice Small Finance Bank.</li>
              <li>Rajan Bajaj approved by the RBI as MD & CEO of the merged bank in February 2026.</li>
            </ul>
          </BentoCard>

          <BentoCard 
            title="Business Resilience" 
            icon={<TrendingUp className="w-5 h-5" />}
            className="md:col-span-1"
          >
             <ul className="text-sm text-gray-600 space-y-4 list-disc list-inside mt-4 text-left">
              <li>Successfully transitioned from a prepaid card platform to a full-fledged Small Finance Bank.</li>
              <li>Backed by marquee investors including Tiger Global, Insight Partners, and Advent International.</li>
            </ul>
          </BentoCard>

          <div className="md:col-span-2 mt-8">
            <div className="p-6 md:p-12 bg-[#bf00ff] text-center border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] transform hover:-translate-y-2 hover:translate-x-2 transition-all group">
               <h3 className="text-xl md:text-5xl font-space-grotesk font-black text-white leading-snug uppercase tracking-tighter drop-shadow-[4px_4px_0_rgba(17,24,39,1)] group-hover:scale-105 transition-transform">
                 "A regulatory shock in 2022 nearly ended slice's original business — instead, it forced a pivot into a full, regulated banking licence, turning a near-death crisis into a more durable model."
               </h3>
            </div>
          </div>
        </BentoGrid>
      </section>
      {/* Next Page Navigation */}
      <NextPageButton href="/" label="Back to Home" />
    </div>
  );
}

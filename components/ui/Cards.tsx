import React from "react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function GlassCard({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={cn(
        "bg-white/80 backdrop-blur-2xl border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] rounded-[2rem] overflow-hidden",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function BentoGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  title,
  description,
  icon,
  className,
  dark = false,
  children,
}: {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  dark?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "row-span-1 rounded-[2rem] group/bento transition-all duration-300 border-4 border-gray-900 flex flex-col p-8 space-y-6 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] shadow-[8px_8px_0px_0px_rgba(17,24,39,1)]",
        dark ? "bg-gray-900 text-white" : "bg-white text-gray-900",
        className
      )}
    >
      {icon && (
        <div className={cn(
          "w-14 h-14 border-4 border-gray-900 rounded-full flex items-center justify-center group-hover:bg-[#bf00ff] group-hover:text-white transition-all duration-300",
          dark ? "bg-white text-gray-900" : "bg-[var(--color-purple-slice)] text-white"
        )}>
          {icon}
        </div>
      )}
      <div className="flex-1">
        <h3 className={cn("font-space-grotesk font-black uppercase text-2xl tracking-tight mb-3", dark ? "text-white" : "text-gray-900")}>
          {title}
        </h3>
        {description && <p className={cn("text-base font-medium", dark ? "text-gray-300" : "text-gray-600")}>{description}</p>}
        {children}
      </div>
    </div>
  );
}

export function MetricCard({
  title,
  value,
  trend,
  className,
}: {
  title: string;
  value: string;
  trend?: string;
  className?: string;
}) {
  return (
    <div className={cn("bg-white rounded-[2rem] p-8 border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[3px_3px_0px_0px_rgba(17,24,39,1)] transition-all", className)}>
      <p className="text-gray-900 uppercase font-bold text-sm tracking-widest mb-2">{title}</p>
      <h4 className="font-space-grotesk text-5xl font-black text-gray-900 tracking-tighter">{value}</h4>
      {trend && (
        <div className="inline-block bg-[#10B981] border-2 border-gray-900 text-white px-3 py-1 rounded-full text-xs font-bold mt-4 uppercase">
          {trend}
        </div>
      )}
    </div>
  );
}

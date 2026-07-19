"use client";

import React, { useMemo } from "react";
import ReactFlow, { Background, Controls, Edge, Node, Position, MarkerType } from "reactflow";
import "reactflow/dist/style.css";
import { BentoGrid, BentoCard, GlassCard } from "@/components/ui/Cards";
import { Users, Building2, Store, CreditCard, Banknote, ShieldCheck } from "lucide-react";
import NextPageButton from "@/components/ui/NextPageButton";

const initialNodes: Node[] = [
  { id: "customer", data: { label: "Customer" }, position: { x: 50, y: 150 }, style: { background: "#fff", border: "4px solid #111827", boxShadow: "4px 4px 0px 0px rgba(17,24,39,1)", borderRadius: "0px", padding: "15px", fontWeight: "900", textTransform: "uppercase" } },
  { id: "slice", data: { label: "Slice Platform" }, position: { x: 350, y: 150 }, style: { background: "#bf00ff", color: "#fff", border: "4px solid #111827", boxShadow: "6px 6px 0px 0px rgba(17,24,39,1)", borderRadius: "0px", padding: "15px", fontWeight: "900", textTransform: "uppercase" } },
  { id: "merchant", data: { label: "Merchant" }, position: { x: 650, y: 50 }, style: { background: "#fff", border: "4px solid #111827", boxShadow: "4px 4px 0px 0px rgba(17,24,39,1)", borderRadius: "0px", padding: "15px", fontWeight: "900", textTransform: "uppercase" } },
  { id: "bank", data: { label: "Partner Bank" }, position: { x: 650, y: 250 }, style: { background: "#fff", border: "4px solid #111827", boxShadow: "4px 4px 0px 0px rgba(17,24,39,1)", borderRadius: "0px", padding: "15px", fontWeight: "900", textTransform: "uppercase" } },
];

const initialEdges: Edge[] = [
  { id: "e1", source: "customer", target: "slice", label: "Transactions", markerEnd: { type: MarkerType.ArrowClosed }, animated: true },
  { id: "e2", source: "slice", target: "merchant", label: "Payment", markerEnd: { type: MarkerType.ArrowClosed } },
  { id: "e3", source: "merchant", target: "slice", label: "MDR (Revenue)", markerEnd: { type: MarkerType.ArrowClosed }, animated: true, style: { stroke: "#10B981" } },
  { id: "e4", source: "slice", target: "bank", label: "Credit Line", markerEnd: { type: MarkerType.ArrowClosed } },
  { id: "e5", source: "customer", target: "slice", sourceHandle: "bottom", targetHandle: "bottom", label: "Late Fees (Revenue)", type: "smoothstep", markerEnd: { type: MarkerType.ArrowClosed }, style: { stroke: "#4F46E5" } },
];

export default function BusinessModelPage() {
  return (
    <div className="flex flex-col gap-24 pb-24 pt-32">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <h1 className="text-5xl md:text-7xl font-space-grotesk font-black tracking-tighter mb-8 uppercase text-gray-900">
          The <span className="bg-[#bf00ff] text-white px-4 border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] inline-block -rotate-2">Business Model</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16">
          A sustainable ecosystem balancing customer experience with robust revenue streams.
        </p>

        {/* Money Flow Diagram */}
        <div className="h-[400px] md:h-[500px] w-full bg-yellow-50 border-4 border-gray-900 p-2 mb-24 relative shadow-[8px_8px_0px_0px_rgba(17,24,39,1)]">
          <div className="absolute top-4 left-4 z-10 bg-white px-2 md:px-4 py-1 md:py-2 border-2 border-gray-900 shadow-[2px_2px_0px_0px_rgba(17,24,39,1)] uppercase font-black text-gray-900 text-sm md:text-lg">
            Money Flow Architecture
          </div>
          <ReactFlow 
            nodes={initialNodes} 
            edges={initialEdges} 
            fitView 
            attributionPosition="bottom-right"
          >
            <Background color="#e2e8f0" gap={16} />
            <Controls />
          </ReactFlow>
        </div>

        <h2 className="text-4xl md:text-5xl font-space-grotesk font-black mb-16 text-center uppercase tracking-tighter bg-[#10B981] text-gray-900 inline-block px-8 py-4 border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] rotate-1">Business Model Canvas</h2>
        
        <BentoGrid className="grid-cols-1 md:grid-cols-4 gap-4">
          <BentoCard 
            title="Phase 1: 2016–2022" 
            icon={<CreditCard className="w-5 h-5" />}
            className="md:col-span-2 bg-purple-50/50 text-left"
          >
            <p className="text-sm text-gray-600 mb-2 font-semibold">Prepaid card + Credit line</p>
            <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
              <li>Revenue from merchant subvention (Amazon, Flipkart no-cost EMIs)</li>
              <li>Card interchange fees</li>
              <li>EMI interest</li>
            </ul>
          </BentoCard>

          <BentoCard 
            title="The Regulatory Shock (June 2022)" 
            icon={<ShieldCheck className="w-5 h-5" />}
            className="md:col-span-2 bg-red-50/50 text-left border-red-100"
          >
            <p className="text-sm text-gray-600 mb-2 font-semibold text-red-600">Core model broken overnight</p>
            <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
              <li>RBI banned non-banks from loading credit lines onto prepaid instruments</li>
              <li>Pivot: obtained own PPI licence</li>
              <li>Shifted to term/unsecured loans via NBFC subsidiary Quadrillion Finance</li>
            </ul>
          </BentoCard>

          <BentoCard 
            title="Phase 2: Since 2024" 
            icon={<Building2 className="w-5 h-5" />}
            className="md:col-span-4 bg-green-50/50 text-left"
          >
            <p className="text-sm text-gray-600 mb-4 font-semibold text-green-700">Small Finance Bank Evolution</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
              <div className="bg-white p-6 border-4 border-gray-900 shadow-[4px_4px_0px_0px_rgba(17,24,39,1)]">
                <div className="font-black text-green-700 mb-2 uppercase text-lg">Net Interest Income</div>
                <div className="text-sm font-bold text-gray-700">Core banking revenue generated from the spread between deposits and loans.</div>
              </div>
              <div className="bg-white p-6 border-4 border-gray-900 shadow-[4px_4px_0px_0px_rgba(17,24,39,1)]">
                <div className="font-black text-green-700 mb-2 uppercase text-lg">Fee Income</div>
                <div className="text-sm font-bold text-gray-700">Revenue from lending operations and payment facilitation services.</div>
              </div>
              <div className="bg-white p-6 border-4 border-gray-900 shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] bg-yellow-300">
                <div className="font-black text-gray-900 mb-2 uppercase text-lg">Who Pays?</div>
                <div className="text-sm font-bold text-gray-900">Cardholders (interest/fees), Merchants (subvention/interchange), while depositors indirectly fund the loan book.</div>
              </div>
            </div>
          </BentoCard>
        </BentoGrid>
      </section>
      {/* Next Page Navigation */}
      <NextPageButton href="/scale" label="Geography" />
    </div>
  );
}

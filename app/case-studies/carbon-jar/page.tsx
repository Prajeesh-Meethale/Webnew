'use client'

import { Header } from '@/components/Header'
import { FooterCTA } from '@/components/FooterCTA'
import { ArrowRight, BarChart3, Globe2, Target, Users, Search, LineChart } from 'lucide-react'
import Link from 'next/link'

export default function CarbonJarCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0a0b10] text-gray-200 selection:bg-indigo-500/30">
      <Header />
      
      <main className="pt-32 pb-24 font-sans">
        
        {/* HERO */}
        <section className="px-6 lg:px-8 max-w-5xl mx-auto pt-20 pb-24 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1] mb-10">
            Your buyers don't compare vendors first anymore.<br />
            <span className="text-gray-500">AI does.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-20">
            AI has become the definitive first stage of software evaluation. Every recommendation your competitor receives inside an LLM is one your business never gets.
          </p>

          <div className="inline-flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-full px-6 py-3 shadow-xl backdrop-blur-md">
            <Globe2 className="w-5 h-5 text-indigo-400" />
            <div className="flex items-center gap-3 text-sm font-medium tracking-wide">
              <span className="text-white">Carbon Jar</span>
              <span className="w-1 h-1 rounded-full bg-gray-600"></span>
              <span className="text-gray-400">Early Stage SaaS</span>
              <span className="w-1 h-1 rounded-full bg-gray-600"></span>
              <span className="text-gray-400">Climate Accounting</span>
              <span className="w-1 h-1 rounded-full bg-gray-600"></span>
              <span className="text-gray-400">Tunisia</span>
            </div>
          </div>
        </section>

        {/* EXECUTIVE QUOTE */}
        <section className="py-20 border-t border-white/5 bg-white/[0.01]">
          <div className="px-6 lg:px-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="shrink-0 relative">
              <div className="absolute inset-0 bg-indigo-500 rounded-full blur-xl opacity-20"></div>
              <img 
                src="/1761748492209.svg" 
                alt="Oussama Ben Abdessalem" 
                className="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
              />
            </div>
            <div className="text-center md:text-left">
              <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-6">
                "We stopped thinking about AI as another marketing channel. We realized it had become the first meeting our customers had with our company."
              </blockquote>
              <div className="text-indigo-400 font-semibold tracking-wide uppercase text-sm">
                — Oussama Ben Abdessalem
              </div>
              <div className="text-gray-500 text-sm mt-1">Founder & CEO, Carbon Jar</div>
            </div>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="py-24 border-t border-white/5 bg-white/[0.01]">
          <div className="px-6 lg:px-8 max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light mb-8">
              Carbon Jar wasn't losing because of its product.
            </p>
            <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed">
              It was losing because AI consistently recommended established competitors before buyers ever reached its website.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16">
              {[
                { title: "Product Understanding", desc: "AI models couldn't accurately parse the full feature set compared to established players." },
                { title: "Category Positioning", desc: "Ambiguous positioning meant Carbon Jar was excluded from niche, high-intent queries." },
                { title: "Third-Party Authority", desc: "Lack of authoritative citations limited AI confidence in recommending the solution." },
                { title: "Technical AI Readiness", desc: "Site architecture was not optimized for LLM retrieval systems." },
              ].map((card) => (
                <div key={card.title} className="p-8 rounded-2xl border border-white/10 bg-[#0f1015]">
                  <h3 className="text-lg font-medium text-white mb-3">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UNDERSTANDING THE AI BUYING JOURNEY */}
        <section className="py-32">
          <div className="px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl font-semibold text-white mb-6">Understanding the AI Buying Journey</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                We didn't rely on generic prompts. We mapped the exact evaluation criteria used by the entire buying committee across all major AI engines.
              </p>
            </div>

            {/* Buying Committee Flow */}
            <div className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-24 relative">
              <div className="flex flex-wrap justify-center gap-4 w-full mb-12 relative z-10">
                {["Sustainability Manager", "Operations Director", "Manufacturing CEO", "ESG Consultant"].map((persona) => (
                  <div key={persona} className="px-6 py-4 bg-[#12131a] border border-white/10 rounded-xl text-sm font-medium text-gray-300">
                    {persona}
                  </div>
                ))}
              </div>

              {/* Connecting vertical lines */}
              <div className="h-16 w-[1px] bg-gradient-to-b from-white/20 to-transparent -mt-12 mb-4"></div>

              <div className="flex flex-wrap justify-center gap-8 w-full mb-12 opacity-60">
                <span className="text-lg font-bold tracking-widest text-white">CHATGPT</span>
                <span className="text-lg font-bold tracking-widest text-white">CLAUDE</span>
                <span className="text-lg font-bold tracking-widest text-white">GEMINI</span>
                <span className="text-lg font-bold tracking-widest text-white">PERPLEXITY</span>
              </div>

              <div className="h-16 w-[1px] bg-gradient-to-b from-transparent to-white/20 -mt-12 mb-8"></div>

              <div className="inline-block px-8 py-4 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 font-medium tracking-wide">
                50 Real Buying Conversations Simulated
              </div>
            </div>

            {/* Dashboard View of Prompts */}
            <div className="max-w-4xl mx-auto bg-[#0f1015] border border-white/10 rounded-3xl p-10 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { tag: "Discovery", prompt: "Best carbon accounting software for manufacturing companies." },
                  { tag: "Comparison", prompt: "Carbon accounting platform for SMEs." },
                  { tag: "Alternatives", prompt: "Alternatives to Watershed." },
                  { tag: "Implementation", prompt: "Which ESG reporting software is easiest to implement?" },
                  { tag: "Regional", prompt: "Best carbon management software for African businesses." }
                ].map((item, i) => (
                  <div key={i} className={`flex flex-col gap-2 ${i === 4 ? 'md:col-span-2' : ''}`}>
                    <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">{item.tag}</span>
                    <p className="text-sm text-gray-300 bg-[#16171d] p-4 rounded-xl border border-white/5">"{item.prompt}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI SHARE OF VOICE (The Centerpiece) */}
        <section className="py-32 bg-white/[0.01] border-y border-white/5">
          <div className="px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="max-w-3xl mb-20">
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">AI Share of Voice Shift</h2>
              <p className="text-2xl text-indigo-400 font-light leading-snug">
                29% of AI recommendation share shifted directly from established competitors to Carbon Jar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              {/* Before */}
              <div className="flex flex-col items-center">
                <h3 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-12">Before Engagement</h3>
                <div className="relative w-56 h-56 mb-12">
                  <svg viewBox="0 0 42 42" className="w-full h-full -rotate-90 drop-shadow-2xl">
                    <circle cx="21" cy="21" r="15.91549431" fill="transparent" stroke="#12131a" strokeWidth="6" />
                    {[
                      { name: "Carbon Jar", val: 9, color: "text-indigo-500/50" },
                      { name: "Competitor A", val: 34, color: "text-gray-700" },
                      { name: "Competitor B", val: 28, color: "text-gray-800" },
                      { name: "Competitor C", val: 19, color: "text-gray-800/60" },
                      { name: "Others", val: 10, color: "text-gray-900" },
                    ].reduce((acc, d) => {
                      const offset = 100 - acc.cumulative;
                      acc.elements.push(
                        <circle
                          key={d.name} cx="21" cy="21" r="15.91549431" fill="transparent"
                          stroke="currentColor" strokeWidth="6"
                          strokeDasharray={`${d.val} ${100 - d.val}`} strokeDashoffset={offset}
                          className={`${d.color}`}
                        />
                      );
                      acc.cumulative += d.val;
                      return acc;
                    }, { cumulative: 0, elements: [] }).elements}
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-3xl font-bold text-white/50">9%</span>
                  </div>
                </div>
                <div className="w-full max-w-xs space-y-4">
                  {[
                    { name: "Carbon Jar", val: 9, color: "text-indigo-500/50", labelColor: "text-indigo-300/50" },
                    { name: "Competitor A", val: 34, color: "text-gray-700" },
                    { name: "Competitor B", val: 28, color: "text-gray-800" },
                    { name: "Competitor C", val: 19, color: "text-gray-800/60" },
                    { name: "Others", val: 10, color: "text-gray-900" },
                  ].map(d => (
                    <div key={d.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full bg-current ${d.color}`}></div>
                        <span className={`text-sm font-medium ${d.labelColor || 'text-gray-400'}`}>{d.name}</span>
                      </div>
                      <span className="text-sm font-bold text-white/50">{d.val}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* After */}
              <div className="flex flex-col items-center">
                <h3 className="text-sm font-semibold tracking-widest text-indigo-400 uppercase mb-12">After Optimization</h3>
                <div className="relative w-56 h-56 mb-12">
                  <svg viewBox="0 0 42 42" className="w-full h-full -rotate-90 drop-shadow-[0_0_25px_rgba(79,70,229,0.2)]">
                    <circle cx="21" cy="21" r="15.91549431" fill="transparent" stroke="#12131a" strokeWidth="6" />
                    {[
                      { name: "Carbon Jar", val: 38, color: "text-indigo-500" },
                      { name: "Competitor A", val: 22, color: "text-gray-700" },
                      { name: "Competitor B", val: 18, color: "text-gray-800" },
                      { name: "Competitor C", val: 14, color: "text-gray-800/60" },
                      { name: "Others", val: 8, color: "text-gray-900" },
                    ].reduce((acc, d) => {
                      const offset = 100 - acc.cumulative;
                      acc.elements.push(
                        <circle
                          key={d.name} cx="21" cy="21" r="15.91549431" fill="transparent"
                          stroke="currentColor" strokeWidth="6"
                          strokeDasharray={`${d.val} ${100 - d.val}`} strokeDashoffset={offset}
                          className={`${d.color}`}
                        />
                      );
                      acc.cumulative += d.val;
                      return acc;
                    }, { cumulative: 0, elements: [] }).elements}
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-4xl font-bold text-white">38%</span>
                  </div>
                </div>
                <div className="w-full max-w-xs space-y-4">
                  {[
                    { name: "Carbon Jar", val: 38, color: "text-indigo-500", labelColor: "text-white" },
                    { name: "Competitor A", val: 22, color: "text-gray-700" },
                    { name: "Competitor B", val: 18, color: "text-gray-800" },
                    { name: "Competitor C", val: 14, color: "text-gray-800/60" },
                    { name: "Others", val: 8, color: "text-gray-900" },
                  ].map(d => (
                    <div key={d.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full bg-current ${d.color} shadow-[0_0_10px_rgba(79,70,229,0.5)]`}></div>
                        <span className={`text-sm font-medium ${d.labelColor || 'text-gray-400'}`}>{d.name}</span>
                      </div>
                      <span className="text-sm font-bold text-white">{d.val}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BUSINESS IMPACT */}
        <section className="py-32">
          <div className="px-6 lg:px-8 max-w-6xl mx-auto">
            <h2 className="text-4xl font-semibold text-white mb-20 text-center">Business Impact & Revenue Opportunity</h2>

            {/* Funnel */}
            <div className="max-w-5xl mx-auto bg-[#0f1015] border border-white/10 rounded-3xl p-12 mb-20 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
                {[
                  { label: "Estimated Annual AI Buyer Searches", val: "12,500" },
                  { label: "Recommendation Share", val: "38%" },
                  { label: "Website Visits", val: "3,200" },
                  { label: "Qualified Demos", val: "480" },
                  { label: "Estimated Annual Revenue", val: "$540K", highlight: true }
                ].map((step, i) => (
                  <div key={step.label} className="flex flex-col md:flex-row items-center gap-4 md:gap-0 relative flex-1">
                    <div className="flex flex-col items-center text-center px-2">
                      <span className={`text-3xl font-bold mb-3 ${step.highlight ? 'text-indigo-400' : 'text-white'}`}>{step.val}</span>
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">{step.label}</span>
                    </div>
                    {i < 4 && (
                      <div className="hidden md:block w-8 h-[1px] bg-white/20 mx-auto"></div>
                    )}
                    {i < 4 && (
                      <div className="md:hidden h-8 w-[1px] bg-white/20 my-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { metric: "Demo Requests", val: "+167%" },
                { metric: "Pipeline Influenced", val: "$2.8M" },
                { metric: "CAC Reduction", val: "28%" },
                { metric: "Sales Cycle", val: "-22%" },
                { metric: "Third-party Authority", val: "340%" },
                { metric: "Top 3 AI Appearances", val: "18 Journeys" },
                { metric: "Equivalent Paid Ads Value", val: "$120K/yr" },
                { metric: "Recommendation Rate", val: "71%" },
              ].map((stat, i) => (
                <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col justify-center">
                  <p className="text-3xl font-semibold text-white mb-2">{stat.val}</p>
                  <p className="text-sm font-medium text-gray-400">{stat.metric}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL MEMORABLE CALLOUT */}
        <section className="py-32">
          <div className="px-6 lg:px-8 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-12">
              The first shortlist is no longer built by Google.<br />
              <span className="text-indigo-400">It's built by AI.</span>
            </h2>
            <p className="text-2xl text-gray-400 font-light leading-relaxed">
              Every recommendation your business earns is one your competitor doesn't.
            </p>
          </div>
        </section>
        
      </main>
      
      <FooterCTA />
    </div>
  )
}

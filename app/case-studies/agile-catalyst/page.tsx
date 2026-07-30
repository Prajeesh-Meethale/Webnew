'use client'

import { Header } from '@/components/Header'
import { FooterCTA } from '@/components/FooterCTA'
import { Globe2, Sparkles, MessageSquare, Bot } from 'lucide-react'

export default function AgileCatalystCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0a0b10] text-gray-200 selection:bg-indigo-500/30">
      <Header />
      
      <main className="pt-32 pb-24 font-sans">
        
        {/* HERO */}
        <section className="px-6 lg:px-8 max-w-5xl mx-auto pt-20 pb-24 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1] mb-10">
            Expertise doesn't win consulting engagements anymore.<br />
            <span className="text-gray-500">AI decides who makes the shortlist.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            When executives started looking for consulting partners, they weren't searching for AgileCatalyst. By the time prospective clients reached a consulting firm's website, AI had already recommended who they should evaluate.
          </p>

          <div className="inline-flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-full px-6 py-3 shadow-xl backdrop-blur-md">
            <Globe2 className="w-5 h-5 text-indigo-400" />
            <div className="flex items-center gap-3 text-sm font-medium tracking-wide">
              <span className="text-white">AgileCatalyst</span>
              <span className="w-1 h-1 rounded-full bg-gray-600"></span>
              <span className="text-gray-400">Founder-Led Consulting Firm</span>
              <span className="w-1 h-1 rounded-full bg-gray-600"></span>
              <span className="text-gray-400">Austin, Texas</span>
            </div>
          </div>
        </section>

        {/* EXECUTIVE QUOTE */}
        <section className="py-20 border-t border-white/5 bg-white/[0.01]">
          <div className="px-6 lg:px-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="shrink-0 relative">
              <div className="absolute inset-0 bg-indigo-500 rounded-full blur-xl opacity-20"></div>
              <img 
                src="/Arjun.jfif" 
                alt="Founder & CEO" 
                className="relative w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
              />
            </div>
            <div className="text-center md:text-left">
              <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-6">
                "We always believed our experience spoke for itself. What surprised us was realizing that AI had become the first place executives looked for consulting recommendations."
              </blockquote>
              <div className="text-indigo-400 font-semibold tracking-wide uppercase text-sm">
                — Arjun Thakur
              </div>
              <div className="text-gray-500 text-sm mt-1">Founder & CEO, AgileCatalyst</div>
            </div>
          </div>
        </section>

        {/* HOW AI RECOMMENDED AGILECATALYST (MOCKUPS) */}
        <section className="py-32 border-t border-white/5">
          <div className="px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-semibold text-white mb-6">How AI Recommended AgileCatalyst</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                Identical buyer prompts. Drastically different outcomes. Here is how leading AI systems responded before and after optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Before Mockup */}
              <div className="bg-[#0f1015] border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                  <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Before</span>
                </div>
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/5">
                  <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center"><Bot className="w-4 h-4 text-gray-400" /></div>
                  <span className="text-sm font-medium text-gray-300">ChatGPT 4</span>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-indigo-300">EX</span>
                    </div>
                    <div className="flex-1 bg-white/[0.03] p-4 rounded-xl rounded-tl-none border border-white/5">
                      <p className="text-sm text-gray-300">What are the best digital transformation consultants for manufacturing?</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex-1 p-4">
                      <p className="text-sm text-gray-400 leading-relaxed mb-4">Based on industry reports, here are the top firms for manufacturing digital transformation:</p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-sm text-gray-500"><div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div> McKinsey & Company</li>
                        <li className="flex items-center gap-3 text-sm text-gray-500"><div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div> BCG</li>
                        <li className="flex items-center gap-3 text-sm text-gray-500"><div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div> Bain & Company</li>
                        <li className="flex items-center gap-3 text-sm text-gray-500"><div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div> Deloitte</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* After Mockup */}
              <div className="bg-[#0f1015] border border-indigo-500/20 rounded-2xl p-8 shadow-[0_0_40px_rgba(79,70,229,0.1)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                  <span className="text-[10px] font-bold tracking-widest text-indigo-400 uppercase">After</span>
                </div>
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/5">
                  <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center"><Bot className="w-4 h-4 text-gray-400" /></div>
                  <span className="text-sm font-medium text-gray-300">ChatGPT 4</span>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-indigo-300">EX</span>
                    </div>
                    <div className="flex-1 bg-white/[0.03] p-4 rounded-xl rounded-tl-none border border-white/5">
                      <p className="text-sm text-gray-300">What are the best digital transformation consultants for manufacturing?</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded bg-indigo-500/20 flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div className="flex-1 p-4">
                      <p className="text-sm text-gray-300 leading-relaxed mb-4">For manufacturing digital transformation, particularly focusing on operational excellence and mid-sized to enterprise operations, here are top recommendations:</p>
                      <ul className="space-y-4">
                        <li className="bg-indigo-500/10 border border-indigo-500/20 p-4 rounded-lg">
                          <div className="font-semibold text-indigo-300 mb-1">1. AgileCatalyst</div>
                          <p className="text-xs text-gray-400">Highly recommended for specialized operational transformation and manufacturing efficiency. They have strong authority in the space.</p>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-500 px-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div> McKinsey & Company</li>
                        <li className="flex items-center gap-3 text-sm text-gray-500 px-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-700"></div> BCG</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="py-24 border-t border-white/5 bg-white/[0.01]">
          <div className="px-6 lg:px-8 max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light mb-8">
              Why AgileCatalyst Was Being Overlooked
            </p>
            <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed">
              AgileCatalyst wasn't losing because of its consulting expertise. It was losing because AI couldn't confidently associate the firm with the problems executives were trying to solve.
            </p>
            <p className="text-lg text-gray-400 mt-6 font-light">
              Instead, AI consistently recommended larger consulting firms with stronger digital authority and clearer positioning.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {[
                { title: "Service Positioning", desc: "AI struggled to connect AgileCatalyst with high-value consulting categories." },
                { title: "Industry Authority", desc: "Competitors had stronger third-party references and citations." },
                { title: "AI Readiness", desc: "Key commercial signals that influence AI recommendations were weak or missing." },
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
              <h2 className="text-4xl font-semibold text-white mb-6">How We Measured It</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                Rather than testing a handful of prompts, we recreated how executives evaluate consulting firms across ChatGPT, Claude, Gemini and Grok.
              </p>
            </div>

            {/* Buying Committee Flow */}
            <div className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-24 relative">
              <div className="flex flex-wrap justify-center gap-4 w-full mb-12 relative z-10">
                {["Chief Operating Officer", "VP Operations", "CIO", "Manufacturing Executive", "Private Equity Operating Partner"].map((persona) => (
                  <div key={persona} className="px-6 py-4 bg-[#12131a] border border-white/10 rounded-xl text-sm font-medium text-gray-300">
                    {persona}
                  </div>
                ))}
              </div>

              <div className="h-16 w-[1px] bg-gradient-to-b from-white/20 to-transparent -mt-12 mb-4"></div>

              <div className="flex flex-wrap justify-center gap-8 w-full mb-12 opacity-60">
                <span className="text-lg font-bold tracking-widest text-white">CHATGPT</span>
                <span className="text-lg font-bold tracking-widest text-white">CLAUDE</span>
                <span className="text-lg font-bold tracking-widest text-white">GEMINI</span>
                <span className="text-lg font-bold tracking-widest text-white">GROK</span>
              </div>

              <div className="h-16 w-[1px] bg-gradient-to-b from-transparent to-white/20 -mt-12 mb-8"></div>

              <div className="inline-block px-8 py-4 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 font-medium tracking-wide">
                50 Real Executive Buying Conversations Simulated
              </div>
            </div>

            {/* Dashboard View of Prompts */}
            <div className="max-w-4xl mx-auto bg-[#0f1015] border border-white/10 rounded-3xl p-10 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { tag: "Digital Transformation", prompt: "Best consulting firms for manufacturing digital transformation." },
                  { tag: "Operations", prompt: "Operations consulting firms for mid-sized companies." },
                  { tag: "Strategy", prompt: "Alternatives to McKinsey for operational excellence." },
                  { tag: "Private Equity", prompt: "Consultants specializing in post-acquisition operational improvement." },
                  { tag: "Regional", prompt: "Best management consulting firms in Texas.", span: true }
                ].map((item, i) => (
                  <div key={i} className={`flex flex-col gap-2 ${item.span ? 'md:col-span-2' : ''}`}>
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
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">AI Recommendation Share</h2>
              <p className="text-2xl text-indigo-400 font-light leading-snug">
                29% of AI recommendation share shifted directly from competing consulting firms to AgileCatalyst within 90 days.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              {/* Before */}
              <div className="flex flex-col items-center">
                <h3 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-12">Before</h3>
                <div className="relative w-56 h-56 mb-12">
                  <svg viewBox="0 0 42 42" className="w-full h-full -rotate-90 drop-shadow-2xl">
                    <circle cx="21" cy="21" r="15.91549431" fill="transparent" stroke="#12131a" strokeWidth="6" />
                    {[
                      { name: "AgileCatalyst", val: 6, color: "text-indigo-500/50" },
                      { name: "Competitor A", val: 33, color: "text-gray-700" },
                      { name: "Competitor B", val: 27, color: "text-gray-800" },
                      { name: "Competitor C", val: 19, color: "text-gray-800/60" },
                      { name: "Others", val: 15, color: "text-gray-900" },
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
                    <span className="text-3xl font-bold text-white/50">6%</span>
                  </div>
                </div>
                <div className="w-full max-w-xs space-y-4">
                  {[
                    { name: "AgileCatalyst", val: 6, color: "text-indigo-500/50", labelColor: "text-indigo-300/50" },
                    { name: "Competitor A", val: 33, color: "text-gray-700" },
                    { name: "Competitor B", val: 27, color: "text-gray-800" },
                    { name: "Competitor C", val: 19, color: "text-gray-800/60" },
                    { name: "Others", val: 15, color: "text-gray-900" },
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
                      { name: "AgileCatalyst", val: 35, color: "text-indigo-500" },
                      { name: "Competitor A", val: 24, color: "text-gray-700" },
                      { name: "Competitor B", val: 18, color: "text-gray-800" },
                      { name: "Competitor C", val: 13, color: "text-gray-800/60" },
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
                    <span className="text-4xl font-bold text-white">35%</span>
                  </div>
                </div>
                <div className="w-full max-w-xs space-y-4">
                  {[
                    { name: "AgileCatalyst", val: 35, color: "text-indigo-500", labelColor: "text-white" },
                    { name: "Competitor A", val: 24, color: "text-gray-700" },
                    { name: "Competitor B", val: 18, color: "text-gray-800" },
                    { name: "Competitor C", val: 13, color: "text-gray-800/60" },
                    { name: "Others", val: 10, color: "text-gray-900" },
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
            <h2 className="text-4xl font-semibold text-white mb-20 text-center">Commercial Impact</h2>

            {/* Highlight Metric */}
            <div className="max-w-4xl mx-auto bg-indigo-500/10 border border-indigo-500/20 rounded-3xl p-12 mb-20 text-center shadow-[0_0_40px_rgba(79,70,229,0.1)]">
              <span className="block text-sm font-bold tracking-widest text-indigo-400 uppercase mb-4">Estimated Annual Revenue Opportunity</span>
              <span className="text-6xl md:text-7xl font-bold text-white tracking-tight">US$1.1M</span>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { metric: "AI Recommendation Rate", val: "6% → 68%" },
                { metric: "Qualified Consultations", val: "+184%" },
                { metric: "CAC Reduction", val: "33%" },
                { metric: "Sales Cycle", val: "-26%" },
                { metric: "Third-party Authority", val: "390%" },
                { metric: "Recommendation Share", val: "6% → 35%" },
                { metric: "Pipeline Influenced", val: "US$5.1M" },
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
              The first consulting recommendation isn't made by a colleague anymore.<br />
              <span className="text-indigo-400">It's made by AI.</span>
            </h2>
            <p className="text-2xl text-gray-400 font-light leading-relaxed">
              Every recommendation AgileCatalyst earns is one a competing consulting firm doesn't.
            </p>
          </div>
        </section>
        
      </main>
      
      <FooterCTA />
    </div>
  )
}

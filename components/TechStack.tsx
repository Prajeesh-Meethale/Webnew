import { BarChart3, TrendingUp, Search, TerminalSquare, Library, CheckCircle2, Link2, Users, FileText, ChevronRight } from 'lucide-react'

export function TechStack() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-[40%]">
            <p className="text-sm text-indigo-500 font-semibold tracking-[0.2em] mb-6 uppercase">
              BUILT ON INFERENCE. BACKED BY EVIDENCE.
            </p>
            <h2 className="text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight">
              Powered by the <br />
              ArchDrift Investigation Engine
            </h2>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
              Every investigation is generated using our proprietary platform—not manual prompting or spreadsheets.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-[#12131A] text-white rounded-full font-medium border border-white/10 hover:bg-white/5 transition-colors">
                Explore the Engine
              </button>
              <button className="px-6 py-3 bg-[#12131A] text-white rounded-full font-medium border border-white/10 hover:bg-white/5 transition-colors">
                Get 50 FREE Credits
              </button>
            </div>
          </div>

          {/* Right Content: Dashboard Mockup */}
          <div className="w-full lg:w-[60%]">
            <div className="bg-[#0D0F16] border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col md:flex-row gap-4">
              
              {/* Sidebar */}
              <div className="w-full md:w-48 shrink-0 flex flex-col gap-2">
                <div className="flex items-center gap-2 px-3 py-2 text-indigo-500 font-bold mb-4">
                  archdrift.
                </div>
                {[
                  { name: 'Projects', icon: <Library className="w-4 h-4" />, active: false },
                  { name: 'Analytics', icon: <BarChart3 className="w-4 h-4" />, active: true },
                  { name: 'Responses', icon: <TerminalSquare className="w-4 h-4" />, active: false },
                  { name: 'Citations', icon: <Link2 className="w-4 h-4" />, active: false },
                  { name: 'Prompt Hub', icon: <FileText className="w-4 h-4" />, active: false },
                  { name: 'Persona Fan-Out', icon: <Users className="w-4 h-4" />, active: false },
                  { name: 'Niche Explorer', icon: <Search className="w-4 h-4" />, active: false },
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-default ${item.active ? 'bg-indigo-500/10 text-indigo-400' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}>
                    {item.icon}
                    {item.name}
                  </div>
                ))}
              </div>

              {/* Main Dashboard Area */}
              <div className="flex-1 bg-[#12131A] rounded-xl border border-white/5 p-6 flex flex-col gap-6 overflow-hidden">
                
                {/* Header Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-2 px-2 mask-linear">
                  <span className="text-white text-sm font-medium mr-2 shrink-0">Analytics</span>
                  {['ChatGPT', 'Perplexity', 'Gemini', 'Claude', 'Copilot'].map(ai => (
                    <span key={ai} className="px-3 py-1 bg-teal-500/10 text-teal-400 text-xs font-medium rounded-full shrink-0 border border-teal-500/20">{ai}</span>
                  ))}
                  <span className="px-3 py-1 bg-white/5 text-gray-400 text-xs font-medium rounded-full shrink-0">+2</span>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-[#1A1C23] p-4 rounded-xl border border-white/5">
                    <div className="text-xs text-gray-400 mb-2">AI Visibility Score</div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-white">86</span>
                      <span className="text-xs text-gray-500">/100</span>
                    </div>
                    <div className="text-xs text-white mt-1">Strong Visibility</div>
                  </div>
                  <div className="bg-[#1A1C23] p-4 rounded-xl border border-white/5">
                    <div className="text-xs text-gray-400 mb-2">AI Mention Rate</div>
                    <div className="text-3xl font-bold text-white">41%</div>
                    <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> 27pp <span className="text-gray-500">vs prior</span>
                    </div>
                  </div>
                  <div className="bg-[#1A1C23] p-4 rounded-xl border border-white/5 relative">
                    <div className="text-xs text-gray-400 mb-2">Citations Captured</div>
                    <div className="text-3xl font-bold text-white">64</div>
                    <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> 36 <span className="text-gray-500">vs prior</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-600 absolute top-4 right-4" />
                  </div>
                </div>

                {/* Chart Area */}
                <div className="bg-[#1A1C23] p-4 rounded-xl border border-white/5">
                  <div className="text-xs text-gray-400 mb-6">Visibility Over Time</div>
                  <div className="h-24 relative flex items-end">
                    {/* SVG Line Chart Mockup */}
                    <svg className="w-full h-full overflow-visible absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <defs>
                        <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0,80 L33,60 L66,70 L100,20 L100,100 L0,100 Z" fill="url(#lineGrad)" />
                      <path d="M0,80 L33,60 L66,70 L100,20" fill="none" stroke="rgb(99, 102, 241)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                      <circle cx="100" cy="20" r="4" fill="rgb(99, 102, 241)" className="animate-pulse" />
                    </svg>
                    
                    {/* X-Axis labels */}
                    <div className="w-full flex justify-between absolute -bottom-6 text-[10px] text-gray-600">
                      <span>Week 1</span>
                      <span>Week 2</span>
                      <span>Week 3</span>
                      <span>Week 4</span>
                    </div>
                  </div>
                </div>

                {/* Footer Tools */}
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 pt-2 border-t border-white/5">
                  {[
                    { icon: <TerminalSquare className="w-3 h-3" />, label: 'Run prompt libraries' },
                    { icon: <Search className="w-3 h-3" />, label: 'AEO audit' },
                    { icon: <CheckCircle2 className="w-3 h-3" />, label: 'SRO analysis' },
                    { icon: <Link2 className="w-3 h-3" />, label: 'Citation tracking' },
                    { icon: <Users className="w-3 h-3" />, label: 'Persona fan-out' },
                    { icon: <BarChart3 className="w-3 h-3" />, label: 'Monitoring & alerts' },
                    { icon: <Search className="w-3 h-3" />, label: 'Competitor comparison' },
                    { icon: <FileText className="w-3 h-3" />, label: 'HTML report generation' },
                  ].map((tool, i) => (
                    <div key={i} className="flex flex-col items-center text-center gap-1 group cursor-default">
                      <div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-colors">
                        {tool.icon}
                      </div>
                      <span className="text-[8px] text-gray-500 leading-tight">{tool.label}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}div>
      </div>
    </section>
  )
}

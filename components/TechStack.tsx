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

          {/* Right Content: Dashboard Screenshot */}
          <div className="w-full lg:w-[60%]">
            <div className="rounded-2xl border border-white/10 bg-[#0d111b]/90 shadow-[0_30px_100px_rgba(0,0,0,0.45)] overflow-hidden">
              <img src="/archdrift-engine.png" alt="Archdrift Engine Dashboard" className="w-full h-auto object-cover" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

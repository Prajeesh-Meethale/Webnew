'use client'

import { MapPin, Building2, Users, Briefcase, Globe2 } from 'lucide-react'

export function GlobalPresence() {
  const locations = [
    { name: 'Rotterdam', sub: 'Netherlands', position: { x: 52, y: 20 } },
    { name: 'New York', sub: 'USA', position: { x: 30, y: 38 } },
    { name: 'Austin', sub: 'Texas, USA', position: { x: 20, y: 55 } },
    { name: 'Tunisia', sub: 'Tunisia', position: { x: 48, y: 58 } },
    { name: 'Bucharest', sub: 'Romania', position: { x: 62, y: 40 } },
  ]

  const stats = [
    { number: '5', label: 'Countries', icon: Globe2 },
    { number: '40+', label: 'Organizations', icon: Building2 },
    { number: '200+', label: 'Investigations', icon: Users },
    { number: '6', label: 'Industries', icon: Briefcase },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Layout: 3 Columns */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Column: Text */}
          <div className="w-full lg:w-1/4">
            <p className="text-sm text-indigo-500 font-semibold tracking-[0.2em] mb-4 uppercase">GLOBAL IN PRESENCE.</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight">
              One buying shift.<br />
              Observed across<br />
              industries.
            </h2>
            <p className="text-gray-400 mt-6 leading-relaxed text-sm">
              From startups to enterprises,<br />
              leaders from five countries<br />
              face the same challenge.
            </p>
          </div>

          {/* Center Column: Map */}
          <div className="w-full lg:w-2/4 relative">
            <div className="relative w-full aspect-[2/1] rounded-xl flex items-center justify-center">
              {/* Dotted Map background representation */}
              <div 
                className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] bg-[length:8px_8px]" 
                style={{ maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)' }}
              />

              {/* Location pins */}
              <div className="absolute inset-0">
                {locations.map((location) => (
                  <div
                    key={location.name}
                    className="absolute flex flex-col items-center group cursor-default"
                    style={{
                      left: `${location.position.x}%`,
                      top: `${location.position.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <MapPin className="w-6 h-6 text-indigo-500 mb-1" strokeWidth={1.5} />
                    <div className="text-center">
                      <div className="text-white text-xs font-medium whitespace-nowrap">{location.name}</div>
                      <div className="text-gray-500 text-[10px] whitespace-nowrap">{location.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Stats */}
          <div className="w-full lg:w-1/4 flex flex-col gap-8 lg:pl-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="flex items-start gap-5">
                  <Icon className="w-8 h-8 text-indigo-500 shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <div className="text-2xl font-semibold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
          
        </div>
      </div>
    </section>
  )
}

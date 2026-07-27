'use client'

import { MapPin, Building2, Users2, Layers } from 'lucide-react'

export function GlobalPresence() {
  const locations = [
    { name: 'Rotterdam', position: { x: 40, y: 35 } },
    { name: 'New York', position: { x: 15, y: 38 } },
    { name: 'Austin', position: { x: 12, y: 55 } },
    { name: 'Tunis', position: { x: 48, y: 58 } },
    { name: 'Bucharest', position: { x: 52, y: 40 } },
  ]

  const stats = [
    { number: '5', label: 'Countries', icon: MapPin },
    { number: '40+', label: 'Organizations', icon: Building2 },
    { number: '200+', label: 'Organizations', icon: Users2 },
    { number: '6', label: 'Industries', icon: Layers },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs text-primary uppercase tracking-widest font-semibold mb-4">GLOBAL IN PRESENCE</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            One buying shift. <br />
            Observed across <span className="text-primary">industries</span>.
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            From startups to enterprises, leaders from five countries face the same challenge.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Area - spans 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="relative bg-card border border-border rounded-xl p-8 aspect-video">
              {/* Decorative grid background */}
              <div className="absolute inset-0 opacity-5 rounded-xl overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>

              {/* Location pins */}
              <div className="relative w-full h-full">
                {locations.map((location, index) => (
                  <div
                    key={location.name}
                    className="absolute"
                    style={{
                      left: `${location.position.x}%`,
                      top: `${location.position.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className="relative w-8 h-8 flex items-center justify-center">
                      {/* Ping animation */}
                      <div className="absolute inset-0 rounded-full bg-primary animate-pulse opacity-30" />
                      {/* Pin icon */}
                      <div className="relative w-3 h-3 rounded-full bg-primary" />
                    </div>
                    {/* Location label */}
                    <div className="mt-2 whitespace-nowrap text-xs font-medium text-foreground bg-card/80 px-2 py-1 rounded border border-border">
                      {location.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats - right column */}
          <div className="space-y-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="bg-card border border-border rounded-xl p-6 space-y-2">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

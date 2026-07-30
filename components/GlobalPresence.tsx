'use client'

import * as React from "react"
import type { TCountryCode } from "countries-list"
import { Building2, Users, Briefcase, Globe2 } from 'lucide-react'

import { DottedMap } from "@/components/ui/dotted-map"
import type { Marker } from "@/components/ui/dotted-map"

type CountryCode = Lowercase<TCountryCode>

type MyMarker = Marker & {
  overlay: {
    countryCode: CountryCode
    label: string
  }
}

const markers: MyMarker[] = [
  {
    lat: 30.2672,
    lng: -97.7431,
    size: 2.8,
    overlay: { countryCode: "us", label: "Austin" },
  },
  {
    lat: 40.7128,
    lng: -74.006,
    size: 2.8,
    overlay: { countryCode: "us", label: "New York" },
  },
  {
    lat: 51.9244,
    lng: 4.4777,
    size: 2.8,
    overlay: { countryCode: "nl", label: "Rotterdam" },
  },
  {
    lat: 44.4268,
    lng: 26.1025,
    size: 2.8,
    overlay: { countryCode: "ro", label: "Bucharest" },
  },
  {
    lat: 36.8065,
    lng: 10.1815,
    size: 2.8,
    overlay: { countryCode: "tn", label: "Tunis" },
  },
  {
    lat: 19.0760,
    lng: 72.8777,
    size: 2.8,
    overlay: { countryCode: "in", label: "Mumbai" },
  },
]

export function GlobalPresence() {
  const id = React.useId()

  const stats = [
    { number: '6', label: 'Countries', icon: Globe2 },
    { number: '40+', label: 'Organizations', icon: Building2 },
    { number: '200+', label: 'Investigations', icon: Users },
    { number: '6', label: 'Industries', icon: Briefcase },
  ]

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Column: Text */}
          <div className="w-full lg:w-1/4 z-10">
            <p className="text-sm text-indigo-500 font-semibold tracking-[0.2em] mb-4 uppercase">GLOBAL IN PRESENCE.</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight">
              One buying shift.<br />
              Observed across<br />
              industries.
            </h2>
            <p className="text-gray-400 mt-6 leading-relaxed text-sm">
              From startups to enterprises,<br />
              leaders from six countries<br />
              face the same challenge.
            </p>
          </div>

          {/* Center Column: Network Nodes (Updated to DottedMap) */}
          <div className="w-full lg:w-2/4 relative">
            <div className="relative w-full aspect-[4/3] sm:aspect-[2/1] rounded-2xl flex items-center justify-center overflow-hidden bg-transparent">
              
              <div className="absolute inset-0 bg-radial from-transparent to-200%" />
              
              <DottedMap<MyMarker>
                mapColor="#3f3f46"
                markers={markers}
                renderMarkerOverlay={({ marker, x, y, r, index }) => {
                  const { countryCode, label } = marker.overlay
                  const href = `https://flagcdn.com/w80/${countryCode}.webp`

                  const clipId = `${id}-flag-clip-${index}`.replace(/:/g, "-")
                  const imgR = r * 0.75

                  const fontSize = r * 0.9
                  const pillH = r * 1.5
                  const pillW = label.length * (fontSize * 0.62) + r * 1.4
                  const pillX = x + r + r * 0.6
                  const pillY = y - pillH / 2

                  return (
                    <g style={{ pointerEvents: "none" }}>
                      <clipPath id={clipId}>
                        <circle cx={x} cy={y} r={imgR} />
                      </clipPath>

                      <image
                        href={href}
                        x={x - imgR}
                        y={y - imgR}
                        width={imgR * 2}
                        height={imgR * 2}
                        preserveAspectRatio="xMidYMid slice"
                        clipPath={`url(#${clipId})`}
                      />

                      <rect
                        x={pillX}
                        y={pillY}
                        width={pillW}
                        height={pillH}
                        rx={pillH / 2}
                        fill="rgba(0,0,0,0.55)"
                      />
                      <text
                        x={pillX + r * 0.7}
                        y={y + fontSize * 0.35}
                        fontSize={fontSize}
                        fill="white"
                      >
                        {label}
                      </text>
                    </g>
                  )
                }}
              />
            </div>
          </div>

          {/* Right Column: Stats */}
          <div className="w-full lg:w-1/4 flex flex-col gap-8 lg:pl-12 z-10">
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

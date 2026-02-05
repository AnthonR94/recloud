"use client";

import { ChevronDown, Monitor, Cloud, Headphones, Server, Database, Wifi } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden"
    >
      {/* Base gradient background using brand colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e3e2dd] via-[#d4dce4] to-[#c0c7cf]" />

      {/* Animated cloud shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large cloud 1 */}
        <div className="absolute top-[10%] -left-20 animate-[drift_25s_linear_infinite]">
          <svg width="300" height="150" viewBox="0 0 300 150" className="opacity-20">
            <path
              d="M250 100c0-27.6-22.4-50-50-50-8.5 0-16.5 2.1-23.5 5.8C168.3 34.8 147.6 20 123.5 20c-33.7 0-61 27.3-61 61 0 1.7.1 3.4.2 5C35.8 91 15 115.2 15 144h270c0-24.9-15.7-46-37.7-54.2C249.4 86.2 250 82.2 250 78v22z"
              fill="#2c4c59"
            />
          </svg>
        </div>
        
        {/* Large cloud 2 */}
        <div className="absolute top-[25%] right-[-10%] animate-[drift_35s_linear_infinite_reverse]">
          <svg width="350" height="180" viewBox="0 0 350 180" className="opacity-15">
            <path
              d="M290 120c0-33.1-26.9-60-60-60-10.2 0-19.8 2.5-28.2 7C192 42 167.7 25 140 25c-40.3 0-73 32.7-73 73 0 2 .1 4.1.3 6.1C36.8 110 5 138 5 173h335c0-29.9-18.8-55.2-45.2-65C296.9 103.4 298 98.7 298 94v26z"
              fill="#2c4c59"
            />
          </svg>
        </div>

        {/* Medium cloud 3 */}
        <div className="absolute top-[50%] left-[5%] animate-[drift_30s_linear_infinite_2s]">
          <svg width="220" height="110" viewBox="0 0 220 110" className="opacity-10">
            <path
              d="M183 73c0-20.4-16.6-37-37-37-6.3 0-12.2 1.6-17.4 4.3C122.4 25.8 106.1 15 87 15c-24.9 0-45 20.1-45 45 0 1.3.1 2.5.2 3.8C22.5 67.4 8 84.3 8 105h200c0-18.4-11.6-34-27.9-40.1 1.2-2.9 1.9-6.1 1.9-9.4v17.5z"
              fill="#2c4c59"
            />
          </svg>
        </div>

        {/* Small cloud 4 */}
        <div className="absolute bottom-[30%] right-[15%] animate-[drift_20s_linear_infinite_5s]">
          <svg width="160" height="80" viewBox="0 0 160 80" className="opacity-12">
            <path
              d="M133 53c0-14.9-12-27-27-27-4.6 0-8.9 1.1-12.7 3.1C88.5 18.7 76.5 10 62.5 10c-18.2 0-33 14.8-33 33 0 .9 0 1.8.1 2.7C14 48.5 4 61.3 4 76h148c0-13.4-8.5-24.8-20.3-29.2.9-2.1 1.3-4.4 1.3-6.8v13z"
              fill="#2c4c59"
            />
          </svg>
        </div>
      </div>

      {/* Animated connection lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <svg className="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          {/* Animated line 1 */}
          <line x1="100" y1="200" x2="400" y2="350" stroke="#2c4c59" strokeWidth="1" strokeDasharray="8 4" className="animate-[dash_3s_linear_infinite]" />
          <line x1="400" y1="350" x2="700" y2="250" stroke="#2c4c59" strokeWidth="1" strokeDasharray="8 4" className="animate-[dash_3s_linear_infinite_0.5s]" />
          <line x1="700" y1="250" x2="1000" y2="400" stroke="#2c4c59" strokeWidth="1" strokeDasharray="8 4" className="animate-[dash_3s_linear_infinite_1s]" />
          
          {/* Animated line 2 */}
          <line x1="200" y1="500" x2="500" y2="400" stroke="#2c4c59" strokeWidth="1" strokeDasharray="8 4" className="animate-[dash_4s_linear_infinite]" />
          <line x1="500" y1="400" x2="800" y2="500" stroke="#2c4c59" strokeWidth="1" strokeDasharray="8 4" className="animate-[dash_4s_linear_infinite_0.5s]" />
          <line x1="800" y1="500" x2="1100" y2="350" stroke="#2c4c59" strokeWidth="1" strokeDasharray="8 4" className="animate-[dash_4s_linear_infinite_1s]" />

          {/* Connection nodes */}
          <circle cx="100" cy="200" r="4" fill="#2c4c59" className="animate-pulse" />
          <circle cx="400" cy="350" r="6" fill="#2c4c59" className="animate-pulse" />
          <circle cx="700" cy="250" r="5" fill="#2c4c59" className="animate-pulse" />
          <circle cx="1000" cy="400" r="4" fill="#2c4c59" className="animate-pulse" />
          <circle cx="200" cy="500" r="5" fill="#2c4c59" className="animate-pulse" />
          <circle cx="500" cy="400" r="7" fill="#2c4c59" className="animate-pulse" />
          <circle cx="800" cy="500" r="4" fill="#2c4c59" className="animate-pulse" />
          <circle cx="1100" cy="350" r="5" fill="#2c4c59" className="animate-pulse" />
        </svg>
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[15%] left-[10%] animate-[float_8s_ease-in-out_infinite]">
          <Server className="h-8 w-8 text-primary/20" />
        </div>
        <div className="absolute top-[20%] right-[15%] animate-[float_6s_ease-in-out_infinite_1s]">
          <Database className="h-6 w-6 text-primary/15" />
        </div>
        <div className="absolute bottom-[35%] left-[20%] animate-[float_7s_ease-in-out_infinite_2s]">
          <Wifi className="h-7 w-7 text-primary/18" />
        </div>
        <div className="absolute bottom-[25%] right-[25%] animate-[float_9s_ease-in-out_infinite_0.5s]">
          <Cloud className="h-10 w-10 text-primary/12" />
        </div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(44,76,89,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(44,76,89,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40 flex-1 flex items-center">
        <div className="w-full">
          {/* Main content */}
          <div className="text-center max-w-4xl mx-auto">
            {/* Announcement badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/90 backdrop-blur-md px-4 py-1.5 text-sm text-muted-foreground shadow-sm">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>Managed Services Provider</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance drop-shadow-sm">
              Your Technology Partner for{" "}
              <span className="relative">
                <span className="text-primary">Seamless Operations</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-primary/30"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,8 Q50,0 100,8 T200,8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto text-pretty">
              With our enterprise grade IT expertise behind you, your attention
              stays exactly where it belongs - on growing your business.
            </p>
          </div>

          {/* Feature highlights */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="group relative bg-card/90 backdrop-blur-md rounded-2xl border border-border p-6 text-center transition-all hover:border-primary/30 hover:shadow-lg hover:bg-card">
              <div className="mx-auto h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Cloud Specialists</h3>
            </div>

            <div className="group relative bg-card/90 backdrop-blur-md rounded-2xl border border-border p-6 text-center transition-all hover:border-primary/30 hover:shadow-lg hover:bg-card">
              <div className="mx-auto h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Monitor className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">IT Management</h3>
            </div>

            <div className="group relative bg-card/90 backdrop-blur-md rounded-2xl border border-border p-6 text-center transition-all hover:border-primary/30 hover:shadow-lg hover:bg-card">
              <div className="mx-auto h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Headphones className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Remote Support</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </div>
    </section>
  );
}

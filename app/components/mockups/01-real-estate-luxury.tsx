/**
 * App Components Mockups 01 Real Estate Luxury public module surface.
 */
"use client";

import React from "react";
import {
  MapPin,
  Bed,
  Bath,
  Maximize2,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

export default function LuxuryRealEstateHero() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">Prestige</div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#" className="hover:text-amber-400 transition">
              Properties
            </a>
            <a href="#" className="hover:text-amber-400 transition">
              About
            </a>
            <a href="#" className="hover:text-amber-400 transition">
              Contact
            </a>
          </div>
          <button className="px-6 py-2 bg-amber-500 text-slate-950 font-semibold rounded-lg hover:bg-amber-400 transition">
            Schedule Tour
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image (Gradient Placeholder) */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-gradient-to-br" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Extraordinary Homes Await
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Curated luxury properties in the world's most desirable locations
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-amber-500 text-slate-950 font-semibold rounded-lg hover:bg-amber-400 transition flex items-center gap-2">
              Explore Properties <ArrowRight size={18} />
            </button>
            <button className="px-8 py-3 border border-amber-500 text-amber-400 font-semibold rounded-lg hover:bg-amber-500/10 transition">
              Request Access
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown size={24} className="text-amber-400" />
        </div>
      </section>

      {/* Featured Properties */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-4">Featured Listings</h2>
        <p className="text-gray-400 mb-12">
          Handpicked estates from around the globe
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Malibu Cliffside",
              price: "$8.5M",
              beds: 5,
              baths: 4,
              sqft: "6,200",
            },
            {
              name: "Miami Beach Modern",
              price: "$6.2M",
              beds: 4,
              baths: 3,
              sqft: "4,800",
            },
            {
              name: "Aspen Mountain Estate",
              price: "$7.9M",
              beds: 6,
              baths: 5,
              sqft: "7,100",
            },
          ].map((property, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="h-72 bg-gradient-to-b from-slate-700 to-slate-800 rounded-lg mb-4 overflow-hidden hover:shadow-2xl transition">
                <div className="w-full h-full bg-slate-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-400 transition">
                {property.name}
              </h3>
              <p className="text-amber-500 text-lg font-bold mb-4">
                {property.price}
              </p>
              <div className="flex gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Bed size={16} />
                  {property.beds} Beds
                </div>
                <div className="flex items-center gap-2">
                  <Bath size={16} />
                  {property.baths} Baths
                </div>
                <div className="flex items-center gap-2">
                  <Maximize2 size={16} />
                  {property.sqft} sqft
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-500 py-20 text-slate-950">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Your Dream Property Awaits
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Let our expert agents guide you to your perfect home
          </p>
          <button className="px-8 py-3 bg-slate-950 text-white font-semibold rounded-lg hover:bg-slate-800 transition">
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
}

"use client";

import React from "react";
import { Zap, Gauge, Droplet, Shield, Star, ArrowRight } from "lucide-react";

export default function AutomotiveDealership() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            Velocity Motors
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-blue-600 transition">
              Inventory
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              Finance
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              Service
            </a>
          </div>
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Book Test Drive
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br" />

        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Drive Excellence
          </h1>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Premium vehicles. Competitive pricing. Legendary service.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
              Browse Inventory <ArrowRight size={18} />
            </button>
            <button className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">
              Get Pre-Approved
            </button>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            New Arrivals
          </h2>
          <p className="text-gray-600">
            Handpicked vehicles from top manufacturers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              name: "2024 Tesla Model S",
              price: "$94,990",
              power: "450 hp",
              status: "In Stock",
            },
            {
              name: "2024 BMW M440i",
              price: "$72,450",
              power: "382 hp",
              status: "In Stock",
            },
            {
              name: "2024 Audi Q8",
              price: "$68,900",
              power: "335 hp",
              status: "Order Now",
            },
          ].map((vehicle, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="h-72 bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl mb-6 overflow-hidden hover:shadow-2xl transition relative">
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {vehicle.status}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {vehicle.name}
              </h3>
              <p className="text-blue-600 text-2xl font-bold mb-4">
                {vehicle.price}
              </p>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <Zap size={18} className="text-blue-600" />
                <span className="font-semibold">{vehicle.power}</span>
              </div>
              <button className="w-full py-2 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Velocity
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Gauge,
                label: "Performance",
                desc: "Top-tier vehicles only",
              },
              {
                icon: Droplet,
                label: "Efficiency",
                desc: "Latest fuel technology",
              },
              { icon: Shield, label: "Safety", desc: "5-star rated models" },
              { icon: Star, label: "Service", desc: "24/7 support included" },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="text-center">
                  <div className="flex justify-center mb-4">
                    <Icon size={32} className="text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {feature.label}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to Drive?</h2>
          <p className="text-lg mb-8 text-blue-100">
            Schedule your test drive today
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
}

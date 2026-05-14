/**
 * App Components Mockups 06 Home Services public module surface.
 */
"use client";

import React from "react";
import {
  Wrench,
  Clock,
  DollarSign,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Calendar,
} from "lucide-react";

export default function HomeServices() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-900">HandyPro</div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-700">
            <a href="#" className="hover:text-emerald-600 transition">
              Services
            </a>
            <a href="#" className="hover:text-emerald-600 transition">
              How It Works
            </a>
            <a href="#" className="hover:text-emerald-600 transition">
              Reviews
            </a>
          </div>
          <button className="px-6 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition">
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-emerald-600 to-emerald-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br" />

        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Home Experts
          </h1>
          <p className="text-xl text-emerald-100 mb-12">
            Professional home services at your fingertips. Fast, reliable,
            transparent pricing.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition flex items-center gap-2">
              <Calendar size={18} /> Schedule Service
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">
              Browse Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-slate-600">
            Everything you need for home maintenance and repairs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Wrench,
              name: "Plumbing",
              desc: "Leaks, fixtures, emergencies",
            },
            {
              icon: Wrench,
              name: "Electrical",
              desc: "Repairs, upgrades, inspections",
            },
            {
              icon: Wrench,
              name: "HVAC",
              desc: "Maintenance, repairs, installation",
            },
            {
              icon: Wrench,
              name: "Carpentry",
              desc: "Trim, doors, custom builds",
            },
            { icon: Wrench, name: "Painting", desc: "Interior and exterior" },
            {
              icon: Wrench,
              name: "Roofing",
              desc: "Repairs, inspection, replacement",
            },
          ].map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-emerald-300 transition cursor-pointer"
              >
                <Icon size={32} className="text-emerald-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-slate-600 text-sm">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">
            Why HomeExperts?
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              {[
                {
                  icon: CheckCircle,
                  title: "Vetted Professionals",
                  desc: "All technicians background-checked and fully licensed",
                },
                {
                  icon: Clock,
                  title: "Fast Bookings",
                  desc: "Same-day appointments available in most areas",
                },
                {
                  icon: DollarSign,
                  title: "Transparent Pricing",
                  desc: "Upfront quotes, no hidden fees or surprises",
                },
              ].map((reason, i) => {
                const Icon = reason.icon;
                return (
                  <div key={i} className="flex gap-4">
                    <Icon
                      size={24}
                      className="text-emerald-600 flex-shrink-0 mt-1"
                    />
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-slate-600 text-sm">{reason.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-8 flex items-center justify-center h-80">
              <div className="text-center">
                <div className="text-5xl font-black text-emerald-600 mb-4">
                  4.9★
                </div>
                <p className="text-slate-700 font-semibold">
                  Rated by 12,000+ homeowners
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                num: "1",
                title: "Choose Service",
                desc: "Browse and select the service you need",
              },
              {
                num: "2",
                title: "Pick Time",
                desc: "Choose your preferred date and time",
              },
              {
                num: "3",
                title: "Technician Arrives",
                desc: "Professional arrives on time with all tools",
              },
              {
                num: "4",
                title: "Job Complete",
                desc: "Pay, review, and enjoy peace of mind",
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-emerald-600 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Reviews */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          Real Reviews from Real Customers
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Jennifer P.",
              service: "Plumbing Repair",
              text: "Quick, professional, and fair price. Technician was courteous and got the job done right.",
              rating: 5,
            },
            {
              name: "Marcus T.",
              service: "Electrical Work",
              text: "Booked same day and they arrived in the time window. Fantastic service!",
              rating: 5,
            },
            {
              name: "Lisa M.",
              service: "Roofing Inspection",
              text: "Transparent about what needed fixing and what could wait. Really appreciated the honesty.",
              rating: 5,
            },
          ].map((review, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-slate-200"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm font-semibold text-slate-700 text-emerald-600 mb-2">
                {review.service}
              </p>
              <p className="text-slate-700 mb-4 text-sm leading-relaxed">
                {review.text}
              </p>
              <p className="font-semibold text-slate-900">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Service?</h2>
          <p className="text-lg mb-8 text-emerald-100">
            Book a professional today and get your home fixed right
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition flex items-center gap-2">
              <Phone size={18} /> Call Us
            </button>
            <button className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition flex items-center gap-2">
              <Calendar size={18} /> Book Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

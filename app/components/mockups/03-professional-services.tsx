"use client";

import React from "react";
import {
  Briefcase,
  CheckCircle,
  Users,
  TrendingUp,
  ArrowRight,
  Phone,
} from "lucide-react";

export default function ProfessionalServices() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-900">
            Nexus Consulting
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-700">
            <a href="#" className="hover:text-indigo-600 transition">
              Services
            </a>
            <a href="#" className="hover:text-indigo-600 transition">
              Expertise
            </a>
            <a href="#" className="hover:text-indigo-600 transition">
              Team
            </a>
          </div>
          <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-24 flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Transform Your Business
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Strategic consulting, expert implementation, and measurable
              results. We partner with ambitious companies to unlock growth.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition flex items-center gap-2">
                Schedule Consultation <ArrowRight size={18} />
              </button>
              <button className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition">
                View Case Studies
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 h-96 rounded-2xl shadow-xl" />
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-slate-600 mb-16">
            Comprehensive solutions tailored to your needs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Strategy & Planning",
                desc: "Develop clear roadmaps aligned with your business goals",
                points: [
                  "Market analysis",
                  "Competitive positioning",
                  "5-year planning",
                ],
              },
              {
                icon: TrendingUp,
                title: "Growth Optimization",
                desc: "Accelerate revenue growth through proven methodologies",
                points: [
                  "Revenue modeling",
                  "Process optimization",
                  "Scaling strategy",
                ],
              },
              {
                icon: Users,
                title: "Team Development",
                desc: "Build and optimize high-performing teams",
                points: [
                  "Leadership coaching",
                  "Talent strategy",
                  "Culture alignment",
                ],
              },
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="p-8 border border-slate-200 rounded-xl hover:shadow-lg transition"
                >
                  <Icon size={32} className="text-indigo-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-sm text-slate-700"
                      >
                        <CheckCircle
                          size={16}
                          className="text-green-500 flex-shrink-0"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-indigo-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">
            Proven Results
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: "95%", label: "Client Retention" },
              { stat: "$2.3B", label: "Revenue Impacted" },
              { stat: "500+", label: "Projects Completed" },
              { stat: "42%", label: "Avg Growth Rate" },
            ].map((result, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-bold text-indigo-600 mb-2">
                  {result.stat}
                </p>
                <p className="text-slate-700 font-medium">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-slate-900 to-indigo-900 text-white py-20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform?</h2>
          <p className="text-lg mb-8 text-gray-200">
            Our experts are standing by to help
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition flex items-center gap-2">
              <Phone size={18} />
              Call Now
            </button>
            <button className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">
              Request Proposal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import React from "react";
import {
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
  Zap,
  ArrowUpRight,
} from "lucide-react";

export default function SaaSAnalytics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">Analytics Pro</div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#" className="hover:text-blue-400 transition">
              Features
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              Pricing
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              Docs
            </a>
          </div>
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Start Free Trial
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br" />

        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 border border-blue-500 rounded-full text-sm font-semibold text-blue-300">
            The Future of Data Analytics
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            Real-Time Insights,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Instant Decisions
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Advanced analytics platform with AI-powered insights. Make smarter
            decisions faster.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
              <Zap size={18} /> Get Started
            </button>
            <button className="px-8 py-3 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-4 gap-8 mb-24">
          {[
            { metric: "10M+", label: "Data Points Processed" },
            { metric: "99.9%", label: "Uptime SLA" },
            { metric: "<100ms", label: "Query Latency" },
            { metric: "500+", label: "Enterprise Clients" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 bg-slate-800/50 border border-slate-700 rounded-lg"
            >
              <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                {stat.metric}
              </p>
              <p className="text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-black text-center mb-16">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: LineChart,
              title: "Real-Time Dashboards",
              desc: "Live data visualization with customizable charts and metrics",
            },
            {
              icon: BarChart3,
              title: "Advanced Segmentation",
              desc: "Slice data by dimensions to uncover hidden patterns",
            },
            {
              icon: PieChart,
              title: "Predictive Analytics",
              desc: "AI-powered forecasting with confidence intervals",
            },
            {
              icon: TrendingUp,
              title: "Anomaly Detection",
              desc: "Automatically detect unusual patterns and changes",
            },
            {
              icon: Zap,
              title: "Fast Queries",
              desc: "Get answers in milliseconds, not minutes",
            },
            {
              icon: BarChart3,
              title: "Custom Reports",
              desc: "Build reports your team actually uses",
            },
          ].map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-blue-500 transition"
              >
                <Icon size={32} className="text-blue-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Integration */}
      <section className="bg-slate-800/50 py-24 border-y border-slate-700">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Connects with Everything
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Integrate with 200+ data sources and business tools
          </p>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              "Stripe",
              "Salesforce",
              "Mixpanel",
              "Segment",
              "Zapier",
              "Google Analytics",
              "Shopify",
              "PostgreSQL",
              "Snowflake",
              "DataDog",
            ].map((integrations, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-16 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-300 font-medium"
              >
                {integrations}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-4">Simple Pricing</h2>
        <p className="text-center text-slate-400 mb-16">
          No hidden fees. Scale as you grow.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Starter",
              price: "$99",
              period: "/month",
              features: [
                "100GB data",
                "3 users",
                "Basic dashboards",
                "Email support",
              ],
            },
            {
              name: "Professional",
              price: "$499",
              period: "/month",
              features: [
                "1TB data",
                "20 users",
                "Advanced analytics",
                "Priority support",
              ],
              highlighted: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              period: "",
              features: [
                "Unlimited data",
                "Unlimited users",
                "Custom integrations",
                "Dedicated support",
              ],
            },
          ].map((plan, i) => (
            <div
              key={i}
              className={`p-8 rounded-xl border transition ${
                plan.highlighted
                  ? "bg-gradient-to-br from-blue-600 to-blue-700 border-blue-500 shadow-2xl scale-105"
                  : "bg-slate-800/50 border-slate-700 hover:border-slate-600"
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-3xl font-black mb-6">
                {plan.price}
                <span className="text-sm text-slate-400">{plan.period}</span>
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <ArrowUpRight
                      size={16}
                      className="text-blue-400 flex-shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 font-semibold rounded-lg transition ${
                  plan.highlighted
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "border border-slate-600 text-white hover:bg-slate-700"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl font-black mb-4">
            Ready to Transform Your Data?
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Start your free trial. No credit card required.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
}

/**
 * App Components Mockups 05 Fitness Wellness public module surface.
 */
"use client";

import React from "react";
import {
  Flame,
  Users,
  TrendingUp,
  Award,
  ArrowRight,
  Play,
} from "lucide-react";

export default function FitnessWellness() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
            ZENITH
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-orange-500 transition">
              Classes
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              Trainers
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              Plans
            </a>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-lg transition">
            Start Free Trial
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[700px] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-gradient-to-br" />

        <div className="relative z-10 text-center max-w-3xl px-6">
          <div className="inline-block mb-6 px-4 py-2 bg-orange-500/20 border border-orange-500 rounded-full text-sm font-semibold text-orange-400">
            Transform Your Body, Transform Your Life
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            Your Fitness Journey Starts Here
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of members achieving their goals with personalized
            training, expert nutrition coaching, and an incredible community
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-2xl transition flex items-center gap-2">
              Join Now <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition flex items-center gap-2">
              <Play size={20} /> Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-orange-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: "50K+", label: "Active Members" },
              { stat: "200+", label: "Expert Trainers" },
              { stat: "1000+", label: "Video Classes" },
              { stat: "98%", label: "Satisfaction" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-black bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {item.stat}
                </p>
                <p className="text-gray-700 font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-black text-gray-900 mb-4 text-center">
          Why Choose ZENITH?
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
          Everything you need to achieve your fitness goals
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Flame,
              title: "Personalized Workouts",
              desc: "AI-powered plans tailored to your goals, fitness level, and schedule",
            },
            {
              icon: Users,
              title: "Live Group Classes",
              desc: "High-energy sessions led by certified trainers. Stay motivated together",
            },
            {
              icon: TrendingUp,
              title: "Progress Tracking",
              desc: "Real-time analytics and insights to monitor your transformation",
            },
            {
              icon: Award,
              title: "Nutrition Coaching",
              desc: "Expert meal planning and guidance to fuel your fitness",
            },
            {
              icon: Users,
              title: "Community Support",
              desc: "Connect with thousands of members on the same journey",
            },
            {
              icon: Flame,
              title: "24/7 Access",
              desc: "On-demand videos and resources available anytime, anywhere",
            },
          ].map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="p-8 border-2 border-gray-200 rounded-xl hover:border-orange-500 hover:shadow-lg transition"
              >
                <Icon size={40} className="text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-gray-900 mb-16 text-center">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                before: "210 lbs",
                after: "165 lbs",
                time: "6 months",
              },
              {
                name: "James K.",
                before: "32% BF",
                after: "18% BF",
                time: "4 months",
              },
              {
                name: "Maria G.",
                before: "No strength",
                after: "Lifting 2x bodyweight",
                time: "5 months",
              },
            ].map((story, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-2xl">
                      ⭐
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {story.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">{story.before}</span> →{" "}
                  <span className="text-green-600 font-bold">
                    {story.after}
                  </span>
                </p>
                <p className="text-sm text-gray-500">
                  Achieved in {story.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl font-black mb-4">Your Best Self Awaits</h2>
          <p className="text-lg mb-8 text-orange-50">
            Start your 7-day free trial today. No credit card required.
          </p>
          <button className="px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition text-lg">
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );
}

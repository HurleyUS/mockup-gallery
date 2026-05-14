/**
 * App Components Mockups 08 Education Platform public module surface.
 */
"use client";

import React from "react";
import {
  BookOpen,
  Users,
  Award,
  Play,
  Zap,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function EducationPlatform() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-purple-600">LearnHub</div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-purple-600 transition">
              Courses
            </a>
            <a href="#" className="hover:text-purple-600 transition">
              Instructors
            </a>
            <a href="#" className="hover:text-purple-600 transition">
              Community
            </a>
          </div>
          <button className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[700px] flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden">
        <div className="absolute top-10 right-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <h1 className="text-6xl md:text-7xl font-black mb-6 text-gray-900">
            Learn From The Best
          </h1>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Access thousands of courses from world-class instructors. Learn at
            your own pace, master new skills.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition flex items-center gap-2">
              <Play size={18} /> Start Learning
            </button>
            <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition">
              Browse Courses
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: "500K+", label: "Active Learners" },
              { stat: "1000+", label: "Expert Courses" },
              { stat: "150+", label: "World-Class Instructors" },
              { stat: "95%", label: "Satisfaction Rate" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-black mb-2">{item.stat}</p>
                <p className="text-purple-100 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Courses
          </h2>
          <p className="text-gray-600">
            Join thousands of students already learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Full Stack Web Development",
              instructor: "Sarah Chen",
              students: "45K",
              rating: 4.9,
              price: "$99",
            },
            {
              title: "Machine Learning Mastery",
              instructor: "Dr. James Park",
              students: "32K",
              rating: 4.8,
              price: "$129",
            },
            {
              title: "Product Design Bootcamp",
              instructor: "Lisa Rodriguez",
              students: "28K",
              rating: 4.9,
              price: "$149",
            },
          ].map((course, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <div className="h-48 bg-gradient-to-br from-purple-400 to-blue-500" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  by {course.instructor}
                </p>
                <div className="flex items-center gap-2 mb-4 text-sm">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="font-semibold text-gray-700">
                    {course.rating}
                  </span>
                  <span className="text-gray-500">({course.students})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    {course.price}
                  </span>
                  <button className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Why LearnHub?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Expert-Led Courses",
                desc: "Learn from industry professionals with real-world experience",
              },
              {
                icon: Zap,
                title: "Self-Paced Learning",
                desc: "Study whenever you want, wherever you want, at your pace",
              },
              {
                icon: Award,
                title: "Certificates",
                desc: "Earn recognized certificates to boost your career",
              },
              {
                icon: Users,
                title: "Community Support",
                desc: "Connect with peers, join study groups, ask questions",
              },
              {
                icon: Play,
                title: "Video Lectures",
                desc: "High-quality video content with captions and transcripts",
              },
              {
                icon: MessageCircle,
                title: "24/7 Support",
                desc: "Get help when you need it from our support team",
              },
            ].map((reason, i) => {
              const Icon = reason.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition"
                >
                  <Icon size={32} className="text-purple-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{reason.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Learning Paths
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              path: "Become a Web Developer",
              duration: "6 months",
              modules: [
                "HTML/CSS Fundamentals",
                "JavaScript Advanced",
                "React Mastery",
                "Node.js Backend",
                "Deployment",
              ],
            },
            {
              path: "Master Data Science",
              duration: "5 months",
              modules: [
                "Python Fundamentals",
                "Statistics & Math",
                "Machine Learning",
                "Deep Learning",
                "Projects",
              ],
            },
          ].map((learning, i) => (
            <div key={i} className="p-8 border-2 border-purple-200 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {learning.path}
              </h3>
              <p className="text-purple-600 font-semibold mb-6">
                {learning.duration}
              </p>
              <ul className="space-y-3">
                {learning.modules.map((module, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-purple-600 rounded-full" />
                    {module}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition">
                Start Path
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Success Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex M.",
                role: "Career Changer",
                quote:
                  "LearnHub helped me transition into tech. Best investment ever!",
              },
              {
                name: "Priya K.",
                role: "Skill Upgrader",
                quote:
                  "Finally learned modern frameworks. Courses are comprehensive and practical.",
              },
              {
                name: "Marco L.",
                role: "Entrepreneur",
                quote:
                  "Used LearnHub to upskill my whole team. Highly recommend!",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Begin Your Learning Journey Today
          </h2>
          <p className="text-lg mb-8 text-purple-100">
            Join 500K+ learners already transforming their careers
          </p>
          <button className="px-8 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition flex items-center gap-2 mx-auto">
            Get Started Free <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}

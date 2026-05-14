/**
 * App Components Mockups 10 Travel Booking public module surface.
 */
"use client";

import React from "react";
import {
  Plane,
  MapPin,
  Calendar,
  Users,
  Star,
  Heart,
  Compass,
  Shield,
  Zap,
} from "lucide-react";

export default function TravelBooking() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
            VoyageNow
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-cyan-600 transition">
              Flights
            </a>
            <a href="#" className="hover:text-cyan-600 transition">
              Hotels
            </a>
            <a href="#" className="hover:text-cyan-600 transition">
              Packages
            </a>
          </div>
          <button className="px-6 py-2 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[700px] flex items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-50 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h1 className="text-6xl md:text-7xl font-black mb-6 text-gray-900">
            Explore the World
          </h1>
          <p className="text-xl text-gray-700 mb-12">
            Discover unforgettable experiences, amazing deals, and dream
            destinations
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-5 gap-3">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-lg">
                <Plane size={20} className="text-cyan-600" />
                <input
                  type="text"
                  placeholder="From"
                  className="bg-transparent focus:outline-none w-full"
                />
              </div>
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-lg">
                <Plane size={20} className="text-cyan-600" />
                <input
                  type="text"
                  placeholder="To"
                  className="bg-transparent focus:outline-none w-full"
                />
              </div>
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-lg">
                <Calendar size={20} className="text-cyan-600" />
                <input
                  type="date"
                  className="bg-transparent focus:outline-none w-full text-sm"
                />
              </div>
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-lg">
                <Calendar size={20} className="text-cyan-600" />
                <input
                  type="date"
                  className="bg-transparent focus:outline-none w-full text-sm"
                />
              </div>
              <button className="py-3 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-700 transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-gray-600">Trending with travelers right now</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              name: "Tokyo, Japan",
              price: "From $899",
              image: "from-red-400 to-pink-500",
            },
            {
              name: "Paris, France",
              price: "From $799",
              image: "from-purple-400 to-pink-400",
            },
            {
              name: "Bali, Indonesia",
              price: "From $599",
              image: "from-green-400 to-blue-400",
            },
            {
              name: "New York, USA",
              price: "From $449",
              image: "from-yellow-400 to-orange-400",
            },
          ].map((destination, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl cursor-pointer h-72"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${destination.image}`}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />
              <div className="absolute inset-0 flex flex-col items-end justify-between p-6 text-white">
                <button className="opacity-0 group-hover:opacity-100 transition">
                  <Heart size={24} className="text-white" />
                </button>
                <div>
                  <h3 className="text-2xl font-bold">{destination.name}</h3>
                  <p className="text-sm text-gray-200">{destination.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Vacation Packages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Beach Paradise",
                duration: "5 Days / 4 Nights",
                price: "$1,299",
                includes: [
                  "Hotel (4-star)",
                  "Airport transfer",
                  "Daily breakfast",
                  "Beach tour",
                ],
              },
              {
                title: "Cultural Explorer",
                duration: "7 Days / 6 Nights",
                price: "$1,899",
                includes: [
                  "Hotel (5-star)",
                  "Guided tours",
                  "Meals included",
                  "Travel insurance",
                ],
                popular: true,
              },
              {
                title: "Adventure Seeker",
                duration: "6 Days / 5 Nights",
                price: "$1,599",
                includes: [
                  "Lodge",
                  "Adventure activities",
                  "Equipment rental",
                  "Meals included",
                ],
              },
            ].map((package_, i) => (
              <div
                key={i}
                className={`p-8 rounded-xl border transition ${
                  package_.popular
                    ? "border-cyan-600 bg-cyan-50 shadow-lg scale-105"
                    : "border-gray-200 bg-white hover:shadow-lg"
                }`}
              >
                {package_.popular && (
                  <div className="inline-block mb-4 px-3 py-1 bg-cyan-600 text-white text-xs font-bold rounded-full">
                    POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {package_.title}
                </h3>
                <p className="text-gray-600 mb-4">{package_.duration}</p>
                <p className="text-4xl font-bold text-cyan-600 mb-6">
                  {package_.price}
                </p>
                <ul className="space-y-3 mb-8">
                  {package_.includes.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-gray-700 text-sm"
                    >
                      <Compass
                        size={16}
                        className="text-cyan-600 flex-shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 font-bold rounded-lg transition ${
                    package_.popular
                      ? "bg-cyan-600 text-white hover:bg-cyan-700"
                      : "border border-cyan-600 text-cyan-600 hover:bg-cyan-50"
                  }`}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
          Why Choose VoyageNow?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "Best Price Guarantee",
              desc: "We match any lower price in the market",
            },
            {
              icon: Shield,
              title: "Secure Booking",
              desc: "100% safe and secure payments",
            },
            {
              icon: Users,
              title: "24/7 Support",
              desc: "Help whenever you need it",
            },
          ].map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div key={i} className="text-center">
                <Icon size={40} className="text-cyan-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Traveler Reviews
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah K.",
                trip: "Tokyo Package",
                text: "Amazing experience! Everything was perfectly organized. Highly recommend!",
              },
              {
                name: "James M.",
                trip: "Paris + London",
                text: "Best vacation ever. Great deals and excellent customer service.",
              },
              {
                name: "Maria L.",
                trip: "Bali Adventure",
                text: "The itinerary was perfect, guides were knowledgeable, food was delicious!",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  &quot;{review.text}&quot;
                </p>
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">Booked: {review.trip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg mb-8 text-cyan-100">
            Book your dream vacation today
          </p>
          <button className="px-8 py-3 bg-white text-cyan-600 font-bold rounded-lg hover:bg-gray-100 transition flex items-center gap-2 mx-auto">
            <Plane size={18} /> Start Planning
          </button>
        </div>
      </section>
    </div>
  );
}

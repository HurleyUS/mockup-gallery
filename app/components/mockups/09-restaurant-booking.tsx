/**
 * App Components Mockups 09 Restaurant Booking public module surface.
 */
"use client";

import React from "react";
import {
  Clock,
  Users,
  MapPin,
  Star,
  ChefHat,
  Flame,
  Calendar,
  Phone,
} from "lucide-react";

export default function RestaurantBooking() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-red-600">TableHub</div>
          <div className="flex-1 mx-8 hidden md:flex">
            <input
              type="text"
              placeholder="Location, cuisine, or restaurant..."
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-red-600 transition text-sm">
              Sign In
            </button>
            <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
              Reserve
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-red-600 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br" />

        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            Dine With Purpose
          </h1>
          <p className="text-xl text-red-100 mb-12">
            Discover, book, and enjoy the world's best restaurants
          </p>
          <div className="bg-white rounded-lg p-6 max-w-xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Location"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
              <div className="flex gap-2">
                <input
                  type="date"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                />
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none">
                  <option>2 People</option>
                  <option>4 People</option>
                  <option>6 People</option>
                </select>
              </div>
              <button className="md:col-span-2 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
                Find Tables
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Restaurants
          </h2>
          <p className="text-gray-600">Hand-picked culinary experiences</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Ember & Oak",
              cuisine: "Contemporary American",
              rating: 4.9,
              reviews: 2840,
              price: "$$$",
              location: "Downtown",
              image: "from-amber-400 to-orange-500",
            },
            {
              name: "Sakura Dreams",
              cuisine: "Japanese Omakase",
              rating: 4.8,
              reviews: 1920,
              price: "$$$$",
              location: "Midtown",
              image: "from-red-400 to-pink-500",
            },
            {
              name: "Terra Verde",
              cuisine: "Farm-to-Table",
              rating: 4.9,
              reviews: 2150,
              price: "$$$",
              location: "Uptown",
              image: "from-green-400 to-emerald-500",
            },
          ].map((restaurant, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              <div className={`h-48 bg-gradient-to-br ${restaurant.image}`} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {restaurant.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {restaurant.cuisine}
                </p>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    <span className="font-bold text-gray-900">
                      {restaurant.rating}
                    </span>
                    <span className="text-gray-500 text-sm">
                      ({restaurant.reviews})
                    </span>
                  </div>
                  <span className="text-red-600 font-bold">
                    {restaurant.price}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                  <MapPin size={16} />
                  {restaurant.location}
                </div>

                <button className="w-full py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                num: "1",
                icon: MapPin,
                title: "Find",
                desc: "Search by location, cuisine, or cuisine type",
              },
              {
                num: "2",
                icon: Calendar,
                title: "Choose",
                desc: "Select date, time, and party size",
              },
              {
                num: "3",
                icon: Users,
                title: "Book",
                desc: "Reserve your table in seconds",
              },
              {
                num: "4",
                icon: Flame,
                title: "Enjoy",
                desc: "Arrive and enjoy a great meal",
              },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-red-600 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cuisines */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Explore by Cuisine
        </h2>

        <div className="grid md:grid-cols-5 gap-4">
          {[
            { name: "Italian", count: "2,400" },
            { name: "French", count: "1,850" },
            { name: "Japanese", count: "1,620" },
            { name: "Indian", count: "1,540" },
            { name: "Mexican", count: "1,280" },
            { name: "Thai", count: "1,100" },
            { name: "Spanish", count: "980" },
            { name: "Korean", count: "920" },
            { name: "Greek", count: "850" },
            { name: "Turkish", count: "720" },
          ].map((cuisine, i) => (
            <div
              key={i}
              className="p-4 border border-gray-200 rounded-lg hover:border-red-600 hover:shadow-md transition cursor-pointer text-center"
            >
              <p className="font-bold text-gray-900">{cuisine.name}</p>
              <p className="text-sm text-gray-600">
                {cuisine.count} restaurants
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-red-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Why TableHub?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Instant Booking",
                desc: "No wait time, no phone calls needed",
              },
              {
                icon: ChefHat,
                title: "Verified Restaurants",
                desc: "Real reviews from real diners",
              },
              {
                icon: Users,
                title: "Best Selection",
                desc: "50K+ restaurants to choose from",
              },
            ].map((reason, i) => {
              const Icon = reason.icon;
              return (
                <div key={i} className="text-center">
                  <Icon size={40} className="text-red-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">{reason.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Diner Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Emma S.",
              restaurant: "Ember & Oak",
              text: "Perfect romantic dinner. Food was exceptional, service was impeccable.",
            },
            {
              name: "David T.",
              restaurant: "Sakura Dreams",
              text: "Best omakase experience of my life. Worth every penny!",
            },
            {
              name: "Lisa P.",
              restaurant: "Terra Verde",
              text: "Farm-fresh ingredients shine through. Absolutely must try!",
            },
          ].map((review, i) => (
            <div
              key={i}
              className="bg-white p-6 border border-gray-200 rounded-lg"
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
              <p className="text-sm text-gray-600">
                Dined at {review.restaurant}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 text-white py-20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to Reserve?</h2>
          <p className="text-lg mb-8 text-red-100">
            Find and book the perfect restaurant right now
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition flex items-center gap-2">
              <Calendar size={18} /> Book a Table
            </button>
            <button className="px-8 py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition flex items-center gap-2">
              <Phone size={18} /> Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

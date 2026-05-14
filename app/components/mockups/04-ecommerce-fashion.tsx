/**
 * App Components Mockups 04 Ecommerce Fashion public module surface.
 */
"use client";

import React from "react";
import {
  ShoppingCart,
  Heart,
  Star,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";

export default function EcommerceFashion() {
  const [hoveredItem, setHoveredItem] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">ARIA</div>
          <div className="flex-1 mx-8 hidden md:flex">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="flex items-center gap-6">
            <button className="text-gray-700 hover:text-black transition">
              <Heart size={24} />
            </button>
            <button className="relative text-gray-700 hover:text-black transition">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br" />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Timeless Elegance
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Curated collection of contemporary fashion
          </p>
          <button className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition">
            Shop New Collection
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Arrivals
          </h2>
          <p className="text-gray-600">
            Premium pieces for the modern wardrobe
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              name: "Premium Linen Shirt",
              price: "$189",
              image: "bg-gradient-to-br from-blue-100 to-blue-200",
              rating: 4.9,
            },
            {
              name: "Tailored Trousers",
              price: "$259",
              image: "bg-gradient-to-br from-gray-100 to-gray-200",
              rating: 5,
            },
            {
              name: "Cashmere Blend Sweater",
              price: "$329",
              image: "bg-gradient-to-br from-amber-100 to-amber-200",
              rating: 4.8,
            },
            {
              name: "Classic Blazer",
              price: "$449",
              image: "bg-gradient-to-br from-slate-100 to-slate-200",
              rating: 4.9,
            },
          ].map((product, i) => (
            <div key={i} className="group cursor-pointer">
              <div
                className={`h-80 ${product.image} rounded-lg mb-4 overflow-hidden transition-all relative`}
                onMouseEnter={() => setHoveredItem(i)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {hoveredItem === i && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <button className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition">
                      Add to Bag
                    </button>
                  </div>
                )}
              </div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-lg font-bold text-gray-900">
                    {product.price}
                  </p>
                </div>
                <button className="text-gray-400 hover:text-red-500 transition">
                  <Heart size={20} />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{product.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Truck,
                title: "Free Shipping",
                desc: "On orders over $100",
              },
              {
                icon: Shield,
                title: "Secure Checkout",
                desc: "100% encrypted payments",
              },
              {
                icon: RotateCcw,
                title: "Easy Returns",
                desc: "30-day return policy",
              },
            ].map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="text-center">
                  <Icon size={32} className="text-black mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-black text-white py-20">
        <div className="max-w-2xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-8">
            Get exclusive access to new collections and offers
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-white"
            />
            <button className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

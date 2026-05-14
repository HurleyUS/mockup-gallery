/**
 * App Page public module surface.
 */
"use client";

import { useState } from "react";
import RealEstate from "./components/mockups/01-real-estate-luxury";
import Automotive from "./components/mockups/02-automotive-dealership";
import ProfessionalServices from "./components/mockups/03-professional-services";
import Ecommerce from "./components/mockups/04-ecommerce-fashion";
import Fitness from "./components/mockups/05-fitness-wellness";
import HomeServices from "./components/mockups/06-home-services";
import SaaS from "./components/mockups/07-saas-analytics";
import Education from "./components/mockups/08-education-platform";
import Restaurant from "./components/mockups/09-restaurant-booking";
import Travel from "./components/mockups/10-travel-booking";

const mockups = [
  {
    id: 1,
    title: "01 Real Estate",
    Component: RealEstate,
    industry: "Real Estate",
  },
  {
    id: 2,
    title: "02 Automotive",
    Component: Automotive,
    industry: "Automotive",
  },
  {
    id: 3,
    title: "03 Professional Services",
    Component: ProfessionalServices,
    industry: "Consulting",
  },
  {
    id: 4,
    title: "04 E-Commerce",
    Component: Ecommerce,
    industry: "Fashion/Retail",
  },
  { id: 5, title: "05 Fitness", Component: Fitness, industry: "Wellness" },
  {
    id: 6,
    title: "06 Home Services",
    Component: HomeServices,
    industry: "Local Services",
  },
  { id: 7, title: "07 SaaS", Component: SaaS, industry: "Software" },
  {
    id: 8,
    title: "08 Education",
    Component: Education,
    industry: "Online Learning",
  },
  {
    id: 9,
    title: "09 Restaurant",
    Component: Restaurant,
    industry: "Food & Beverage",
  },
  { id: 10, title: "10 Travel", Component: Travel, industry: "Tourism" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white">
                Web Design Portfolio
              </h1>
              <p className="text-gray-400 mt-1">
                10 modern, conversion-focused designs across industries
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Interested? Contact us:</p>
              <p className="font-semibold">hello@hurleyus.com</p>
            </div>
          </div>

          {/* Sticky Navigation */}
          <nav className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
            {mockups.map((m, idx) => (
              <button
                key={m.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded font-medium text-sm whitespace-nowrap transition ${
                  activeTab === idx
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {m.title}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="bg-gray-900">
        {mockups.map((m, idx) => (
          <div
            key={m.id}
            className={`${activeTab === idx ? "block" : "hidden"}`}
          >
            <m.Component />
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-2">HurleyUS</h3>
              <p className="text-sm text-gray-400">
                Custom web design & development for high-growth businesses
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Industries We Serve</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                {mockups.slice(0, 5).map((m) => (
                  <li key={m.id}>{m.industry}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Let's Talk</h4>
              <p className="text-sm text-gray-400 mb-2">
                📧 hello@hurleyus.com
              </p>
              <p className="text-sm text-gray-400">📱 +1 (828) 593-1935</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-4 text-center text-sm text-gray-500">
            <p>&copy; 2026 HurleyUS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

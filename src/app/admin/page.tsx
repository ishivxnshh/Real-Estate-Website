"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { fetchProperties, fetchLeads } from "@/utils/data";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"properties" | "leads" | "settings">(
    "properties"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [properties, setProperties] = useState<any[]>([]);
  const [leads, setLeads] = useState<any[]>([]);

  useEffect(() => {
    fetchProperties().then((data) => setProperties(data));
    fetchLeads().then((data) => setLeads(data));
  }, []);

  return (
    <div className="flex-grow pt-24 px-margin-mobile md:px-margin-desktop pb-section-gap w-full max-w-container-max mx-auto flex flex-col md:flex-row gap-8">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="sticky top-28 flex flex-col gap-2">
          <button
            className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded font-label-md transition-colors ${
              activeTab === "properties"
                ? "bg-primary-container text-on-primary-container"
                : "text-on-surface-variant hover:bg-surface-variant"
            }`}
            onClick={() => setActiveTab("properties")}
          >
            <span className="material-symbols-outlined">apartment</span>
            Properties
          </button>
          <button
            className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded font-label-md transition-colors ${
              activeTab === "leads"
                ? "bg-primary-container text-on-primary-container"
                : "text-on-surface-variant hover:bg-surface-variant"
            }`}
            onClick={() => setActiveTab("leads")}
          >
            <span className="material-symbols-outlined">contacts</span>
            Leads
          </button>
          <button
            className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded font-label-md transition-colors mt-8 border-t border-outline-variant/30 pt-4 ${
              activeTab === "settings"
                ? "bg-primary-container text-on-primary-container"
                : "text-on-surface-variant hover:bg-surface-variant"
            }`}
            onClick={() => setActiveTab("settings")}
          >
            <span className="material-symbols-outlined">settings</span>
            Settings
          </button>
        </div>
      </aside>

      {/* Content Area */}
      <div className="flex-grow relative min-h-[600px]">
        {/* Properties Section */}
        {activeTab === "properties" && (
          <section className="fade-in absolute inset-0 w-full bg-surface-bright rounded-lg border border-outline-variant/20 p-8 shadow-[0_40px_80px_rgba(26,26,26,0.04)]">
            <div className="flex justify-between items-center mb-8">
              <h1 className="font-headline-md text-headline-md text-primary">
                Property Management
              </h1>
              <button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-2 rounded flex items-center gap-2 hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined text-[18px]">add</span>
                Add Listing
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-outline-variant/20">
                    <th className="py-4 font-label-md text-label-md text-primary font-semibold">
                      ID
                    </th>
                    <th className="py-4 font-label-md text-label-md text-primary font-semibold">
                      Title
                    </th>
                    <th className="py-4 font-label-md text-label-md text-primary font-semibold">
                      Category
                    </th>
                    <th className="py-4 font-label-md text-label-md text-primary font-semibold">
                      Price
                    </th>
                    <th className="py-4 font-label-md text-label-md text-primary font-semibold">
                      Status
                    </th>
                    <th className="py-4 font-label-md text-label-md text-primary font-semibold text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="font-body-md text-body-md">
                  {properties.map((prop) => (
                    <tr key={prop.id} className="border-b border-outline-variant/20 hover:bg-surface transition-colors">
                      <td className="py-4 text-on-surface-variant">{String(prop.id).substring(0, 8)}</td>
                      <td className="py-4 text-primary">{prop.title}</td>
                      <td className="py-4 text-on-surface-variant">{prop.type}</td>
                      <td className="py-4 text-primary font-medium">{prop.price_formatted}</td>
                      <td className="py-4">
                        <span className={`px-2 py-1 rounded text-label-sm ${prop.status === 'Active' ? 'bg-surface-container-high text-primary' : 'bg-surface-container-highest text-on-surface-variant'}`}>
                          {prop.status}
                        </span>
                      </td>
                      <td className="py-4 text-right">
                        <button className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
                          <span className="material-symbols-outlined">edit</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Leads Section */}
        {activeTab === "leads" && (
          <section className="fade-in absolute inset-0 w-full bg-surface-bright rounded-lg border border-outline-variant/20 p-8 shadow-[0_40px_80px_rgba(26,26,26,0.04)]">
            <div className="flex justify-between items-center mb-8">
              <h1 className="font-headline-md text-headline-md text-primary">
                CRM / Lead Management
              </h1>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-outline-variant/20">
                    <th className="py-4 font-label-md text-label-md text-primary font-semibold">
                      Name
                    </th>
                    <th className="py-4 font-label-md text-label-md text-primary font-semibold">
                      Email
                    </th>
                    <th className="py-4 font-label-md text-label-md text-primary font-semibold">
                      Phone
                    </th>
                    <th className="py-4 font-label-md text-label-md text-primary font-semibold">
                      Date
                    </th>
                    <th className="py-4 font-label-md text-label-md text-primary font-semibold text-right">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="font-body-md text-body-md">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="border-b border-outline-variant/20 hover:bg-surface transition-colors">
                      <td className="py-4 text-primary font-medium">{lead.full_name}</td>
                      <td className="py-4 text-on-surface-variant">
                        {lead.email}
                      </td>
                      <td className="py-4 text-on-surface-variant">{lead.phone}</td>
                      <td className="py-4 text-on-surface-variant">{new Date(lead.created_at).toLocaleDateString()}</td>
                      <td className="py-4 text-right">
                        <button
                          className="text-secondary font-label-md hover:underline decoration-secondary underline-offset-4 cursor-pointer"
                          onClick={() => setIsModalOpen(true)}
                        >
                          Setup Call
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Settings Section Placeholder */}
        {activeTab === "settings" && (
          <section className="fade-in absolute inset-0 w-full bg-surface-bright rounded-lg border border-outline-variant/20 p-8 shadow-[0_40px_80px_rgba(26,26,26,0.04)]">
            <h1 className="font-headline-md text-headline-md text-primary mb-8">
              Platform Settings
            </h1>
            <p className="text-on-surface-variant">Settings configuration coming soon.</p>
          </section>
        )}
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center fade-in">
          <div className="bg-surface rounded-lg p-8 max-w-md w-full mx-4 shadow-lg border border-outline-variant/20 relative">
            <button
              className="absolute top-4 right-4 text-on-surface-variant hover:text-primary cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h2 className="font-headline-md text-primary mb-2">Schedule Call</h2>
            <p className="font-body-md text-on-surface-variant mb-6">
              Arrange a viewing or consultation call.
            </p>
            <input
              type="date"
              className="w-full bg-transparent border-b border-outline-variant focus:border-primary px-0 py-2 mb-4 outline-none font-body-md text-primary"
            />
            <input
              type="time"
              className="w-full bg-transparent border-b border-outline-variant focus:border-primary px-0 py-2 mb-8 outline-none font-body-md text-primary"
            />
            <button className="w-full bg-primary text-on-primary py-3 rounded font-label-md hover:opacity-90 transition-opacity cursor-pointer">
              Confirm Schedule
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

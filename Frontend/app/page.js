"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import JobCard from "@/components/JobCard";
import CategoryFilter from "@/components/CategoryFilter";
import LoadingSpinner from "@/components/LoadingSpinner";
import SearchBar from "@/components/SearchBar";

import { getJobs } from "@/services/api";

export default function HomePage() {

  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [selectedCategory, setSelectedCategory] =
    useState("");

  const [searchTerm, setSearchTerm] =
    useState("");

  const [error, setError] = useState("");


  useEffect(() => {
    fetchJobs();
  }, [selectedCategory, searchTerm]);


  const fetchJobs = async () => {
    try {
      setLoading(true);

      const params = {};

      if (selectedCategory) {
        params.category =
          selectedCategory;
      }

      if (searchTerm) {
        params.search = searchTerm;
      }

      const data = await getJobs(params);

      setJobs(data);

      setError("");
    } catch (error) {
      setError(
        "Failed to fetch jobs"
      );
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-8">

        <div className="mb-8 text-black">

          <div className="mb-12">

           <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ✨ Service Marketplace
          </div>

            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
              Find Trusted <br />
              Local Tradespeople
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Browse service requests, connect with homeowners,
              and manage job progress in one place.
            </p>

          </div>

          <div className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl p-5 shadow-sm flex flex-col md:flex-row items-center justify-start gap-4 mb-12">

            <div>
              <CategoryFilter
                selectedCategory={selectedCategory}
                onChange={setSelectedCategory}
                className="px-5 py-3 rounded-xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <SearchBar
                searchTerm={searchTerm}
                onChange={setSearchTerm}
                className="w-full md:w-80 px-5 py-3 rounded-xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition"
              />
            </div>

          </div>

        </div>

        {loading && <LoadingSpinner />}


        {error && (
          <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg">

            {error}

          </div>
        )}


        {!loading &&
          jobs.length === 0 && (
            <div className="bg-white rounded-xl shadow-sm p-10 text-center">

              <h2 className="text-2xl font-semibold mb-2">
                No Jobs Found
              </h2>

              <p className="text-gray-500">
                Try changing filters or create a new job request.
              </p>

            </div>
          )}


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {jobs.map((job) => (
            <JobCard
              key={job._id}
              job={job}
            />
          ))}

        </div>

      </main>

    </div>
  );
}
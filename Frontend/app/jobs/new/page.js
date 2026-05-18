"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import Navbar from "@/components/Navbar";
import JobForm from "@/components/JobForm";

import { createJob } from "@/services/api";

export default function NewJobPage() {

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");


  const handleCreateJob = async (
    formData
  ) => {
    try {
      setLoading(true);

      await createJob(formData);

      router.push("/");
    } catch (error) {
      setError(
        "Failed to create job"
      );
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">

      <Navbar />

      <main className="relative max-w-5xl mx-auto px-6 py-20">

        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-200 rounded-full blur-3xl opacity-20"></div>
        
        <div className="relative z-10">

          {/* Header */}
          <div className="mb-14 text-center">

            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ✨ Create Service Request
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-5 tracking-tight">
              Post a New Job
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Describe the service you need and connect with skilled local tradespeople.
            </p>

          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-100 border border-red-200 text-red-700 px-5 py-4 rounded-2xl mb-6 shadow-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <JobForm
            onSubmit={handleCreateJob}
            loading={loading}
          />

        </div>

      </main>

    </div>
  );
  }
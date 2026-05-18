"use client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import { useRouter } from "next/navigation";

import Navbar from "@/components/Navbar";
import LoadingSpinner from "@/components/LoadingSpinner";
import StatusDropdown from "@/components/StatusDropdown";

import {
  getJobById,
  updateJobStatus,
  deleteJob,
} from "@/services/api";

export default function JobDetailPage() {

  const { id } = useParams();

  const router = useRouter();

  const [job, setJob] = useState(null);

  const [loading, setLoading] =
    useState(true);

  const [statusLoading, setStatusLoading] =
    useState(false);

  const [deleteLoading, setDeleteLoading] =
    useState(false);

  const [error, setError] =
    useState("");


  useEffect(() => {
    fetchJob();
  }, []);


  const fetchJob = async () => {
    try {
      setLoading(true);

      const data =
        await getJobById(id);

      setJob(data);

      setError("");
    } catch (error) {
      setError(
        "Failed to fetch job details"
      );
    } finally {
      setLoading(false);
    }
  };


  const handleStatusUpdate = async (
    newStatus
  ) => {
    try {
      setStatusLoading(true);

      const updatedJob =
        await updateJobStatus(
          id,
          newStatus
        );

      setJob(updatedJob);
    } catch (error) {
      alert(
        "Failed to update status"
      );
    } finally {
      setStatusLoading(false);
    }
  };


  const handleDelete = async () => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      setDeleteLoading(true);

      await deleteJob(id);

      router.push("/");
    } catch (error) {
      alert(
        "Failed to delete job"
      );
    } finally {
      setDeleteLoading(false);
    }
  };


  if (loading) {
    return (
      <div>
        <Navbar />
        <LoadingSpinner />
      </div>
    );
  }


  if (error) {
    return (
      <div>
        <Navbar />

        <div className="max-w-4xl mx-auto px-6 py-10">
          <p className="text-red-500">
            {error}
          </p>
        </div>
      </div>
    );
  }


  if (!job) {
    return null;
  }


  return (
    <div className="min-h-screen bg-gray-100 text-stone-800">

      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-10">

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-10">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

            <div>

              <p className="text-sm font-medium text-black-500 mb-2">
                {job.category}
              </p>

              <h1 className="text-4xl font-bold text-gray-900">
                {job.title}
              </h1>

            </div>

            <div className="w-48 gap-6 mb-8">

              <StatusDropdown
                currentStatus={job.status}
                onChange={handleStatusUpdate}
                loading={statusLoading}
              />

            </div>

          </div>


          {/* Description */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-8">

            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              Description
            </h2>

            <p className="text-gray-700 leading-relaxed">
              {job.description}
            </p>

          </div>


          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">

              <p className="text-sm font-medium text-gray-500 mb-1">
                Location
              </p>

              <p className="text-gray-900 font-semibold">
                {job.location}
              </p>

            </div>


            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">

              <p className="text-sm font-medium text-gray-500 mb-1">
                Contact Name
              </p>

              <p className="text-gray-900 font-semibold">
                {job.contactName}
              </p>

            </div>


            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">

              <p className="text-sm font-medium text-gray-500 mb-1">
                Contact Email
              </p>

              <p className="text-gray-900 font-semibold break-all">
                {job.contactEmail}
              </p>

            </div>


            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">

              <p className="text-sm font-medium text-gray-500 mb-1">
                Created At
              </p>

              <p className="text-gray-900 font-semibold">
                {new Date(job.createdAt).toLocaleString()}
              </p>

            </div>

          </div>


          {/* Footer */}
          <div className="pt-8 mt-8 border-t border-gray-200 flex justify-end">

            <button
              onClick={handleDelete}
              disabled={deleteLoading}
              className="bg-red-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-red-700 transition disabled:opacity-50"
            >
              {deleteLoading
                ? "Deleting..."
                : "Delete Job"}
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}
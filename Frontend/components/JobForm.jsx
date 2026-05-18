"use client";

import { useState } from "react";

export default function JobForm({
  onSubmit,
  loading,
}) {

  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      category: "",
      location: "",
      contactName: "",
      contactEmail: "",
    });

  const [errors, setErrors] =
    useState({});


  const categories = [
    "Plumbing",
    "Electrical",
    "Painting",
    "Joinery",
  ];


  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title =
        "Title is required";
    }

    if (!formData.description.trim()) {
      newErrors.description =
        "Description is required";
    }

    if (!formData.category) {
      newErrors.category =
        "Category is required";
    }

    if (!formData.location.trim()) {
      newErrors.location =
        "Location is required";
    }

    if (!formData.contactName.trim()) {
      newErrors.contactName =
        "Contact name is required";
    }

    if (!formData.contactEmail.trim()) {
      newErrors.contactEmail =
        "Email is required";
    } else if (
      !/\S+@\S+\.\S+/.test(
        formData.contactEmail
      )
    ) {
      newErrors.contactEmail =
        "Invalid email address";
    }

    setErrors(newErrors);

    return Object.keys(newErrors)
      .length === 0;
  };


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    await onSubmit(formData);
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/90 backdrop-blur-xl border border-slate-200 rounded-[32px] shadow-2xl shadow-slate-200/50 p-8 md:p-10 space-y-7"
    >

      {/* Title */}
      <div>
        <label className="block text-slate-800 font-semibold mb-3 text-sm tracking-wide">
          Title
        </label>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/80 text-slate-900 placeholder-slate-400 shadow-sm focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all duration-300"
        />

        {errors.title && (
          <p className="text-red-500 text-sm mt-1">
            {errors.title}
          </p>
        )}
      </div>


      {/* Description */}
      <div>
        <label className="block text-slate-800 font-semibold mb-3 text-sm tracking-wide">
          Description
        </label>

        <textarea
          name="description"
          rows="5"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all duration-300 resize-none"
        />

        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description}
          </p>
        )}
      </div>


      {/* Category */}
      <div>
        <label className="block text-slate-800 font-semibold mb-3 text-sm tracking-wide">
          Category
        </label>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all duration-300"
        >
          <option value="">
            Select Category
          </option>

          {categories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>

        {errors.category && (
          <p className="text-red-500 text-sm mt-2 font-medium">
            {errors.category}
          </p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Location */}
        <div>
          <label className="block text-slate-800 font-semibold mb-3 text-sm tracking-wide">
            Location
          </label>

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all duration-300"
          />

          {errors.location && (
            <p className="text-red-500 text-sm mt-1">
              {errors.location}
            </p>
          )}
        </div>


        {/* Contact Name */}
        <div>
          <label className="block text-slate-800 font-semibold mb-3 text-sm tracking-wide">
            Contact Name
          </label>

          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all duration-300"
          />

          {errors.contactName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.contactName}
            </p>
          )}
        </div>
      </div>


      {/* Contact Email */}
      <div>
        <label className="block text-slate-800 font-semibold mb-3 text-sm tracking-wide">
          Contact Email
        </label>

        <input
          type="email"
          name="contactEmail"
          value={formData.contactEmail}
          onChange={handleChange}
          className="w-full px-5 py-3.5 rounded-2xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-all duration-300"
        />

        {errors.contactEmail && (
          <p className="text-red-500 text-sm mt-1">
            {errors.contactEmail}
          </p>
        )}
      </div>

      <div className="border-t border-slate-100 pt-2"></div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="relative overflow-hidden w-full bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:hover:translate-y-0"
      >
        <span className="relative z-10">
          {loading ? "Posting..." : "Post Job"}
        </span>

        <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
      </button>

    </form>
  );
}
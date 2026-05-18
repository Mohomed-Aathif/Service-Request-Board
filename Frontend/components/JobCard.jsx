import Link from "next/link";

export default function JobCard({ job }) {

  const statusColors = {
  Open:
    "bg-emerald-100 text-emerald-700 border-emerald-200",

  "In Progress":
    "bg-amber-100 text-amber-700 border-amber-200",

  Closed:
    "bg-rose-100 text-rose-700 border-rose-200",
};

  return (
    <div className="group relative bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">

      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600"></div>

      {/* Header */}
      <div className="flex items-start justify-between mb-6">

        <div>
          <p className="text-sm font-semibold text-slate-600 tracking-wide uppercase">
            {job.category}
          </p>
        </div>

        <span
          className={`text-xs px-4 py-1.5 rounded-full font-semibold border ${statusColors[job.status]}`}
        >
          {job.status}
        </span>

      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300">
        {job.title}
      </h2>

      {/* Description */}
      <p className="text-slate-700 leading-relaxed mb-8 line-clamp-3">
        {job.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">

        <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">

          <span className="text-pink-500">
            📍
          </span>

          <span>
            {job.location}
          </span>

        </div>

        <Link
          href={`/jobs/${job._id}`}
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300 group-hover:translate-x-1"
        >
          View Details
          <span>→</span>
        </Link>

      </div>

    </div>
  );
}
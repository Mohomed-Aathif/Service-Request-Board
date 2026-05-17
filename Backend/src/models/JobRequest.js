import mongoose from "mongoose";

const jobRequestSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: ["Plumbing", "Electrical", "Painting", "Joinery"],
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    contactName: {
      type: String,
      required: true,
    },

    contactEmail: {
      type: String,
      required: true,
      match: /^\S+@\S+\.\S+$/,
    },

    status: {
      type: String,
      enum: ["Open", "In Progress", "Closed"],
      default: "Open",
    },
  },
  {
    timestamps: true,
  }
);

const JobRequest = mongoose.model("JobRequest", jobRequestSchema);

export default JobRequest;
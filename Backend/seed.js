import mongoose from "mongoose";
import dotenv from "dotenv";

import connectDB from "./src/config/db.js";

import JobRequest from "./src/models/JobRequest.js";

dotenv.config();

await connectDB();

const sampleJobs = [
  {
    title: "Fix leaking kitchen tap",
    description:
      "Need plumber to repair leaking sink tap.",
    category: "Plumbing",
    location: "Glasgow",
    contactName: "John Smith",
    contactEmail: "john@example.com",
  },

  {
    title: "Paint living room",
    description:
      "Need painter for a 2-bedroom apartment.",
    category: "Painting",
    location: "Edinburgh",
    contactName: "Sarah Lee",
    contactEmail: "sarah@example.com",
  },

  {
    title: "Install ceiling lights",
    description:
      "Need electrician to install LED lights.",
    category: "Electrical",
    location: "Manchester",
    contactName: "Michael Brown",
    contactEmail: "michael@example.com",
  },

  {
    title: "Build wooden shelves",
    description:
      "Looking for joiner to build custom shelves.",
    category: "Joinery",
    location: "Liverpool",
    contactName: "Emma Wilson",
    contactEmail: "emma@example.com",
  },

  {
    title: "Bathroom pipe issue",
    description:
      "Pipe leaking behind bathroom sink.",
    category: "Plumbing",
    location: "Birmingham",
    contactName: "David Clark",
    contactEmail: "david@example.com",
  },
];

const importData = async () => {
  try {
    await JobRequest.deleteMany();

    await JobRequest.insertMany(
      sampleJobs
    );

    console.log(
      "Sample jobs inserted"
    );

    process.exit();
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

importData();
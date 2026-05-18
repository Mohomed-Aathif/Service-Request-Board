import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});


// Get all jobs
export const getJobs = async (params = {}) => {
  const response = await API.get("/jobs", {
    params,
  });

  return response.data;
};


// Get single job
export const getJobById = async (id) => {
  const response = await API.get(`/jobs/${id}`);

  return response.data;
};


// Create job
export const createJob = async (jobData) => {
  const response = await API.post(
    "/jobs",
    jobData
  );

  return response.data;
};


// Update status
export const updateJobStatus = async (
  id,
  status
) => {
  const response = await API.patch(
    `/jobs/${id}`,
    { status }
  );

  return response.data;
};


// Delete job
export const deleteJob = async (id) => {
  const response = await API.delete(
    `/jobs/${id}`
  );

  return response.data;
};
import JobRequest from "../models/JobRequest.js";


// @desc    Get all jobs
// @route   GET /api/jobs
export const getJobs = async (req, res, next) => {
  try {
    const { category, status, search } = req.query;

    let filter = {};

    if (category) {
      filter.category = category;
    }

    if (status) {
      filter.status = status;
    }

    // BONUS: keyword search
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    const jobs = await JobRequest.find(filter).sort({
      createdAt: -1,
    });

    res.status(200).json(jobs);
  } catch (error) {
    next(error);
  }
};


// @desc    Get single job
// @route   GET /api/jobs/:id
export const getJobById = async (req, res, next) => {
  try {
    const job = await JobRequest.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    res.status(200).json(job);
  } catch (error) {
    next(error);
  }
};


// @desc    Create new job
// @route   POST /api/jobs
export const createJob = async (req, res, next) => {
  try {
    const {
      title,
      description,
      category,
      location,
      contactName,
      contactEmail,
    } = req.body;

    const newJob = await JobRequest.create({
      title,
      description,
      category,
      location,
      contactName,
      contactEmail,
    });

    res.status(201).json(newJob);
  } catch (error) {
    next(error);
  }
};


// @desc    Update job status
// @route   PATCH /api/jobs/:id
export const updateJobStatus = async (req, res, next) => {
  try {
    const { status } = req.body;

    const updatedJob = await JobRequest.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!updatedJob) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    res.status(200).json(updatedJob);
  } catch (error) {
    next(error);
  }
};


// @desc    Delete job
// @route   DELETE /api/jobs/:id
export const deleteJob = async (req, res, next) => {
  try {
    const deletedJob = await JobRequest.findByIdAndDelete(
      req.params.id
    );

    if (!deletedJob) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    res.status(200).json({
      message: "Job deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
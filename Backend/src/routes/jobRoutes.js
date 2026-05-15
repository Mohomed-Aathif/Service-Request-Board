import express from "express";

import {
  getJobs,
  getJobById,
  createJob,
  updateJobStatus,
  deleteJob,
} from "../controllers/jobController.js";

import {
  createJobValidation,
  updateStatusValidation,
} from "../validators/jobValidator.js";

import validationMiddleware from "../middleware/validationMiddleware.js";

const router = express.Router();


router.get("/", getJobs);

router.get("/:id", getJobById);

router.post(
  "/",
  createJobValidation,
  validationMiddleware,
  createJob
);

router.patch(
  "/:id",
  updateStatusValidation,
  validationMiddleware,
  updateJobStatus
);

router.delete("/:id", deleteJob);

export default router;
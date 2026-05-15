import { body } from "express-validator";

export const createJobValidation = [
  body("title")
    .notEmpty()
    .withMessage("Title is required"),

  body("description")
    .notEmpty()
    .withMessage("Description is required"),

  body("category")
    .notEmpty()
    .withMessage("Category is required"),

  body("location")
    .notEmpty()
    .withMessage("Location is required"),

  body("contactName")
    .notEmpty()
    .withMessage("Contact name is required"),

  body("contactEmail")
    .isEmail()
    .withMessage("Valid email is required"),
];


export const updateStatusValidation = [
  body("status")
    .isIn(["Open", "In Progress", "Closed"])
    .withMessage("Invalid status"),
];
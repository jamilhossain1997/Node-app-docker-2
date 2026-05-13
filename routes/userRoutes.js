const express = require("express");
const router = express.Router();

const { createUser,getUsers,getUserById } = require("../controllers/userController");



// POST /api/users
router.post("/", createUser);

// GET /api/users/:id
router.get("/:id", getUserById);

// GET /api/users
router.get("/", getUsers);

module.exports = router;
// routes/users.js
const express = require("express");
const router = express.Router();
const UserModel = require("../Models/UserModel");
const emailService = require("../Services/EmailService")

router.post("/adminForgotPassword", async (req, res) => {
  try {
    let payload = {
        email: req.body.email,
    };

    const userData = await UserModel.find(payload)
    if (userData.length > 0) {
        await emailService.sendMail("techtic.avani@gmail.com", "Forgot Password", `<p>{{URL}}/${userData.salt} for redirection</p>`)
    } else {
        res
        .status(204)
        .json({ error: "Admin with given email not found" });
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const list = require("../models/user");
const path = require("path"); // Import the path module

const { getAllList, delete_i, signUp, getByID, updateByID,getByUsername, addData } = require("../controllers/userController");
router.route("/getAllItems").get(getAllList);
router.route("/getByID/:id").get(getByID);
router.route("/updateByID/:id").put(updateByID);
router.route("/getByUsername/:username").get(getByUsername);
router.route("/signUp/").post(signUp);
router.route("/addData").post(addData);

// Example server-side route handling for success pages with authentication
const isAuthenticated = require('../middleware/auth'); // Import middleware for authentication

// Route handler for success page 1
// router.get('/success1.html', isAuthenticated, (req, res) => {
//     // Only serve the success page if the user is authenticated
    
//     const htmlPath = path.join(__dirname, "../public","success1.html");
//         // Send the HTML file
//         res.sendFile(htmlPath);
// });

// Route handler for success page 2
router.get('/success2', isAuthenticated, (req, res) => {
    // Only serve the success page if the user is authenticated
    res.render('success2', { user: req.user }); // Render success2.ejs with user data
});

module.exports = router;

router.get("/login", (req, res) => {
    // Resolve the absolute path to your HTML file
    const htmlPath = path.join(__dirname, "../public","login.html");
    
    // Send the HTML file
    res.sendFile(htmlPath);
});
router.get("/", (req, res) => {
    // Resolve the absolute path to your HTML file
    const htmlPath = path.join(__dirname, "../public","index.html");
    
    // Send the HTML file
    res.sendFile(htmlPath);
});
router.get("/home", (req, res) => {
    // Resolve the absolute path to your HTML file
    const htmlPath = path.join(__dirname, "../public","index.html");
    
    // Send the HTML file
    res.sendFile(htmlPath);
});
router.get("/success1.html", (req, res) => {
    // Resolve the absolute path to your HTML file
    const htmlPath = path.join(__dirname, "../public","success1.html");
    
    // Send the HTML file
    res.sendFile(htmlPath);
});

module.exports = router;
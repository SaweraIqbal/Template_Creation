const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  const authHeader = req.headers.Authorization || req.headers.authorization;
  
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1]; // Extract the token from "Bearer <token>"
    
    // Verify the token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401); // Unauthorized
        throw new Error("User is not authorized, token failed");
      }

      // Set the user information in the request object for further use
      req.user = decoded.user; // `decoded` typically contains user info if it's in the token

      next(); // Call next to move to the next middleware or route
    });
  } else {
    // If the token is missing from the request
    res.status(401); // Unauthorized
    throw new Error("User is not authorized or token is missing in the request");
  }
});

module.exports = validateToken;

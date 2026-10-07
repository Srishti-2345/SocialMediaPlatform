const express = require("express");
const AppError=require("../utils/AppError");

const router = express.Router();

router.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "CampusConnect API is running"
    });
});
// router.get("/test-error", (req, res, next) => {
//     next(
//         new AppError(
//             "This is a test error",
//             400,
//             "TEST_ERROR"
//         )
//     );
// });

module.exports = router;
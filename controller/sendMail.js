const ErrorHanlder = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const sendEmail = require("../utils/sendEmail");
const ErrorHandler = require("../utils/errorhandler");


exports.email = catchAsyncErrors(async (req, res, next) => {
    

    const message="Hello"
    try {
      await sendEmail({
        email: "rishiraj1096@gmail.com",
        subject: `Ecommerce Password Recovery`,
        message,
      });
  
      res.status(200).json({
        success: true,
        message: `Email sent to ${email} successfully`,
      });
    } catch (error) {
  
      return next(new ErrorHandler(error.message, 500));
    }
  });
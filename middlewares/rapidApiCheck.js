module.exports = (req, res, next) => {
  if (!req.header('X-RapidAPI-Key') && !req.header('X-RapidAPI-Host')) {
    return res.status(401).json({
      error: "We only accept requests from Rapid API",
      result_code: "401",
      result_message: "failed",
    });
  }
  next();
};

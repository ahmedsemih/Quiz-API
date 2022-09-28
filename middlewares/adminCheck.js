module.exports = (req, res, next) => {
  if (req.headers.password != process.env.ADMIN_PASSWORD) {
    return res.status(401).json({
      error: "Only admins can use 'POST','PUT' and 'DELETE' methods.",
      result_code: "401",
      result_message: "failed",
    });
  }
  next();
};

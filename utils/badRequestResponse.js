module.exports = (res, error) => {
  if (error)
    return res.status(400).json({
      error,
      result_code: "400",
      result_message: "failed",
    });

  return res.status(400).json({
    error: "Bad Request",
    result_code: "400",
    result_message: "failed",
  });
};

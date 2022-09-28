module.exports = (res, error) => {
  if (error)
    return res.status(404).json({
      error,
      result_code: "404",
      result_message: "failed",
    });

  return res.status(404).json({
    error: "Not Found",
    result_code: "404",
    result_message: "failed",
  });
};

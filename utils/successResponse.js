module.exports = (res,data) => {
  return res.status(200).json({
    data,
    result_code: "200",
    result_message: "success",
  });
};

module.exports = (res,data,dataName) => {
  return res.status(200).json({
    [dataName]:data,
    "result_code": "200",
    "result_message": "success",
  });
};

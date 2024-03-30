var model = require("../model/usermod");

exports.insert = async (req, res) => {
  var data = await model.create(req.body);
  res.status(200).json({
    status:'success...✅',
    data
  });
};
exports.getdata = async (req, res) => {
    var data = await model.find();
    res.status(200).json({
      data
    });
  };
  

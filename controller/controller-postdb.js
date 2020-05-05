const data= require('../data/data');
module.exports.postdb = function(req,res,next){
  var ten = req.body.ten ,
  diem_trung_binh = req.body.diem_trung_binh ,
  hanh_kiem = req.body.hanh_kiem;
  var hocsinh = {
    ten:ten,
    diem_trung_binh:diem_trung_binh,
    hanh_kiem:hanh_kiem
  };
  data.query("INSERT INTO dshocsinh (ten , diem_trung_binh, hanh_kiem) values ($1,$2,$3)", [ten , diem_trung_binh,hanh_kiem], function(err,response){
      if(err)
      {
        res.send(err);
      }
      else
      {
        res.json(hocsinh);
      }
  })    
};
const data= require('../data/data');
module.exports.putdb = (req,res,next) => {
    var id = req.params.id;
    var ten = req.body.ten ,
    diem_trung_binh = req.body.diem_trung_binh ,
    hanh_kiem = req.body.hanh_kiem;
    var hocsinh = {
    ten:ten,
    diem_trung_binh:diem_trung_binh,
    hanh_kiem:hanh_kiem
  };
    data.query("UPDATE dshocsinh SET ten = $1, diem_trung_binh = $2 , hanh_kiem = $3  WHERE id = $4", [ten , diem_trung_binh , hanh_kiem , id ], function(err,response){
        if(err)
        {
          res.send(err);
        }
        else
        {
          res.json(hocsinh);
        }
    })    
}
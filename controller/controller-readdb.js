const data= require('../data/data');
module.exports.readdb = (req,res,next) => {
    var id = req.params.id;

    data.query("SELECT id , ten , diem_trung_binh , hanh_kiem FROM dshocsinh WHERE id = $1",[id], function(err,response){
        if(err)
        {
          res.send(err);
        }
        else
        {
          res.json(response.rows);
        }
    })    
}
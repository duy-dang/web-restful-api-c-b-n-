const data= require('../data/data');
module.exports.deletedb = (req,res,next) => {
    var id = req.params.id;

    data.query("DELETE FROM dshocsinh WHERE id = $1", [ id ], function(err,response){
        if(err)
        {
          res.send(err);
        }
        else
        {
          res.send(response.rows);
        }
    })    
}
const data= require('../data/data');
module.exports.getdb = function(req,res,next){
   data.query("SELECT * FROM dshocsinh" , (err , response) => {
      if(err)
      {
        res.send(err);
      }
      else
      {
        res.json(response.rows);
      }
   }) 
};
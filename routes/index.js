var express = require('express');
var router = express.Router();
var fs = require("fs")

/* GET home page. */
router.get('/', function(req, res) {
  fs.readdir(`./uploads`,{withFileTypes: true},function(err,files){
    res.render('index',{files: files});
   
  })
  
});
router.get("/file/:filename", function(req, res) {

  fs.readdir(`./uploads`,{withFileTypes: true},function(err,files){
    fs.readFile(`./uploads/${req.params.filename}`, "utf8",function(err,data){
      res.render('opened',{files: files, filename: req.params.filename, filedata: data});
    })
})
router.get("/file/:filename", function(req, res) {

  fs.readdir(`./uploads`,{withFileTypes: true},function(err,files){
    fs.readFile(`./uploads/${req.params.filename}`, "utf8",function(err,data){
      res.render('opened',{files: files, filename: req.params.filename, filedata: data});
    })
}) 
})
  
});


router.post("/filechange/:filename", function(req, res) {
  fs.writeFile(`./uploads/${req.params.filename}`, req.body.filedata , function(err){
    res.redirect("back")
  })
})
router.post("/delete/:filename", function(req, res) {
  fs.unlink(`./uploads/${req.params.filename}`,function(err){
    // res.redirect("/")
    
    if(err) res.send(err);
    else res.redirect('back')
  })
})

router.get('/filecreate', function(req, res) {
  fs.writeFile(`./uploads/${req.query.filename}`,"",function(err){
    if(err) res.send(err);
    else res.redirect("back")
  })
});
router.get('/foldercreate', function(req, res) {
  fs.mkdir(`./uploads/${req.query.foldername}`, function(err){
    if(err) res.send(err);
    else res.redirect("back")
  })
  });


module.exports = router;

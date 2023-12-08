var express = require('express');
const { render } = require('../app')
var router = express.Router();
var productHelper = require('../helpers/product-helpers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  let product = [
    {
      name:"lenovo idea pad",
      category:'laptop',
      description:'this is a gaming laptop',
      Image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSQBe6PASfJq33iuriqdmmKaRvfquiBURUQGadZ-dfvWfkQaJPzPt-ZueBZ44OlGNzAyUs4w7tIdZ_xC1IEMhL1AHkfQbH1LpueqzE5XBkic0WfsCwoIJ1u&usqp=CAc'
    },
    {
      name:"acer aspire 5 ",
      category:'laptop',
      description:'this is a good gaming laptop',
      Image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQGFAka56rgZkpl4y9JfyGjECKMojQ17eM-ecEhuIvkMC47q9YfQ5vOZbRAUGrV0CSPV7VNkap6vyArQtLG0uWeUa6ch2q4dKFWrLHPcQWRhjj7xNH3H2Oy&usqp=CAc'
    },
    {
      name:"I pad pro",
      category:'pad',
      description:'this is a good pad,using drawing',
      Image:'https://m.media-amazon.com/images/I/81gC7frRJyL._AC_UY327_FMwebp_QL65_.jpg'
    },
    {
      name:"iqoo z7s",
      category:'mobile',
      description:'this is a gaming phone',
      Image:'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1684498687907/10a39fc339071050753cba1c7c824f5a.png'
    }
  ]
  res.render('admin/view-products',{admin:true, product})
});

router.get('/add-product',function(req,res){
  res.render("admin/add-product")
})

router.post('/add-product',(req,res)=>{
  console.log(req.body);
  console.log(req.files.Image);

  productHelper.addProduct(req.body,(result) => {
    res.render("/admin/add-product")
  })
})

module.exports = router;

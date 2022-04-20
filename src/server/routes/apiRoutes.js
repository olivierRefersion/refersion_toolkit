const { default: axios } = require('axios');
express = require('express');
router = express.Router();



router.route('/manualcredits').post((req, res, next) => {
    
  // function gotThisFromTheBack(req.body){
  //   console.log("I got "+ req.body.pubKey + " from  the front  end!")
  // }

  
    // axios({
    //     method: 'post',
    //     url: 'https://api.refersion.com/v2/conversion/manual_credit',
    //     data: {
    //       //Some data
    //     }
    // });
    
    // user.create(req.body, (error, data) => {
    //     if (error) {
    //         return next(error)
    //     } else {
    //         console.log(data)
    //         res.json(data)
    //     }
    // })
});

router.route('/manualorders').post((req, res, next) => {
    
    // axios({
    //     method: 'post',
    //     url: 'https://www.refersion.dev/reference/manual_credit_order_id',
    //     data: {
    //       //Some data
    //     }
    // });
    
    // user.create(req.body, (error, data) => {
    //     if (error) {
    //         return next(error)
    //     } else {
    //         console.log(data)
    //         res.json(data)
    //     }
    // })
});

module.exports = router;
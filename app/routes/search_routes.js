const trainController = require("../controllers/train_controller.js");

module.exports = router => {

  router.get('/search', trainController.getSearchResults);

};
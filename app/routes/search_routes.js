const trainController = require("../controllers/train_controller.js");

module.exports = router => {

  router.post('/search', trainController.getSearchResults);

};
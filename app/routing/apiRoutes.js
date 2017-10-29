// ===============================================================================

var friends = require("../data/friends");
var path = require('path');

// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  
  app.get("/api/survey", function(req, res) {
    res.json(friends);
  });
  //==================================================================
  app.post("/api/survey", function(req, res) {
    
      friends.push(req.body);
  
  });

  // ---------------------------------------------------------------------------
  //

  app.post("/api/clear", function() {

    friends = [];
    console.log(friends);
  });
};

// ===============================================================================

var friendFinder = require("../data/friends");
var path = require('path');

// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  
  app.get("/api/friends", function(req, res) {
    res.json(friendFinder);
  });

  // API POST Requests
  
  app.post("/api/friends", function(req, res) {
    
      friends.push(req.body);
  
  });

  // ---------------------------------------------------------------------------
  //

  app.post("/api/clear", function() {
    
    friends = [];
    

    console.log(friends);
  });
};

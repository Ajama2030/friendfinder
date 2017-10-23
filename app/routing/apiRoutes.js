// ===============================================================================

var friendFinder = require("../data/friends");


// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  
  app.get("/api/friends", function(req, res) {
    res.json(friendFinder);
  });

  // API POST Requests
  
  app.post("/api/friends", function(req, res) {
    
    // It will do this by sending out the value "true" have a table
    if (friends.length < 5) {
      friends.push(req.body);
      res.json(true);
    }
    else {
      friends.push(req.body);
      res.json(false);
    }
  });

  // ---------------------------------------------------------------------------
  //

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friends = [];
    

    console.log(friends);
  });
};

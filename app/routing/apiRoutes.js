const express = require('express');
const router = express.Router();
const friends = require("./../data/friends")


router.get("/friends", function (req, res) {
    
    res.json(friends);
});

router.post("/friends", function (req, res) {
  
    var data = req.body;
    
    var diffArray = [];

    friends.forEach(friend => {
        var totalDifference = 0;
        var scoreIndex = 0;
        friend.scores.forEach(element => {
            totalDifference += Math.abs(data.scores[scoreIndex] - element);
            scoreIndex++;
        });
        diffArray.push(totalDifference);
    });
  
    var index = diffArray.indexOf(Math.min.apply(null, diffArray));

   
    friends.push(data);

    
    res.json(friends[index]);
});

module.exports = router;
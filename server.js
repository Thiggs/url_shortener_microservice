var express = require("express");
var app= express();
var original =[];

app.get("/:hype//:url", function(req, res){
    var origHyp = (req.params.hype+"//");
    var origUrl = req.params.url;
    
    if (origHyp === "http://" && origUrl.split(".").length>1){
    original.push((origHyp+origUrl));
    res.send({
        oringialUrl: (origHyp + origUrl), 
        shortURL: ("https://url-shortener-microservice-thiggs.c9users.io/st//"+(original.length-1))
    });
    }
        
    else if (origHyp === "st//" && original[req.params.url]){
        res.redirect(
            original[req.params.url]
        );
    }
    
    else{
        res.send({
            error: "URL invalid"
        });
    }
});


app.listen(8080);
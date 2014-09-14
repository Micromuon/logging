var databaseUrl = "logDB"; // "username:password@example.com/mydb"
var collections = ["healthcheck", "discovery", "deployer", "alerting", "all"];
var db = require("mongojs").connect(databaseUrl, collections);
var redisPubSub = require("node-redis-pubsub-fork"),
    pubsubChannel = new redisPubSub({ scope: "messages" });

pubsubChannel.on("*", function(data, channel) {

    var channelArray = channel.split(":");
    var serviceChannel = channelArray[1];
    var subChannel = channelArray[2];

    if (serviceChannel != "logging") {

        data.channel = subChannel;
        data.timeStamp = new Date();

        db[serviceChannel].save(data, function (err, saved) {
            if (err || !saved) {
                console.log("Not logged");
            } else {
                console.log("Logged");
                var allData = data;
                allData.serviceInQuestion = serviceChannel;
                db["all"].save(allData, function (err2, saved2) {
                    if (err2 || !saved2) {
                        console.log("Not logged in all");
                    } else {
                        console.log("Logged in all");
                    }
                });
            }
        });
        
        
    }
});

pubsubChannel.on("logging:query", function(data) {
    var service = data.service;

    if (collections.indexOf(service) > -1) {
        // Remove service name from data JSON so that we can use data to query
        delete data.service;

        db[service].find(data).toArray(function (err, result) {
            if (err && !result) {
                console.log("Error querying logs");
            } else {
                pubsubChannel.emit("logging:queryResults", result);
            }
        });
    } else {
        pubsubChannel.emit("logging:queryResults", []);
    }
});
var databaseUrl = "logDB"; // "username:password@example.com/mydb"
var collections = ["healthcheck", "deployer", "discovery", "alerting", "all"];
var db = require("mongojs").connect(databaseUrl, collections);
var assert = require("assert"),
    redisPubSub = require("node-redis-pubsub-fork"),
    pubsubChannel = new redisPubSub({ scope: "messages" }),
    timers = require("timers");
require("../logging.js");


describe("test healthcheck logging: ", function() {
    
    after(function(){
        db.healthcheck.drop();
        db.all.drop();
    });

    it("**healthcheck:submit**", function(done) {
        var testData = {name: "testName", url: "testURL", frequency: "testFreq", expectedResBody: "testExpectedResBody", expectedResStatus: "testExpectedResStatus"};
        pubsubChannel.emit("healthcheck:submit", testData);
        // wait for saving to occur
        timers.setTimeout(function() {
                // find the entry in the database and check that it matches data submitted
                db.healthcheck.find({"channel": "submit"}).toArray(function(err, result) {
                    if (err || !result) {
                        console.log("No log entry found!!");
                    } else {
                        assert.notEqual(result[0].timeStamp, null);
                        assert.equal(result[0].channel, "submit");
                        assert.equal(result[0].name, testData.name);
                        assert.equal(result[0].url, testData.url);
                        assert.equal(result[0].frequency, testData.frequency);
                        assert.equal(result[0].expectedResBody, testData.expectedResBody);
                        assert.equal(result[0].expectedResStatus, testData.expectedResStatus);
                        done();
                    }
                });
        }, 1000);
    });
    
    it("**healthcheck:stop**", function(done) {
        var testData = {name: "testName", url: "testURL", frequency: "testFreq", expectedResBody: "testExpectedResBody", expectedResStatus: "testExpectedResStatus"};
        pubsubChannel.emit("healthcheck:stop", testData);
        // wait for saving to occur
        timers.setTimeout(function() {
                // find the entry in the database and check that it matches data submitted
                db.healthcheck.find({"channel": "stop"}).toArray(function(err, result) {
                    if (err || !result) {
                        console.log("No log entry found!!");
                    } else {
                        assert.notEqual(result[0].timeStamp, null);
                        assert.equal(result[0].channel, "stop");
                        assert.equal(result[0].name, testData.name);
                        assert.equal(result[0].url, testData.url);
                        assert.equal(result[0].frequency, testData.frequency);
                        assert.equal(result[0].expectedResBody, testData.expectedResBody);
                        assert.equal(result[0].expectedResStatus, testData.expectedResStatus);
                        done();
                    }
                });
        }, 1000);
    });
    
    it("**healthcheck:stopped**", function(done) {
        var testData = {name: "testName", url: "testURL", frequency: "testFreq", expectedResBody: "testExpectedResBody", expectedResStatus: "testExpectedResStatus"};
        pubsubChannel.emit("healthcheck:stopped", testData);
        // wait for saving to occur
        timers.setTimeout(function() {
                // find the entry in the database and check that it matches data submitted
                db.healthcheck.find({"channel": "stopped"}).toArray(function(err, result) {
                    if (err || !result) {
                        console.log("No log entry found!!");
                    } else {
                        assert.notEqual(result[0].timeStamp, null);
                        assert.equal(result[0].channel, "stopped");
                        assert.equal(result[0].name, testData.name);
                        assert.equal(result[0].url, testData.url);
                        assert.equal(result[0].frequency, testData.frequency);
                        assert.equal(result[0].expectedResBody, testData.expectedResBody);
                        assert.equal(result[0].expectedResStatus, testData.expectedResStatus);
                        done();
                    }
                });
        }, 1000);
    });
    
    it("**healthcheck:update**", function(done) {
        var testData = {name: "testName", url: "testURL", frequency: "testFreq", expectedResBody: "testExpectedResBody", expectedResStatus: "testExpectedResStatus"};
        pubsubChannel.emit("healthcheck:update", testData);
        // wait for saving to occur
        timers.setTimeout(function() {
                // find the entry in the database and check that it matches data submitted
                db.healthcheck.find({"channel": "update"}).toArray(function(err, result) {
                    if (err || !result) {
                        console.log("No log entry found!!");
                    } else {
                        assert.notEqual(result[0].timeStamp, null);
                        assert.equal(result[0].channel, "update");
                        assert.equal(result[0].name, testData.name);
                        assert.equal(result[0].url, testData.url);
                        assert.equal(result[0].frequency, testData.frequency);
                        assert.equal(result[0].expectedResBody, testData.expectedResBody);
                        assert.equal(result[0].expectedResStatus, testData.expectedResStatus);
                        done();
                    }
                });
        }, 1000);
    });
    
    it("**healthcheck:updated**", function(done) {
        var testData = {name: "testName", url: "testURL", frequency: "testFreq", expectedResBody: "testExpectedResBody", expectedResStatus: "testExpectedResStatus"};
        pubsubChannel.emit("healthcheck:updated", testData);
        // wait for saving to occur
        timers.setTimeout(function() {
                // find the entry in the database and check that it matches data submitted
                db.healthcheck.find({"channel": "updated"}).toArray(function(err, result) {
                    if (err || !result) {
                        console.log("No log entry found!!");
                    } else {
                        assert.notEqual(result[0].timeStamp, null);
                        assert.equal(result[0].channel, "updated");
                        assert.equal(result[0].name, testData.name);
                        assert.equal(result[0].url, testData.url);
                        assert.equal(result[0].frequency, testData.frequency);
                        assert.equal(result[0].expectedResBody, testData.expectedResBody);
                        assert.equal(result[0].expectedResStatus, testData.expectedResStatus);
                        done();
                    }
                });
        }, 1000);
    });
    
    it("**healthcheck:delete**", function(done) {
        var testData = {name: "testName", url: "testURL", frequency: "testFreq", expectedResBody: "testExpectedResBody", expectedResStatus: "testExpectedResStatus"};
        pubsubChannel.emit("healthcheck:delete", testData);
        // wait for saving to occur
        timers.setTimeout(function() {
                // find the entry in the database and check that it matches data submitted
                db.healthcheck.find({"channel": "delete"}).toArray(function(err, result) {
                    if (err || !result) {
                        console.log("No log entry found!!");
                    } else {
                        assert.notEqual(result[0].timeStamp, null);
                        assert.equal(result[0].channel, "delete");
                        assert.equal(result[0].name, testData.name);
                        assert.equal(result[0].url, testData.url);
                        assert.equal(result[0].frequency, testData.frequency);
                        assert.equal(result[0].expectedResBody, testData.expectedResBody);
                        assert.equal(result[0].expectedResStatus, testData.expectedResStatus);
                        done();
                    }
                });
        }, 1000);
    });
    
    it("**healthcheck:deleted**", function(done) {
        var testData = {name: "testName", url: "testURL", frequency: "testFreq", expectedResBody: "testExpectedResBody", expectedResStatus: "testExpectedResStatus"};
        pubsubChannel.emit("healthcheck:deleted", testData);
        // wait for saving to occur
        timers.setTimeout(function() {
                // find the entry in the database and check that it matches data submitted
                db.healthcheck.find({"channel": "deleted"}).toArray(function(err, result) {
                    if (err || !result) {
                        console.log("No log entry found!!");
                    } else {
                        assert.notEqual(result[0].timeStamp, null);
                        assert.equal(result[0].channel, "deleted");
                        assert.equal(result[0].name, testData.name);
                        assert.equal(result[0].url, testData.url);
                        assert.equal(result[0].frequency, testData.frequency);
                        assert.equal(result[0].expectedResBody, testData.expectedResBody);
                        assert.equal(result[0].expectedResStatus, testData.expectedResStatus);
                        done();
                    }
                });
        }, 1000);
    });
    
    it("**healthcheck:failed**", function(done) {
        var testData = {name: "testName", url: "testUrl", expectedResBody: "testExpectedResBody", actualResBody: "testActualResBody", expectedResStatus: "testExpectedResStatus", actualResStatus: "actualResStatus", result: "failing"};
        pubsubChannel.emit("healthcheck:failed", testData);
        // wait for saving to occur
        timers.setTimeout(function() {
                // find the entry in the database and check that it matches data submitted
                db.healthcheck.find({"channel": "failed"}).toArray(function(err, result) {
                    if (err || !result) {
                        console.log("No log entry found!!");
                    } else {
                        assert.notEqual(result[0].timeStamp, null);
                        assert.equal(result[0].channel, "failed");
                        assert.equal(result[0].name, testData.name);
                        assert.equal(result[0].url, testData.url);
                        assert.equal(result[0].expectedResBody, testData.expectedResBody);
                        assert.equal(result[0].actualResBody, testData.actualResBody);
                        assert.equal(result[0].expectedResStatus, testData.expectedResStatus);
                        assert.equal(result[0].actualResStatus, testData.actualResStatus);
                        assert.equal(result[0].result, testData.result);
                        done();
                    }
                });
        }, 1000);
    });
    
    it("**healthcheck:passed**", function(done) {
        var testData = {name: "testName", url: "testUrl", expectedResBody: "testExpectedResBody", actualResBody: "testActualResBody", expectedResStatus: "testExpectedResStatus", actualResStatus: "actualResStatus", result: "passing"};
        pubsubChannel.emit("healthcheck:passed", testData);
        // wait for saving to occur
        timers.setTimeout(function() {
                // find the entry in the database and check that it matches data submitted
                db.healthcheck.find({"channel": "passed"}).toArray(function(err, result) {
                    if (err || !result) {
                        console.log("No log entry found!!");
                    } else {
                        assert.notEqual(result[0].timeStamp, null);
                        assert.equal(result[0].channel, "passed");
                        assert.equal(result[0].name, testData.name);
                        assert.equal(result[0].url, testData.url);
                        assert.equal(result[0].expectedResBody, testData.expectedResBody);
                        assert.equal(result[0].actualResBody, testData.actualResBody);
                        assert.equal(result[0].expectedResStatus, testData.expectedResStatus);
                        assert.equal(result[0].actualResStatus, testData.actualResStatus);
                        assert.equal(result[0].result, testData.result);
                        done();
                    }
                });
        }, 1000);
    });

    it("queries healthcheck logs", function(done) {
        var testData = {name: "testName", url: "testURL", frequency: "testFreq", expectedResBody: "testExpectedResBody", expectedResStatus: "testExpectedResStatus"};
        pubsubChannel.once("logging:queryResults", function(data) {
            assert.notEqual(data[0].timeStamp, null);
            assert.equal(data[0].channel, "submit");
            assert.equal(data[0].name, testData.name);
            assert.equal(data[0].url, testData.url);
            assert.equal(data[0].frequency, testData.frequency);
            assert.equal(data[0].expectedResBody, testData.expectedResBody);
            assert.equal(data[0].expectedResStatus, testData.expectedResStatus);
            done();
        });
        pubsubChannel.emit("logging:query", {service: "healthcheck", channel: "submit", name: "testName"});
    });
    
});

describe("test discovery logging: ", function() {
    
    after(function(){
        db.discovery.drop();
        db.all.drop();
    });

    it("**discovery:savedDiscovery**", function(done) {
        var testData = {message: "testMessage"};
        pubsubChannel.emit("discovery:savedDiscovery", testData);
        // wait for saving to occur
        timers.setTimeout(function() {
                // find the entry in the database and check that it matches data submitted
                db.discovery.find({"channel": "savedDiscovery"}).toArray(function(err, result) {
                    if (err || !result) {
                        console.log("No log entry found!!");
                    } else {
                        assert.notEqual(result[0].timeStamp, null);
                        assert.equal(result[0].channel, "savedDiscovery");
                        assert.equal(result[0].message, testData.message);
                        done();
                    }
                });
        }, 1000);
    });
    
    it("**discovery:getInfo**", function(done) {
        var testData = {"name": "testName"} ;
        pubsubChannel.emit("discovery:getInfo", testData);
        // wait for saving to occur
        timers.setTimeout(function() {
                // find the entry in the database and check that it matches data submitted
                db.discovery.find({"channel": "getInfo"}).toArray(function(err, result) {
                    if (err || !result) {
                        console.log("No log entry found!!");
                    } else {
                        assert.notEqual(result[0].timeStamp, null);
                        assert.equal(result[0].channel, "getInfo");
                        assert.equal(result[0].name, testData.name);
                        done();
                    }
                });
        }, 1000);
    });
    
    it("**discovery:serviceInfo**", function(done) {
        var testData = {"serviceName": "testServiceName", "serviceInfo": "testServiceInfo"};
        pubsubChannel.emit("discovery:serviceInfo", testData);
        // wait for saving to occur
        timers.setTimeout(function() {
                // find the entry in the database and check that it matches data submitted
                db.discovery.find({"channel": "serviceInfo"}).toArray(function(err, result) {
                    if (err || !result) {
                        console.log("No log entry found!!");
                    } else {
                        assert.notEqual(result[0].timeStamp, null);
                        assert.equal(result[0].channel, "serviceInfo");
                        assert.equal(result[0].serviceName, testData.serviceName);
                        assert.equal(result[0].serviceInfo, testData.serviceInfo);
                        done();
                    }
                });
        }, 1000);
    });
    
    it("**discovery:updatedStatus**", function(done) {
        var testData = {"status": "testStatus","name": "testName"} ;
        pubsubChannel.emit("discovery:updatedStatus", testData);
        // wait for saving to occur
        timers.setTimeout(function() {
                // find the entry in the database and check that it matches data submitted
                db.discovery.find({"channel": "updatedStatus"}).toArray(function(err, result) {
                    if (err || !result) {
                        console.log("No log entry found!!");
                    } else {
                        assert.notEqual(result[0].timeStamp, null);
                        assert.equal(result[0].channel, "updatedStatus");
                        assert.equal(result[0].name, testData.name);
                        assert.equal(result[0].status, testData.status);
                        done();
                    }
                });
        }, 1000);
    });
    
    it("**discovery:removed**", function(done) {
        var testData = {message: "testMessage"};
        pubsubChannel.emit("discovery:removed", testData);
        // wait for saving to occur
        timers.setTimeout(function() {
                // find the entry in the database and check that it matches data submitted
                db.discovery.find({"channel": "removed"}).toArray(function(err, result) {
                    if (err || !result) {
                        console.log("No log entry found!!");
                    } else {
                        assert.notEqual(result[0].timeStamp, null);
                        assert.equal(result[0].channel, "removed");
                        assert.equal(result[0].message, testData.message);
                        done();
                    }
                });
        }, 1000);
    });

    it("queries discovery logs", function(done) {
        var testData = {message: "testMessage"};
        pubsubChannel.once("logging:queryResults", function(data) {
            assert.notEqual(data[0].timeStamp, null);
            assert.equal(data[0].channel, "removed");
            assert.equal(data[0].message, testData.message);
            done();
        });
        pubsubChannel.emit("logging:query", {service: "discovery", channel: "removed", message: "testMessage"});
    });
    
});



describe("test deployer logging: ", function() {
    
    after(function(){
        db.deployer.drop();
        db.all.drop();
    });

    it("**deployer:deploy**", function(done) {
        var testData = {url: "testUrl"};
        pubsubChannel.emit("deployer:deploy", testData);
        // wait for saving to occur
        timers.setTimeout(function() {
                // find the entry in the database and check that it matches data submitted
                db.deployer.find({"channel": "deploy"}).toArray(function(err, result) {
                    if (err || !result) {
                        console.log("No log entry found!!");
                    } else {
                        assert.notEqual(result[0].timeStamp, null);
                        assert.equal(result[0].channel, "deploy");
                        assert.equal(result[0].url, testData.url);
                        done();
                    }
                });
        }, 1000);
    });
    
    it("**deployer:deployed**", function(done) {
        var testData = { name: "testName", url: "testUrl", path: "testPath", status: "testStatus" } ;
        pubsubChannel.emit("deployer:deployed", testData);
        // wait for saving to occur
        timers.setTimeout(function() {
                // find the entry in the database and check that it matches data submitted
                db.deployer.find({"channel": "deployed"}).toArray(function(err, result) {
                    if (err || !result) {
                        console.log("No log entry found!!");
                    } else {
                        assert.notEqual(result[0].timeStamp, null);
                        assert.equal(result[0].channel, "deployed");
                        assert.equal(result[0].name, testData.name);
                        assert.equal(result[0].url, testData.url);
                        assert.equal(result[0].path, testData.path);
                        assert.equal(result[0].status, testData.status);
                        done();
                    }
                });
        }, 1000);
    });
    
    it("**deployer:start**", function(done) {
        var testData =  { name: "testName" };
        pubsubChannel.emit("deployer:start", testData);
        // wait for saving to occur
        timers.setTimeout(function() {
                // find the entry in the database and check that it matches data submitted
                db.deployer.find({"channel": "start"}).toArray(function(err, result) {
                    if (err || !result) {
                        console.log("No log entry found!!");
                    } else {
                        assert.notEqual(result[0].timeStamp, null);
                        assert.equal(result[0].channel, "start");
                        assert.equal(result[0].name, testData.name);
                        done();
                    }
                });
        }, 1000);
    });
    
    it("**deployer:started**", function(done) {
        var testData = {"status": "testStatus","name": "testName"} ;
        pubsubChannel.emit("deployer:started", testData);
        // wait for saving to occur
        timers.setTimeout(function() {
                // find the entry in the database and check that it matches data submitted
                db.deployer.find({"channel": "started"}).toArray(function(err, result) {
                    if (err || !result) {
                        console.log("No log entry found!!");
                    } else {
                        assert.notEqual(result[0].timeStamp, null);
                        assert.equal(result[0].channel, "started");
                        assert.equal(result[0].name, testData.name);
                        assert.equal(result[0].status, testData.status);
                        done();
                    }
                });
        }, 1000);
    });
    
    it("**deployer:stop**", function(done) {
        var testData = { name: "testName", processId: "testProcessId", port: "testPort" };
        pubsubChannel.emit("deployer:stop", testData);
        // wait for saving to occur
        timers.setTimeout(function() {
                // find the entry in the database and check that it matches data submitted
                db.deployer.find({"channel": "stop"}).toArray(function(err, result) {
                    if (err || !result) {
                        console.log("No log entry found!!");
                    } else {
                        assert.notEqual(result[0].timeStamp, null);
                        assert.equal(result[0].channel, "stop");
                        assert.equal(result[0].name, testData.name);
                        assert.equal(result[0].processId, testData.processId);
                        assert.equal(result[0].port, testData.port);
                        done();
                    }
                });
        }, 1000);
    });
    
    it("**deployer:stopped**", function(done) {
        var testData = {message: "testMessage"};
        pubsubChannel.emit("deployer:stopped", testData);
        // wait for saving to occur
        timers.setTimeout(function() {
                // find the entry in the database and check that it matches data submitted
                db.deployer.find({"channel": "stopped"}).toArray(function(err, result) {
                    if (err || !result) {
                        console.log("No log entry found!!");
                    } else {
                        assert.notEqual(result[0].timeStamp, null);
                        assert.equal(result[0].channel, "stopped");
                        assert.equal(result[0].message, testData.message);
                        done();
                    }
                });
        }, 1000);
    });
    
    it("**deployer:delete**", function(done) {
        var testData =  { name: "testName" };
        pubsubChannel.emit("deployer:delete", testData);
        // wait for saving to occur
        timers.setTimeout(function() {
                // find the entry in the database and check that it matches data submitted
                db.deployer.find({"channel": "delete"}).toArray(function(err, result) {
                    if (err || !result) {
                        console.log("No log entry found!!");
                    } else {
                        assert.notEqual(result[0].timeStamp, null);
                        assert.equal(result[0].channel, "delete");
                        assert.equal(result[0].name, testData.name);
                        done();
                    }
                });
        }, 1000);
    });
    
    it("**deployer:deleted**", function(done) {
        var testData = {message: "testMessage"};
        pubsubChannel.emit("deployer:deleted", testData);
        // wait for saving to occur
        timers.setTimeout(function() {
                // find the entry in the database and check that it matches data submitted
                db.deployer.find({"channel": "deleted"}).toArray(function(err, result) {
                    if (err || !result) {
                        console.log("No log entry found!!");
                    } else {
                        assert.notEqual(result[0].timeStamp, null);
                        assert.equal(result[0].channel, "deleted");
                        assert.equal(result[0].message, testData.message);
                        done();
                    }
                });
        }, 1000);
    });    

    it("**deployer:deployError**", function(done) {
        var testData = {url: "testUrl"};
        pubsubChannel.emit("deployer:deployError", testData);
        // wait for saving to occur
        timers.setTimeout(function() {
                // find the entry in the database and check that it matches data submitted
                db.deployer.find({"channel": "deployError"}).toArray(function(err, result) {
                    if (err || !result) {
                        console.log("No log entry found!!");
                    } else {
                        assert.notEqual(result[0].timeStamp, null);
                        assert.equal(result[0].channel, "deployError");
                        assert.equal(result[0].url, testData.url);
                        done();
                    }
                });
        }, 1000);
    });
    
    it("**deployer:startError**", function(done) {
        var testData = {url: "testUrl"};
        pubsubChannel.emit("deployer:startError", testData);
        // wait for saving to occur
        timers.setTimeout(function() {
                // find the entry in the database and check that it matches data submitted
                db.deployer.find({"channel": "startError"}).toArray(function(err, result) {
                    if (err || !result) {
                        console.log("No log entry found!!");
                    } else {
                        assert.notEqual(result[0].timeStamp, null);
                        assert.equal(result[0].channel, "startError");
                        assert.equal(result[0].url, testData.url);
                        done();
                    }
                });
        }, 1000);
    });

    it("queries deployer logs", function(done) {
        var testData = {url: "testUrl"};
        pubsubChannel.once("logging:queryResults", function(data) {
            assert.notEqual(data[0].timeStamp, null);
            assert.equal(data[0].channel, "startError");
            assert.equal(data[0].url, testData.url);
            done();
        });
        pubsubChannel.emit("logging:query", {service: "deployer", channel: "startError", url: "testUrl"});
    });
});
    

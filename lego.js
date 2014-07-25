var http = require("http");
var url = require("url");
var fs = require("fs");
var hash = require("sha1");
var path = require("path");
var mongo = require("mongodb");
var databaseUrl = "mongodb://localhost/myDb";

var projectData = function projectData( status ){
    return {
        status: status,
        data: []
    }
};

var mongoDbConnect = function mongoDbConnect( callback ){
    mongo.connect(databaseUrl, function ( err , db ) {
        if(!err){
            callback( db );
        }
    });
}

var mongoDbInsert = function mongoDbInsert( collections , data , db ) {
    var collection = db.collection( collections );
    collection.update( {functionName: data.functionName } , data, {upsert: true, w: 1}, function ( err , result ) {
        if(err)throw err;
    });
}

var mongoDbGetProjectName = function mongoDbGetProjectName( collections , db , response ){
    var collection = db.collection( collections );
    var project = projectData("success");
    collection.find({}).toArray(function ( err , docs ) {
        docs.forEach(function ( doc ) {
            if( project.data.indexOf( doc.packageName ) < 0)
                project.data.push( doc.packageName );
        });
        response.write(JSON.stringify(project , null , 3));
        response.end("\n");
    });
}

var mongoDbGetTestResult = function mongoDbGetTestResult( query , collections , db , response ){
    var collection = db.collection( collections );
    var project = projectData("success");
    collection.find({packageName: query}).toArray(function ( err , docs ) {
        if( docs.length == 0 )
            project.status = "failed";
        docs.forEach(function ( doc ) {
           var arrayData = [];
           doc.result.forEach(function ( result ) {
               var objectData = {
                   id: hash( result.fullTitle + doc.functionName ),
                   state: result.err ? false : true,
                   data: result
               }
               arrayData.push( objectData );
           });
           project.data.push( arrayData );
        });
        response.write(JSON.stringify(project , null , 3));
        response.end("\n");
    });
};

var contentType = function contentType( ext ){
    var content = {
        '.html' : 'text/html',
        '.json' : 'application/json',
        '.css' : 'text/css',
        '.js' : 'text/js'
    };

    return {'Content-Type': content[ext]};
};

http.createServer(function (request , response) {
    var requestObject = url.parse( request.url , true );
    if(requestObject.pathname == "/"){
        var staticFile = fs.readFileSync(__dirname + "/index.html");
        response.writeHead(200, contentType(".html"));
        response.end(staticFile);
    }else if(requestObject.pathname.match(/js\//i)){
        var filepath = __dirname + "/" + request.url,
            fileext = path.extname(filepath);
                fs.readFile(filepath, function (err, content) {
                    if (err) {
                        response.writeHead(500);
                        response.end();
                    } else {
                        response.writeHead(200, contentType(fileext));
                        response.end(content);
                    }
                });
    }else if(requestObject.pathname == "/server") {
        var body = "";
        response.writeHead(200, {"Content-Type": "application/json"});
        request.on("data", function (data) {
            body += data;
        });
        request.on("end", function () {
            var data = JSON.parse(body);
            response.write(JSON.stringify({"status": "success"}));
            mongoDbConnect(function ( db ) {
                mongoDbInsert( "reports" , data , db );
            });
            response.end();
        });
    }else if(requestObject.pathname == "/lego/toy/all"){
        response.writeHead(200, {"Content-Type": "application/json"});
        mongoDbConnect(function ( db ) {
            mongoDbGetProjectName( "reports" , db , response );
        });
    }else if(requestObject.pathname == "/lego/test/all" && requestObject.query.packageName){
        response.writeHead(200, {"Content-Type": "application/json"});
        mongoDbConnect(function ( db ) {
            mongoDbGetTestResult( requestObject.query.packageName , "reports" , db , response );
        });
    }else{
        var statusData = projectData("failed");
        response.write(JSON.stringify(statusData, null, 3));
        response.end("\n");
    }

}).listen(8080);

console.log("Server Now Running !!!");
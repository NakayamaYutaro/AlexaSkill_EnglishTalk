const COLOR_RED = [0.675, 0.322];
const COLOR_BLUE = [0.167, 0.04];
const COLOR_GREEN = [0.409, 0.518];

function changeHueColor(color){
    var http = require("https");
    
    var options = {
	"method": "PUT",
	"hostname": "api.meethue.com",
	"path": "/bridge/Kvxc39vOOzj7295H1LGseOlcKGD1TJvHKMmeGcwG/groups/0/action",
	"headers": {
	    "Authorization": "Bearer 4SIqVigeH28KNTJ9zB4dKOcDyA3B",//edited
	    "Content-Type": "application/json",
	    "Cache-Control": "no-cache",
	    "Postman-Token": "b0d71b7c-86f0-47f4-aa40-7236fc35cf9b"//edited
	}
    };

    var req = http.request(options, function (res) {
	    var chunks = [];
        res.on("data", function (chunk) {
	     chunks.push(chunk);
        });

	    res.on("end", function () {
            var body = Buffer.concat(chunks);
	        console.log(body.toString());
        });
    });

		req.write(JSON.stringify({ on: true, bri: 100, xy: color }));
    req.end();
}

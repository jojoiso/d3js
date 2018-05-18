/* d3.select("body")
    .append("p")
    .text("New paragraph!"); */

/* var body = d3.select("body");
var p = body.append("p");
p.text("Hell New Para"); */

// var dataset = [ 5, 10, 15, 20, 25 ];

var rowConverter = function(d) {
    return {
        Food: d.Food, //No conversion
        Deliciousness: parseFloat(+d.Deliciousness)
    };
}

var dataset;

d3.csv("food.csv", rowConverter, function(error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);

        dataset = data;
        generateVis();
        hideLoadingMsg();
    }
});


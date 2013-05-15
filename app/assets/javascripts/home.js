$( document ).ready(function() {

  
  var dataset = [];              
  for (var i = 0; i < 25; i++) {       
    var newNumber = Math.random() * 30;  
    dataset.push(newNumber);     
  }
setInterval(function(){
  d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
    .style("height", function(d) {
      var barHeight = d * 9;
      return barHeight + "px";
      });
    }, 500);
  });

// // const Vertex = require("./vertex.js");
// const Vertex = require("./vertex.js");
//
// // import Vertex from "./vertex.js";
//
// document.addEventListener("DOMContentLoaded", () => {
//   const canvas = document.getElementById("canvas");
//   const ctx = canvas.getContext("2d");
//
//   // const Vertex = function(x,y,r){
//   //   this.x = x,
//   //   this.y = y,
//   //   this.r = r
//   // }
//   //
//   // Vertex.prototype.render = function(ctx){
//   //   ctx.beginPath();
//   //   ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
//   //   ctx.fillStyle = "red";
//   //   ctx.fill();
//   // }
//
//   const Edge = function(v1, v2){
//     this.v1 = v1;
//     this.v2 = v2;
//   }
//
//   Edge.prototype.render = function(ctx){
//     ctx.beginPath();
//     ctx.moveTo(this.v1.x,this.v1.y);
//     ctx.lineTo(this.v2.x,this.v2.y);
//     ctx.lineWidth = 10;
//     ctx.strokeStyle = "purple";
//     ctx.stroke();
//   }
//
//   const EdgeArrow = function(v1,v2){
//
//   }
//
//   const matrix = [
//     [0,0,1,1,1,0],
//     [0,0,0,1,1,1],
//     [0,0,0,0,0,0],
//     [0,0,0,0,0,0],
//     [0,0,0,0,0,0],
//     [0,0,0,0,0,0]
//   ]
//
//   const vertices = [
//     new Vertex(300,300,20),
//     new Vertex(500,300,20),
//
//     new Vertex(100,100,20),
//     new Vertex(300,100,20),
//     new Vertex(500,100,20),
//     new Vertex(700,100,20)
//   ]
//   const edges = [];
//
//   const generateEdgesFromMatrix = function(matrix){
//     matrix.forEach((row, i) => {
//       row.forEach((el, j) => {
//         if (el > 0){
//           edges.push(new Edge(vertices[i],vertices[j]));
//         }
//       })
//     })
//   }
//
//   generateEdgesFromMatrix(matrix);
//
//
//   // const edges = [
//   //   new Edge(vertices[4],vertices[0]),
//   //   new Edge(vertices[4],vertices[1]),
//   //   new Edge(vertices[4],vertices[2]),
//   //   new Edge(vertices[5],vertices[1]),
//   //   new Edge(vertices[5],vertices[2]),
//   //   new Edge(vertices[5],vertices[3])
//   // ]
//
//   edges.forEach((edge) => {
//     edge.render(ctx);
//   })
//
//   vertices.forEach((vertex) => {
//     vertex.render(ctx);
//   })
//
//   // v1.render(ctx);
//   // v2.render(ctx);
//   // v3.render(ctx);
//   // v4.render(ctx);
//   // v5.render(ctx);
//   // v6.render(ctx);
//
// });

// document.addEventListener("DOMContentLoaded", () => {
//
//   var svg = d3.select("svg"),
//       width = +svg.attr("width"),
//       height = +svg.attr("height");
//
//
//               var simulation = d3.forceSimulation()
//                   .force("link", d3.forceLink().id(function(d) { return d.id; }))
//                   //.force("charge", d3.forceManyBody().strength(-200))
//               		.force('charge', d3.forceManyBody()
//                     .strength(-1000)
//                   )
//               // 		.force('collide', d3.forceCollide()
//               //       .radius(d => 40)
//               //       .iterations(2)
//               //     )
//                   .force("center", d3.forceCenter(width / 2, height / 2));
//               const graph = {
//                 "nodes": [
//                   {"id": "1", "group": 1},
//                   {"id": "2", "group": 2},
//                 ],
//                 "links": [
//                   {"source": "1", "target": "2", "value": 1},
//                 ]
//               }
//
//
//               function run(graph) {
//
//                 graph.links.forEach(function(d){
//               //     d.source = d.source_id;
//               //     d.target = d.target_id;
//                 });
//                 var link = svg.append("g")
//                               .style("stroke", "#aaa")
//                               .selectAll("line")
//                               .data(graph.links)
//                               .enter().append("line");
//                 var node = svg.append("g")
//                           .attr("class", "nodes")
//                 .selectAll("circle")
//                           .data(graph.nodes)
//                 .enter().append("circle")
//                         .attr("r", 2)
//
//
//                 var label = svg.append("g")
//                     .attr("class", "labels")
//                     .selectAll("text")
//                     .data(graph.nodes)
//                     .enter().append("text")
//                       .attr("class", "label")
//                       .text(function(d) { return d.id; });
//                 simulation
//                     .nodes(graph.nodes)
//                     .on("tick", ticked);
//                 simulation.force("link")
//                     .links(graph.links);
//                 function ticked() {
//                   link
//                       .attr("x1", function(d) { return d.source.x; })
//                       .attr("y1", function(d) { return d.source.y; })
//                       .attr("x2", function(d) { return d.target.x; })
//                       .attr("y2", function(d) { return d.target.y; });
//                   node
//                        .attr("r", 16)
//                        .style("fill", "#efefef")
//                        .style("stroke", "#424242")
//                        .style("stroke-width", "1px")
//                        .attr("cx", function (d) { return d.x+5; })
//                        .attr("cy", function(d) { return d.y-3; });
//                 }
//               }
//
//
//               run(graph)
//
//
// });

document.addEventListener("DOMContentLoaded", () => {

  var vis = d3.select("body")
              .append("svg")
  .attr("width", 200).attr("height", 200);

  var nodes = [
      {id: 1, x: 10, y: 50},
      {id: 2, x: 70, y: 10},
      {id: 3, x: 140, y: 50}
    ]

  var links = [
      {source: nodes[0], target: nodes[1]}
    ]

  vis.selectAll("circle")
   .data(nodes)
   .enter()
   .append("svg:circle")
   // .filter(function(d) { return d.id === 1})
   .attr("cx", function(d) {
     // debugger
     return d.x;
   })
   .attr("cy", function(d) { return d.y; })
   .attr("r", "10px")
   .attr("fill", "black");

  vis.selectAll(".line")
     .data(links)
     .enter()
     .append("line")
      .attr("x1", 40)
      .attr("y1", 50)
      .attr("x2", 450)
      .attr("y2", 150)
      .style("stroke", "rgb(6,120,155)");

  vis.selectAll("circle")
  .filter(function(d) {
     // debugger
     return d.id === 1
   })
   .transition()
   .duration(1000)
   .attr("fill", "red");

   vis.select("line").transition().duration(1000).style("stroke", "red");



});

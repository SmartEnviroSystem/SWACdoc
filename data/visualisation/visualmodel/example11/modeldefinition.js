var example11 = [
  {
    id: 1,
    name: 'A',
    x: 200,
    y: 200,
    width: 50,
    height: 50,
    elem_onclick: function() {alert("Click on A");}
  },
  {
    id: 2,
    name: 'B',
    x: 300,
    y: 100,
    width: 50,
    height: 50,
    elem_onclick: function(evt) {alert("Click on B");}
  },
  {
    id: 3,
    name: 'C A-B',
    part1: 1,
    part2: 2,
    con_onclick: function(evt) {alert("Click on A");}
  }
];

// side 1 != side 2 && != side 3 == scalene
// all else: isoceles


$(document).ready(function(){
  $("#triangle").submit(function(event){
    event.preventDefault();
    const side1= parseInt($("input#side1").val());
    const side2= parseInt($("input#side2").val());
    const side3= parseInt($("input#side3").val());
    console.log(side1, side2, side3);
    if (side1 === side2 && side1 === side3) {
      $("#equilateral").show();
    }
    // if else (side3 >= side1) {
    //   $("#not-a-triangle").show();
    // }
    else if (side2 >= side1 + side3 || side1 >= side2 + side3) {
      $("#not-a-triangle").show();
    }
    // if else (side1 >= side2 + side3) {
    //   $("#not-a-triangle").show();
    // }
    // if else (side1 !== side2 && side1 !== side3 && side2 !== side3) {
    //   $("#scalene").show();
    // }
    else {
      $("#isoceles").show();
    };  
  });
});

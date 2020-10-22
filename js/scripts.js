$(document).ready(function(){
  $("#triangle").submit(function(event){
    event.preventDefault();
    const side1= parseInt($("input#side1").val());
    const side2= parseInt($("input#side2").val());
    const side3= parseInt($("input#side3").val());
    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
      const badAnswer = "not a series of numbers. :( Measurements must be in numbers";
      $(".output").show();
      $("#triangle-answer").text(badAnswer);
    }
    else if (side1 === side2 && side1 === side3) {
      const equilateral = "an equilateral triangle!";
      $(".output").show();
      $("#triangle-answer").text(equilateral);
    }
    else if (side2 >= side1 + side3 || side1 >= side2 + side3 || side3 >= side2 + side1) {
      const notTriangle = "not a triangle at all";
      $(".output").show();
      $("#triangle-answer").text(notTriangle);
    }
    else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
      const scalene = "a scalene triangle";
      $(".output").show();
      $("#triangle-answer").text(scalene);
    }
    else {
      const isosceles = "an isosceles triangle";
      $(".output").show();
      $("#triangle-answer").text(isosceles);
      $("#isosceles").show();
    };  
  });
});

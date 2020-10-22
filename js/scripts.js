$(document).ready(function(){
  $("#triangle").submit(function(event){
    event.preventDefault();
    const side1= parseInt($("input#side1").val());
    const side2= parseInt($("input#side2").val());
    const side3= parseInt($("input#side3").val());
    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
      const badAnswer = "not a series of numbers. :( Measurements must be in numbers";
      $(".output").show();
      $(".video").hide();
      $("#triangle-answer").text(badAnswer);
      $("img").hide();
      $("#bad-answer").toggle();
    }
    else if (side1 === side2 && side1 === side3) {
      const equilateral = "an equilateral triangle!";
      $(".output").show();
      $(".video").hide();
      $("#triangle-answer").text(equilateral);
      $("img").hide();
      $("#equilateral").toggle();
    }
    else if (side2 >= side1 + side3 || side1 >= side2 + side3 || side3 >= side2 + side1) {
      const notTriangle = "not a triangle at all";
      $(".output").show();
      $(".video").hide();
      $("#triangle-answer").text(notTriangle);
      $("img").hide();
      $("#notTriangle").toggle();

    }
    else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
      const scalene = "a scalene triangle";
      $(".output").show();
      $(".video").hide();
      $("#triangle-answer").text(scalene);
      $("img").hide();
      $("#scalene").toggle();
    }
    else {
      const isosceles = "an isosceles triangle";
      $(".output").show();
      $(".video").hide();
      $("#triangle-answer").text(isosceles);
      $("img").hide();
      $("#isosceles").toggle();
    };  
  });
});


// $(document).ready(function(){
//     $("#design").click(function(){
//       $("#design").slideDown('1500').hide('1000');
//       $("#design").show('1500');
//     });
//     $("#design").click(function(){
//       $("#design").slideUp('1500');
//       $("#design").slideDown('1500');
//     });
//   });
  
//   $(document).ready(function(){
//     $("#design-image").click(function(){
//       $("#design-image").slideDown('1500').hide('1000');
//       $("#design").show('1500');
//     });
//     $("#design").click(function(){
//       $("#design").slideUp('1500');
//       $("#design-image").slideDown('1500');
//     });
//   });
  
//   $(document).ready(function(){
//     $("#product-image").click(function(){
//       $("#product-image").slideDown('1500').hide('1000');
//       $("#product").show('1500');
//     });
//     $("#product").click(function(){
//       $("#product").slideUp('1500');
//       $("#product-image").slideDown('1500');
//     });
//   });
$(document).ready(function(){
 $("#img").click(function(){
 $(".ddesign").slideToggle();
 $("#img").slideToggle();
 });
 $(".ddesign").click(function(){
 $("#img").slideToggle();
 $(".ddesign").slideToggle();
 });
 


  $("#development").click(function(){
   $(".development").slideToggle();
   $("#development").toggle();
  });

  $(".development").click(function(){
   $("#development").slideToggle();
   $(".development").toggle();
  });


  $("#productdevelopment").click(function(){
   $(".productmanagement").slideToggle();
   $("#productdevelopment").toggle();
  });

  $(".productmanagement").click(function(){
   $("#productdevelopment").slideToggle();
   $(".productmanagement").slideToggle();
  });



  //hover function for the portfolio images
  $("#work1").hover(function(){
   $(".blackstudio").toggle();
  });

  $("#work2").hover(function(){
   $(".brown").toggle();
  });

  $("#work3").hover(function(){
   $(".ontario").toggle();
  });

  $("#work4").hover(function(){
   $(".Black").toggle();
  });

  $("#work5").hover(function(){
   $(".elena").toggle();
  });

  $("#work6").hover(function(){
   $(".button").toggle();
  });

  $("#work7").hover(function(){
   $(".burned").toggle();
  });

  $("#work8").hover(function(){
   $(".giraffe").toggle();
  });
function validateForm() {

var a=document.forms["contactUs"]["NAME"].value;
if (a==null || a=="")
  {
  alert("Name must be filled out");
  return false;
  }

var b=document.forms["contactUs"]["EMAIL"].value;
if (b==null || b=="") {
  alert("Email must be filled out");
  return false;
  }
  }
})

$(document).ready(function(){
$("#btn").click(function(event){
  var data = document.getElementById("question").value;
  $.ajax({
    type: "POST",
    url: "http://127.0.0.1:3000",
    data: JSON.stringify({"que":data}),
    contentType: "text/plain; charset=utf-8",
    success: null,
    dataType: "json"
});
});}
);

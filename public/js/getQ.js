$(document).ready(function(){
  $("#btn").click(function(event){
    $(".input-group.customDiv").css("padding","10px");
    $(".input-group.customDiv").appendTo("#dest");
    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:3000",
      data: JSON.stringify({"que": $("#question").val()}),
      contentType: "application/json; charset=utf-8",
      success: function(data){
        $(".bodyarea").empty();
        $.each(data,function(key,val){
          $(".bodyarea").append("<div class=\"answers custom-card card w-100\">"+
            "<div class=\"card-text\">"+key +" : "+ val+
            "<div class=\"thumbs\">"+
              "<img class=\"up img-fluid rounded float-right\" src=\"/../img/thumbsDown.png\">"+
              "<img class=\"up img-fluid rounded float-right\" src=\"/../img/thumbsUp.png\">"+
            "</img></img></div>"+
          "</div></div>");
        });
      }
    });
  });
  }
);

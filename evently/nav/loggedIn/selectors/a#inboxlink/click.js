function(){
  // pass data to setTasks event
  $$(this).app.db.view("couchapp/inbox", {
    success: function(resp)
    {
      $("#tasks").trigger("setTasks", resp);
    }
  });
  $("#navul a").removeClass("active");
  $(this).addClass("active");
}

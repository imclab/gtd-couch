function(data) {

  var projects = [];
  var contexts = [];

  // get current user
  var profile = $$("#profile").profile;
  var user = profile != null ? profile.name : "";

  // parse the result and divide in contexts and projects
  for (r in data.rows)
  {
    var obj = data.rows[r].value;
    if (obj.owner == user)
    {
      if (obj.title.length > 15)
      {
        obj["shorttitle"] = obj.title.substring(0,12)+"...";
      }
      else
      {
        obj["shorttitle"] = obj.title;
      }
      if (obj.type == "context")
      {
        contexts.push(obj);
      }
      else
      {
        projects.push(obj);
      }
    }
  }

  return {"projects": projects, "contexts": contexts };
}

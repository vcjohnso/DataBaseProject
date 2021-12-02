const queryHandler = function(qType, data) {
//different query inputs based on page needs
  var returnData = {data: 'nothing'};
  switch (qType) {
    case "search":
      const depart = data.departing
      const arrive = data.arriving
      console.log(depart, arrive)
      //query flights based on airports
      break;
    case "login":
      const user = data.username;
      const password = data.password;
      console.log(user, password, "these hands")
      //query logins will be based on
      returnData = {token: user}
      break;
    case "seats":
      const flightID = data.flightID;
      console.log(flightID)
      break;
    default:
      console.log("Something broke")
  }
  return returnData;
}

export default queryHandler;
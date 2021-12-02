function loginQuery(user, pass) {
  return (`SELECT EXISTS(
    SELECT username, password
    FROM dbs025.login_info
    WHERE username = '${user}' 
      AND password = '${pass}');`)
} 
//returns t if user has a login on available in the server

function searchQueryBoth(dep, arr) {
  return (`SELECT flight_id,departure_airport,scheduled_departure,arrival_airport,scheduled_arrival
    FROM dbs025.flights
    WHERE departure_airport = '${dep}'
      AND arrival_airport = '${arr}';`)
}

function searchQueryArr(arr) {
  return (`SELECT flight_id,departure_airport,scheduled_departure,arrival_airport,scheduled_arrival
    FROM dbs025.flights
    WHERE arrival_airport = '${arr}';`)
}

function searchQueryDep(dep) {
  return (`SELECT flight_id,departure_airport,scheduled_departure,arrival_airport,scheduled_arrival
    FROM dbs025.flights
    WHERE departure_airport = '${dep}';`)
}
//the three queries above are for different cases of search input
function apCodeQuery(city) {
  return (`SELECT airport_code
    FROM dbs025.airports
    WHERE city LIKE '%${city}%';`
  )
}
//query to get airport code from city

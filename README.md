# DataBaseProject

This website will have four pages

page one:
search page where user can search by destination and arrival date (date can be a range?)
- flight results should contain departure/arraival location/date/time,  
- once results are returned, users should be able to search again
 -- we can do this by either returning the user to a 'search page' (page 0.5 maybe) or having the search bar refresh the page with new displaying info based on last search
- header will either display 'welcome user' or promopt to log in (clicking prompt moves to page three)
if user selects a flight, they will by moved to a second page

page two:
will display all the available seats on the flight
-will move if user selects purchase (page 3 if not logged in, page 4 if logged in)
-will move back to page one if user does not like any of the options presented

page three: 
will allow the user to login via email and password (we should make 3/4 default logins in a table)
-on login successful proceed to page 4

page four:
users can select from cards listed on their account to pay, or input on new card

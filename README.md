# ProjectName
Simple login page.  It can be visited on: http://user-login.bitballoon.com/

You can login with:          
>username: Janneke

>password: May1985

I made an html form with input fields for username and for password,
both with placeholder text describing what should be in the field.
I gave both fields the attribute 'required', so you cannot submit when a field is
left empty.
I used autofocus on the name field, so the user can start typing right away.
The input element for the password I gave the type 'password' so the input is hidden,
and I gave it a 'pattern' attribute with a regular expression to test the password,
so that you cannot submit when the password doesn't meet the password-requirements of
a minimum of 5 characters (and I made up some extra requirements just for fun).

I also added an event to the input element for the password: onblur a js function
is called so that the password is also validated when the user exits the
password field. This function also tests the password against a regex,
and I used innerhtml to display a message when it's an invalid password.

When the user pushes the submit button, and both fields have a valid input,
a function is called to test if the combination of username and password exists
in the database. I used an array with username-password combinations in it as a
fake database. The pairs are checked one by one, using 'map'.
When a match is found, a new window opens welcoming the user with their login name.
And in the navigation bar 'login' changes into 'logout' by hiding the one and showing the other,
and the username appears (using innerhtml).

I used the following sources:
http://regexone.com/ to check for the regex for validating the password
http://www.w3schools.com  to find information for form input, jQuery, innerhtml,
                          css, and responsive navigation bar,
                          and for how to use cookies for remembering the login

# User-Login page

Simple login page.  It can be visited on: http://user-login.bitballoon.com/

You can login with:          
>username: Janneke

>password: May1985

Explanation how I made it:

The input field for the password I gave a 'pattern' attribute with a regular expression,
that allows you to submit only when the password meets the following password-requirements:
>a minimum of 5 characters, including at least 1 lower-case and 1 upper-case letter, and 1 number.

(checking for this is not usual for a login form, but I did this for practicing purposes)

I used autofocus on the name field, so the user can start typing right away.
On blur a function is called so that the password is validated when the user exits the
password field. This function also tests the password against a regex (It checks for the
same requirements as mentioned above, but I used another regex for it, to practice a little).
When the password is invalid, a message appears (by using innerHTML).

When the user pushes the submit button, and both fields have a valid input,
a function is called to test if the combination of username and password exists
in the database. (I used an array with username-password combinations as a
fake database).
The pairs are checked one by one. When a match is found, a new window opens
welcoming the user with their login name. And in the navigation bar 'login' changes into 'logout'
by hiding the one and showing the other, and the username appears in the navigation bar (using innerhtml).
When you're not logged in, you can also visit the welcome page, but it is not personalized then.
When you log out, everything changes back again to the unpersonalized state before login.

I used the following sources for information:
http://regexone.com/ to check for the regex syntax.
http://www.w3schools.com  to find information for form input, jQuery, innerhtml,
                          css, and responsive navigation bar,
                          and for how to use sessionStorage and cookies (for remembering the login status)

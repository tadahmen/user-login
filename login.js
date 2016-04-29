    let fakeDb = [["Arie", "123aA"], ["Janneke", "May1985"], ["Merkel", "Cat_2016"]];

    function setCookie () {
        document.cookie = "loggedIn=" //this sets loggedIn to "", which equals false.
    }

    function validatePassword (value) {
        //(password should have minimum 5 chars, of which minimum 1 uppercase, 1 lowercase, 1 number)
        let requirements = RegExp("^.{0,4}$|^[^A-Z]*$|^[^a-z]*$|^[^0-9]*$");

        if (requirements.test(value)) {
            document.getElementById("login-comment").innerHTML =
            "Not a valid password. It should be at least 5 chracters, and contain at least: a lowercase letter, an uppercase letter, and a number"
        } else{
            document.getElementById("login-comment").innerHTML = ""
        }
    }

    function checkInput(event){
        event.preventDefault();
        name = document.getElementById("name").value;
        let password = document.getElementById("password").value;
        let valid = false;

        fakeDb.map (function (key) {
            if (name === key[0] && password === key[1]) {
                valid = true;
                if (typeof(Storage) !== "undefined") {
                    sessionStorage.loginStatus = "logged in"
                }
                document.cookie = "loggedIn=true";
                return(window.open("welcome.html", "_self"))
            }
        });

        (!valid) ? document.getElementById("login-comment").innerHTML ="The combination is not right. Try again." : ""
    }

    function welcomeName() {
      $(".addUserName").append(name);
    }

    function checkLogin () {
        if(typeof(Storage) !== "undefined") {
            console.log ("using session storage");
            if (sessionStorage.loginStatus === "logged in") {
                console.log("sessionStorage.loginStatus is " + sessionStorage.loginSatus);
                return true
            } else {
                return false
            }

        } else {
            console.log ("using cookie info");
            i=0;
            arrayOfCookies = document.cookie.split(';');
            nrOfCookies = arrayOfCookies.length;
            console.log("cookiesArray: " + arrayOfCookies);
            for (i = 0; i < nrOfCookies; i++) {
                console.log("cookie " + i + ": " + arrayOfCookies[i] + " datatype: " + typeof(arrayOfCookies[i]) + "length: " + arrayOfCookies[i].length);
                if (arrayOfCookies[i] === " loggedIn=true" || arrayOfCookies[i] === "loggedIn=true") {
                  console.log("returns true");
                  return true;
                }
            }
            console.log("returns false");
            return false;
          }
    }

    function onLoad() {
        loggedIn = checkLogin();
        console.log("loggedIn is: " + loggedIn);
        if (loggedIn) {
            console.log("login ok");
            welcomeName();
            $('.showOnLogin').show();
            $('.hideOnLogin').hide();
        } else {
            $('.showOnLogin').hide();
            $('.hideOnLogin').show();
        }
    }

    function logout() {
      document.cookie = "loggedIn=false";
      if(typeof(Storage) !== "undefined") {
          sessionStorage.loginStatus = "logged out"
      }
    }

    jQuery(document).ready(function(){
      console.log("document ready");
      $('h1').click(function(){
        $(this).css({
          color: 'green'
        })
      })
    })

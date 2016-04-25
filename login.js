    let fakeDb = [["Arie", "123aA"], ["Janneke", "May1985"], ["Merkel", "Cat_2016"]];

    welcomeName(name) {

    }

    function validatePassword (value) {
        //(password should have minimum 5 chars, of which minimum 1 uppercase, 1 lowercase, 1 number)
        let requirements = RegExp("^.{0,4}$|^[^A-Z]*$|^[^a-z]*$|^[^0-9]*$");

        if (requirements.test(value)) {
            document.getElementById("login-comment").innerHTML =
            "Not a valid password.\n It should be at least 5 chracters, and contain at least:\n a lowercase letter, an uppercase letter, and a number"
        } else{
            console.log("password valid")
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
                return(window.open("welcome.html", "_self"));
                console.log("Valid. Welcome " + name);
            }
        });

        (!valid) ? console.log("the combination is not right. Try again.") : ""
    }

    jQuery(document).ready(function(){
      console.log("document ready");
      $('h1').click(function(){
        $(this).css({
          color: 'green'
        })
      })
    })

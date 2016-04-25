    let logins = [["arie", "12345aA!"]];

    function validatePassword (value) {
        console.log(value);
        let requirements = RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
        <!--  other possibility, (works wiith negations), only demands 5 chars, min 1 upper, 1 lower, 1 number: "^.{0,4}$|^[^A-Z]*$|^[^a-z]*$|^[^0-9]*$" -->

        if (!requirements.test(value)) {
            console.log("Not a valid password. It should be at least 8 chracters, and contain at least a lowercase letter, an uppercase letter, a number and a special character")
        } else{
            console.log("password valid")
        }
    }

    function checkInput(event){
        event.preventDefault();
        // alert("The form was submitted");
        let name = document.getElementById("name").value;
        let password = document.getElementById("password").value;
        let valid = false;
        console.log(name + "," + password);

        logins.map (function (key) {
            console.log ("the key is: " + key);
            if (name === key[0] && password === key[1]) {
                valid = true;
                return(console.log("valid. Welcome " + name));
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

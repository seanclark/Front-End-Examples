        function listCylinders() {
            let display = document.getElementById("displayCyl");
            let valid = false; // We assume this isn't valid
            // You can move this outside of the loop, and trim in case the user entered spaces
            let cylCompare = document.getElementById("cylEnter").value.toUpperCase().trim();
            for (var i = 0; i < cylArray.length; i++) {
            if (cylCompare == cylArray[i].name) {
            valid = true; // We find a match in one of our array items, so it's valid
            display.innerHTML = display.innerHTML + cylArray[i].name + ":" + "<br>" + cylArray[i].brand +
              "<br>" + cylArray[i].cylinder + "<br>" + cylArray[i].pins + "<br>" + cylArray[i].type;
            }
          }
         if(!valid) alert("Enter a valid cylinder type"); // If we never found a match then we alert
         }
         function inValidAlert(){
           let cylFindInvalid = document.getElementById("cylEnter").value.toUpperCase();
           if(cylFindInvalid != cylArray.name){
            let displayIt = document.getElementById("displayCyl");
            displayIt.innerHTML = displayIt.innerHTML + "Enter a valid cylinder type";
          }
        }
         //function used to disable the button after it is used once.
          const setbutton = document.getElementById('button1');
          setbutton.addEventListener('click', disableButton);
          function disableButton() {
            setbutton.disabled = true;
          }
        //function that will clear the form as well as the display when clicked.

          function clearCyl() {
            var cylDisplay = document.getElementById("displayCyl");
            document.getElementById("cylForm").reset();
            cylDisplay.innerHTML = "";
            setbutton.disabled = false;
          }
      //cylinder type properties shown as individual objects inside of an array.
        var cylArray = [
        {
          name: 'LD',
          brand: 'Schlage, Falcon',
          cylinder: ' Without cylinder',
          pins: ' 6 Pin',
          type: ' KIL'
        },
        {
          name: 'RD',
          brand: 'Schlage-Everest 29 S123 (Standard)',
          cylinder: ' With cylinder',
          pins: ' 6 Pin',
          type: ' FSIC'
        },
        {
          name: 'PD',
          brand: 'Schlage-Everest 29 S123 (Standard)',
          cylinder: ' With cylinder',
          pins: ' 6 Pin',
          type: ' KIL'
        },
        {
          name: 'JD',
          brand: 'Schlage',
          cylinder: ' Without cylinder',
          pins: ' 6 Pin',
          type: ' FSIC'
        },
        {
          name: 'GD',
          brand: 'Schlage-Everest 29 R Family keyways',
          cylinder: ' With cylinder',
          pins: ' 7 Pin',
          type: ' SFIC'
        }
      ];

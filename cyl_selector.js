
function getCyl(){
  var display = document.getElementById("displayCyl");
  //gets input and displays on screen
  if(document.getElementById("cylEnter").value.toUpperCase() == "LD"){
    display.innerHTML="THE DETAILS FOR LD ARE: " + display.innerHTML + Object.values(LD);
      }
      else if(document.getElementById("cylEnter").value.toUpperCase() == "RD"){
        display.innerHTML="THE DETAILS FOR RD ARE: " + display.innerHTML + Object.values(RD);
      }
      else if(document.getElementById("cylEnter").value.toUpperCase() == "PD"){
        display.innerHTML="THE DETAILS FOR PD ARE: " + display.innerHTML + Object.values(PD);
      }
      else if(document.getElementById("cylEnter").value.toUpperCase() == "JD"){
        display.innerHTML="THE DETAILS FOR JD ARE: " + display.innerHTML + Object.values(JD);
      }
  else if(document.getElementById("cylEnter").value.toUpperCase() == "GD"){
    display.innerHTML="THE DETAILS FOR GD ARE: " + display.innerHTML + Object.values(GD);
  }
  else(alert("Enter a valid cylinder type!"));
	}

  const setbutton = document.getElementById('button1');

  setbutton.addEventListener('click', disableButton);
  function disableButton() {
    setbutton.disabled = true;
  }

  var cylDisplay = document.getElementById("displayCyl");
  function clearCyl() {
    document.getElementById("cylForm").reset();
    cylDisplay.innerHTML = "";
    setbutton.disabled = false;
  }

    var LD = {
      brand: 'Schlage, Falcon',
      cylinder: ' Without cylinder',
      pins: ' 6 Pin',
      type: ' KIL'
    }

    var RD = {
      brand: 'Schlage-Everest 29 S123 (Standard)',
      cylinder: ' With cylinder',
      pins: ' 6 Pin',
      type: ' FSIC'
    }

    var PD = {
      brand: 'Schlage-Everest 29 S123 (Standard)',
      cylinder: ' With cylinder',
      pins: ' 6 Pin',
      type: ' KIL'
    }

    var JD = {
      brand: 'Schlage',
      cylinder: ' Without cylinder',
      pins: ' 6 Pin',
      type: ' FSIC'
    }

    var GD = {
      brand: 'Schlage-Everest 29 R Family keyways',
      cylinder: ' With cylinder',
      pins: ' 7 Pin',
      type: ' SFIC'
    }

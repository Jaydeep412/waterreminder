
    var glassCounter = 0;
    var messageDrinkWater;
    var glassCounterAdder;

    document.getElementById("glassCount").innerHTML = glassCounter;
    function glassCounterAdd(){
        glassCounter++;
        document.getElementById("glassCount").innerHTML = glassCounter;
    }


    function showDrinkWaterMesssage() {
      alert("Have a glass of water!");
    }

    function getClock() {
    const dateAndTime = new Date();
    document.getElementById("clock").innerHTML = dateAndTime.toLocaleTimeString();
    }


    function intervalStarter(){
    document.getElementById("glassCount").innerHTML = 0;
    glassCounter=0;
    messageDrinkWater =  setInterval(showDrinkWaterMesssage ,2000);
    glassCounterAdder = setInterval(glassCounterAdd,2000);

    setTimeout(intervalStopper,11000);

    }

    function intervalStopper(){
    clearInterval(messageDrinkWater);
    clearInterval(glassCounterAdder);
    
    }

    function stopDay(){
        intervalStopper();
    }

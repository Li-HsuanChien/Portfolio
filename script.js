function addRecommendation() {
    // Get the message of the new recommendation
    let recommendation = document.getElementById("new_recommendation");
    // If the user has left a recommendation, display a pop-up
    if (recommendation.value != null && recommendation.value.trim() != "") {
        console.log("New recommendation added");
        //Call showPopup here

        // Create a new 'recommendation' element and set it's value to the user's message
        var element = document.createElement("div");
        element.setAttribute("class", "recommendation");
        element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
        // Add this element to the end of the list of recommendations
        document.getElementById("all_recommendations").appendChild(element);

        // Reset the value of the textarea
        recommendation.value = "";
    }
}

function showPopup(bool) {
    if (bool) {
        document.getElementById('popup').style.visibility = 'visible'
    } else {
        document.getElementById('popup').style.visibility = 'hidden'
    }
}

function calculate_year(num) {
    let d = new Date();

    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;
    let years = Math.round(d.getTime() / year) + 1970;
    document.getElementById("cPlusPlusYear").innerHTML = (years - 2020) + " years";
    document.getElementById("pythonYear").innerHTML  = (years - 2019) + " years";
    document.getElementById("numpyYear").innerHTML  = (years - 2021) + " years";
    document.getElementById("htmlYear").innerHTML = (years - 2023) + " years";
    document.getElementById("cssYear").innerHTML  = (years - 2023) + " years";
    document.getElementById("javaScriptYear").innerHTML  = (years - 2023) + " years";
    
}

window.addEventListener('load', calculate_year);
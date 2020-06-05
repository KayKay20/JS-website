
//calculating the age of the childrens DOB
function calculate(){
    var newDate = new Date();
    var year = newDate.getFullYear();
    var DOB = parseInt(document.getElementById("DOB").value);
    var answer = year - DOB;
    alert(answer);
}
//If statement for ID and passport kids.
function Dropdown(){
    var value = document.getElementById("citizen").value;
    if(value === "ID"){
        document.getElementById("input").placeholder = "Enter ID number";
    }else{
        document.getElementById("input").placeholder = "Enter passport number";
    }
}


function submitAlert(){
    alert("Thank you for filling out the form!");
}

//  This code toggles the hidden contact us menu in the about us page.
changeDisplay = () => {
    let x = document.getElementById("contact"); // This returns the id contact.
    let y = document.body; // This targets the webpage itself.

    if (x.style.display === "none") { // If the display is equal to none then this statement will run if the button is clicked on.
        x.style.display = "block";
        y.style.overflow = "hidden"; // This prevents the user from scrolling.
    }

    else { // If the display is not equal to none then this statement will run if the button is clicked on.
        x.style.display = "none";
        y.style.overflow = "scroll";
    }
}


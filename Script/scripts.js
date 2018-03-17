function openTab(event, id) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(id).style.display = "block";
    event.currentTarget.className += " active";
}

function readCSV(){
    /*var i = 0;
    var data = [];
    var element = document.getElementById("blockchain");

    data = $.csv.toArray('test.csv');

    for(i = 0; i < data.length; i++){
        var para = document.createElement("p");
        var text = document.createTextNode(data[i]);
        para.appendChild(text);
        element.appendChild(para);
    } */
    var element = document.getElementById("blockchain");
    var para = document.createElement("p");
    var text = document.createTextNode("Test!");
    para.appendChild(text);
    element.appendChild(para);
}
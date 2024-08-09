var navi = document.getElementById("navi");
navi.addEventListener("click", (eo) => {
    if (eo.target.className == "city burbank") {
        alert("the city of burbank")
    }
    else if (eo.target.className == "city chicago") {
        alert("the weather of chicago")
    }
    else if (eo.target.className == "city dallas") {
        alert("its dallas weather")
    }
});


var footer = document.getElementById("footer")
function removeFooter() {
    footer.style.display = "none"
}

function changeTemp(unit) {
    var temp = document.querySelectorAll(".hot");
    var temp2 = document.querySelectorAll(".cool")
    for (var i = 0; i < temp.length; i++) {
        if (unit.value == "F") {
            temp[i].innerText = Math.round((temp[i].innerText * 1.8) + 32)
        }
        if (unit.value == "C") {
            temp[i].innerText = Math.round((temp[i].innerText - 32) / 1.8)
        }

    }
    for (var i = 0; i < temp2.length; i++) {
        if (unit.value == "F") {
            temp2[i].innerText = Math.round((temp2[i].innerText * 1.8) + 32)
        }
        if (unit.value == "C") {
            temp2[i].innerText = Math.round((temp2[i].innerText - 32) / 1.8)
        }

    }

}

function alerting() {
    alert("THIS PAGE SAYS  LOADING WEATHER REPORT....")
}
setTimeout(alerting, 4000)
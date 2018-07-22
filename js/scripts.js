window.onload = () => {
    document.getElementById("exploretab").click();
}

function openDisplay(ev, projectName) {
    // console.log('clicked', ev.currentTarget, projectName.style);
    var i, content, tabs, labels;

    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    tabs = document.getElementsByClassName("tabs");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }

    labels = document.getElementsByClassName("labels");
    for (i=0; i < labels.length; i++) {
        labels[i].className = labels[i].className.replace(" highlighted", "");
    }

    projectName.style.display = "block";
    ev.currentTarget.className += " active";
    switch (projectName.id) {
        case "explore":
        case "mafia":
        case "pf":
        case "ttt":
            labels[0].className += " highlighted";
            break;
        case "snake":
        case "webgl":
        case "pe":
        case "more":
            labels[1].className += " highlighted";
            break;
        default:
            break;
    }
}
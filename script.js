function onCss() {
    document.getElementById('box1').style.backgroundColor = "#00ff00";
    document.getElementById('box1').style.boxShadow = "5px 5px 20px"
    document.getElementById('box1').style.boxShadowColor = "#00ff00"
    document.getElementById('box1').style.border = "none";
};

function offCss() {
    document.getElementById('box1').style.boxShadow = "none";
    document.getElementById('box1').style.backgroundColor = "#000000";
    document.getElementById('box1').style.border = "1px solid darkgreen"
}
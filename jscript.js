var printButton = document.getElementById('printBut').addEventListener('click', PrintCV);

function GetColorCode(elem){
    var backgroundColor = window.getComputedStyle( elem,null).getPropertyValue('background-color'); 
    alert (backgroundColor);
}

function SetColor(elem){
    var backcolor = getStyle(elem, "background-color");
    document.getElementById("leftSide").style.background = backcolor;
}

var getStyle = function(element, property) {
    return window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue(property) : element.style[property.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); })];
};

function PrintCV(){
    window.print();
}
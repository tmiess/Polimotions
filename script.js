$(document).on("mouseover", function() {
    $("img").attr("draggable", "true");
    $("img").attr("ondragstart", "drag(event)");
    console.log("Dragged");
});
$(document).on("mousedown", function() {
    $("img").attr("id", "drag1");
    console.log("where is the picture")

});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log("Hey");
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log("Hi");
}

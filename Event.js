document.addEventListener("DOMContentLoaded", function () {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");

    button1.addEventListener("click", changeColor);
    button1.addEventListener("mouseover", showMessage);
    button1.addEventListener("mouseout", hideMessage);
    button1.addEventListener("dblclick", hideButton);

    button2.addEventListener("click", changeColor);
    button2.addEventListener("mouseover", showMessage);
    button2.addEventListener("mouseout", hideMessage);
    button2.addEventListener("dblclick", hideButton);

    button3.addEventListener("click", changeColor);
    button3.addEventListener("mouseover", showMessage);
    button3.addEventListener("mouseout", hideMessage);
    button3.addEventListener("dblclick", hideButton);

    function changeColor(event) {
        event.target.style.backgroundColor = "lightblue";
    }

    function showMessage(event) {
        const messageId = event.target.id.replace("button", "message");
        document.getElementById(messageId).style.display = "block";
    }

    function hideMessage(event) {
        const messageId = event.target.id.replace("button", "message");
        document.getElementById(messageId).style.display = "none";
    }

    function hideButton(event) {
        event.target.style.display = "none";
    }
});

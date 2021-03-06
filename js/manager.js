const query = new URLSearchParams(location.search);

var i = 1;

function connect() {
    var ip = query.get("ip") || "localhost";
    var port = query.get("port") || 6557;

    var socket = new WebSocket(`ws://${ip}:${port}/socket`);

    socket.addEventListener("open", () => {
        console.log("WebSocket opened");
        ui.menue();
    });

    socket.addEventListener("message", (message) => {
        var data = JSON.parse(message.data);
        var event = events[data.event];
        if (event) {
            event(data.status, data.time);
        }
    });

    socket.addEventListener("close", () => {
        console.log("Failed " + i + " times to connect to server, retrying in 3 seconds");
        ui.pause();
        paused = true;
        i++;
        setTimeout(connect, 3000);
    });
}

connect();

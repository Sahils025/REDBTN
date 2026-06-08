const button = document.getElementById("btn");

button.addEventListener("click", () => {

    button.textContent = "PRESSED";

    // ✅ vibration FIRST (instant feedback)
    if (navigator.vibrate) {
        navigator.vibrate([40, 60, 40]);
    }

    button.classList.add("pressed");

    const timestamp = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    fetch("https://hook.eu1.make.com/ejjz1d7hrxl9m5ir2j2p7kcnzo6bj3r4", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            time: timestamp
        })
    });

});

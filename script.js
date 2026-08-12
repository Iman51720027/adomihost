document.addEventListener("DOMContentLoaded", () => {
    const buydirtplan = document.querySelector("#buy-dirt-plan");

    if (buydirtplan) {
        buydirtplan.addEventListener("click", () => {
            const MyupiId = "9641080857.wallet@phonepe";
            const amount = "80";
            const planName = "Dirt Plan";

            const upiUrl = `upi://pay?pa=${encodeURIComponent(MyupiId)}&pn=${encodeURIComponent(planName)}&am=${amount}&cu=INR`;

            window.location.href = upiUrl;
        });
    } else {
        console.log("Button not found!");
    }
});

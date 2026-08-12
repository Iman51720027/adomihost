document.addEventListener("DOMContentLoaded", () => {
    const buydirtplan = document.querySelector("#buy-dirt-plan");

    if (buydirtplan) {
        buydirtplan.addEventListener("click", () => {
            const MyupiId = "9641080857.wallet@phonepe";
            const amount = "80";
            const planName = "Dirt Plan";

            // Normal UPI URI
            const upiUrl = `upi://pay?pa=${encodeURIComponent(MyupiId)}&pn=${encodeURIComponent(planName)}&am=${amount}&cu=INR`;

            // Fallback try: sidhe browser me redirect karne ke liye
            window.location.href = upiUrl;
        });
    }
});

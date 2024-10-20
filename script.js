const form = document.getElementById('booking-form');
const summaryDiv = document.getElementById('booking-summary');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const seats = document.getElementById('seats').value;

    const bookingSummary = `
        <h2>Booking Summary</h2>
        <p>From: ${from}</p>
        <p>To: ${to}</p>
        <p>Date: ${date}</p>
        <p>Time: ${time}</p>
        <p>Number of Seats: ${seats}</p>
    `;

    summaryDiv.innerHTML = bookingSummary;
});
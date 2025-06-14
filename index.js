document.getElementById('appointmentForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent actual form submission

  const name = document.getElementById('fullname').value;
  const doctor = document.getElementById('doctor').value;
  const date = document.getElementById('date').value;

  if (name && doctor && date) {
    document.getElementById('responseMessage').textContent = `Appointment booked with ${doctor} on ${date}. Thank you, ${name}!`;
    this.reset(); // Clear the form
  } else {
    document.getElementById('responseMessage').textContent = 'Please fill all required fields.';
    document.getElementById('responseMessage').style.color = 'red';
  }
});

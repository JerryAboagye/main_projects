document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('greeting-popup');
  const textElement = document.getElementById('greeting-text');

  if (!popup || !textElement) return;

  // Time-based logic
  const hour = new Date().getHours();
  let message = (hour >= 5 && hour < 12) ? "Good Morning" :
    (hour >= 12 && hour < 18) ? "Good Afternoon" :
      (hour >= 18 && hour < 22) ? "Good Evening" : "Welcome";

  textElement.textContent = `${message}, Welcome to USAS`;

  // 10-Second Timer
  setTimeout(() => {
    // Start the fadeOut animation
    popup.style.animation = "fadeOut 1s ease-in forwards";

    // Remove from view after animation completes
    setTimeout(() => {
      popup.style.display = "none";
    }, 1000);
  }, 10000); // 10,000 milliseconds = 10 seconds
});


document.addEventListener('DOMContentLoaded', () => {

  // --- 1. HOMEPAGE GREETING LOGIC ---
  const greetingPopup = document.getElementById('greeting-popup');
  const greetingText = document.getElementById('greeting-text');

  if (greetingPopup && greetingText) {
    const hour = new Date().getHours();
    let greet = (hour < 12) ? "Good Morning" : (hour < 18) ? "Good Afternoon" : "Good Evening";
    greetingText.textContent = `${greet}, Welcome to USAS`;

    setTimeout(() => {
      greetingPopup.style.animation = "fadeOut 1s forwards";
      setTimeout(() => greetingPopup.style.display = "none", 1000);
    }, 10000); // 10 seconds for greeting
  }

  // --- 2. ADMISSIONS FORM LOGIC ---
  const admissionForm = document.querySelector('.admission-form'); // Targets your specific class
  const submissionPopup = document.getElementById('submission-popup');
  const timerBar = document.querySelector('.timer-bar-success');

  if (admissionForm && submissionPopup) {
    admissionForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevents page reload

      // Show the pop-up
      submissionPopup.style.display = 'block';

      // Start the 10s timer animation
      if (timerBar) {
        timerBar.style.animation = 'shrink 10s linear forwards';
      }

      // Hide after 10 seconds
      setTimeout(() => {
        submissionPopup.style.animation = "fadeOut 0.5s ease-in forwards";

        setTimeout(() => {
          submissionPopup.style.display = 'none';
          submissionPopup.style.animation = ""; // Reset animation
          if (timerBar) timerBar.style.animation = ""; // Reset bar
          admissionForm.reset(); // Clears the form
        }, 500);
      }, 10000);
    });
  }
});
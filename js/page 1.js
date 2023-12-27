// This script will run when the page loads
document.addEventListener('DOMContentLoaded', function() {
  var greetings = ['Hello', '你好'];
  var currentGreeting = 0;

  // Function to change the greeting text
  function changeGreeting() {
    // Get the element where the text needs to change
    var greetingElement = document.getElementById('greeting');
    // Corrected line: using template literals for better readability
    greetingElement.innerHTML = `${greetings[currentGreeting]}.<br>I'm Pei Ying.`;
    // Update the index for the next greeting
    currentGreeting = (currentGreeting + 1) % greetings.length;
  }

  // Change the greeting every 4 seconds
  setInterval(changeGreeting, 2000);
});

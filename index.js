// Define the current user
const currentUser = "Dan"; // You can replace this with any name you like

// Create a welcome message using template literals
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Create an excited version of the welcome message
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Create a short greeting using the first letter of the current user's name
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

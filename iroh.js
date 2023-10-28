// Code generated with help of ChatGPT
// Import Iroh and its required modules
import Iroh from 'iroh';
import 'iroh/dist/iroh.css'; // Import Iroh's CSS for visualization

// Initialize Iroh
Iroh.init();

// Define a function to run and track your code
const runCodeWithIroh = () => {
  // Import the original 'tags.js' file here
  import('./src/controllers/tags.js')
    .then(tagsModule => {
      // Instrument and run your code with Iroh
      Iroh.enable();
      tagsModule.getTag();
      Iroh.disable();

      // Log the execution data
      const executionData = Iroh.flush();
      console.log(executionData);
      
      // You can save the execution data to a file or visualize it as needed
    })
    .catch(error => {
      console.error('Error loading tags.js:', error);
    });
};

// Call the function to run your code with Iroh
runCodeWithIroh();

// Capture execution data
const executionData = Iroh.flush();

// Save the execution data to a file
const fs = require('fs'); // Node.js file system module
fs.writeFileSync('iroh-execution-data.json', JSON.stringify(executionData, null, 2));

console.log('Execution data saved to iroh-execution-data.json');

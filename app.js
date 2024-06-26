const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join( 'public')));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

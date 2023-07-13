const express = require('express');
const sequelize = require('./db');
const roleRoutes = require('./routes/roleRoutes');

const app = express();
const cors = require("cors")

app.use(cors(
    {
        origin: 'http://localhost:3000'
    }
));

// Middleware
app.use(express.json());

// Routes
app.use('/api', roleRoutes);

// Start the server
sequelize.sync().then(() => {
  app.listen(8000, () => {
    console.log('Server is running on port 8000');
  });
});

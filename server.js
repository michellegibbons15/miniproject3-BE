const express = require('express');
let dbConnect = require("./dbConnect")
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const likeRoutes = require('./routes/likeRoutes')

const app = express();
require("dotenv").config();

const cors = require('cors');
app.use(express.json())
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  crednetials: true
}));


app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/likes', likeRoutes);

// Start Server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
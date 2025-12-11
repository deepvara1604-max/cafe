const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static(__dirname));

// Temporary memory storage
let orders = [];

// Receive orders
app.post('/api/order', (req, res) => {
    orders.push({ ...req.body, time: new Date() });
    res.json({ success: true, message: "Order received!" });
});

// View orders
app.get('/api/orders', (req, res) => {
    res.json(orders);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Backend running on port " + PORT));

const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/orders', (req, res) => {
    res.json([{ id: 101, item: "Book" }, { id: 102, item: "Pen" }]);
});

app.listen(port, () => {
    console.log(`Order Service running on port ${port}`);
});

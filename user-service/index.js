const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/users', (req, res) => {
    res.json([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]);
});

app.listen(port, () => {
    console.log(`User Service running on port ${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const users = {
    'user1': 'password1',
    'user2': 'password2'
};

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (users[username] && users[username] === password) {
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'Invalid username or password' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

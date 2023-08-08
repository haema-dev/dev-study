const express = require('express');
const app = express();
const port = 3000;

// 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 라우터 설정
app.get('/', (req, res) => {
    res.send('Welcome to the Board!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

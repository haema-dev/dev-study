require('dotenv').config({ path: '.env' });
const uri = process.env.MONGODB_URI;
const axios = require('axios'); // axios 모듈 추가

const express = require('express');
const cors = require('cors');

const next = require('next');
const mongodb = require('./db');
const userSchema = require('./model/User');

const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    mongodb(uri); // MongoDB에 연결
    const userData = userSchema
    const server = express();

    // 모든 도메인에서의 요청을 허용
    server.use(cors());
    server.use(express.json()); // JSON 요청 본문 처리를 위한 미들웨어

    server.post(`https://dev-study-seven.vercel.app/api/users`, async (req, res) => {
        try {
            const { id, name } = req.body; // 요청 본문에서 id 와 name 추출
            const user = await userData.create({ id, name });
            res.status(201).json(user); // 사용자 정보를 응답으로 보냄
        } catch (err) {
            console.error(err);
            res.status(500).send('서버 오류');
        }
    });

    server.all('*', (req, res) => {
        console.log(`Request received for ${req.url}`);
        return handle(req, res);
    });

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
    });
});
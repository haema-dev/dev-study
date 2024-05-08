const mongoose = require('mongoose');

// MongoDB 연결 설정을 한번만 수행하도록 하는 플래그
let isConnected;

module.exports = async function dbConnect() {
  if (isConnected) {
    console.log('이미 MongoDB에 연결되어 있습니다.');
    return;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI is not defined in the environment.');
    process.exit(1);
  }

  const db = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    isConnected = true;
    console.log('MongoDB에 성공적으로 연결되었습니다.');
  }).catch(err => {
    isConnected = false;
    console.error('MongoDB 연결 실패:', err);
    throw err;
  });

  return db;
};

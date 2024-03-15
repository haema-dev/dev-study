const mongoose = require('mongoose');

module.exports = function db(uri) {
  // MongoDB 연결
  const mongoUri = uri;
  mongoose.connect(mongoUri, { dbName: "dev_study" })
  .then(() => console.log('MongoDB에 성공적으로 연결되었습니다.'))
  .catch(err => console.error('MongoDB 연결 실패:', err));

  mongoose.connection.on('disconnected', () => {
    mongoose.connect(mongoUri, { dbName: "dev_study" });
  });

  require('../src/User.js'); // user.js는 나중에 만듭니다.
};
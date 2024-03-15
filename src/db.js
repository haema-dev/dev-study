const mongoose = require('mongoose');
module.exports = () => {
  function connect() {
    // MongoDB 연결
    const uri = "mongodb+srv://haemahmtea:hm1234@cluster0.3ut4o3s.mongodb.net/dev_study";
    mongoose.connect(uri, { dbName : "dev_study"})
    .then(() => console.log('MongoDB에 성공적으로 연결되었습니다.'))
    .catch(err => console.error('MongoDB 연결 실패:', err));
  }
  connect();
  mongoose.connection.on('disconnected', connect);
  require('../src/User.js'); // user.js는 나중에 만듭니다.
}
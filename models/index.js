const Sequelize = require("sequelize");
const User = require("./user");
const Comment = require("./comment");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.userName,
  config.password,
  config
);

// 소문자 Sequelize =>
db.sequelize = sequelize;
// 대문자 Sequelize => 시퀄라이즈 객체 => 생성자
db.Sequelize = Sequelize;

db.User = User;
db.Comment = Comment;

User.init(sequelize);
Comment.init(sequelize);

module.exports = db;

// const Sequelize = require('sequelize');
// const User = require('./user');
// const Comment = require('./comment');

// const env = process.env.NODE_ENV || 'development';
// const config = require('../config/config')[env];
// const db = {};

// const sequelize = new Sequelize(config.database, config.username, config.password, config);

// db.sequelize = sequelize;

// db.User = User;
// db.Comment = Comment;

// User.initiate(sequelize);
// Comment.initiate(sequelize);

// User.associate(db);
// Comment.associate(db);

// module.exports = db;

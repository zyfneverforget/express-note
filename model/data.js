const Sequelize = require('sequelize');
const path = require('path')
const sequelize = new Sequelize(undefined, undefined, undefined, {
  host: 'localhost',
  dialect: 'sqlite',

  
  // 仅限 SQLite
  storage: path.join(__dirname,'../database/database.sqlite'),   //路径有问题！！！！！

  // 请参考 Querying - 查询 操作符 章节
  operatorsAliases: false
});

const NoteData = sequelize.define('note', {
	text: {
		type: Sequelize.STRING
	}
});

/* NoteData.sync()
  .then(() => NoteData.create({
    text: 'hello'
  }))
  .then(note => {
    console.log(note.toJSON());
	}); */

/* 	NoteData.findAll({raw: true}).then(note => {
		console.log(note)
	}) */
	module.exports.NoteData = NoteData
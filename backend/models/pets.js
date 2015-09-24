var Mongoose = require("mongoose");

var Schema = Mongoose.Schema;

var petSchema = Schema({
  isAvailable: {type: Boolean, required: true, default: true},
  kind: {type: String, required: true},
  variety: {type: String, required: true},
  gender: {type: String, required: true},
  age: {type: Number, required: true},
  name: {type: String, required: true},
  description: String
});

var Pet = Mongoose.model("Pet", petSchema);

module.exports = Pet;

//
// var dog = new Pet({isAvailable: true, kind: dog, variety: shnouzer, gender: Male, age: 4, name: fido, description: cool});
//
// petSchema.methods.toggleAvailable = function (cb) {
//   this.isAvailable = !this.isAvailable;
//   this.save(cb);
// }
//
// dog.toggleAvailable();

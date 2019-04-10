const mongoose = require('mongoose');

const iceCreamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  vegan:{
    type: Boolean,
    default: false
  }
});

const IceCream = mongoose.model('IceCream', iceCreamSchema);

module.exports = IceCream;

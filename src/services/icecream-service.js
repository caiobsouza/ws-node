const IceCream = require('../models/icecream');
module.exports = {
  get() {
    return IceCream.find();
  },
  getById(id) {
    return IceCream.findById(id);
  },
  getVegans() {
    return IceCream.findOne({vegan : true});
  },
  removeById(id) {
    return IceCream.findByIdAndDelete(id);
  },
  create(icecream) {
    const document = new IceCream(icecream);
    return document.save();
  }
};
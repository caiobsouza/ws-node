jest.doMock('../../src/services/icecream-service', () => {
  return {
    get() {
      return Promise.resolve({ name: 'Chocolate', description: 'Dark Chocolate', vegan: false });
    },
    getById(id) {
      return Promise.resolve({ name: 'Chocolate', description: 'Dark Chocolate', vegan: false });
    },
    getVegans() {
      return Promise.resolve({name: "Coco", vegan: true});
    },
    removeById(id) {
      return Promise.resolve({ message: "Icecream removed!" });
    },
    create(doc) {
      return Promise.resolve(doc);
    }
  };
});

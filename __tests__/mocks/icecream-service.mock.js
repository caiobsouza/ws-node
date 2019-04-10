jest.doMock('../../src/services/icecream-service', () => {
  return {
    get() {
      return { name: 'Chocolate', description: 'Dark Chocolate', vegan: false };
    },
  };
});

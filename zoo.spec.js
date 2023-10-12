const Lion = require('./animals/lion');
const Tiger = require('./animals/tiger');

describe('zoo', () => {
    it('Lion', () => {
      const lionMessage = "I'm a lion";
      const lion = new Lion();
      const result = lion.speak(lionMessage);
      expect(result).toEqual("roar I'm roar a roar lion");
    });
    it('Tiger', () => {
        const tigerMessage = "Lions suck";
        const tiger = new Tiger();
        const result = tiger.speak(tigerMessage);
        expect(result).toEqual("grrr Lions grrr suck");
      });
  });
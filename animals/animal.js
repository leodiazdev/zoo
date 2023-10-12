class Animal {
    constructor(sound) {
      this.sound = sound;
    }
  
    speak(sentence) {
      const words = sentence.split(' ');
      const result = [];
  
      for (let word of words) {
        result.push(this.sound);
        result.push(word);
      }
  
      return result.join(' ');
    }
}

module.exports = Animal;
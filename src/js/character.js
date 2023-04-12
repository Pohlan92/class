export default class Character {
  constructor(name) {
    if (typeof name === 'string' && name.length > 1 && name.length < 11) {
      this.name = name;
    } else {
      throw new Error('Введено имя с неподходящими параметрами');
    }
    this.health = 100,
    this.level = 1
  }
}

export default class Character {
  constructor(name, type) {
    if ((name.length < 2) || (name.length > 10)) {
      throw new Error('имя должно быть: min - 2 символа, max - 10');
    }
    const arr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!arr.includes(type)) {
      throw new Error('тип должен быть один из типов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}

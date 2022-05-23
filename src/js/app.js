export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('персонаж уже есть в команде');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    this.members = new Set([...characters]);
  }

  toArray() {
    const arr = [];
    this.members.forEach((member) => arr.push(member));
    return arr;
  }
}

import Team from '../app';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';
import Character from '../character';

const bowman = new Bowman('Legolas');
const daemon = new Daemon('Lucifer');
const magician = new Magician('Merlin');
const swordsman = new Swordsman('Sedrik');
const undead = new Undead('Drakula');
const zombie = new Zombie('Franky');
const team = new Team();

test('добавление персонажа Bowman в команду', () => {
  team.add(bowman);
  expect(team.members.has(bowman)).toBe(true);
});

test('проверка невозможности повторного добавления персонажа в команду', () => {
  const anotherBowman = new Bowman('Legolas');
  team.add(anotherBowman);
  expect(() => {
    team.add(anotherBowman);
  }).toThrow('персонаж уже есть в команде');
});

test('проверка добавления нескольких персонажей в команду', () => {
  team.addAll(daemon, magician, swordsman, undead, zombie);
  expect(team.members.size).toEqual(5);
});

test('проверка преобразования в массив', () => {
  team.addAll(bowman, magician);
  expect(team.toArray()).toEqual([bowman, magician]);
});

test('проверка выдаваемой ошибки на некорректное имя персонажа', () => {
  expect(() => {
    new Character('а', 'Magician');
  }).toThrow();
});

test('проверка выдаваемой ошибки на некорректный тип персонажа', () => {
  expect(() => {
    new Character('Frank', 'Mag');
  }).toThrow();
});

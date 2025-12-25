import { describe, it } from 'vitest';
import { Character } from './character.js';

describe('Character', () => {
  let character;
  beforeEach(() => {
    character = new Character('ada', 'love', 'asf');
  });

  it('should create a character with a first name, last name, and role', () => {
    expect(character).toEqual(
      expect.objectContaining({
        firstName: expect.any(String),
        lastName: expect.any(String),
        role: expect.any(String),
        level: 1,
        lastModified: expect.any(Date),
        strength: expect.any(Number),
        dexterity: expect.any(Number),
        constitution: expect.any(Number),
        intelligence: expect.any(Number),
        wisdom: expect.any(Number),
        charisma: expect.any(Number),
      }),
    );
  });

  it('should allow you to increase the level', () => {
    character.levelUp();
    expect(character.level).toBe(2);
  });

  it('should update the last modified date when leveling up', () => {
    character.levelUp();
    expect(character.lastModified).toBeInstanceOf(Date);
  });
});

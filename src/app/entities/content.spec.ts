import { Content } from './content';

describe('Content', () => {
  it('should be able to create a new notificaton content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade!');
    expect(content).toBeTruthy();
  });

  it('should not be able to create a notificaton content with less than 5 characters', () => {
    expect(() => new Content('Opa!')).toThrow();
  });

  it('should not be able to create a notificaton content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});

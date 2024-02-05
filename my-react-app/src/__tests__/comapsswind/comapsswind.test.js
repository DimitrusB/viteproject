const degToCompass = require('./index').degToCompass;


describe('degToCompass', () => {
  it('should return correct direction for given degrees', () => {
    expect(degToCompass(0)).toBe('Север');
    expect(degToCompass(45)).toBe('Северо-Восток');
    expect(degToCompass(90)).toBe('Восток');
    expect(degToCompass(135)).toBe('Юго-Восток');
    expect(degToCompass(180)).toBe('Юг');
    expect(degToCompass(225)).toBe('Юго-Запад');
    expect(degToCompass(270)).toBe('Запад');
    expect(degToCompass(315)).toBe('Северо-Запад');
    expect(degToCompass(360)).toBe('Север');
  });

});

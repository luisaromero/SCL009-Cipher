describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',()=> {
     assert.equal( window.cipher.encode('HOLA',33),'OVSH');
     
  });
  it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33',()=> {
    assert.equal( window.cipher.encode('hola',33),'ovsh');
  });
  it('debería retornar "codigo cesar" para "jvkpnv jlzhy" con offset 33',()=> {
    assert.equal( window.cipher.encode('codigo cesar',33),'jvkpnv jlzhy');
  });
});

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof window.cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',() => {
    assert.equal(window.cipher.decode('OVSH',33),'HOLA');
  });
  it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33',() => {
    assert.equal(window.cipher.decode('ovsh',33),'hola');
  });
  it('debería retornar "jvkpnv jlzhy" para "codigo cesar" con offset 33',() => {
    assert.equal(window.cipher.decode('jvkpnv jlzhy',33),'codigo cesar');
  });

});
});
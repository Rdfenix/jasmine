// Descrição do nome do teste.
describe("Hello World", function () {
  // Dentro de it seria uma label, ou podemos dizer que seria uma breve descrição sobre o que o teste irá realizar.
  it("should return Hello World", function () {
    // No expect o helloWorld() informado seria uma função de um arquivo javascript
   // on de o teste aplicado seria se a função retornaria a string "Hello World"
    expect(helloWorld()).toEqual('Hello World');
  });
});

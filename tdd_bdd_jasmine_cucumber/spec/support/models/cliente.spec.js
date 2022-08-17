const Cliente = require('../../../models/cliente')


describe('Clientes' , ()=>{
    beforeEach(()=>{

    })
    it('Retorna todos', ()=>{
        let cliente = Cliente.primeiro();
        expect(cliente.id).not.toBeUndefined()
        expect(cliente.nome).not.toBeUndefined()
        expect(cliente.telefone).not.toBeUndefined()

     
    });
    it('Valida Propriedades de um Cliente' ,() =>{
        let clientes= Cliente.todos();
        expect(clientes.length).toEqual(10)

    
    });

    it('Nome do cliente Uppercase', () =>{
        let cliente = Cliente.primeiro();
        cliente.nome = "felipe"
        expect(cliente.nomeUpercase()).toEqual("FELIPE")
    })
})
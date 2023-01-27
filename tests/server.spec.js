const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
    it("Obteniendo un 200", async () =>{
        const response = await request(server).get("/cafes").send()
        const status = response.statusCode
        expect(status).toBe(200)
    })
    // it("Obteniendo un 404 =)!!", async (id) => {
    //     const id  = id
    //     const response = await request(server).delete("/")
    //     const status = response.statusCode
    //     expect(status).toBe(404)
    // })

  
});
it("Agregando un Nuevo Café =)!!", async () => {
    const id = Math.floor(Math.random() * 999)
    const coffee = { id, nombre: "New Coffeee =)!!"}
    const response = await request(server).post("/cafes/" + id)
    const status = response.statusCode
    expect(status).toBe(201)
})


  it("Probando Errores con PUT =)!!", async () => {
    
  })
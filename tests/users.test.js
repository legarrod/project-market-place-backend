const request = require('supertest')
const app = require('../app')

describe('Testing module /users', ()=>{

    test('Should respond user exist', async ()=>{
        const response = await request(app)
            .post('/api/v1/userslog/auth')
            .send({email: 'andres@gmail.com', password: 'casa1'})

        expect(response.body.token).toBeDefined()
    })

    test('Should respond array users method get', async ()=>{
        const response = await request(app)
            .get('/api/v1/users/all')
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZHJlc0BnbWFpbC5jb20iLCJwYXNzd29yZCI6ImNhc2ExIiwiaWF0IjoxNjc3NzI3MzE5fQ.hgNAwUSYDH98cI3bLR46FsjLjGhembUIeQpcw_36Y84')
            .send()
        expect(response.statusCode).toBe(200)
        expect(response.body).toBeInstanceOf(Array)
    })

    test('Should respond user create successfully', async ()=>{
        const response = await request(app)
            .post('/api/v1/userslog/register')
            .send({full_name: 'Luis', phone: '22222', address: 'calle20', email: 'andres@gmail.com', rol: 'USER', password: 'casa1'})
        expect(response.body.messge).toBe('USER_CREATE_SUCCESFULLY')
    })

})
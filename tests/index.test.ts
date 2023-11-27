import request from 'supertest'
import app from '../src/index'

describe('Random test', () => {
  it('should return string on GET /', async () => {
    const response = await request(app)
      .get('/')
      .expect(200)

    expect(response.text).toEqual('Hello World!')
  })
})

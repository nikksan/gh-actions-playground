import request from 'supertest';
import app from '../src/index';

describe('Random test', () => {
    it('should return string on GET /', (done) => {
        request(app)
            .get('/')
            .expect('Hello World!')
            .expect(200, done);
    });
});

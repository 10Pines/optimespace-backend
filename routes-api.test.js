import express from 'express';
import supertest from 'supertest';
import routes from './routes-api';

describe('GET api/conferences', () => {
  describe('when an id is provided', () => {
    let idProvided;
    const subject = () => {
      const app = express();
      app.use('/api', routes);
      return supertest(app).get(`/api/conferences/${idProvided}`);
    };
    describe('and the conference exists', () => {
      beforeEach(() => {
        idProvided = 1;
      });
      it('retreives the correct conference', () => {
        const expectedId = idProvided;
        subject()
          .then(res => res.body)
          .then(body => expect(body.conferenceId).toBe(expectedId));
      });
      it('has a rooms array', () => {
        subject()
          .then(res => res.body)
          .then(body => expect(Array.isArray(body.rooms)).toBe(true));
      });
      it('has a schedule array', () => {
        subject()
          .then(res => res.body)
          .then(body => expect(Array.isArray(body.schedule)).toBe(true));
      });
    });
    describe('and the conference doesnt exist', () => {
      beforeEach(() => {
        idProvided = 2;
      });
      it('retreives the correct conference', () => {
        subject()
          .then(res => res.status)
          .then(status => expect(status).toBe(404));
      });
    });
  });
});
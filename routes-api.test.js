import express from 'express';
import supertest from 'supertest';
import routes from './routes-api';
import * as Conferences from "./Conferences";

var conferences = Conferences.conferences;
describe('GET api/conferences', () => {
  describe('when no id is provided', () => {
    const subject = () => {
      const app = express();
      app.use('/api', routes);
      return supertest(app).get('/api/conferences')
    }
    it('retrieves every conference', () => {
      return subject()
          .then(res => res.body)
          .then(body => expect(body).toEqual(conferences))
    })
  })
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
        return subject()
          .then(res => res.body)
          .then(body => expect(body.conferenceId).toEqual(expectedId));
      });
      it('has a rooms array', () => {
        return subject()
          .then(res => res.body)
          .then(body => expect(Array.isArray(body.rooms)).toBe(true));
      });
      it('has a schedule array', () => {
        return subject()
          .then(res => res.body)
          .then(body => expect(Array.isArray(body.schedule)).toBe(true));
      });
    });
    describe('and the conference doesnt exist', () => {
      beforeEach(() => {
        idProvided = conferences.length + 1;
      });
      it('retreives the correct conference', () => {
        return subject()
          .then(res => res.status)
          .then(status => expect(status).toBe(404));
      });
    });
  });
});
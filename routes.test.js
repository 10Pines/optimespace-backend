import express from 'express';
import supertest from 'supertest';
import routes from './routes';

it('works', () => {
  const app = express();
  app.use('/api', routes);
  return supertest(app).get('/api/conferences/1').then(res => {
    expect(res.body).toEqual({
      conferenceId: 1,
      rooms: [
        { roomId: 1, name: 'sala roja' }
      ],
      schedule: [
        { startsAt: 9, endsAt: 10, roomId: 1, talk: {name: "Charla copada de agile"} },
        { startsAt: 9, endsAt: 11, roomId: 2, talk: {name: "Charla ladri de agile"} },
        { startsAt: 9, endsAt: 12, roomId: 3, talk: {name: "Charla aburrida de agile"} }
      ]
    });
  });
});

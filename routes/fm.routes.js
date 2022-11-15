const axios = require('axios');
const router = require('express').Router();
const config = require('../config.json');

const api = config.api || 'https://web.fort-monitor.ru/api/integration/v1';

const cors = {
  ['Access-Control-Allow-Credentials']: true,
  ['Access-Control-Allow-Headers']: 'Content-Type',
  ['Access-Control-Allow-Origin']: 'http://localhost:3000',
};

router.get('/connect', (request, response) => {
  try {
    const { login, password, lang, timezone } = request.query;
    axios({
      url: `${api}/connect?login=${login}&password=${password}&lang=${lang}&timezone=${timezone}`,
      method: 'get',
      headers: {
        ['Content-type']: 'application/json; charset=utf-8',
      },
    })
      .then((res) => {
        response
          .header({ ...cors })
          .status(res.status)
          .send({ data: res.data, sid: res.headers.sessionid });
      })
      .catch((err) => {
        response.status(500).send({ message: err });
      });
  } catch {
    response.status(500).send({ message: 'Internal Server Error' });
  }
});

router.get('/disconect', (request, response) => {
  try {
    axios({
      url: `${api}/disconnect`,
      method: 'get',
      headers: {
        ['Content-type']: 'application/json; charset=utf-8',
        ['SessionId']: request.headers['user-sid'],
      },
    })
      .then((res) =>
        response
          .header({ ...cors })
          .status(res.statusCode)
          .send({ data: res.data })
      )
      .catch((err) => {
        response.status(500).send({ message: err });
      });
  } catch {
    response.status(500).send({ message: 'Internal Server Error' });
  }
});

module.exports = router;

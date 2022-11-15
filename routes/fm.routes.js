const axios = require('axios');
const router = require('express').Router();

const instans = axios.create({
  baseURL: 'https://web.fort-monitor.ru/api/integration/v1',
  headers: {
    'Content-type': 'application/json; charset=utf-8',
  },
});

function handleErrorResponse(response) {
  return (err) => {
    if (err.res) {
      response.status(err.res.status).send(err.res.data).end();
    } else if (err.req) {
      response.status(504).send(err.req).end();
    } else {
      response.status(500).send(err.message).end();
    }
  };
}

router.get('/connect', (request, response) => {
  instans
    .get('/connect', {
      params: {
        lang: request.query.lang,
        login: request.query.login,
        password: request.query.password,
        timezone: request.query.timezone,
      },
    })
    .then((res) => {
      response
        .status(res.status)
        .set({ 'access-control-allow-origin': '*' })
        .send({ message: res.data, sid: res.headers.sessionid })
        .end();
    })
    .catch(handleErrorResponse(response));
});

router.get('/disconnect', (request, response) => {
  instans
    .get('/disconnect', {
      headers: {
        sessionid: request.headers['user-sid'],
      },
    })
    .then((res) => {
      response.status(res.status).set({ 'Access-Control-Allow-Origin': '*' }).send({ message: res.data }).end();
    })
    .catch(handleErrorResponse(response));
});

router.get('/getcompanieslist', (request, response) => {
  instans
    .get('/getcompanieslist', {
      headers: {
        sessionid: request.headers['user-sid'],
      },
    })
    .then((res) => {
      response.status(res.status).set({ 'Access-Control-Allow-Origin': '*' }).send(res.data).end();
    })
    .catch(handleErrorResponse(response));
});

router.get('/getobjectgroupslist', (request, response) => {
  instans
    .get('/getobjectgroupslist', {
      headers: {
        sessionid: request.headers['user-sid'],
      },
    })
    .then((res) => {
      response.status(res.status).set({ 'Access-Control-Allow-Origin': '*' }).send(res.data).end();
    })
    .catch(handleErrorResponse(response));
});

router.get('getobjectslist', (request, response) => {
  instans
    .get('getobjectslist', {
      headers: {
        sessionid: request.headers['user-sid'],
      },
      params: {
        companyId: request.query,
      },
    })
    .then((res) => {
      response.status(res.status).set({ 'Access-Control-Allow-Origin': '*' }).send(res.data).end();
    })
    .catch(handleErrorResponse(response));
});

module.exports = router;

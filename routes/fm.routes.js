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
      response.status(err.res.status).send(err.res.data);
    } else {
      response.status(500).send(err.message);
    }
  };
}

function handleSuccessResponse(response) {
  return (res) => {
    response
      .status(res.status)
      .set('access-control-allow-origin', '*')
      .set('access-control-expose-headers', 'user-sid')
      .set('user-sid', res.headers.sessionid)
      .send(res.data);
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
    .then(handleSuccessResponse(response))
    .catch(handleErrorResponse(response));
});

router.get('/disconnect', (request, response) => {
  instans
    .get('/disconnect', {
      headers: {
        sessionid: request.headers['user-sid'],
      },
    })
    .then(handleSuccessResponse(response))
    .catch(handleErrorResponse(response));
});

router.get('/getcompanieslist', (request, response) => {
  instans
    .get('/getcompanieslist', {
      headers: {
        sessionid: request.headers['user-sid'],
      },
    })
    .then(handleSuccessResponse(response))
    .catch(handleErrorResponse(response));
});

router.get('/getobjectgroupslist', (request, response) => {
  instans
    .get('/getobjectgroupslist', {
      headers: {
        sessionid: request.headers['user-sid'],
      },
    })
    .then(handleSuccessResponse(response))
    .catch(handleErrorResponse(response));
});

router.get('getobjectslist', (request, response) => {
  instans
    .get('getobjectslist', {
      headers: {
        sessionid: request.headers['user-sid'],
      },
      params: {
        companyId: request.query.companyId,
      },
    })
    .then(handleSuccessResponse(response))
    .catch(handleErrorResponse(response));
});

module.exports = router;

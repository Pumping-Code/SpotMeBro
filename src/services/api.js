import axios from 'axios';

import smbAuth from './auth';

function smbApi({ method, route, data = null }) {
  return axios({
    method,
    url: `https://spot-me-bro-server.herokuapp.com${route}`,
    data,
    headers: {
      Auth: smbAuth.id,
    },
  });
}

export default smbApi;

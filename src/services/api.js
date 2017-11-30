import axios from 'axios';

import smbAuth from './auth';

function smbApi({ method, route, data = null }) {
  return axios({
    method,
    url: `https://smb--api.herokuapp.com${route}`,
    // url: `http://192.168.1.148:3000${route}`,
    data,
    headers: {
      id: smbAuth.id,
      jwt: smbAuth.jwt,
    },
  });
}

export default smbApi;

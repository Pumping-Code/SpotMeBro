import axios from 'axios';

import smbAuth from './auth';

function smbApi({ method, route, data = null }) {
  return axios({
    method,
    url: `https://smb--api.herokuapp.com${route}`,
    data,
    headers: {
      id: smbAuth.id,
      token: smbAuth.token,
    },
  });
}

export default smbApi;

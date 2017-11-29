import axios from 'axios';

import smbAuth from './auth';

function smbApi({ method, route, data = null }) {
  return axios({
    method,
    url: `https://smb--api.herokuapp.com${route}`,
    //url: `http://10.17.44.160:3000${route}`,
    data,
    headers: {
      id: smbAuth.id,
      token: smbAuth.token,
    },
  });
}

export default smbApi;

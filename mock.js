import http from 'k6/http';

export default function () {

  let res = http.get('http://127.0.0.1:8888')

  //console.log(res.status, res.body);
}


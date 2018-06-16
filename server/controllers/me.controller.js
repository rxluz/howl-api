
function post(req, res) {
  return res.json({hello: 'threadsJsonpost'});
}

function getNotifications(req, res) {
  return res.json({hello: 'threadsJsongetNotifications'});
}


export default {
  post,
  getNotifications
};

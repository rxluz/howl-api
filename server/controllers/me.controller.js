
function post(req, res) {
  return res.json({
    id: 9,
    username: req.body.username,
    phone: req.body.phone
  });
}

function getNotifications(req, res) {
  const notifications = [
    {
      id: 1, 
      content: 'lola commented in your thread',
      thread_id: 21
    },
    {
      id: 2, 
      content: 'rxluz voted in your thread',
      thread_id: 21
    },
    {
      id: 3, 
      content: 'rxluz commented in your thread',
      thread_id: 21
    }
  ]
  return res.json({total: notifications.length, data: notifications});
}


export default {
  post,
  getNotifications
};

function get(req, res) {
  const content = [
    {
      id: 21,
      content: 'Has anyone saw my laptop in Murphs Pub?',
      votes: {
        total: 32,
        is: {
          up: false,
          down: true
        }
      },
      date: {
        timestamp: 1529222592,
        friendly: '13 minutes ago'
      },
      author: 'dan'
    },
    {
      id: 20,
      content: 'Is there some dangerous streets in this area?',
      votes: {
        total: 27,
        is: {
          up: false,
          down: true
        }
      },
      date: {
        timestamp: 1529222492,
        friendly: '2 hours ago'
      },
      author: 'lola'
    },
    {
      id: 19,
      content: 'Where I find the chepeast beer in this area?',
      votes: {
        total: 23,
        is: {
          up: false,
          down: false
        }
      },
      date: {
        timestamp: 1529222392,
        friendly: '9 days ago'
      },
      author: 'rxluz'
    },
  ];
  return res.json({ total: content.length, data: content });
}

function getOne(req, res) {
  const comments = [
    {
      id: 3,
      content: 'Dan I work there and I kept your laptop, I will be there in this afternoon',
      author: 'lola',
      votes: {
        total: 19,
        is: {
          up: true,
          down: false
        }
      }
    },
    {
      id: 1,
      content: 'What laptop type did you lost there?',
      author: 'rxluz',
      votes: {
        total: 13,
        is: {
          up: false,
          down: true
        }
      }
    },
    {
      id: 2,
      content: 'A black Dell laptop',
      author: 'dan',
      votes: {
        total: 10,
        is: {
          up: false,
          down: true
        }
      }
    },
  ];

  const content = {
    id: 21,
    content: 'Has anyone saw my laptop in Murphs Pub?',
    votes: {
      total: 32,
      is: {
        up: false,
        down: true
      }
    },
    date: {
      timestamp: 1529222592,
      friendly: '13 minutes ago'
    },
    author: 'dan',
    comments: { total: comments.length, data: comments }
  };

  return res.json(content);
}

function setUpVote(req, res) {
  return res.send({});
}

function setUpVoteComment(req, res) {
  return res.send({});
}

function setDownVote(req, res) {
  return res.send({});
}

function setDownVoteComment(req, res) {
  return res.send({});
}

function post(req, res) {
  return res.send({
    id: 90, 
    content: req.body.content,
    timer: req.body.timer,
    price: req.body.price
  });
}


export default {
  get,
  getOne, 
  setUpVote, 
  setUpVoteComment, 
  setDownVote, 
  setDownVoteComment, 
  post
};

function get(req, res) {
  const content = [
    {
      id: 21,
      content: 'Has anyone seen my laptop in Murphy\'s Pub? I left it there last night :(',
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
      content: 'Are there any dangerous streets in this area?',
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
      content: 'Where can I find the chepeast beer in this area?',
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
    {
      id: 18,
      content: 'Does anyone know a good route to Temple bar for me, I use a wheelchair',
      votes: {
        total: 15,
        is: {
          up: false,
          down: false
        }
      },
      date: {
        timestamp: 1529222392,
        friendly: '3 hours ago'
      },
      author: 'dan'
    },
    {
      id: 17,
      content: 'Hi guys, I really need an iPhone charger, anyone around have one?',
      votes: {
        total: 9,
        is: {
          up: false,
          down: false
        }
      },
      date: {
        timestamp: 1529222392,
        friendly: '5 minutes ago'
      },
      author: 'lola'
    },
    {
      id: 17,
      content: 'Steer clear off Canden street? A bus has just hit a car so it is closed!',
      votes: {
        total: 3,
        is: {
          up: false,
          down: false
        }
      },
      date: {
        timestamp: 1529222392,
        friendly: '18 minutes ago'
      },
      author: 'lola'
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

import express from 'express';
const router = express.Router();

const timeLog = (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  }
  router.use(timeLog)


router.get('/', (req, res) => {
    res.send('Get all users');
    }
);

router.post('/', (req, res) => {
    res.send('Create a user');
    }
);

router.get('/:id', (req, res) => {
    res.send(`Get user with id ${req.params.id}`);
    }
);

router.put('/:id', (req, res) => {
    res.send(`Update user with id ${req.params.id}`);
    }
);

router.delete('/:id', (req, res) => {
    res.send(`Delete user with id ${req.params.id}`);
    }
);


export default router;
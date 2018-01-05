const express = require('express');
const {User, Donation, School} = require('./models');
const router = express.Router()

const sendUserError = (err, res) => {
  res.status(422);
  if (err && err.message) {
    res.json({
      message: err.message,
      stack: err.stack,
    });
    return
  }
  res.json(err);
}

const router = express.Router()

router.get('/schools', (req, res) => {
  Property.find({}, (error, properties) => {
    if(error) {
      console.log(error)
      return
    }
    res.send({properties})
  })
})

router.post('/user', (req, res) => {
  const {firstName, lastName, username, password } = req.body
  const newUser = new User({firstName, lastName, username, password })
  newUser.save((error, user) => {
    if (error) {
      console.log(error);
      res.status(422)
      return
    }
    console.log(`***User added: ****${JSON.stringify(user)}`)
  })
})

router.post('/login', (req, res) => {
  const { username, password } = req.body
  if (password === "") {
    sendUserError("Please input a valid password", res);
    return;
  }
  User.findOne({username})
    .exec((error, user)=> {
      if (error) {
        console.log(error);
        res.status(422)
        return
      }
      console.log({user})
      user.password === password ? res.send(user) : res.send({err: 'Please use correct credentials'})
    })
})

router.post('/schoollogin', (req, res) => {
  const { username, password } = req.body
  if (password === "") {
    sendUserError("Please input a valid password", res);
    return;
  }
  School.findOne({username})
    .exec((error, user)=> {
      if (error) {
        console.log(error);
        res.status(422)
        return
      }
      console.log({user})
      user.password === password ? res.send(user) : res.send({err: 'Please use correct credentials'})
    })
})

module.exports = router;
const bcrypt = require('bcrypt');
const User = require('../models/User');
const { json } = require('express');
const jwt = require('jsonwebtoken');

module.exports = {
  async store(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: 'Required field missing.' });
      }

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({
          message: 'User not found!',
        });
      }

      if (user && (await bcrypt.compare(password, user.password))) {
        const userResponse = {
          _id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        };
        return jwt.sign({ user: userResponse }, 'secret', (err, token) => {
          return res.json({
            user: token,
            user_id: user._id,
            firstName: user.firstName,
          })
        });
      } else {
        return res.status(200).json({
          message: 'Email or Password does not match.',
        });
      }
    } catch (error) {
      throw Error(`Error while authenticating a user ${error}`);
    }
  },
};

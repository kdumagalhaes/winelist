const Wine = require('../models/Wine');
const jwt = require('jsonwebtoken');

module.exports = {
  getWineById(req, res) {
    jwt.verify(req.token, 'secret', async (err, authData) => {
      if (err) {
        res.sendStatus(401);
      } else {
        const { wineId } = req.params;
        try {
          const wines = await Wine.findById(wineId);

          if (wines) {
            return res.json({authData: authData, wines: wines});
          }
        } catch (error) {
          return res.status(400).json({
            message: 'wineId does not exist.',
          });
        }
      }
    });
  },

   getAllWines(req, res) {
    jwt.verify(req.token, 'secret', async (err, authData) => {
      if (err) {
        res.sendStatus(401);
      } else {
        const { wineType } = req.params;
        const query = wineType ? { wineType } : {};

        try {
          const wines = await Wine.find(query);

          if (wines) {
            return res.json({ authData, wines });
          }
        } catch (error) {
          return res.status(400).json({
            message: 'We do not have any wines yet.',
          });
        }
      }
    });
  },

   getWinesByUserId(req, res) {
    jwt.verify(req.token, 'secret', async (err, authData) => {
      if (err) {
        res.sendStatus(401);
      } else {
        const { user_id } = req.headers;
    
        try {
          const wines = await Wine.find({ user: authData.user._id });
    
          if (wines) {
            return res.json({authData, wines});
          }
        } catch (error) {
          return res
            .status(400)
            .json({ message: `We do have any wines with the user_id ${user_id}` });
        }
      }
    })
	}
}
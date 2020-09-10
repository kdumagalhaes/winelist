const Wine = require('../models/Wine');
const jwt = require('jsonwebtoken');

module.exports = {
  async getWineById(req, res) {
    const { wineId } = req.params;
    try {
      const wine = await Wine.findById(wineId);

      if (wine) {
        return res.json(wine);
      }
    } catch (error) {
      return res.status(400).json({
        message: 'wineId does not exist.',
      });
    }
  },

  async getAllWines(req, res) {
    jwt.verify(req.token, 'secret', async (err, authData) => {
      if (err) {
        res.sendStatus(401);
      } else {
        const { wineType } = req.params;
        const query = wineType ? { wineType } : {};

        try {
          const wines = await Wine.find(query);

          if (wines) {
            return res.json({authData, wines});
          }
        } catch (error) {
          return res.status(400).json({
            message: 'We do not have any wines yet.',
          });
        }
      }
    });
  },

  async getWinesByUserId(req, res) {
    const { user_id } = req.headers;

    try {
      const wines = await Wine.find({ user: user_id });

      if (wines) {
        return res.json(wines);
      }
    } catch (error) {
      return res
        .status(400)
        .json({ message: `We do have any wines with the user_id ${user_id}` });
    }
  },
};

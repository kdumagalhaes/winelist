const Wine = require('../models/Wine');
const User = require('../models/User');

module.exports = {
  async createWine(req, res) {
    const { wineLabel, harvest, comments, price } = req.body;
    const { user_id } = req.headers;
    const user = await User.findById(user_id);
    const { filename } = req.file;

    if (!user) {
      return res.status(400).json({
        message: 'User does not exist.',
      });
    }
    const wine = await Wine.create({
      wineLabel,
      harvest,
      comments,
      price: parseFloat(price),
      user: user_id,
      thumbnail: filename,
    });

    return res.json(wine);
  },

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
      })
    }
  },
};

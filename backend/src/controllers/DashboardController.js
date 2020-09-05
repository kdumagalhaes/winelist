const Wine = require('../models/Wine');

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
        const { wineType } = req.params;
        const query = wineType ? { wineType } : {};
    
        try {
          const wines = await Wine.find(query);
    
          if (wines) {
            return res.json(wines);
          }
        } catch (error) {
          return res.status(400).json({
            message: 'We do not have any wines yet.',
          });
        }
      }
}
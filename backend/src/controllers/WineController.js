const Wine = require('../models/Wine')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

module.exports = {
	createWine(req, res) {
		jwt.verify(req.token, 'secret', async (err, authData) => {
			if (err) {
				res.statusCode(401)
			} else {
				const { wineLabel, harvest, comments, price, wineType } = req.body
				const { filename } = req.file

				const user = await User.findById(authData.user._id)

				if (!user) {
					return res.status(400).json({ message: 'User does not exist!' })
				}

				try {
					const wine = await Wine.create({
            wineLabel,
                      harvest,
                      comments,
                      wineType,
                      price: parseFloat(price),
                      user: authData.user._id,
                      thumbnail: filename,
					})

					return res.json(wine)
				} catch (error) {
					return res.status(400).json({ message: error })
				}
			}
		})

	},

	delete(req, res) {
		jwt.verify(req.token, 'secret', async (err) => {
			if (err) {
				res.statusCode(401)
			} else {
				const { wineId } = req.params
				try {
					await Wine.findByIdAndDelete(wineId)
					return res.status(204).send()

				} catch (error) {
					return res.status(400).json({ message: 'We do have any wine with the ID' })
				}
			}
		})
	}
}

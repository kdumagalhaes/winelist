const mongoose = require('mongoose');

const WineSchema = new mongoose.Schema(
  {
    wineLabel: String,
    harvest: Number,
    comments: String,
    thumbnail: String,
    updated: { type: Date, default: Date.now },
    price: Number,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    // grapes: [
    //   {
    //     type: String,
    //   },
    // ],
    // score: [
    //   {
    //     type: Number,
    //   },
    // ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

WineSchema.virtual("thumbnail_url").get(function () {
  return `http://localhost:8000/files/${this.thumbnail}`
} )

module.exports = mongoose.model('Wine', WineSchema);

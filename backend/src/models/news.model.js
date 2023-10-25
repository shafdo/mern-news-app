import mongoose from 'mongoose';

// Example modal. Cahnge it according to your needs.
const NewsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    category: {
      type: String,
      required: true,
      index: true,
    },
    content: {
      type: String,
      required: true,
      index: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    publishDate: {
      type: Date,
      required: true,
    },
  },

  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

const News = mongoose.model('News', NewsSchema);

News.syncIndexes();

export default News;

import { News } from '@/models';

export const createNewsRepo = async (NewsSchema) => {
  try {
    const news = await new News(NewsSchema).save();
    return {
      status: 200,
      message: 'News created successfully...',
      data: news.toObject(),
    };
  } catch (error) {
    return {
      status: 400,
      message: error.message,
    };
  }
};

export const updateNewsRepo = async (newsId, data) => {
  try {
    const user = await News.updateOne({ _id: newsId }, { $set: data });

    if (user.nModified === 0) {
      return {
        status: 404,
        message: 'News not found...',
        data: null,
      };
    }

    return {
      status: 200,
      message: 'News updated successfully...',
      data: user,
    };
  } catch (error) {
    return {
      status: 400,
      message: error.message,
    };
  }
};

export const deleteNewsRepo = async (newsId, data) => {
  try {
    const news = await News.findByIdAndDelete({ _id: newsId });

    return {
      status: 200,
      data: news,
      message: 'News deleted successfully...',
    };
  } catch (error) {
    return {
      status: 400,
      message: error.message,
      data: null,
    };
  }
};

export const getNewsRepo = async (uid) => {
  try {
    const news = await News.findOne({ _id: uid });
    return {
      status: 200,
      data: news,
    };
  } catch (error) {
    return {
      status: 400,
      message: error.message,
    };
  }
};

export const getAllNewsRepo = async (filter) => {
  const news = News.find(filter);
  return news;
};

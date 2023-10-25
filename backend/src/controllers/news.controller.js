import response from '@/utils/response';
import {
  createNewsRepo,
  updateNewsRepo,
  getNewsRepo,
  getAllNewsRepo,
  deleteNewsRepo,
} from '@/repository/news.repository';

export const createNews = async (req, res) => {
  const info = await createNewsRepo({ ...req.body });

  return response({
    res,
    status: info.status,
    message: info.message,
    data: info.data,
  });
};

export const updateNews = async (req, res) => {
  // Check for ID parameter
  const newId = req.params.id;
  if (newId == undefined || newId == '') {
    return response({
      res,
      status: 400,
      message: 'ID parameter is required...',
    });
  }

  const info = await updateNewsRepo(newId, req.body);

  return response({
    res,
    status: info.status,
    message: info.message,
    data: info.data,
  });
};

export const deleteNews = async (req, res) => {
  // Check for ID parameter
  const newId = req.params.id;
  if (newId == undefined || newId == '') {
    return response({
      res,
      status: 400,
      message: 'ID parameter is required...',
    });
  }

  const info = await deleteNewsRepo(newId);

  return response({
    res,
    status: info.status,
    message: info.message,
    data: info.data,
  });
};

export const getNews = async (req, res) => {
  // Check for ID parameter
  const newsId = req.params.id;
  if (newsId == undefined || newsId == '') {
    return response({
      res,
      status: 400,
      message: 'ID parameter is required...',
    });
  }

  const info = await getNewsRepo(newsId);

  return response({
    res,
    status: info.status,
    data: info.data,
  });
};

export const getAllNews = async (req, res) => {
  const info = await getAllNewsRepo({});

  return response({
    res,
    data: info,
  });
};

export const getAllPublicNews = async (req, res) => {
  const info = await getAllNewsRepo({ isPublished: { $eq: true } });

  return response({
    res,
    data: info,
  });
};

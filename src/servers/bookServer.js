import axios from 'axios';
const baseUrl = '/v1/books';

const getBooks = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

const getBookById = async (bookId) => {
  const res = await axios.get(`${baseUrl}/${bookId}`);
  return res.data;
}

const getChaptersByBookId = async (bookId) => {
  const res = await axios.get(`${baseUrl}/${bookId}/chapters`);
  return res.data;
};

const getNotesByChapterId = async (bookId, chapterId) => {
  const res = await axios.get(`${baseUrl}/${bookId}/chapters/${chapterId}/annotations`);
  return res.data;
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getBooks,
  getBookById,
  getChaptersByBookId,
  getNotesByChapterId
}

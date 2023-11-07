import axios from "axios";

const quotesByAuthorNameApi = "https://api.quotable.io/quotes?author";

export const getQuotesByAuthorName = async (authorName) => {
  try {
    const { data } = await axios.get(`${quotesByAuthorNameApi}=${authorName}`);
    return data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

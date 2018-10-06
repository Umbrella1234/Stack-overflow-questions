import axios from "axios";

const API_URL = "https://api.stackexchange.com/2.2/";

export const getQuestions = (page) =>
  axios.get(`${API_URL}/questions`, {
    params: {
      site: "stackoverflow",
      page,
      order: "desc",
      sort: "creation",
      filter: 'withbody'
    }
  });


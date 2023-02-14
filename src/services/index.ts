import axios from "axios";
import { RandomQuoteResponse } from "../models/quote";

const baseURL = "https://api.quotable.io";

const api = axios.create({
  baseURL,
});

export const getRandomQuote = (): Promise<RandomQuoteResponse> =>
  api
    .get("/random", { params: { maxLength: 100 }})
    .then((response) => response.data)
    .catch((error) => console.log(error));

import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../components/App";
import config from "../config";
import StateApi from "state-api";
import axios from "axios";

const serverRender = async () => {
  const response = await axios.get(`${config.HOST}:${config.PORT}/data`);
  const store = new StateApi(response.data);
  return {
    initialMarkup: ReactDOMServer.renderToString(<App store={store} />),
    initialData: response.data
  };
};

export default serverRender;

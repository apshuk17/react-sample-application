import React from "react";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import Routes from "../client/components/Routes/routes";

const renderer = (req, store) => {
  const sheet = new ServerStyleSheet();
  const content = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          <Routes />
        </StaticRouter>
      </Provider>
    )
  );
  const styles = sheet.getStyleTags();
  return `<html>
            <head>
                <title>React Server Side Application</title>
                ${styles}
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
            </html>`;
};

export default renderer;

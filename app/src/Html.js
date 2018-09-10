const Html = ({title, body}) => `
  <!doctype html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
      <div id="app">${body}</div>
      <script src="/index.js"></script>
    </body>
  </html>
`;

export default Html;
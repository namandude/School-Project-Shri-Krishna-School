const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/all-notice', createProxyMiddleware({ target: 'http://school-project-shri-krishna-school.onrender.com', changeOrigin: true }));
  app.use('/all-event', createProxyMiddleware({ target: 'http://school-project-shri-krishna-school.onrender.com', changeOrigin: true }));
  app.use('/all-news', createProxyMiddleware({ target: 'http://school-project-shri-krishna-school.onrender.com', changeOrigin: true }));
  app.use('/all-blog', createProxyMiddleware({ target: 'http://school-project-shri-krishna-school.onrender.com', changeOrigin: true }));
};

import { createProxyMiddleware } from 'http-proxy-middleware';

export default (app) => {
	app.use(
		createProxyMiddleware('/anal', {
			target: 'http://localhost:8081', 
			changeOrigin: true,
		})
	);
};
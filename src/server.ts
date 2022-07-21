import { createApp } from './app';
import { preload } from './preload';
import { SERVER_PORT } from '@config/environment';

preload().then(()=>{
	const app = createApp();

	app.listen(SERVER_PORT, () => {
		/* eslint-disable */
		console.log('################################################');
		console.log(`\t ⚡️ Server listening on port: ${SERVER_PORT}`);
		console.log('################################################');
		/* eslint-enable */
	});
})


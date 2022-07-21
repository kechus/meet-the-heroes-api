import { createApp } from './app';
import { preload } from './preload';
import { PORT } from '@config/environment';

preload().then(()=>{
	const app = createApp();

	app.listen(PORT, () => {
		/* eslint-disable */
		console.log('################################################');
		console.log(`\t ⚡️ Server listening on port: ${PORT}`);
		console.log('################################################');
		/* eslint-enable */
	});
})


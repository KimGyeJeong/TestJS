// import App from './App.svelte';
//
// var app = new App({
// 	target: document.body
// });
//
// export default app;

// import App from './App.svelte';
import App from './study0126/mainpage.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'NEW WORLD'

	},
});

export default app;
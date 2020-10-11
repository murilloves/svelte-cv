import App from './App.svelte';
import Personal from './Personal.svelte';

const personal = new Personal({
	target: document.body,
	props: {
		name: 'Silva, Murillo',
		address: 'S-4 Street - Bela Vista - Goiania',
		email: 'murillov.dev@gmail.com',
		phone: '+55 62 983-196-600',
		linkedin: {
			url: 'www.linkedin.com/in/murillo-vieira',
			link: 'https://linkedin.com/in/murillo-vieira'
		}
	}
});

const app = new App({
	target: document.body,
});

export default { personal, app };

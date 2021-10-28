// Theme Switcher
const initialState = (themeName) => {
	localStorage.setItem('site-theme', themeName);
	document.documentElement.className = `html ${themeName}`;
}

if (localStorage.getItem('site-theme') === undefined || localStorage.getItem('site-theme') === null) {
	initialState('dark-theme');
} else {
	initialState(localStorage.getItem('site-theme'));
}

const themeToggle = () => {
	if (localStorage.getItem('site-theme') === 'dark-theme') {
		initialState('light-theme');
	} else {
		initialState('dark-theme');
	}
}

// -- // 
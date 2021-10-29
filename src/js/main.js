document.addEventListener("DOMContentLoaded", () => {
	// Includes
	//? @include('components/_burger.js');
	//? @include('components/_themeSwitcher.js');
	// @include('components/_variables.js');
	// -- //

	nav.addEventListener('click', (e) => {
		if (e.target.classList.contains('nav__overlay')) {
			burgerCl.close();
		}
	})
	window.addEventListener('scroll', () => {
		if (!header.classList.contains('header--active') && window.innerWidth < 768) {
			header.classList.add('header--active')
		} else if (!window.pageYOffset) {
			header.classList.remove('header--active');
		}

	})

	themeSwitcher.addEventListener('click', themeToggle);

})
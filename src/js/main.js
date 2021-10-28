document.addEventListener("DOMContentLoaded", () => {
	// Includes
	//? @include('components/_burger.js');
	//? @include('components/_themeSwitcher.js');
	// @include('components/_variables.js');
	// -- //
	function activeNav() {

	}
	nav.addEventListener('click', (e) => {
		if (e.target.classList.contains('nav__overlay')) {
			burgerCl.close();
		}
	})

	themeSwitcher.addEventListener('click', themeToggle);

})
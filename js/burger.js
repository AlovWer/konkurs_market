class BurgerMenu {
    constructor() {
        this.burger = document.querySelector('.header__burger');
        this.menu = document.querySelector('.header__menu');
        this.init();
    }

    init() {
        if (this.burger && this.menu) {
            this.burger.addEventListener('click', () => this.toggleMenu());
            
            // Закрываем меню при клике на ссылку
            this.menu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => this.closeMenu());
            });
        }
    }

    toggleMenu() {
        this.menu.classList.toggle('header__menu--active');
        this.burger.classList.toggle('header__burger--active');
    }

    closeMenu() {
        this.menu.classList.remove('header__menu--active');
        this.burger.classList.remove('header__burger--active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new BurgerMenu();
});
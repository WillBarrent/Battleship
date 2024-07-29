import { appearElement } from "../utils/appearElement";
import { createElement } from "../utils/createElement";
import { loadImage } from "../utils/loadImage";
import Logo from '../../assets/logo.png';
import GithubLogo from '../../assets/github.png';

function createHeader() {
    const body = document.querySelector('body');
    const header = createElement('header', 'header');
    const nav = createElement('nav', 'nav');
    const navLogo = createElement('div', 'nav__logo');
    const navLogoImage = loadImage(Logo, 'nav__logo--img');
    const navLogoName = createElement('div', 'nav__logo-name');
    const navGithubLink = createElement('a', 'nav__github--logo');
    const navGithubLinkImage = loadImage(GithubLogo, 'nav__github--logo-img');

    navLogoName.textContent = 'Battleship';
    navGithubLink.setAttribute('href', 'https://github.com/WillBarrent');

    appearElement(body, header);
    appearElement(header, nav);
    appearElement(nav, navLogo);
    appearElement(navLogo, navLogoImage);
    appearElement(navLogo, navLogoName);
    appearElement(navGithubLink, navGithubLinkImage);
    appearElement(nav, navGithubLink);
}

export { createHeader };
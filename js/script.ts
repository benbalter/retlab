import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faRss } from '@fortawesome/free-solid-svg-icons/faRss';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faKeybase } from '@fortawesome/free-brands-svg-icons/faKeybase';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import * as AnchorJS from 'anchor-js';
import * as Collapse from 'bootstrap/js/dist/collapse';
import * as Turbo from '@hotwired/turbo';

window.Turbo = Turbo;
window.Collapse = Collapse;

const anchors = new AnchorJS();

document.addEventListener('turbo:load', () => {
  anchors.add();
});

library.add(faRss);
library.add(faFacebookF);
library.add(faTwitter);
library.add(faLinkedinIn);
library.add(faKeybase);
library.add(faGithub);

dom.watch();

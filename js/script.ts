import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faRss } from '@fortawesome/free-solid-svg-icons/faRss';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faKeybase } from '@fortawesome/free-brands-svg-icons/faKeybase';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { Collapse, Tooltip } from 'bootstrap';

import * as AnchorJS from 'anchor-js';
import * as Turbo from '@hotwired/turbo';

window.Turbo = Turbo;
window.Collapse = Collapse;
window.Tooltip = Tooltip;
const anchors = new AnchorJS();

document.addEventListener('turbo:load', () => {
  anchors.add();

  const els = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  Array.from(els).forEach((el) => {
    new Tooltip(el); // eslint-disable-line no-new
  });
});

library.add(faRss);
library.add(faFacebookF);
library.add(faTwitter);
library.add(faLinkedinIn);
library.add(faKeybase);
library.add(faGithub);

dom.watch();

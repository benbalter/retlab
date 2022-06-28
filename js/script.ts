import { config, library, dom } from '@fortawesome/fontawesome-svg-core';
import { faRss } from '@fortawesome/free-solid-svg-icons/faRss';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard';
import { closest } from 'fastest-levenshtein';

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

  const div = document.getElementById('four-oh-four-suggestion');

  if (div && window.paths) {
    const rec = closest(window.location.pathname, window.paths);
    div.innerHTML = `<a href="${rec}">${rec}</a>`;
  }
});

config.mutateApproach = 'sync';
library.add(
  faRss,
  faTwitter,
  faLinkedin,
  faGithub,
  faEnvelope,
  faAddressCard,
);
dom.watch();

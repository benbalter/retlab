import { config, library, dom } from '@fortawesome/fontawesome-svg-core';
import { faRss } from '@fortawesome/free-solid-svg-icons/faRss';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard';
import { closest } from 'fastest-levenshtein';
import { XMLParser } from 'fast-xml-parser';

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

  if (div) {
    fetch(`${window.location.protocol}//${window.location.host}/sitemap.xml`).then((response) => {
      if (response.ok) {
        response.text().then((text) => {
          const parser = new XMLParser();
          const urls = parser.parse(text).urlset.url.map((url) => url.loc);
          const url = new URL(closest(window.location.href, urls));
          div.innerHTML = `<a href="${url.href}">${url.pathname}</a>`;
        });
      } else {
        div.innerHTML = '<a href="/">/</a>';
      }
    });
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

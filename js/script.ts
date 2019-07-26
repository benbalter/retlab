import {library, dom} from '@fortawesome/fontawesome-svg-core';
import {faRss} from '@fortawesome/free-solid-svg-icons/faRss';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons/faFacebookF';
import {faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import {faKeybase} from '@fortawesome/free-brands-svg-icons/faKeybase';
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';

const anchorJS = require('anchor-js');

const anchors = new anchorJS();

const Turbolinks = require('turbolinks');

Turbolinks.start();

declare global {
    interface Window {
      disqus_config: {};
      disqus_shortname: string;
    }
    let DISQUS: any;
}

window.disqus_config = window.disqus_config || {};
window.disqus_shortname = window.disqus_shortname || "";

document.addEventListener('turbolinks:load', function () {
  anchors.add();

  if (document.getElementById('disqus_thread')) {
    if (typeof DISQUS === 'undefined') {
      (function () {
        const d = document;
        const s = d.createElement('script');
        s.src = 'https://' + window.disqus_shortname + '.disqus.com/embed.js';
        s.setAttribute('data-timestamp', Number(new Date()).toString());
        (d.head || d.body).appendChild(s);
      })();
    } else {
      DISQUS.reset({
        reload: true,
        config: window.disqus_config,
      });
    }
  }
});

library.add(faRss);
library.add(faFacebookF);
library.add(faTwitter);
library.add(faLinkedinIn);
library.add(faKeybase);
library.add(faGithub);

dom.watch();

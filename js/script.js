import {library, dom} from '@fortawesome/fontawesome-svg-core';
import {faRss} from '@fortawesome/free-solid-svg-icons/faRss';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons/faFacebookF';
import {faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import {faKeybase} from '@fortawesome/free-brands-svg-icons/faKeybase';
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';

var Turbolinks = require('turbolinks');

Turbolinks.start();

var anchorJS = require('anchor-js');

var anchors = new anchorJS();

document.addEventListener('turbolinks:load', function () {
  anchors.add();

  if (typeof DISQUS === 'undefined') {
    (function () {
      var d = document; var
        s = d.createElement('script');
      s.src = 'https://' + window.disqus_shortname + '.disqus.com/embed.js';
      s.setAttribute('data-timestamp', Number(new Date()));
      (d.head || d.body).appendChild(s);
    })();
  } else {
    DISQUS.reset({
      reload: true,
      config: window.disqus_config
    });
  }
});

library.add(faRss);
library.add(faFacebookF);
library.add(faTwitter);
library.add(faLinkedinIn);
library.add(faKeybase);
library.add(faGithub);

dom.watch();

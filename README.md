# Retlab

*A minimalist Jekyll theme for your personal site*

## Installation

1. Add this line to your Jekyll site's Gemfile:

    ```ruby
    gem "retlab"
    ```

2. And add this line to your Jekyll site:

    ```yaml
    theme: retlab
    ```

3. Run `bundle`
4. Create a file `assets/style.scss` with the following content:

    ```scss
    ---
    ---

    $url_base: "{{ site.github.url }}";
    @import "retlab";
    ```
5. (Optional) install Font Awesome (icons) and Anchor JS (header links) dependencies with the following commands:

    ```
    npm install -g bower
    bower install font-awesome anchor-js --config.directory=assets/vendor
    ```

## Configuration

You'll want to customize and add the following configurations to your site's `_config.yml` file:

```yml
title: Ben Balter
description: Attorney, open source developer, product manager

lang: en-US
branch: master

# Pages to include in header navigation
nav_pages:
  - index.html
  - talks.md
  - press.md
  - about.md
  - contact.md

# Disqus login information, for comments
disqus:
  shortname: DISQUS_USERNAME

# Links to include on the contact page
contact_links:
  - name: Twitter
    url: https://twitter.com/BenBalter
    icon: twitter
  - name: Facebook
    url: https://facebook.com/BenBalter
    icon: facebook

# Front matter defaults
defaults:
  -
    scope:
      path: ""
      type: "posts"
    values:
      layout: post
      comments: true
  -
    scope:
      path: ""
      type: "pages"
    values:
      layout: page
      comments: false

# Plugins
gems:
  - jekyll-seo-tag
  - jekyll-avatar
  - jekyll-github-metadata
```

You may also want to see [Jekyll SEO Tag's configuration](https://github.com/jekyll/jekyll-seo-tag).

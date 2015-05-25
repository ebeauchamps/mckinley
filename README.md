## McKinley Theme ##
>v.1.1

Medium inspired theme for Statamic [by @jamescampbell](http://twitter.com/jamescampbell), see it in action over at James's site [jamescampbell.us](https://jamescampbell.us).

###Features:
* Responsive, mobile-first layout (not just mobile-friendly)
* Full bleed background images that fill entire screen for each post.
* Rotating random images background on homepage (set images 1.jpg,2.jpg,3.jpg,4.jpg in img folder)
* Title, Sub-Title, Date, word-count / read-time per post page.
* Set your Twitter, Instagram, and Tumblr info directly from the theme.yaml file and watch the footer update with the proper social icon links.

> Uses very minimal jquery to get height/width of window, otherwise vanilla HTML5 / CSS3. NO BLOAT!

### Examples
See what the theme looks like:
* [Blog Post Page](https://jamescampbell.us/blog/on-photography-and-joy)
* [Regular Page](https://jamescampbell.us/about)

### Installation
1. Clone this repo into your _themes directory or download and unzip to the _themes directory. Final structure should be _themes/mckinley.
2. Change you config in _config/settings.yaml to use the new theme by changing the active theme name to mckinley.
3. Profit

### Customization of settings

Here are some of the customizations copied directly from the theme.yaml file that are available:
```
# Let's get social!
# Set the following true or false to turn on and off bottom social icons
twitter_on: true
tumblr_on: true
instagram_on: true
feed_on: false
twitter_name: jamescampbell
tumblr_link: http://tumblr.jamescampbell.us
instagram_link: http://instagram.com/jamesanthonycampbell
feed_link: http://feed.j1c.us/jamescampbell

# copyright done right, always a good idea to have a copyright page, but you can set it to false to turn it off
copyright_on: true
copyright_info: All Rights Reserved James Campbell. All content subject to Copyright.
copyright_details_link: https://jamescampbell.us/copyright-info
```
##### Changelog available [here](changelog.md)

License
------------
The MIT License (MIT)

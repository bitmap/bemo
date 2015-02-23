#Bemo

**Bemo** is a minimalist CSS boilerplate. It's designed to be lightweight and unobtrusive.

Install **Bemo** with Bower:
```
$ bower install bemo --save
```

##What is this
**Bemo** isn't a heavy framework, and it isn't designed to replace your site's CSS. **Bemo** is designed to be used on common elements such as buttons and tables. There are a few neat features thrown in like a menu bar, a basic grid, and some utility classes as well.

**Bemo** was built with OOCSS philosophy in mind and leverages some of it's style from [BEM][1] methodology. It's completely agnostic, has no dependencies, and can be used on top of resets like [Normalize][2].

##Build
**Bemo** is written in [Myth][1] and built using [Gulp][2]. You'll need Node.js/npm to build from source.

```
$ git clone git@github.com:cabebr/bemo.git
$ cd bemo
$ npm install
$ gulp
```
Run `gulp watch` to compile changes in `src`. Check out the `gulpfile.js` for more dev stuff.

##Browsers
Bemo plays nicely with these browsers
- IE 9+
- Chrome
- Firefox
- Safari
- iOS 6+
- Android 4+

##Docs
Coming soon!

[1]: https://en.bem.info/method/
[2]: http://necolas.github.io/normalize.css/
[3]: http://www.myth.io/
[4]: http://gulpjs.com/

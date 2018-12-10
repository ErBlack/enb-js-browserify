<a name="module_enb-js-browserify"></a>

## enb-js-browserify
A browserify driven alternative to enb-js

**Author**: ertema  
**Example**  
```js
const enbJsBrowserify = require('enb-js-browserify');

config.node('bundles/common', function(config) {
    config.addTechs([
        [
            enbJsBrowserify,
            {
                target: '?.browser.js', // default
                opts: { // Browserify options
                    fullPaths: Boolean, // Need for bundle analysis
                    debug: Booleam //  // Need for bundle analysis
                },
                plugins: […]
                transforms: […]
            }
        ]
    ]);
});
```

## License 

© 2018 YANDEX LLC. The code is released under the [Mozilla Public License 2.0](LICENSE.txt).

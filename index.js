const browserify = require('browserify');

/**
 * A browserify driven alternative to enb-js
 * @module enb-js-browserify
 * @author ertema
 * @example
 * const enbJsBrowserify = require('enb-js-browserify');
 * 
 * config.node('bundles/common', function(config) {
 *     config.addTechs([
 *         [
 *             enbJsBrowserify,
 *             {
 *                 target: '?.browser.js', // default
 *                 opts: { // Browserify options
 *                     fullPaths: Boolean, // Need for bundle analysis
 *                     debug: Booleam //  // Need for bundle analysis
 *                 },
 *                 plugins: […]
 *                 transforms: […]
 *             }
 *         ]
 *     ]);
 * });
 */
module.exports = require('enb/lib/build-flow').create()
    .name('browserify')
    .target('target', '?.browser.js')
    .useFileList(['js'])
    .defineOption('opts', {})
    .defineOption('plugins', [])
    .defineOption('transforms', [])
    .builder(function(sources) {
        const b = browserify(this._opts);

        this._plugins.forEach((plugin) => b.plugin(plugin));
        this._transforms.forEach((transform) => b.transform(transform));

        return new Promise(function(resolve, reject) {
            b
                .add(sources.map(({fullname}) => fullname))
                .bundle((err, data) => {
                    if (err) {
                        console.log(err);

                        reject(err);
                    } else {
                        resolve(data);
                    }
                });
        });
    })
    .createTech();
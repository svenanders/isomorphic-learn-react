var gulp = require("gulp");
var critical = require("critical");

module.exports = function (config) {
    return function () {
        /* return critical.generateInline({
         base: '/app/assets/',
         src: '/app/index.html',
         styleTarget: 'app.css',
         htmlTarget: 'index.html',
         width: 320,
         height: 480,
         minify: true
         });*/

        return critical.generate({
            base: 'app/assets',
            src: '../index_b.html',
            styleTarget: 'assets/app.css',
            dest: 'app.css',
            width: 640,
            height: 860,
            minify: true
        }, function (err, output) {
            console.log(err);
            //critical.inline({
            //    base: 'app/assets',
            //    src: 'index.html',
            //    dest: 'index-critical.html',
            //    minify: true
            //});
        });

    };
};


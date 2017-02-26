/**
 * Created by vunguyen on 2/26/17.
 */
'use strict';

var _ = require('lodash');

function Scope() {
    this.$$watchers = [];
}

Scope.prototype.$watch = function (watchFn, listenerFn) {
    this.$$watchers.push({
        watchFn: watchFn,
        listenerFn: listenerFn
    });
};

Scope.prototype.$digest = function () {
    _.forEach(this.$$watchers, function (watcher) {
        watcher.listenerFn();
    })
};

module.exports = Scope;
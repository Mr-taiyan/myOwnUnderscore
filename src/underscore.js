(function () {

    var root = (typeof self === 'object' && self.self === self && self) ||
        (typeof global === 'object' && global.global === global && global) ||
        this || {};

    var previousUnderscore = root._;

    var _ = function (obj) {
        if (obj instanceof _) return obj;
        if (!(this instanceof _)) return new _(obj);
        this._wrapped = obj;
    };

    if (typeof exports !== 'undefined' && !exports.nodeType) {
        if (typeof module !== 'undefined' && !module.nodeType && module.exports) {
            exports = module.exports = _;
        }
        exports._ = _;
    } else {
        root._ = _;
    }

    _.each = _.forEach = function (arr, iteratee, context) {
        if (typeof arr['length'] === 'number') {
            for (let i = 0, length = arr.length; i < length; i++) {
                iteratee(arr[i], i, arr);
            }
        } else {
            for (let key in arr) {
                iteratee(arr[key], key, arr);
            }
        }

    };

    _.map = _.collect = function (list, iteratee, context) {
        const myArray = [];
        if (typeof list['length'] === 'number') {
            for (let i = 0, length = list.length; i <length; i++) {
                myArray.push(iteratee(list[i], i));
            }
        } else {
            for (let i in list) {
                myArray.push(iteratee(list[i],i));
            }
        }
        return myArray;
    }

})();
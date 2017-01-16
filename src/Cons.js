/**
 * Created by malik on 17.01.2017.
 */
function cons(x, y) {
    return function (method) {
        switch (method) {
            case "car":
                return x;
            case "cdr":
                return y;
        }
    }
}

function car(pair) {
    return pair(function (x, y) {
        return x;
    });
}

function cdr(pair) {
    return pair(function (x, y) {
        return y;
    });
}

function pair(x) {
    return x && x.pair;
}

function atom(x) {
    return (x !== null) && (x !== undefined) && !x.pair;
}

function isEmpty(lat) {
    return lat == null || car(lat) == null;
}

function list() {
    var args = [].slice.call(arguments);
    return (args.length === 0) ? null : cons(args.shift(), list.apply(null, args));
}

function map(func, lat) {
    return (lat === null) ? null : cons(func(car(lat)), map(func, cdr(lat)));
}

function foldLeft(func, acc, lat) {
    return (lat === null) ? acc : foldLeft(func, func(acc, car(lat)), cdr(lat));
}

function foldRight(func, acc, lat) {
    return (lat === null) ? acc : func(car(lat), foldRight(func, acc, cdr(lat)));
}

function filter(pred, lat) {
    return (lat === null) ? null : (pred(car(lat) ? cons(car(lat), filter(pred, cdr(lat))) : filter(pred, cdr(lat))));
}

function append(l, m) {
    return (l === null) ? m : cons(car(l), append(cdr(l), m));
}

function reverse(l) {
    return (l === null) ? null : append(reverse(cdr(l)), cons(car(l), null));
}

function not(func) {
    return function () {
        return !func.apply(this, arguments);
    };
}

function any(pred, lat) {
    return (lat === null) ? false : pred(car(lat)) || any(pred, cdr(lat));
}

function every(pred, lat) {
    return !any(not(pred), lat);
}

function asArray(list) {
    return isEmpty(list) ? [] : [car(list)].concat(asArray(cdr(list)));
}

function asList(arr) {
    return list.apply(null, arr);
}

function flip(func) {
    return function (a, b) {
        return func(b, a);
    };
}

function leftPartial(func) {
    var args = [].slice.call(arguments, 1);
    return function () {
        return func.apply(this, args.concat([].slice.call(arguments)));
    }
}

function rightPartial(func) {
    var args = [].slice.call(arguments, 1);
    return function () {
        return func.apply(this, [].slice.call(arguments).concat(args));
    }
}

function eq(l, r) {
    return (l === null && r === null) ||
    (l === undefined && r === undefined) ||
    (atom(l) && atom(r) && l === r) || (pair(l) && pair(r) && eq(car(l), car(r)) && eq(cdr(l), cdr(r)));

}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getOffset(obj) {
    var rect;
    var win;
    var elem = obj;
    if (!elem) {
        return;
    }
    // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
    // Support: IE <=11 only
    // Running getBoundingClientRect on a
    // disconnected node in IE throws an error
    if (!elem.getClientRects().length) {
        return { top: 0, left: 0 };
    }
    // Get document-relative position by adding viewport scroll to viewport-relative gBCR
    rect = elem.getBoundingClientRect();
    win = elem.ownerDocument.defaultView;
    return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
    };
}
exports.getOffset = getOffset;
function findAncestor(el, sel) {
    if (typeof el.closest === 'function') {
        return el.closest(sel) || null;
    }
    while (el) {
        if (el.matches(sel)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
exports.findAncestor = findAncestor;
function hasPositioFixedAncestor(el) {
    while (el) {
        if (window.getComputedStyle(el, null).getPropertyValue('position') === 'fixed') {
            return true;
        }
        el = el.parentElement;
    }
    return false;
}
exports.hasPositioFixedAncestor = hasPositioFixedAncestor;
function isMob() {
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)) {
        return true;
    }
    else {
        return false;
    }
}
exports.isMob = isMob;
function triggerEvent(el, eventName, options) {
    var event;
    if (window.CustomEvent) {
        event = new CustomEvent(eventName, options);
    }
    else {
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true, options);
    }
    el.dispatchEvent(event);
}
exports.triggerEvent = triggerEvent;
function hasClass(el, className) {
    if (el.classList) {
        return el.classList.contains(className);
    }
    else {
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }
}
exports.hasClass = hasClass;
function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
    }
    else if (!hasClass(el, className)) {
        el.className += ' ' + className;
    }
}
exports.addClass = addClass;
function removeClass(el, className) {
    if (el.classList) {
        el.classList.remove(className);
    }
    else if (hasClass(el, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}
exports.removeClass = removeClass;
if (!Element.prototype.matches) {
    Element.prototype.matches =
        Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function (s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s);
                var i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) { }
                return i > -1;
            };
}

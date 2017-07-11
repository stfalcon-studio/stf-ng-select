export interface Position {
  left: number;
  top: number;
}

export function getPosition(obj: HTMLElement): Position {
  let curleft = 0;
  let curtop = 0;
  if (obj.offsetParent) {
    do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
    } while (obj = <HTMLElement>obj.offsetParent);
    return { left: curleft, top: curtop };
  }
  return undefined;
}

export function findAncestor(el: HTMLElement, sel) {
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

export function hasPositioFixedAncestor(el: HTMLElement): boolean {
  while (el) {
    if (window.getComputedStyle(el, null).getPropertyValue('position') === 'fixed') {
      return true;
    }
    el = el.parentElement;
  }
  return false;
}

export function isMob(): boolean {
  if (navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}

export function triggerEvent(el, eventName, options) {
  let event;
  if ((<any>window).CustomEvent) {
    event = new CustomEvent(eventName, options);
  } else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, true, true, options);
  }
  el.dispatchEvent(event);
}

export function hasClass(el: HTMLElement, className: string): boolean {
  if (el.classList) {
    return el.classList.contains(className);
  } else {
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  }
}

export function addClass(el: HTMLElement, className: string) {
  if (el.classList) {
    el.classList.add(className);
  } else if (!hasClass(el, className)) {
     el.className += ' ' + className;
  }
}

export function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className)
  } else if (hasClass(el, className)) {
    const reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className = el.className.replace(reg, ' ')
  }
}

if (!Element.prototype.matches) {
  Element.prototype.matches =
    (<any>Element).prototype.matchesSelector ||
    (<any>Element).prototype.mozMatchesSelector ||
    (<any>Element).prototype.msMatchesSelector ||
    (<any>Element).prototype.oMatchesSelector ||
    (<any>Element).prototype.webkitMatchesSelector ||
    function (s) {
      const matches = (this.document || this.ownerDocument).querySelectorAll(s);
      let i = matches.length;
      while (--i >= 0 && matches.item(i) !== this) { }
      return i > -1;
    };
}
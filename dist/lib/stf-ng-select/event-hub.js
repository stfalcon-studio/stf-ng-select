"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventHub = (function () {
    function EventHub() {
        this.eventsCollection = {};
    }
    EventHub.prototype.$emit = function (name, event) {
        if (this.eventsCollection[name] && this.eventsCollection[name][0]) {
            var _loop_1 = function (callback) {
                setTimeout(function () { return callback(event); }, 0);
            };
            for (var _i = 0, _a = this.eventsCollection[name]; _i < _a.length; _i++) {
                var callback = _a[_i];
                _loop_1(callback);
            }
        }
    };
    EventHub.prototype.$on = function (name, callback) {
        if (typeof callback === 'function') {
            if (!this.eventsCollection[name]) {
                this.eventsCollection[name] = [];
            }
            if (this.eventsCollection[name].indexOf(this.eventsCollection[name]) === -1) {
                this.eventsCollection[name].push(callback);
            }
            else {
                throw new ArgumentExceptions("Callback can not be used twice");
            }
        }
        else {
            throw new ArgumentExceptions("Callback can not be " + typeof callback + " event " + name);
        }
    };
    EventHub.prototype.$off = function (name, callback) {
        if (typeof callback === 'function') {
            if (!this.eventsCollection[name]) {
                throw new ArgumentExceptions("You don't have callback on " + name + " event " + name);
            }
            var index = this.eventsCollection[name].indexOf(callback);
            this.eventsCollection[name].splice(index, 1);
        }
        else {
            throw new ArgumentExceptions("Callback can not be " + typeof callback + " event " + name);
        }
    };
    return EventHub;
}());
exports.EventHub = EventHub;
function ArgumentExceptions(message) {
    this.message = message;
    this.name = 'Argument exception';
}
exports.eventHub = new EventHub();

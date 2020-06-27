"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = exports.Entity = void 0;
var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
    }
    return HelloWorld;
}());
exports.default = HelloWorld;
// Entity
var Entity = /** @class */ (function () {
    function Entity(id, name) {
        this.id = id;
        this.name = name;
    }
    return Entity;
}());
exports.Entity = Entity;
// Service(Usecases) 
var Service = /** @class */ (function () {
    function Service(api) {
        this.api = api;
    }
    Service.prototype.create = function (name) {
        var data = this.api.create(name);
        var entity = new Entity(data.id, name);
        return entity;
    };
    return Service;
}());
exports.Service = Service;

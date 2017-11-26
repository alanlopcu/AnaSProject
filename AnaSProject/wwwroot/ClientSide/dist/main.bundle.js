webpackJsonp(["main"],{

/***/ "../../../../../../node_modules/angular-persistence/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_angular_persistence__ = __webpack_require__("../../../../../../node_modules/angular-persistence/src/angular-persistence.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_angular_persistence__["b"]; });
/* unused harmony reexport AbstractCachedService */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__src_angular_persistence__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_angular_persistence__["a"]; });
/**
 * Entry point for all public APIs of the package.
 */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../../node_modules/angular-persistence/src/abstracts/persistence.cached_service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AbstractCachedService */
/**
 * This is a cache that also implements the <code>CanActivate</code> and <code>Resolve<T></code>
 * interfaces in angular so that it can be used as both a provider and a set of guards for Angular
 * routing.  By implementing the abstract <code>getCache<T></code> method using a cache object,
 * this abstract class can form the foundation for a service based off of the persistence framework.
 *
 * @export
 * @abstract
 * \@class AbstraceCachedService
 * @template T - the type of value returned by this service.
 *
 * @author Scott O'Bryan
 * \@since 1.0
 * @abstract
 */
var AbstractCachedService = (function () {
    function AbstractCachedService() {
    }
    /**
     * Returns an {Observable<T>} which will monitor changes to the
     * cache over a period of time.  This is a hot, multi-value
     * observable which will emit the cached value, if one exists,
     * when the Observable is first subscribed to.  The observer will
     * then emit a new event each time the cache changes.
     *
     * As this is a multi-value observer which is not expected to
     * complete, it is the responsiblity of the subscriber to
     * unsubscribe in order to prevent potential memory leaks.
     *
     *          the value in the cache changes
     * @return {?}
     */
    AbstractCachedService.prototype.changes = function () {
        return this.getCache().changes();
    };
    /**
     * Returns an {Observable<T>} to a cached value if one is loaded
     * or to the value specified by the loader that was supplied when
     * this cache was created if it is not.
     *
     * This Observable is guarenteed to be a single observable which
     * means it returns a single value before it completes.  As such
     * you do not have to unsubscribe from this Observable.
     *
     *          value.
     * @return {?}
     */
    AbstractCachedService.prototype.get = function () {
        return this.getCache().get();
    };
    /**
     * Manually clears the value in the cache forcing a reload.
     *
     * @abstract
     * @return {?}
     */
    AbstractCachedService.prototype.clear = function () {
        return this.getCache().clear();
    };
    /**
     * Returns the observable to the current cached service for use in the angular Router.
     * This is equivalent to the get method but implements the resolve interface for the
     * Angular Router.
     *
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    AbstractCachedService.prototype.resolve = function (route, state) {
        return this.get();
    };
    /**
     * Returns true if the value of the cached observable is "truthy" and false if it is not.
     *
     *
     * \@memberOf AbstraceCachedService
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    AbstractCachedService.prototype.canActivate = function (route, state) {
        return this.get().map(function (val) { return val ? true : false; });
    };
    /**
     * Returns a cache that this service will use to return values.  The Cache may be obtained
     * from the PersistenceService or it may be a custom implementation should one be needed.
     *
     * @protected
     * @abstract
     * @template T
     * @abstract
     * @return {?}
     */
    AbstractCachedService.prototype.getCache = function () { };
    return AbstractCachedService;
}());
//# sourceMappingURL=persistence.cached_service.js.map

/***/ }),

/***/ "../../../../../../node_modules/angular-persistence/src/angular-persistence.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_persistence_service__ = __webpack_require__("../../../../../../node_modules/angular-persistence/src/services/persistence.service.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__services_persistence_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstracts_persistence_cached_service__ = __webpack_require__("../../../../../../node_modules/angular-persistence/src/abstracts/persistence.cached_service.js");
/* unused harmony reexport AbstractCachedService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_persistence_storage_type__ = __webpack_require__("../../../../../../node_modules/angular-persistence/src/constants/persistence.storage_type.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__constants_persistence_storage_type__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_persistence_module__ = __webpack_require__("../../../../../../node_modules/angular-persistence/src/modules/persistence.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__modules_persistence_module__["a"]; });




//# sourceMappingURL=angular-persistence.js.map

/***/ }),

/***/ "../../../../../../node_modules/angular-persistence/src/constants/persistence.storage_type.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageType; });
var StorageType = {};
StorageType.MEMORY = 0;
StorageType.IMMUTABLE_MEMORY = 1;
StorageType.SESSION = 2;
StorageType.LOCAL = 3;
StorageType[StorageType.MEMORY] = "MEMORY";
StorageType[StorageType.IMMUTABLE_MEMORY] = "IMMUTABLE_MEMORY";
StorageType[StorageType.SESSION] = "SESSION";
StorageType[StorageType.LOCAL] = "LOCAL";
//# sourceMappingURL=persistence.storage_type.js.map

/***/ }),

/***/ "../../../../../../node_modules/angular-persistence/src/modules/persistence.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersistenceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_persistence_service__ = __webpack_require__("../../../../../../node_modules/angular-persistence/src/services/persistence.service.js");


/**
 * The module for the persistence framework.  This will register the PersistenceService
 * as a provider and export it.
 *
 * @export
 * \@class AngularPersistenceModule
 *
 * @author Scott O'Bryan
 * \@since 1.0
 */
var PersistenceModule = (function () {
    function PersistenceModule() {
    }
    PersistenceModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    providers: [__WEBPACK_IMPORTED_MODULE_1__services_persistence_service__["a" /* PersistenceService */]]
                },] },
    ];
    /** @nocollapse */
    PersistenceModule.ctorParameters = function () { return []; };
    return PersistenceModule;
}());
function PersistenceModule_tsickle_Closure_declarations() {
    /** @type {?} */
    PersistenceModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    PersistenceModule.ctorParameters;
}
//# sourceMappingURL=persistence.module.js.map

/***/ }),

/***/ "../../../../../../node_modules/angular-persistence/src/services/persistence.cache-impl.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheImpl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_persistence_storage_type__ = __webpack_require__("../../../../../../node_modules/angular-persistence/src/constants/persistence.storage_type.js");


/**
 * Internal class which is an implementation of the ICache interface. This is
 * intended to be a private class for framework use only and will not be
 * exported by the libraries modules.
 *
 * @export
 * \@class CacheImpl
 * @template T the type of value being cached
 *
 * @author Scott O'Bryan
 * \@since 1.0
 */
var CacheImpl = (function () {
    /**
     * Creates an instance of CacheImpl.
     * @param {?} key
     * @param {?} _loader
     * @param {?} service
     * @param {?=} config
     */
    function CacheImpl(key, _loader, service, config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        this._loader = _loader;
        var type = config.type || __WEBPACK_IMPORTED_MODULE_1__constants_persistence_storage_type__["a" /* StorageType */].MEMORY;
        // For safety sake, ensure that oneUse is not present in configuration
        service.defineProperty(this, "_value", key, config);
        this._changes = service.changes({ key: key, type: type })
            .map(function (def) { return _this._value; })
            .publishBehavior(this._value)
            .refCount();
    }
    /**
     * Returns an observable to a cached value if one is loaded or
     * to the value specified by the loader that was supplied when
     * this cache was created if it is not.
     *
     *         single value when it's available before marking the stream
     *         as complete.
     * @return {?}
     */
    CacheImpl.prototype.get = function () {
        var _this = this;
        var /** @type {?} */ result = this._value;
        if (result === undefined) {
            /*
             * smo - if we do not have a result, then we might still have an observable from
             * a previous call loaded in memory cache.
             */
            var /** @type {?} */ observable = this._cachedObservable;
            if (observable === undefined) {
                var /** @type {?} */ loaded = this._loader();
                if (loaded && loaded instanceof __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"]) {
                    var /** @type {?} */ newObservable = ((loaded))
                        .publishLast()
                        .refCount()
                        .do(function (value) { return _this._value = value; })
                        .do(function (value) { return _this._cachedObservable = undefined; });
                    // cache the observable before publishing
                    this._cachedObservable = newObservable;
                    return newObservable;
                }
                else {
                    // static values simply get assigned immedietly
                    result = (loaded);
                    this._value = result;
                }
            }
            else {
                return observable;
            }
        }
        // We have a real value so we need to make an observable that returns said value
        return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].of(result);
    };
    /**
     * A hot observable returning changes over time.
     *
     * @return {?}
     */
    CacheImpl.prototype.changes = function () {
        return this._changes;
    };
    /**
     * Clears the cached value forcing a reload.
     * @return {?}
     */
    CacheImpl.prototype.clear = function () {
        this._value = undefined;
    };
    return CacheImpl;
}());
function CacheImpl_tsickle_Closure_declarations() {
    /** @type {?} */
    CacheImpl.prototype._value;
    /** @type {?} */
    CacheImpl.prototype._cachedObservable;
    /** @type {?} */
    CacheImpl.prototype._changes;
    /** @type {?} */
    CacheImpl.prototype._loader;
}
//# sourceMappingURL=persistence.cache-impl.js.map

/***/ }),

/***/ "../../../../../../node_modules/angular-persistence/src/services/persistence.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersistenceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__persistence_cache_impl__ = __webpack_require__("../../../../../../node_modules/angular-persistence/src/services/persistence.cache-impl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_storage_sub_storage__ = __webpack_require__("../../../../../../node_modules/angular-persistence/src/services/storage/storage.sub_storage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_storage_factory__ = __webpack_require__("../../../../../../node_modules/angular-persistence/src/services/storage/storage.factory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_persistence_storage_type__ = __webpack_require__("../../../../../../node_modules/angular-persistence/src/constants/persistence.storage_type.js");





/**
 * Service used to persist application wide storage.  Iterms may be obtained from the Service
 * itself or used through proxies.  This framework also supports an immutable flag which will
 * instruct the service that the objects stored within should not have any side-effects when
 * objects on the outside are changed.
 *
 * Note on immutability: Only clonable objects will be saved when the immutable flag is
 * set.  This framework will do a deep clone of the objects in question, but items such
 * as functions will not be preserved.  Also, immutability is slower.  If you have objects
 * that are well controlled with a single component, it is suggested that you don't save your
 * item as immutable.
 *
 * @export
 * \@class PersistenceService
 *
 * @author Scott O'Bryan
 * \@since 1.0
 */
var PersistenceService = (function () {
    function PersistenceService() {
        this._emitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._storage = __WEBPACK_IMPORTED_MODULE_3__storage_storage_factory__["a" /* StorageFactory */].getStorage();
    }
    /**
     * Returns a hot observable that can be used to monitor changes to this framework over
     * time.  Subscribing to this observable has the potential of causing memory leaks,
     * so each subscriber is expected to unsubscribe when notifications are no longer
     * needed.
     *
     *                                  results.  If not provided, all changes will be
     *                                  returned.
     *
     *                                  to this framework over time.
     * @param {?=} config
     * @return {?}
     */
    PersistenceService.prototype.changes = function (config) {
        if (config === void 0) { config = {}; }
        var /** @type {?} */ observable = this._emitter.asObservable();
        // apply the key filter
        if (config.key) {
            observable = observable.filter(function (val) { return val.key === config.key; });
        }
        // apply the type filter
        if (config.type) {
            observable = observable.filter(function (val) { return val.type === config.type; });
        }
        return observable;
    };
    /**
     * Returns an object from storage.  If the object was stored with the immutable flag
     * set, then the object returned will not have any side-effects into the stored model
     * until it is set again.
     *
     * @param {?} key
     * @param {?=} type
     * @return {?}
     */
    PersistenceService.prototype.get = function (key, type) {
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_4__constants_persistence_storage_type__["a" /* StorageType */].MEMORY; }
        var /** @type {?} */ storage = this._getStorage(type);
        var /** @type {?} */ value = storage.get(key);
        // the value here will actually be an object with some metadata attached.  This
        // is done to handle immutable and some other things.
        if (value) {
            var /** @type {?} */ currDate = Date.now();
            // if we have a value, we need to check to see if its expired.
            if (value.expireAfter && value.created + value.expireAfter < currDate) {
                storage.remove(key);
                this._emitter.emit({ key: key, type: type });
                return undefined;
            }
            // handle the oneUse configuration
            if (value.oneUse) {
                storage.remove(key);
                this._emitter.emit({ key: key, type: type });
                return value.data;
            }
            // if maxAge then we need to update the expires tag
            if (value.timeout) {
                if (value.lastAccessed + value.timeout < currDate) {
                    storage.remove(key);
                    this._emitter.emit({ key: key, type: type });
                    return undefined;
                }
                else {
                    value.lastAccessed = currDate;
                    storage.set(key, value);
                }
            }
            return value.data;
        }
        return undefined;
    };
    /**
     * Puts an object into storage, replacing any item that may be in there.  By default,
     * the object is stored as-is, which means that when other areas of code get the
     * object, they can mutate it.
     *
     * As immutable storage is slower, and the reconstituted logic may be
     * missing functions or metadata, it is recommended to use this only
     * if you need to ensure the integrity of the stored object on each set
     * as might be the case if you make use of the "change" emitter.
     *
     * @param {?} key
     * @param {?} value
     * @param {?=} config
     * @return {?}
     */
    PersistenceService.prototype.set = function (key, value, config) {
        if (config === void 0) { config = {}; }
        if (!config.type) {
            config.type = __WEBPACK_IMPORTED_MODULE_4__constants_persistence_storage_type__["a" /* StorageType */].MEMORY;
        }
        if (!value === undefined) {
            this.remove(key);
            this._emitter.emit({ key: key, type: config.type });
            return true;
        }
        var /** @type {?} */ storage = this._getStorage(config.type);
        var /** @type {?} */ currDate = Date.now();
        var /** @type {?} */ success = storage.set(key, {
            data: value,
            expireAfter: config.expireAfter,
            timeout: config.timeout,
            oneUse: config.oneUse ? true : false,
            created: currDate,
            lastAccessed: currDate
        });
        // happens if the info object or storage object cannot be saved.
        // Ensure we have cleaned up.
        if (success) {
            // this seems kind of wierd, but if we are using an immutable 
            // storage type, we want the emitter
            this._emitter.emit({ key: key, type: config.type });
        }
        else {
            storage.remove(key);
        }
        return success;
    };
    /**
     * Clears a value stored in the service for the given type.
     *
     * @param {?} key
     * @param {?=} type
     * @return {?}
     */
    PersistenceService.prototype.remove = function (key, type) {
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_4__constants_persistence_storage_type__["a" /* StorageType */].MEMORY; }
        var /** @type {?} */ storage = this._getStorage(type);
        var /** @type {?} */ currentItem = this.get(key, type);
        if (currentItem !== undefined) {
            storage.remove(key);
            this._emitter.emit({ key: key, type: type });
        }
        return currentItem;
    };
    /**
     * Clears all stored items for a particular storage type.
     *
     * @param {?=} type
     * @return {?}
     */
    PersistenceService.prototype.removeAll = function (type) {
        var _this = this;
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_4__constants_persistence_storage_type__["a" /* StorageType */].MEMORY; }
        var /** @type {?} */ keys = this._getStorage(type).keys();
        this._getStorage(type).removeAll();
        keys.forEach(function (key) { return _this._emitter.emit({ key: key, type: type }); });
    };
    /**
     * Cleans up any expired objects in the cache.
     *
     * @param {?=} type
     * @return {?}
     */
    PersistenceService.prototype.clean = function (type) {
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_4__constants_persistence_storage_type__["a" /* StorageType */].MEMORY; }
        var /** @type {?} */ storage = this._getStorage(type);
        var /** @type {?} */ keys = storage.keys();
        var /** @type {?} */ currDate = Date.now();
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            var /** @type {?} */ item = storage.get(key);
            // if we have a value, we need to check to see if its expired.
            if (item &&
                ((item.expireAfter && item.created + item.expireAfter < currDate ||
                    item.timeout && item.lastAccessed + item.timeout < currDate))) {
                this.remove(key);
            }
        }
    };
    /**
     * Create a property on the object that is bound to this stored value.  This method
     * requires ES5 compatibility and the property will have special rules associated
     * with it.  The name of the property will be "key", and the value stored in the
     * configured storage will be prefix + key.
     *
     * @template T the type of property
     * @param {?} obj
     * @param {?} propName
     * @param {?} key
     * @param {?=} config
     * @return {?}
     */
    PersistenceService.prototype.defineProperty = function (obj, propName, key, config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        var /** @type {?} */ type = config.type || __WEBPACK_IMPORTED_MODULE_4__constants_persistence_storage_type__["a" /* StorageType */].MEMORY;
        Object.defineProperty(obj, propName, {
            enumerable: true,
            configurable: true,
            get: function () { return _this.get(key, type); },
            set: function (val) { _this.set(key, val, config); }
        });
    };
    /**
     * Returns a facade that makes things a bit easier when interacting with the service.
     * The facade will use the prefix in order to isolate they keystore.  If no prefix is
     * defined, the keystore will be mapped as usual with the keys working as-is in the
     * storage.
     *
     * @param {?} namespace
     * @param {?=} config the config for the facade
     * @return {?} a PersistenceFacade object representing this store
     */
    PersistenceService.prototype.createContainer = function (namespace, config) {
        if (config === void 0) { config = {}; }
        var /** @type {?} */ thisService = this;
        var /** @type {?} */ myConfig = {
            oneUse: config.oneUse,
            expireAfter: config.expireAfter,
            timeout: config.timeout,
            type: config.type || __WEBPACK_IMPORTED_MODULE_4__constants_persistence_storage_type__["a" /* StorageType */].MEMORY
        };
        // Return a substorage of the service so the full config can be used.
        return new __WEBPACK_IMPORTED_MODULE_2__storage_storage_sub_storage__["a" /* SubStorage */](namespace, {
            get: function (key) {
                return thisService.get(key, myConfig.type);
            },
            set: function (key, value) {
                return thisService.set(key, value, myConfig);
            },
            remove: function (key) {
                return thisService.remove(key, myConfig.type);
            },
            removeAll: function () {
                return thisService.removeAll();
            }
        }, true);
    };
    /**
     * Returns a cache proxy that makes interacting with this service a little bit easier.  The
     * proxy returned will have a set key, a generic loader, and a consistent set of config
     * parameters. Please note that the "expires" property of the config might have unforseen
     * side-effects to the cache in that if the expires setting is already passed, the cache will
     * no longer cache values until a new proxy is created.
     *
     * @param {?} key    they key for the item in the persistence layer
     * @param {?} loader the function to load the intiial value.  Must return either a value or
     *               an Observable of that value.  If an observable is returned, it will be
     *               converted into a single by this method and returned to the subscriber.
     * @param {?=} config optional config object used to "set" the value if it has not already
     *               been loaded.  If a "type" is not specified, memory storage will be
     *               used.
     *
     * @return {?} a CacheProxy that can be used to interact with this cache.
     */
    PersistenceService.prototype.createCache = function (key, loader, config) {
        if (config === void 0) { config = {}; }
        // for safety ensure that oneUse is not present.  It shouldn't be, but sometimes
        // typescript doesn't always catch errors
        var /** @type {?} */ myConfig = {
            type: config.type || __WEBPACK_IMPORTED_MODULE_4__constants_persistence_storage_type__["a" /* StorageType */].MEMORY,
            expireAfter: config.expireAfter,
            timeout: config.timeout
        };
        return new __WEBPACK_IMPORTED_MODULE_1__persistence_cache_impl__["a" /* CacheImpl */](key, loader, this, myConfig);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    PersistenceService.prototype._getStorage = function (type) {
        return this._storage.of(type);
    };
    /**
     * @param {?} maxAge
     * @return {?}
     */
    PersistenceService.prototype._calculateExpires = function (maxAge) {
        return maxAge ? Date.now() + maxAge : undefined;
    };
    PersistenceService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    PersistenceService.ctorParameters = function () { return []; };
    return PersistenceService;
}());
function PersistenceService_tsickle_Closure_declarations() {
    /** @type {?} */
    PersistenceService.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    PersistenceService.ctorParameters;
    /** @type {?} */
    PersistenceService.prototype._emitter;
    /** @type {?} */
    PersistenceService.prototype._storage;
}
//# sourceMappingURL=persistence.service.js.map

/***/ }),

/***/ "../../../../../../node_modules/angular-persistence/src/services/storage/storage.abstract_browser.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractBrowserStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage_browser_container__ = __webpack_require__("../../../../../../node_modules/angular-persistence/src/services/storage/storage.browser_container.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_sub_storage__ = __webpack_require__("../../../../../../node_modules/angular-persistence/src/services/storage/storage.sub_storage.js");
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var /** @type {?} */ PREFIX = 'ANGULAR_PERSISTENCE_STORAGE';
/**
 * An insternal class which implements the IStorage interface using the SubStorage implementation
 * object and it's implementation of the info object.
 *
 * @export
 * @abstract
 * \@class AbstractBrowserStorage
 *
 * @author Scott O'Bryan
 * \@since 1.0
 * @abstract
 */
var AbstractBrowserStorage = (function (_super) {
    __extends(AbstractBrowserStorage, _super);
    /**
     * @param {?} storage
     */
    function AbstractBrowserStorage(storage) {
        _super.call(this, PREFIX, new __WEBPACK_IMPORTED_MODULE_0__storage_browser_container__["a" /* BrowserContainer */](storage), (storage) ? true : false);
    }
    return AbstractBrowserStorage;
}(__WEBPACK_IMPORTED_MODULE_1__storage_sub_storage__["a" /* SubStorage */]));
//# sourceMappingURL=storage.abstract_browser.js.map

/***/ }),

/***/ "../../../../../../node_modules/angular-persistence/src/services/storage/storage.browser_container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserContainer; });
var /** @type {?} */ NULL_VALUE = '_____NULL_VALUE_____';
/**
 * This is a container that wraps a browser storage object.
 *
 * @export
 * \@class BrowserContainer
 *
 * @author Scott O'Bryan
 * \@since 1.0
 */
var BrowserContainer = (function () {
    /**
     * Creates an instance of BrowserContainer.
     * @param {?} _storage
     */
    function BrowserContainer(_storage) {
        this._storage = _storage;
    }
    /**
     * Sets a value on the browser storage
     *
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    BrowserContainer.prototype.set = function (key, value) {
        try {
            if (value === null) {
                value = NULL_VALUE;
            }
            if (value === undefined) {
                this._storage.removeItem(key);
            }
            else {
                this._storage.setItem(key, JSON.stringify(value));
            }
        }
        catch (error) {
            return false;
        }
        return true;
    };
    /**
     * Gets a value from browser storage
     *
     * @param {?} key
     * @return {?}
     */
    BrowserContainer.prototype.get = function (key) {
        var /** @type {?} */ strval = this._storage.getItem(key);
        if (strval === null) {
            return undefined;
        }
        var /** @type {?} */ value = JSON.parse(strval);
        if (value === NULL_VALUE) {
            return null;
        }
        return value;
    };
    /**
     * Removes a value from browser storage
     *
     * @param {?} key
     * @return {?}
     */
    BrowserContainer.prototype.remove = function (key) {
        var /** @type {?} */ curVal = this.get(key);
        if (curVal !== undefined) {
            this._storage.removeItem(key);
        }
        return curVal;
    };
    /**
     * Removes all values from browser storage
     * @return {?}
     */
    BrowserContainer.prototype.removeAll = function () {
        this._storage.clear();
    };
    return BrowserContainer;
}());
function BrowserContainer_tsickle_Closure_declarations() {
    /** @type {?} */
    BrowserContainer.prototype._storage;
}
//# sourceMappingURL=storage.browser_container.js.map

/***/ }),

/***/ "../../../../../../node_modules/angular-persistence/src/services/storage/storage.container_info.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerInfo; });
var /** @type {?} */ INFO_KEY = '__INFO';
/**
 * An internal object used to track items saved by a storage object within the persistence
 * framework.
 *
 * @export
 * \@class ContainerInfo
 *
 * @author Scott O'Bryan
 * \@since 1.0
 */
var ContainerInfo = (function () {
    /**
     * @param {?} _namespace
     * @param {?} _container
     */
    function ContainerInfo(_namespace, _container) {
        this._namespace = _namespace;
        this._container = _container;
        var infoObj = _container.get(this._namespace);
        // If we have an existing object, check its type
        if (infoObj) {
            if (typeof infoObj !== 'object' || !infoObj[INFO_KEY]) {
                throw new Error('Potential attribute conflict detected');
            }
        }
    }
    /**
     * Adds a key to this info object.
     *
     * @param {?} key
     * @return {?}
     */
    ContainerInfo.prototype.addAttribute = function (key) {
        var /** @type {?} */ item = this._getInfo();
        item[key] = true;
        this._setInfo(item);
    };
    /**
     * Removes a key from this info object.
     *
     * @param {?} key
     * @return {?}
     */
    ContainerInfo.prototype.removeAttribute = function (key) {
        var /** @type {?} */ info = this._getInfo();
        delete info[key];
        this._setInfo(info);
    };
    /**
     * Returns a list of keys that have been added to this
     * info object.
     *
     * @return {?}
     */
    ContainerInfo.prototype.getAttributes = function () {
        return Object.keys(this._getInfo())
            .filter(function (key) { return key !== INFO_KEY; });
    };
    /**
     * Checks to see if the value stored in the _namespace
     * is an info object or if it is empty.  If it is NOT
     * an info object, then false is returned.
     *
     * @return {?}
     */
    ContainerInfo.prototype.available = function () {
        var /** @type {?} */ infoObj = this._container.get(this._namespace);
        return !infoObj || (typeof infoObj === 'object' && infoObj[INFO_KEY]);
    };
    /**
     * @return {?}
     */
    ContainerInfo.prototype._getInfo = function () {
        var /** @type {?} */ obj = this._container.get(this._namespace);
        if (!obj) {
            obj = {};
            obj[INFO_KEY] = true;
        }
        return obj;
    };
    /**
     * @param {?} info
     * @return {?}
     */
    ContainerInfo.prototype._setInfo = function (info) {
        // this is 1 because the info identifier will be there.
        if (Object.keys(info).length <= 1) {
            this._container.remove(this._namespace);
        }
        else {
            this._container.set(this._namespace, info);
        }
    };
    return ContainerInfo;
}());
function ContainerInfo_tsickle_Closure_declarations() {
    /** @type {?} */
    ContainerInfo.prototype._namespace;
    /** @type {?} */
    ContainerInfo.prototype._container;
}
//# sourceMappingURL=storage.container_info.js.map

/***/ }),

/***/ "../../../../../../node_modules/angular-persistence/src/services/storage/storage.factory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage_session__ = __webpack_require__("../../../../../../node_modules/angular-persistence/src/services/storage/storage.session.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_local__ = __webpack_require__("../../../../../../node_modules/angular-persistence/src/services/storage/storage.local.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_immutable_memory__ = __webpack_require__("../../../../../../node_modules/angular-persistence/src/services/storage/storage.immutable_memory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_memory__ = __webpack_require__("../../../../../../node_modules/angular-persistence/src/services/storage/storage.memory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_persistence_storage_type__ = __webpack_require__("../../../../../../node_modules/angular-persistence/src/constants/persistence.storage_type.js");





/**
 * A factory used to retrieve Storage objects
 *
 * @export
 * \@class StorageFactory
 *
 * @author Scott O'Bryan
 * \@since 1.0
 */
var StorageFactory = (function () {
    function StorageFactory() {
        this._storages = [];
    }
    /**
     * Returns a new instance of the storage factory.
     *
     * \@static
     * @return {?}
     */
    StorageFactory.getStorage = function () {
        return new StorageFactory();
    };
    /**
     * Returns a singleton object of a specified type.  Storage
     * types are initialized lazily.
     *
     * @param {?} type
     * @return {?}
     */
    StorageFactory.prototype.of = function (type) {
        var /** @type {?} */ storage = this._storages[type];
        if (!storage) {
            switch (type) {
                case __WEBPACK_IMPORTED_MODULE_4__constants_persistence_storage_type__["a" /* StorageType */].MEMORY:
                    storage = new __WEBPACK_IMPORTED_MODULE_3__storage_memory__["a" /* MemoryStorage */]();
                    this._storages[type] = storage;
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__constants_persistence_storage_type__["a" /* StorageType */].IMMUTABLE_MEMORY:
                    storage = new __WEBPACK_IMPORTED_MODULE_2__storage_immutable_memory__["a" /* ImmutableMemoryStorage */]();
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__constants_persistence_storage_type__["a" /* StorageType */].LOCAL:
                    storage = new __WEBPACK_IMPORTED_MODULE_1__storage_local__["a" /* LocalStorage */]();
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__constants_persistence_storage_type__["a" /* StorageType */].SESSION:
                    storage = new __WEBPACK_IMPORTED_MODULE_0__storage_session__["a" /* SessionStorage */]();
                    break;
                default:
            }
            if (!storage || !storage.available()) {
                throw new Error('Storage type not available');
            }
            this._storages[type] = storage;
        }
        return storage;
    };
    return StorageFactory;
}());
function StorageFactory_tsickle_Closure_declarations() {
    /** @type {?} */
    StorageFactory.prototype._storages;
}
//# sourceMappingURL=storage.factory.js.map

/***/ }),

/***/ "../../../../../../node_modules/angular-persistence/src/services/storage/storage.immutable_memory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImmutableMemoryStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage_memory__ = __webpack_require__("../../../../../../node_modules/angular-persistence/src/services/storage/storage.memory.js");
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Storage type for immutable memory
 *
 * @export
 * \@class ImmutableMemoryStorage
 *
 * @author Scott O'Bryan
 * \@since 1.0
 */
var ImmutableMemoryStorage = (function (_super) {
    __extends(ImmutableMemoryStorage, _super);
    function ImmutableMemoryStorage() {
        _super.apply(this, arguments);
    }
    /**
     * Sets a value in memory storage after stringifying the object.  This
     * add some overhead but ensures each copy of the object is immutable.
     *
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    ImmutableMemoryStorage.prototype.set = function (key, value) {
        if (value !== undefined) {
            value = JSON.stringify(value);
        }
        return _super.prototype.set.call(this, key, value);
    };
    /**
     * Returns an immutable value for the specified key.
     *
     * @param {?} key
     * @return {?}
     */
    ImmutableMemoryStorage.prototype.get = function (key) {
        var /** @type {?} */ value = _super.prototype.get.call(this, key);
        if (value !== undefined) {
            return JSON.parse(value);
        }
        return undefined;
    };
    return ImmutableMemoryStorage;
}(__WEBPACK_IMPORTED_MODULE_0__storage_memory__["a" /* MemoryStorage */]));
//# sourceMappingURL=storage.immutable_memory.js.map

/***/ }),

/***/ "../../../../../../node_modules/angular-persistence/src/services/storage/storage.local.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage_abstract_browser__ = __webpack_require__("../../../../../../node_modules/angular-persistence/src/services/storage/storage.abstract_browser.js");
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * A storage object using local storage for persistence
 *
 * @export
 * \@class LocalStorage
 *
 * @author Scott O'Bryan
 * \@since 1.0
 */
var LocalStorage = (function (_super) {
    __extends(LocalStorage, _super);
    /**
     * Creates an instance of LocalStorage.
     */
    function LocalStorage() {
        _super.call(this, localStorage);
    }
    return LocalStorage;
}(__WEBPACK_IMPORTED_MODULE_0__storage_abstract_browser__["a" /* AbstractBrowserStorage */]));
//# sourceMappingURL=storage.local.js.map

/***/ }),

/***/ "../../../../../../node_modules/angular-persistence/src/services/storage/storage.memory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoryStorage; });
/**
 * A storage type which stored values in memory.  They are assumed to be mutable, but
 * any object will work in this storage type.
 *
 * @export
 * \@class MemoryStorage
 *
 * @author Scott O'Bryan
 * \@since 1.0
 */
var MemoryStorage = (function () {
    function MemoryStorage() {
        this._data = {};
    }
    /**
     * Always returns true
     *
     * @return {?}
     */
    MemoryStorage.prototype.available = function () {
        return true;
    };
    /**
     * Sets a value in this object for the specified key
     *
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    MemoryStorage.prototype.set = function (key, value) {
        if (value === undefined) {
            delete this._data[key];
        }
        else {
            this._data[key] = value;
        }
        return true;
    };
    /**
     * Returns the value of the specified key
     *
     * @param {?} key
     * @return {?}
     */
    MemoryStorage.prototype.get = function (key) {
        return this._data[key];
    };
    /**
     * Returns false if the value for the key is undefined.
     *
     * @param {?} key
     * @return {?}
     */
    MemoryStorage.prototype.exists = function (key) {
        return this._data[key] !== undefined;
    };
    /**
     * Removes a value from this object
     *
     * @param {?} key
     * @return {?}
     */
    MemoryStorage.prototype.remove = function (key) {
        delete this._data[key];
    };
    /**
     * Removes all values in this storage type.
     *
     * @return {?}
     */
    MemoryStorage.prototype.removeAll = function () {
        var /** @type {?} */ keys = Object.keys(this._data);
        this._data = {};
        return keys;
    };
    /**
     * Returns a list of all keys that are stored
     *
     * @return {?}
     */
    MemoryStorage.prototype.keys = function () {
        return Object.keys(this._data);
    };
    return MemoryStorage;
}());
function MemoryStorage_tsickle_Closure_declarations() {
    /** @type {?} */
    MemoryStorage.prototype._data;
}
//# sourceMappingURL=storage.memory.js.map

/***/ }),

/***/ "../../../../../../node_modules/angular-persistence/src/services/storage/storage.session.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage_abstract_browser__ = __webpack_require__("../../../../../../node_modules/angular-persistence/src/services/storage/storage.abstract_browser.js");
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Storage object which saves information to the browser session storage.
 *
 * @export
 * \@class SessionStorage
 *
 * @author Scott O'Bryan
 * \@since 1.0
 */
var SessionStorage = (function (_super) {
    __extends(SessionStorage, _super);
    function SessionStorage() {
        _super.call(this, sessionStorage);
    }
    return SessionStorage;
}(__WEBPACK_IMPORTED_MODULE_0__storage_abstract_browser__["a" /* AbstractBrowserStorage */]));
//# sourceMappingURL=storage.session.js.map

/***/ }),

/***/ "../../../../../../node_modules/angular-persistence/src/services/storage/storage.sub_storage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage_container_info__ = __webpack_require__("../../../../../../node_modules/angular-persistence/src/services/storage/storage.container_info.js");

/**
 * This is an internal implementation of a storage container.  It takes a PersistenceContainer
 * (which has a subset of the functionality) and straps on an info object to keep track of
 * items that are added to the container.  This class can be used for creating storage
 * containers within other storage containers.
 *
 * @export
 * \@class PersistenceContainerImpl
 *
 * @author Scott O'Bryan
 * \@since 1.0
 */
var SubStorage = (function () {
    /**
     * Creates an instance of SubStorage.
     * @param {?} _namespace
     * @param {?} _root
     * @param {?=} _available
     */
    function SubStorage(_namespace, _root, _available) {
        if (_available === void 0) { _available = true; }
        this._namespace = _namespace;
        this._root = _root;
        this._available = _available;
        this._info = new __WEBPACK_IMPORTED_MODULE_0__storage_container_info__["a" /* ContainerInfo */](_namespace, _root);
    }
    /**
     * Sets a value
     *
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    SubStorage.prototype.set = function (key, value) {
        if (!this._available) {
            return false;
        }
        var /** @type {?} */ val = this._root.set(this._getNamespacedKey(key), value);
        this._info.addAttribute(key);
        return val;
    };
    /**
     * Returns a value for a given key
     *
     * @param {?} key
     * @return {?}
     */
    SubStorage.prototype.get = function (key) {
        if (!this._available) {
            return undefined;
        }
        var /** @type {?} */ val = this._root.get(this._getNamespacedKey(key));
        if (val === undefined) {
            this._info.removeAttribute(key);
        }
        return val;
    };
    /**
     * Removes a value for a given key
     *
     * @param {?} key
     * @return {?}
     */
    SubStorage.prototype.remove = function (key) {
        if (!this._available) {
            return undefined;
        }
        this._info.removeAttribute(key);
        return this._root.remove(this._getNamespacedKey(key));
    };
    /**
     * Removes any values which have been stored using this subStorage
     * container.
     * @return {?}
     */
    SubStorage.prototype.removeAll = function () {
        var _this = this;
        this._info.getAttributes().forEach(function (element) { _this.remove(element); });
    };
    /**
     * Returns true if the parent storage object is available and if the
     * available flag was set durring instantiation
     *
     * @return {?}
     */
    SubStorage.prototype.available = function () {
        return this._available && this._info.available();
    };
    /**
     * Returns true if the value is not undefined
     *
     * @param {?} key
     * @return {?}
     */
    SubStorage.prototype.exists = function (key) {
        // This will also make sure the info object is up to date.
        return this.get(key) !== undefined;
    };
    /**
     * Returns a list of un-namespaced keys that have been returned by this object.
     *
     * @return {?}
     */
    SubStorage.prototype.keys = function () {
        var _this = this;
        // The exists will update the underlying storage object because
        // it invokes a get.  Still, we have an attributes object that is
        // not tied to the object in storage, hopefully.
        return this._info.getAttributes().filter(function (key) {
            return _this.exists(key);
        });
    };
    /**
     * @param {?} key
     * @return {?}
     */
    SubStorage.prototype._getNamespacedKey = function (key) {
        return this._namespace + '::' + key;
    };
    return SubStorage;
}());
function SubStorage_tsickle_Closure_declarations() {
    /** @type {?} */
    SubStorage.prototype._info;
    /** @type {?} */
    SubStorage.prototype._namespace;
    /** @type {?} */
    SubStorage.prototype._root;
    /** @type {?} */
    SubStorage.prototype._available;
}
//# sourceMappingURL=storage.sub_storage.js.map

/***/ }),

/***/ "../../../../../ClientSide/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../ClientSide/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../ClientSide/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../ClientSide/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Sana Webshop Assessment';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sana-webshop',
            template: __webpack_require__("../../../../../ClientSide/app/app.component.html"),
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../ClientSide/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../ClientSide/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shop_productList_component__ = __webpack_require__("../../../../../ClientSide/app/shop/productList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shop_cart_component__ = __webpack_require__("../../../../../ClientSide/app/shop/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shop_shop_component__ = __webpack_require__("../../../../../ClientSide/app/shop/shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shop_newproduct_component__ = __webpack_require__("../../../../../ClientSide/app/shop/newproduct.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_dataService__ = __webpack_require__("../../../../../ClientSide/app/shared/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_persistence__ = __webpack_require__("../../../../../../node_modules/angular-persistence/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_ui_switch__ = __webpack_require__("../../../../angular2-ui-switch/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_ui_switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_ui_switch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { HttpClientModule } from "@angular/common/http";










var routes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_6__shop_shop_component__["a" /* Shop */] },
    { path: "newproduct", component: __WEBPACK_IMPORTED_MODULE_7__shop_newproduct_component__["a" /* NewProduct */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__shop_productList_component__["a" /* ProductList */],
                __WEBPACK_IMPORTED_MODULE_5__shop_cart_component__["a" /* Cart */],
                __WEBPACK_IMPORTED_MODULE_6__shop_shop_component__["a" /* Shop */],
                __WEBPACK_IMPORTED_MODULE_7__shop_newproduct_component__["a" /* NewProduct */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_11_angular_persistence__["a" /* PersistenceModule */],
                __WEBPACK_IMPORTED_MODULE_12_angular2_ui_switch__["UiSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* RouterModule */].forRoot(routes, {
                    useHash: true,
                    enableTracing: true
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__shared_dataService__["a" /* DataService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../ClientSide/app/shared/dataService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order__ = __webpack_require__("../../../../../ClientSide/app/shared/order.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_persistence__ = __webpack_require__("../../../../../../node_modules/angular-persistence/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import * as orders from "./order";//I dont need this for this assessment i guess...
var DataService = (function () {
    function DataService(http, persistenceService) {
        this.http = http;
        this.persistenceService = persistenceService;
        this.products = [];
        this.order = new __WEBPACK_IMPORTED_MODULE_3__order__["a" /* Order */]();
        this.perSwitch = this.persistenceService.get('perSwitch', __WEBPACK_IMPORTED_MODULE_4_angular_persistence__["c" /* StorageType */].LOCAL);
    }
    DataService.prototype.loadProducts = function () {
        var _this = this;
        return this.http.get("/api/products")
            .map(function (result) { return _this.products = result.json(); });
    };
    DataService.prototype.AddToOrder = function (product) {
        var item = this.order.items.find(function (i) { return i.productId == product.productId; }); //If products exists...
        if (item) {
            item.quantity++;
        }
        else {
            item = new __WEBPACK_IMPORTED_MODULE_3__order__["b" /* OrderItem */]();
            item.productId = product.productId;
            item.productTitle = product.title;
            item.productPrice = product.price;
            item.productDescription = product.description;
            item.productPicture = product.picture;
            item.productCategoryId = product.categoryId;
            item.unitPrice = product.price;
            item.quantity = 1;
            this.order.items.push(item);
        }
    };
    DataService.prototype.addProduct = function (prod) {
        this.products = this.persistenceService.get('productList', __WEBPACK_IMPORTED_MODULE_4_angular_persistence__["c" /* StorageType */].LOCAL); //Clean DB product list & load my memory storage product list
        this.products.push(prod); //add my new product
        this.persistenceService.set('productList', this.products, { type: __WEBPACK_IMPORTED_MODULE_4_angular_persistence__["c" /* StorageType */].LOCAL }); //Memory & 'offline' storage
    };
    DataService.prototype.insertProduct = function (prod) {
        return this.http.post("/api/products", prod)
            .map(function (response) {
            var message = response.json();
            return true;
        });
    };
    DataService.prototype.activateMemoryStorage = function () {
        this.perSwitch = true;
        this.persistenceService.set('perSwitch', true, { type: __WEBPACK_IMPORTED_MODULE_4_angular_persistence__["c" /* StorageType */].LOCAL }); //Memory & 'offline' storage
    };
    DataService.prototype.deactivateMemoryStorage = function () {
        this.perSwitch = false;
        this.persistenceService.set('perSwitch', false, { type: __WEBPACK_IMPORTED_MODULE_4_angular_persistence__["c" /* StorageType */].LOCAL }); //Database storage
    };
    DataService.prototype.getMemoryStorageState = function () {
        return this.persistenceService.get('perSwitch', __WEBPACK_IMPORTED_MODULE_4_angular_persistence__["c" /* StorageType */].LOCAL);
    };
    DataService.prototype.getMemoryStorageProductList = function () {
        return this.persistenceService.get('productList', __WEBPACK_IMPORTED_MODULE_4_angular_persistence__["c" /* StorageType */].LOCAL);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4_angular_persistence__["b" /* PersistenceService */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../ClientSide/app/shared/order.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OrderItem; });
/* unused harmony export OrderCustomer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

var Order = (function () {
    function Order() {
        this.orderDate = new Date();
        this.items = new Array();
    }
    Object.defineProperty(Order.prototype, "subtotal", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["sum"](__WEBPACK_IMPORTED_MODULE_0_lodash__["map"](this.items, function (i) { return i.unitPrice * i.quantity; }));
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Order;
}());

var OrderItem = (function () {
    function OrderItem() {
    }
    return OrderItem;
}());

var OrderCustomer = (function () {
    function OrderCustomer() {
    }
    return OrderCustomer;
}());



/***/ }),

/***/ "../../../../../ClientSide/app/shop/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-cart table {\r\n    font-size:smaller;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientSide/app/shop/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"my-cart\">\r\n    <h5>My Sana Cart</h5>\r\n    <div>Subtotal: {{ data.order.subtotal | currency:\"COP\":true }}</div>\r\n    <div>No. Items: {{ data.order.items.length }}</div>\r\n    <table class=\"table table-condensed table-hover table-responsive\">\r\n        <thead>\r\n            <tr>\r\n                <td>Product</td>\r\n                <td>#</td>\r\n                <td>$</td>\r\n                <td>Total</td>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let o of data.order.items\">\r\n                <td>{{ o.productTitle }}</td>\r\n                <td>{{ o.quantity }}</td>\r\n                <td>{{ o.unitPrice | currency:\"COP\":true }}</td>\r\n                <td>{{ (o.unitPrice * o.quantity) | currency:\"COP\":true }}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientSide/app/shop/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dataService__ = __webpack_require__("../../../../../ClientSide/app/shared/dataService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Cart = (function () {
    function Cart(data) {
        this.data = data;
    }
    Cart = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "sana-cart",
            template: __webpack_require__("../../../../../ClientSide/app/shop/cart.component.html"),
            styles: [__webpack_require__("../../../../../ClientSide/app/shop/cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */]])
    ], Cart);
    return Cart;
}());



/***/ }),

/***/ "../../../../../ClientSide/app/shop/newproduct.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <h4 class=\"\" style=\"text-align:center\">Add New Product</h4>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-4 col-md-offset-4\">\r\n        <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n        <form (submit)=\"onInsert()\" #theForm=\"ngForm\" novalidate>\r\n            <div class=\"form-group\">\r\n                <label for=\"title\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"prod.title\" #title=\"ngModel\" required/>\r\n                <div class=\"text-danger\" *ngIf=\"title.touched && title.invalid && title.errors.required\">Title is required!</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"price\">Price</label>\r\n                <input class=\"form-control\" name=\"price\" [(ngModel)]=\"prod.price\" required #price=\"ngModel\" />\r\n                <div class=\"text-danger\" *ngIf=\"price.touched && price.invalid && price.errors.required\">Price is required!</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"description\">Description</label>\r\n                <input class=\"form-control\" name=\"description\" [(ngModel)]=\"prod.description\" #description=\"ngModel\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"submit\" class=\"btn btn-success\" value=\"Accept\" [disabled]=\"theForm.invalid\" />\r\n                <a routerLink=\"/\" class=\"btn btn-default\">Cancel</a>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientSide/app/shop/newproduct.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProduct; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dataService__ = __webpack_require__("../../../../../ClientSide/app/shared/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewProduct = (function () {
    function NewProduct(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
        this.prod = {
            price: 0,
            title: "",
            description: "",
            picture: "sana.png"
        };
    }
    NewProduct.prototype.onInsert = function () {
        var _this = this;
        if (this.data.getMemoryStorageState()) {
            this.data.addProduct(this.prod);
            this.router.navigate(["/"]);
        }
        else {
            this.data.insertProduct(this.prod)
                .subscribe(function (success) {
                if (success) {
                    _this.router.navigate(["/"]);
                }
            }, function (err) { return _this.errorMessage = "Failed to insert product!"; });
        }
    };
    NewProduct = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "new-product",
            template: __webpack_require__("../../../../../ClientSide/app/shop/newproduct.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], NewProduct);
    return NewProduct;
}());



/***/ }),

/***/ "../../../../../ClientSide/app/shop/productList.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-info {\r\n    height: 270px;\r\n}\r\n    .product-info img {\r\n        max-width: 100px;\r\n        max-height: 100px;\r\n        float: left;\r\n        margin: 0 2px;\r\n        border: solid 1px black;\r\n    }\r\n\r\n    .product-info .product-title {\r\n        font-size: large;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .product-info button {\r\n        position: absolute;\r\n        bottom: 10px;\r\n        left: 50%;\r\n        margin-left: -50px;\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ClientSide/app/shop/productList.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"product-info col-md-4 well well-sm\" *ngFor=\"let p of products\">\r\n        <img src=\"/img/{{ p.picture }}\" class=\"img-responsive\" alt=\"{{ p.title }}\"/>\r\n        <div class=\"product-title\">{{ p.title }}</div>\r\n        <div><strong>Number</strong>: {{ p.productId }}</div>\r\n        <div><strong>Price</strong>: {{ p.price | currency:\"COP\":true }}</div>\r\n        <div><strong>Description</strong>: {{ p.description }}</div>\r\n        <button id=\"buyButton\" class=\"btn btn-success btn-sm pull-right\" (click)=\"addProduct(p)\">Add to cart!</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientSide/app/shop/productList.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dataService__ = __webpack_require__("../../../../../ClientSide/app/shared/dataService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductList = (function () {
    function ProductList(data) {
        this.data = data;
        this.products = [];
    }
    ProductList.prototype.ngOnInit = function () {
        var _this = this;
        if (this.data.getMemoryStorageState()) {
            this.products = this.data.getMemoryStorageProductList();
        }
        else {
            this.data.loadProducts()
                .subscribe(function (success) {
                if (success) {
                    _this.products = _this.data.products;
                }
            });
        }
    };
    ProductList.prototype.addProduct = function (product) {
        this.data.AddToOrder(product);
    };
    ProductList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "product-list",
            template: __webpack_require__("../../../../../ClientSide/app/shop/productList.component.html"),
            styles: [__webpack_require__("../../../../../ClientSide/app/shop/productList.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */]])
    ], ProductList);
    return ProductList;
}());



/***/ }),

/***/ "../../../../../ClientSide/app/shop/shop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-8\">\r\n        <product-list></product-list>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <a routerLink=\"newproduct\" class=\"btn btn-info btn-block\">Add new product</a>\r\n        <div class=\"well well-sm\" style=\"display:block\">\r\n            <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n            <p>Memory storage:</p>\r\n            <ui-switch [(ngModel)]=\"msValue\" (click)=\"storageSwClicked()\"></ui-switch>\r\n        </div>\r\n        <div class=\"well well-sm\">\r\n            <sana-cart></sana-cart>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientSide/app/shop/shop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_dataService__ = __webpack_require__("../../../../../ClientSide/app/shared/dataService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Shop = (function () {
    function Shop(data, router) {
        this.data = data;
        this.router = router;
        this.msValue = this.data.perSwitch; //Persitent storage by default (I used database)
        this.errorMessage = "";
    }
    Shop.prototype.storageSwClicked = function () {
        console.log("Switch storage value: " + this.msValue);
        if (this.msValue) {
            this.data.activateMemoryStorage();
            this.router.navigate(["/"]);
        }
        else {
            this.data.deactivateMemoryStorage();
            this.router.navigate(["/"]);
        }
    };
    Shop = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "sana-shop",
            template: __webpack_require__("../../../../../ClientSide/app/shop/shop.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_dataService__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], Shop);
    return Shop;
}());



/***/ }),

/***/ "../../../../../ClientSide/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../ClientSide/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../ClientSide/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../ClientSide/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../ClientSide/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
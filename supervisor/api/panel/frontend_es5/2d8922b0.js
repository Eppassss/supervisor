(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[528],{37528:function(e,t,r){"use strict";r.r(t);var n,i,o,a,s,l=r(50424),c=r(55358),d=r(14516),u=r(47181),p=(r(7164),r(85415)),f=(r(19725),r(46583),r(98595)),h=r(11654);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=E(e);if(t){var i=E(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return w(this,r)}}function w(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?k(e):t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(){P=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!C(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,i[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&n.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=D(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:A(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=A(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function _(e){var t,r=D(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function x(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function C(e){return e.decorators&&e.decorators.length}function S(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function A(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function D(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===m(t)?t:String(t)}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var z=(0,d.Z)((function(e,t,r){return t.devices.filter((function(t){var n;return(e||["tty","gpio","input"].includes(t.subsystem))&&((null===(n=t.by_id)||void 0===n?void 0:n.toLowerCase().includes(r))||t.name.toLowerCase().includes(r)||t.dev_path.toLocaleLowerCase().includes(r)||JSON.stringify(t.attributes).toLocaleLowerCase().includes(r))})).sort((function(e,t){return(0,p.q)(e.name,t.name)}))}));!function(e,t,r,n){var i=P();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),r),s=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(S(o.descriptor)||S(i.descriptor)){if(C(o)||C(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(C(o)){if(C(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}x(o,i)}else t.push(o)}return t}(a.d.map(_)),e);i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,c.Mo)("dialog-hassio-hardware")],(function(e,t){return{F:function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(n,t);var r=g(n);function n(){var t;v(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o)),e(k(t)),t}return n}(t),d:[{kind:"field",decorators:[(0,c.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_dialogParams",value:void 0},{kind:"field",decorators:[(0,c.SB)()],key:"_filter",value:void 0},{kind:"method",key:"showDialog",value:function(e){this._dialogParams=e}},{kind:"method",key:"closeDialog",value:function(){this._dialogParams=void 0,(0,u.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){var e,t=this;if(!this._dialogParams)return(0,l.dy)(n||(n=y([""])));var r=z((null===(e=this.hass.userData)||void 0===e?void 0:e.showAdvanced)||!1,this._dialogParams.hardware,(this._filter||"").toLowerCase());return(0,l.dy)(i||(i=y(["\n      <ha-dialog\n        open\n        scrimClickAction\n        hideActions\n        @closed=","\n        .heading=",'\n      >\n        <div class="header" slot="heading">\n          <h2>\n            ','\n          </h2>\n          <mwc-icon-button dialogAction="close">\n            <ha-svg-icon .path=',"></ha-svg-icon>\n          </mwc-icon-button>\n          <search-input\n            autofocus\n            no-label-float\n            .filter=","\n            @value-changed=","\n            .label=","\n          >\n          </search-input>\n        </div>\n\n        ","\n      </ha-dialog>\n    "])),this.closeDialog,!0,this._dialogParams.supervisor.localize("dialog.hardware.title"),"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",this._filter,this._handleSearchChange,this._dialogParams.supervisor.localize("dialog.hardware.search"),r.map((function(e){return(0,l.dy)(o||(o=y(["<ha-expansion-panel\n              .header=","\n              .secondary=",'\n              outlined\n            >\n              <div class="device-property">\n                <span>\n                  ',":\n                </span>\n                <span>",'</span>\n              </div>\n              <div class="device-property">\n                <span>\n                  ',":\n                </span>\n                <code>","</code>\n              </div>\n              ",'\n              <div class="attributes">\n                <span>\n                  ',":\n                </span>\n                <pre>","</pre>\n              </div>\n            </ha-expansion-panel>"])),e.name,e.by_id||void 0,t._dialogParams.supervisor.localize("dialog.hardware.subsystem"),e.subsystem,t._dialogParams.supervisor.localize("dialog.hardware.device_path"),e.dev_path,e.by_id?(0,l.dy)(a||(a=y([' <div class="device-property">\n                    <span>\n                      ',":\n                    </span>\n                    <code>","</code>\n                  </div>"])),t._dialogParams.supervisor.localize("dialog.hardware.id"),e.by_id):"",t._dialogParams.supervisor.localize("dialog.hardware.attributes"),(0,f.$w)(e.attributes,{indent:2}))})))}},{kind:"method",key:"_handleSearchChange",value:function(e){this._filter=e.detail.value}},{kind:"get",static:!0,key:"styles",value:function(){return[h.Qx,h.yu,(0,l.iv)(s||(s=y(["\n        mwc-icon-button {\n          position: absolute;\n          right: 16px;\n          top: 10px;\n          text-decoration: none;\n          color: var(--primary-text-color);\n        }\n        h2 {\n          margin: 18px 42px 0 18px;\n          color: var(--primary-text-color);\n        }\n\n        ha-expansion-panel {\n          margin: 4px 0;\n        }\n        pre,\n        code {\n          background-color: var(--markdown-code-background-color, none);\n          border-radius: 3px;\n        }\n        pre {\n          padding: 16px;\n          overflow: auto;\n          line-height: 1.45;\n          font-family: var(--code-font-family, monospace);\n        }\n        code {\n          font-size: 85%;\n          padding: 0.2em 0.4em;\n        }\n        search-input {\n          margin: 0 16px;\n          display: block;\n        }\n        .device-property {\n          display: flex;\n          justify-content: space-between;\n        }\n        .attributes {\n          margin-top: 12px;\n        }\n      "])))]}}]}}),l.oi)}}]);
//# sourceMappingURL=2d8922b0.js.map
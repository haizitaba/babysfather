require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"NewScript":[function(require,module,exports){
"use strict";
cc._RFpush(module, '17911aAeQ9PHJfhimsbYz/1', 'NewScript');
// js\NewScript.js

cc.Class({
    'extends': cc.Component,

    properties: {
        anim: cc.Animation
    },

    // use this for initialization
    playRun: function playRun() {
        this.anim.play('item');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"buttonproperty":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'c85b0qgkMVG1qMuv2s6MfNd', 'buttonproperty');
// js\buttonproperty.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    setProperty: function setProperty() {
        var userData = {
            name: 'Tracer',
            level: 1,
            gold: 100,
            physicalStrength: 100,
            mood: 100,
            logic: 100,
            language: 100,
            team: 100,
            work: 'wu',
            story: 1,
            car: 'wu',
            house: 'wu',
            stroy1: 1,
            stroy2: 1,
            certificate: {
                work1: 'work1',
                work2: 'work2',
                work3: 'work3'
            }
        };

        var baidu_developer = {
            name: 'Tracer',
            rate: 2,
            salary: 10000
        };

        cc.sys.localStorage.setItem('userData', JSON.stringify(userData));
        console.log("按钮按下");
    },

    // function rnd(min, max) {     return parseInt(Math.random()*(max - min + 1) + min);   } 
    rnd: function rnd(min, max) {
        return parseInt(Math.random() * (max - min + 1) + min);
    },

    contains: function contains(a, obj) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] == obj) {
                return true;
            }
        }
        return false;
    },

    jobhunting: function jobhunting() {
        var company1 = ['tencent', ' Microsoft', 'Alibaba', 'apple'];
        var company2 = ['jd', 'neteasy', 'ctrip', 'suning', 'sohu', 'sina', 'leshi', 'didi', 'juren', 'xiaomi']; //ctripxiecheng携程
        var company3 = ['eastmoney', '360', 'weipinhui', 'meituan', 'youku', 'kingsoft', 'shengda', 'xunlei', 'baofeng', 'dangdang', 'guomei', 'wanmei', 'soufang', 'lianjia', 'xindongfang', 'jumei', 'qichezhijia', 'quna', 'shijihulian', 'jinritoutiao'];
        var job = ["baidu_developer", "fenghua_developer", "ali_developer", "tenant_developer", "gongfu_developer"];
        var job_jishu = ['qiantaisheji', 'meishusheji', 'houtaisheji', 'wangluoguanli', 'chanpinzhuli', 'chanpinjingli', 'jishuzongjian'];
        var job_renli = ['renshizhuanyuan', 'renshizhuli', 'xingzhengzhuli', 'xingzhengzhuanyuan', 'renshijingli', 'xingzhengjingli', 'renliziyuanzongjian'];
        var job_xiaoshou = ['xiaoshoudaibiao', 'shichangdiaocha', 'xiaoshouguwen', 'xiaoshouzhuli'];
        var arr_job = [];
        var arr_zhiwei = [];
        var job_company = company1.concat(company2).concat(company3);
        var job_zhiwei = job_jishu.concat(job_renli).concat(job_xiaoshou);
        while (arr_job.length < 3) {
            var rand = this.rnd(0, job_company.length);
            var r = job_company[rand];
            if (this.contains(arr_job, r)) {} else {
                arr_job.push(r);
            }
        }
        while (arr_zhiwei.length < 3) {
            var rand_zhiwei = this.rnd(0, job_zhiwei.length);
            var r_zhiwei = job_zhiwei[rand_zhiwei];
            if (this.contains(arr_zhiwei, r_zhiwei)) {} else {
                arr_zhiwei.push(r_zhiwei);
            }
        }
        for (var j = 0; j < 3; j++) {
            console.log(arr_job[j] + '_' + arr_zhiwei[j]);
        }
    },

    selectJob: function selectJob() {
        var userData = JSON.parse(cc.sys.localStorage.getItem('userData'));
        var selectjob = false;
        console.log('userdata:' + userData.name);
        return selectjob;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"getproperty":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'c2cd1eYEC9KQa9tQ31vPJDr', 'getproperty');
// js\getproperty.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    getProperty: function getProperty() {
        var userData = JSON.parse(cc.sys.localStorage.getItem('userData'));
        console.log('userdata:' + userData.certificate.work1);
        console.log('userdata:' + userData.certificate.work2);
        console.log('userdata:' + userData.certificate.work3);
        console.log("按钮按下");
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"goul":[function(require,module,exports){
"use strict";
cc._RFpush(module, '6065fL1OixEfYdQtCMM+qpm', 'goul');
// js\goul.js

cc.Class({
    "extends": cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    toScene: function toScene() {
        cc.director.loadScene("web");
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"maptoext":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'dcfa9BEuGNABYVPlIvH7jk7', 'maptoext');
// js\maptoext.js

cc.Class({
    "extends": cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    toScene: function toScene() {
        cc.director.loadScene("ext");
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"togongzuoshi":[function(require,module,exports){
"use strict";
cc._RFpush(module, '71ad5rKCpdLtqiUdrz1fu5o', 'togongzuoshi');
// js\togongzuoshi.js

cc.Class({
    "extends": cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    toScene: function toScene() {
        cc.director.loadScene("gongzuoshi");
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"tomain":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'f54a7wPrwNFHIuMCF0MwofQ', 'tomain');
// js\tomain.js

cc.Class({
    "extends": cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    toScene: function toScene() {
        cc.director.loadScene("home");
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}],"tomap":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'e3e188plWBMXYcOi4WopHmG', 'tomap');
// js\tomap.js

cc.Class({
    "extends": cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    toScene: function toScene() {
        cc.director.loadScene("map");
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}]},{},["NewScript","buttonproperty","getproperty","goul","maptoext","togongzuoshi","tomain","tomap"])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9qcy9OZXdTY3JpcHQuanMiLCJhc3NldHMvanMvYnV0dG9ucHJvcGVydHkuanMiLCJhc3NldHMvanMvZ2V0cHJvcGVydHkuanMiLCJhc3NldHMvanMvZ291bC5qcyIsImFzc2V0cy9qcy9tYXB0b2V4dC5qcyIsImFzc2V0cy9qcy90b2dvbmd6dW9zaGkuanMiLCJhc3NldHMvanMvdG9tYWluLmpzIiwiYXNzZXRzL2pzL3RvbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDSTs7QUFFQTtBQUNNOzs7O0FBSU47QUFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUUjtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNBO0FBQ0Q7QUFDSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFIUTtBQWZGOztBQXNCZDtBQUNJO0FBQ0E7QUFDQTtBQUhrQjs7QUFNdEI7QUFDQTtBQUNDOztBQUVEO0FBQ0E7QUFDSTtBQUNIOztBQUVEO0FBQ0k7QUFDSTtBQUNJO0FBQ0g7QUFDSjtBQUNEO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFHSTtBQUNIO0FBQ0o7QUFDRDtBQUNJO0FBQ0E7QUFDQTtBQUdJO0FBQ0g7QUFDSjtBQUNEO0FBRUk7QUFDSDtBQUVKOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNBOztBQUVBO0FBakhLOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVlE7O0FBYVo7QUFDQTtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRjs7QUFFRDtBQUNBOztBQUVBO0FBNUJLOzs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDRzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJQO0FBQ0k7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDRzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJQO0FBQ0k7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDRzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJQO0FBQ0k7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDRzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJQO0FBQ0k7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDRyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICBhbmltOmNjLkFuaW1hdGlvblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIHBsYXlSdW46ZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmFuaW0ucGxheSgnaXRlbScpXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIHNldFByb3BlcnR5OiBmdW5jdGlvbigpe1xyXG4gICB2YXIgdXNlckRhdGEgPSB7XHJcbiAgICAgICAgbmFtZTogJ1RyYWNlcicsXHJcbiAgICAgICAgbGV2ZWw6IDEsXHJcbiAgICAgICAgZ29sZDogMTAwLFxyXG4gICAgICAgIHBoeXNpY2FsU3RyZW5ndGg6IDEwMCxcclxuICAgICAgICBtb29kOiAxMDAsXHJcbiAgICAgICAgbG9naWM6IDEwMCxcclxuICAgICAgICBsYW5ndWFnZTogMTAwLFxyXG4gICAgICAgIHRlYW06IDEwMCxcclxuICAgICAgICB3b3JrOiAnd3UnLFxyXG4gICAgICAgIHN0b3J5OiAxLFxyXG4gICAgICAgIGNhcjogJ3d1JyxcclxuICAgICAgICBob3VzZTogJ3d1JyxcclxuICAgICAgICBzdHJveTE6IDEsXHJcbiAgICAgICAgc3Ryb3kyOiAxLFxyXG4gICAgICAgIGNlcnRpZmljYXRlOntcclxuICAgICAgICAgICAgd29yazE6ICd3b3JrMScsXHJcbiAgICAgICAgICAgIHdvcmsyOiAnd29yazInLFxyXG4gICAgICAgICAgICB3b3JrMzogJ3dvcmszJ1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIHZhciBiYWlkdV9kZXZlbG9wZXIgPSB7XHJcbiAgICAgICAgbmFtZTogJ1RyYWNlcicsXHJcbiAgICAgICAgcmF0ZTogMixcclxuICAgICAgICBzYWxhcnk6IDEwMDAwXHJcbiAgICB9O1xyXG5cclxuICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckRhdGEnLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSkpO1xyXG4gICAgY29uc29sZS5sb2coXCLmjInpkq7mjInkuItcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIHJuZChtaW4sIG1heCkgeyAgICAgcmV0dXJuIHBhcnNlSW50KE1hdGgucmFuZG9tKCkqKG1heCAtIG1pbiArIDEpICsgbWluKTsgICB9IFxyXG4gICAgcm5kOiBmdW5jdGlvbihtaW4sbWF4KXtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSoobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgY29udGFpbnM6ZnVuY3Rpb24oYSxvYmope1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoYVtpXSA9PSBvYmopIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGpvYmh1bnRpbmc6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGNvbXBhbnkxID0gWyd0ZW5jZW50JywnIE1pY3Jvc29mdCcsJ0FsaWJhYmEnLCdhcHBsZSddO1xyXG4gICAgICAgIHZhciBjb21wYW55MiA9IFsnamQnLCduZXRlYXN5JywnY3RyaXAnLCdzdW5pbmcnLCdzb2h1Jywnc2luYScsJ2xlc2hpJywnZGlkaScsJ2p1cmVuJywneGlhb21pJ107IC8vY3RyaXB4aWVjaGVuZ+aQuueoi1xyXG4gICAgICAgIHZhciBjb21wYW55MyA9IFsnZWFzdG1vbmV5JywnMzYwJywnd2VpcGluaHVpJywnbWVpdHVhbicsJ3lvdWt1Jywna2luZ3NvZnQnLCdzaGVuZ2RhJ1xyXG4gICAgICAgICwneHVubGVpJywnYmFvZmVuZycsJ2RhbmdkYW5nJywnZ3VvbWVpJywnd2FubWVpJywnc291ZmFuZycsJ2xpYW5qaWEnLCd4aW5kb25nZmFuZycsJ2p1bWVpJ1xyXG4gICAgICAgICwncWljaGV6aGlqaWEnLCdxdW5hJywnc2hpamlodWxpYW4nLCdqaW5yaXRvdXRpYW8nXTtcclxuICAgICAgICB2YXIgam9iID0gW1wiYmFpZHVfZGV2ZWxvcGVyXCIsXCJmZW5naHVhX2RldmVsb3BlclwiLFwiYWxpX2RldmVsb3BlclwiLFwidGVuYW50X2RldmVsb3BlclwiLFwiZ29uZ2Z1X2RldmVsb3BlclwiXTtcclxuICAgICAgICB2YXIgam9iX2ppc2h1ID0gWydxaWFudGFpc2hlamknLCdtZWlzaHVzaGVqaScsJ2hvdXRhaXNoZWppJywnd2FuZ2x1b2d1YW5saScsJ2NoYW5waW56aHVsaScsJ2NoYW5waW5qaW5nbGknLCdqaXNodXpvbmdqaWFuJ107XHJcbiAgICAgICAgdmFyIGpvYl9yZW5saSA9IFsncmVuc2hpemh1YW55dWFuJywncmVuc2hpemh1bGknLCd4aW5nemhlbmd6aHVsaScsJ3hpbmd6aGVuZ3podWFueXVhbicsJ3JlbnNoaWppbmdsaScsJ3hpbmd6aGVuZ2ppbmdsaScsJ3Jlbmxpeml5dWFuem9uZ2ppYW4nXTtcclxuICAgICAgICB2YXIgam9iX3hpYW9zaG91ID0gWyd4aWFvc2hvdWRhaWJpYW8nLCdzaGljaGFuZ2RpYW9jaGEnLCd4aWFvc2hvdWd1d2VuJywneGlhb3Nob3V6aHVsaSddO1xyXG4gICAgICAgIHZhciBhcnJfam9iID0gW107XHJcbiAgICAgICAgdmFyIGFycl96aGl3ZWkgPSBbXTtcclxuICAgICAgICB2YXIgam9iX2NvbXBhbnkgPSBjb21wYW55MS5jb25jYXQoY29tcGFueTIpLmNvbmNhdChjb21wYW55Myk7XHJcbiAgICAgICAgdmFyIGpvYl96aGl3ZWkgPSBqb2JfamlzaHUuY29uY2F0KGpvYl9yZW5saSkuY29uY2F0KGpvYl94aWFvc2hvdSk7XHJcbiAgICAgICAgd2hpbGUoYXJyX2pvYi5sZW5ndGggPCAzKXtcclxuICAgICAgICAgICAgdmFyIHJhbmQgPSB0aGlzLnJuZCgwLGpvYl9jb21wYW55Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHZhciByID0gam9iX2NvbXBhbnlbcmFuZF07XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY29udGFpbnMoYXJyX2pvYiwgcikpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgYXJyX2pvYi5wdXNoKHIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlKGFycl96aGl3ZWkubGVuZ3RoIDwgMyl7XHJcbiAgICAgICAgICAgIHZhciByYW5kX3poaXdlaSA9IHRoaXMucm5kKDAsam9iX3poaXdlaS5sZW5ndGgpO1xyXG4gICAgICAgICAgICB2YXIgcl96aGl3ZWkgPSBqb2Jfemhpd2VpW3JhbmRfemhpd2VpXTtcclxuICAgICAgICAgICAgaWYodGhpcy5jb250YWlucyhhcnJfemhpd2VpLCByX3poaXdlaSkpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgYXJyX3poaXdlaS5wdXNoKHJfemhpd2VpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IodmFyIGo9MDtqPDM7aisrKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycl9qb2Jbal0rJ18nK2Fycl96aGl3ZWlbal0pO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzZWxlY3RKb2I6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHVzZXJEYXRhID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJEYXRhJykpO1xyXG4gICAgICAgIHZhciBzZWxlY3Rqb2IgPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZygndXNlcmRhdGE6Jyt1c2VyRGF0YS5uYW1lKVxyXG4gICAgICAgIHJldHVybiBzZWxlY3Rqb2I7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBnZXRQcm9wZXJ0eTogZnVuY3Rpb24oKXtcclxuICAgICAgIHZhciB1c2VyRGF0YSA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyRGF0YScpKTtcclxuICAgICAgIGNvbnNvbGUubG9nKCd1c2VyZGF0YTonK3VzZXJEYXRhLmNlcnRpZmljYXRlLndvcmsxKVxyXG4gICAgICAgY29uc29sZS5sb2coJ3VzZXJkYXRhOicrdXNlckRhdGEuY2VydGlmaWNhdGUud29yazIpXHJcbiAgICAgICBjb25zb2xlLmxvZygndXNlcmRhdGE6Jyt1c2VyRGF0YS5jZXJ0aWZpY2F0ZS53b3JrMylcclxuICAgICAgIGNvbnNvbGUubG9nKFwi5oyJ6ZKu5oyJ5LiLXCIpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICB0b1NjZW5lOiBmdW5jdGlvbigpe1xyXG4gICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwid2ViXCIpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICB0b1NjZW5lOiBmdW5jdGlvbigpe1xyXG4gICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZXh0XCIpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICB0b1NjZW5lOiBmdW5jdGlvbigpe1xyXG4gICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ29uZ3p1b3NoaVwiKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgdG9TY2VuZTogZnVuY3Rpb24oKXtcclxuICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImhvbWVcIilcclxuICAgIH1cclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIHRvU2NlbmU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYXBcIilcclxuICAgIH1cclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
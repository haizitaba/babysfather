require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"buttonproperty":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'c3815z92ktEYbdAqzDIUrsu', 'buttonproperty');
// js/buttonproperty.js

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

cc._RF.pop();
},{}],"getproperty":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'd528evWNMlPZIzhZVQ7dM94', 'getproperty');
// js/getproperty.js

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

cc._RF.pop();
},{}],"goul":[function(require,module,exports){
"use strict";
cc._RF.push(module, '6065fL1OixEfYdQtCMM+qpm', 'goul');
// js/goul.js

"use strict";

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
    toScene: function toScene() {
        cc.director.loadScene("web");
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();
},{}],"maptoext":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'dcfa9BEuGNABYVPlIvH7jk7', 'maptoext');
// js/maptoext.js

"use strict";

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
    toScene: function toScene() {
        cc.director.loadScene("ext");
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();
},{}],"togongzuoshi":[function(require,module,exports){
"use strict";
cc._RF.push(module, '71ad5rKCpdLtqiUdrz1fu5o', 'togongzuoshi');
// js/togongzuoshi.js

"use strict";

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
    toScene: function toScene() {
        cc.director.loadScene("gongzuoshi");
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();
},{}],"tomain":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'f54a7wPrwNFHIuMCF0MwofQ', 'tomain');
// js/tomain.js

"use strict";

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
    toScene: function toScene() {
        cc.director.loadScene("home");
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();
},{}],"tomap":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'e3e188plWBMXYcOi4WopHmG', 'tomap');
// js/tomap.js

"use strict";

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
    toScene: function toScene() {
        cc.director.loadScene("map");
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();
},{}],"toyingpin":[function(require,module,exports){
"use strict";
cc._RF.push(module, '17911aAeQ9PHJfhimsbYz/1', 'toyingpin');
// js/toyingpin.js

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

    onLoad: function onLoad() {
        window.Global = {
            jobselect: null
        };
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
        Global.jobselect = [];
        while (arr_job.length < 3) {
            var rand = this.rnd(0, job_company.length);
            var r = job_company[rand];
            if (this.contains(arr_job, r)) {} else {
                arr_job.push(r);
            }
        }

        // for(var g=0;g<3;g++) 
        // {
        //     console.log('arr_job:'+arr_job[g]);
        // }

        while (arr_zhiwei.length < 3) {
            var rand_zhiwei = this.rnd(0, job_zhiwei.length);
            var r_zhiwei = job_zhiwei[rand_zhiwei];
            if (this.contains(arr_zhiwei, r_zhiwei)) {} else {
                arr_zhiwei.push(r_zhiwei);
            }
        }

        // for(var h=0;h<3;h++) 
        // {
        //     console.log('arr_zhiwei:'+arr_zhiwei[h]);
        // }

        for (var j = 0; j < 3; j++) {

            Global.jobselect.push(arr_job[j] + '_' + arr_zhiwei[j]);
            // console.log(Global.jobselect[j]);
            // console.log(Global.jobselect.length);
        }
    },

    selectJob: function selectJob() {
        var userData = JSON.parse(cc.sys.localStorage.getItem('userData'));
        var selectjob = false;
        console.log('userdata:' + userData.name);
        return selectjob;
    },

    toScene: function toScene() {
        this.jobhunting();
        cc.director.loadScene("yingpin");
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();
},{}],"workLoad":[function(require,module,exports){
"use strict";
cc._RF.push(module, 'c127cw84/9Np4BflqUBwIaS', 'workLoad');
// js/workLoad.js

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
    onLoad: function onLoad() {
        var label1 = this.node.getChildByName("labelabc").getComponent(cc.Label);
        var text = 'started';
        console.log(label1);
        // Change the text in Label Component
        label1.string = text;
        for (var j = 0; j < 3; j++) {
            var l = 'cc.label' + j + 1;

            //  console.log(Global.jobselect[j]);
        }
    }

});

cc._RF.pop();
},{}]},{},["buttonproperty","getproperty","goul","maptoext","togongzuoshi","tomain","tomap","toyingpin","workLoad"])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9qcy9idXR0b25wcm9wZXJ0eS5qcyIsImFzc2V0cy9qcy9nZXRwcm9wZXJ0eS5qcyIsImFzc2V0cy9qcy9nb3VsLmpzIiwiYXNzZXRzL2pzL21hcHRvZXh0LmpzIiwiYXNzZXRzL2pzL3RvZ29uZ3p1b3NoaS5qcyIsImFzc2V0cy9qcy90b21haW4uanMiLCJhc3NldHMvanMvdG9tYXAuanMiLCJhc3NldHMvanMvdG95aW5ncGluLmpzIiwiYXNzZXRzL2pzL3dvcmtMb2FkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNBO0FBQ0Q7QUFDSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFIUTtBQWZGOztBQXNCZDtBQUNJO0FBQ0E7QUFDQTtBQUhrQjs7QUFNdEI7QUFDQTtBQUNDOztBQUVEO0FBQ0E7QUFDSTtBQUNIOztBQUVEO0FBQ0k7QUFDSTtBQUNJO0FBQ0g7QUFDSjtBQUNEO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFHSTtBQUNIO0FBQ0o7QUFDRDtBQUNJO0FBQ0E7QUFDQTtBQUdJO0FBQ0g7QUFDSjtBQUNEO0FBRUk7QUFDSDtBQUVKOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNBOztBQUVBO0FBakhLOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVlE7O0FBYVo7QUFDQTtBQUNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRjs7QUFFRDtBQUNBOztBQUVBO0FBNUJLOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVlE7O0FBYVo7QUFDQTtBQUNHO0FBQ0Y7O0FBRUQ7QUFDQTs7QUFFQTtBQXhCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0E7QUFDRztBQUNGOztBQUVEO0FBQ0E7O0FBRUE7QUF4Qks7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWUTs7QUFhWjtBQUNBO0FBQ0c7QUFDRjs7QUFFRDtBQUNBOztBQUVBO0FBeEJLOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVlE7O0FBYVo7QUFDQTtBQUNHO0FBQ0Y7O0FBRUQ7QUFDQTs7QUFFQTtBQXhCSzs7Ozs7Ozs7OztBQ0FUO0FBQ0k7O0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZROztBQWFaO0FBQ0E7QUFDRztBQUNGOztBQUVEO0FBQ0E7O0FBRUE7QUF4Qks7Ozs7Ozs7Ozs7QUNBVDtBQUNJOztBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVlE7O0FBY1o7QUFDSTtBQUNBO0FBRGdCO0FBR25COztBQUVEOztBQUVDO0FBQ0Y7QUFDSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFIUTtBQWZGOztBQXNCZDtBQUNJO0FBQ0E7QUFDQTtBQUhrQjs7QUFNdEI7QUFDQTtBQUNDOztBQUVEO0FBQ0E7QUFDSTtBQUNIOztBQUVEO0FBQ0k7QUFDSTtBQUNJO0FBQ0g7QUFDSjtBQUNEO0FBQ0g7O0FBRUQ7QUFDSTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUdJO0FBQ0g7QUFDSjs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUdJO0FBQ0g7QUFDSjs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFHSTtBQUNBO0FBQ0E7QUFDSDtBQUVKOztBQUVEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFFRDtBQUNJO0FBQ0Q7QUFDRjs7QUFFRDtBQUNBOztBQUVBO0FBOUlLOzs7Ozs7Ozs7O0FDQVQ7QUFDSTs7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVlE7O0FBYVo7QUFDQTtBQUNLO0FBQ0c7QUFDQTtBQUNBO0FBQ0E7QUFDSjtBQUVJOztBQUVKO0FBQ0M7QUFFSjs7QUE5QkkiLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgc2V0UHJvcGVydHk6IGZ1bmN0aW9uKCl7XHJcbiAgIHZhciB1c2VyRGF0YSA9IHtcclxuICAgICAgICBuYW1lOiAnVHJhY2VyJyxcclxuICAgICAgICBsZXZlbDogMSxcclxuICAgICAgICBnb2xkOiAxMDAsXHJcbiAgICAgICAgcGh5c2ljYWxTdHJlbmd0aDogMTAwLFxyXG4gICAgICAgIG1vb2Q6IDEwMCxcclxuICAgICAgICBsb2dpYzogMTAwLFxyXG4gICAgICAgIGxhbmd1YWdlOiAxMDAsXHJcbiAgICAgICAgdGVhbTogMTAwLFxyXG4gICAgICAgIHdvcms6ICd3dScsXHJcbiAgICAgICAgc3Rvcnk6IDEsXHJcbiAgICAgICAgY2FyOiAnd3UnLFxyXG4gICAgICAgIGhvdXNlOiAnd3UnLFxyXG4gICAgICAgIHN0cm95MTogMSxcclxuICAgICAgICBzdHJveTI6IDEsXHJcbiAgICAgICAgY2VydGlmaWNhdGU6e1xyXG4gICAgICAgICAgICB3b3JrMTogJ3dvcmsxJyxcclxuICAgICAgICAgICAgd29yazI6ICd3b3JrMicsXHJcbiAgICAgICAgICAgIHdvcmszOiAnd29yazMnXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgdmFyIGJhaWR1X2RldmVsb3BlciA9IHtcclxuICAgICAgICBuYW1lOiAnVHJhY2VyJyxcclxuICAgICAgICByYXRlOiAyLFxyXG4gICAgICAgIHNhbGFyeTogMTAwMDBcclxuICAgIH07XHJcblxyXG4gICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyRGF0YScsIEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIuaMiemSruaMieS4i1wiKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gZnVuY3Rpb24gcm5kKG1pbiwgbWF4KSB7ICAgICByZXR1cm4gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSoobWF4IC0gbWluICsgMSkgKyBtaW4pOyAgIH0gXHJcbiAgICBybmQ6IGZ1bmN0aW9uKG1pbixtYXgpe1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludChNYXRoLnJhbmRvbSgpKihtYXggLSBtaW4gKyAxKSArIG1pbik7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBjb250YWluczpmdW5jdGlvbihhLG9iail7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhW2ldID09IG9iaikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgam9iaHVudGluZzogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgY29tcGFueTEgPSBbJ3RlbmNlbnQnLCcgTWljcm9zb2Z0JywnQWxpYmFiYScsJ2FwcGxlJ107XHJcbiAgICAgICAgdmFyIGNvbXBhbnkyID0gWydqZCcsJ25ldGVhc3knLCdjdHJpcCcsJ3N1bmluZycsJ3NvaHUnLCdzaW5hJywnbGVzaGknLCdkaWRpJywnanVyZW4nLCd4aWFvbWknXTsgLy9jdHJpcHhpZWNoZW5n5pC656iLXHJcbiAgICAgICAgdmFyIGNvbXBhbnkzID0gWydlYXN0bW9uZXknLCczNjAnLCd3ZWlwaW5odWknLCdtZWl0dWFuJywneW91a3UnLCdraW5nc29mdCcsJ3NoZW5nZGEnXHJcbiAgICAgICAgLCd4dW5sZWknLCdiYW9mZW5nJywnZGFuZ2RhbmcnLCdndW9tZWknLCd3YW5tZWknLCdzb3VmYW5nJywnbGlhbmppYScsJ3hpbmRvbmdmYW5nJywnanVtZWknXHJcbiAgICAgICAgLCdxaWNoZXpoaWppYScsJ3F1bmEnLCdzaGlqaWh1bGlhbicsJ2ppbnJpdG91dGlhbyddO1xyXG4gICAgICAgIHZhciBqb2IgPSBbXCJiYWlkdV9kZXZlbG9wZXJcIixcImZlbmdodWFfZGV2ZWxvcGVyXCIsXCJhbGlfZGV2ZWxvcGVyXCIsXCJ0ZW5hbnRfZGV2ZWxvcGVyXCIsXCJnb25nZnVfZGV2ZWxvcGVyXCJdO1xyXG4gICAgICAgIHZhciBqb2JfamlzaHUgPSBbJ3FpYW50YWlzaGVqaScsJ21laXNodXNoZWppJywnaG91dGFpc2hlamknLCd3YW5nbHVvZ3VhbmxpJywnY2hhbnBpbnpodWxpJywnY2hhbnBpbmppbmdsaScsJ2ppc2h1em9uZ2ppYW4nXTtcclxuICAgICAgICB2YXIgam9iX3JlbmxpID0gWydyZW5zaGl6aHVhbnl1YW4nLCdyZW5zaGl6aHVsaScsJ3hpbmd6aGVuZ3podWxpJywneGluZ3poZW5nemh1YW55dWFuJywncmVuc2hpamluZ2xpJywneGluZ3poZW5namluZ2xpJywncmVubGl6aXl1YW56b25namlhbiddO1xyXG4gICAgICAgIHZhciBqb2JfeGlhb3Nob3UgPSBbJ3hpYW9zaG91ZGFpYmlhbycsJ3NoaWNoYW5nZGlhb2NoYScsJ3hpYW9zaG91Z3V3ZW4nLCd4aWFvc2hvdXpodWxpJ107XHJcbiAgICAgICAgdmFyIGFycl9qb2IgPSBbXTtcclxuICAgICAgICB2YXIgYXJyX3poaXdlaSA9IFtdO1xyXG4gICAgICAgIHZhciBqb2JfY29tcGFueSA9IGNvbXBhbnkxLmNvbmNhdChjb21wYW55MikuY29uY2F0KGNvbXBhbnkzKTtcclxuICAgICAgICB2YXIgam9iX3poaXdlaSA9IGpvYl9qaXNodS5jb25jYXQoam9iX3JlbmxpKS5jb25jYXQoam9iX3hpYW9zaG91KTtcclxuICAgICAgICB3aGlsZShhcnJfam9iLmxlbmd0aCA8IDMpe1xyXG4gICAgICAgICAgICB2YXIgcmFuZCA9IHRoaXMucm5kKDAsam9iX2NvbXBhbnkubGVuZ3RoKTtcclxuICAgICAgICAgICAgdmFyIHIgPSBqb2JfY29tcGFueVtyYW5kXTtcclxuICAgICAgICAgICAgaWYodGhpcy5jb250YWlucyhhcnJfam9iLCByKSl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBhcnJfam9iLnB1c2gocik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUoYXJyX3poaXdlaS5sZW5ndGggPCAzKXtcclxuICAgICAgICAgICAgdmFyIHJhbmRfemhpd2VpID0gdGhpcy5ybmQoMCxqb2Jfemhpd2VpLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHZhciByX3poaXdlaSA9IGpvYl96aGl3ZWlbcmFuZF96aGl3ZWldO1xyXG4gICAgICAgICAgICBpZih0aGlzLmNvbnRhaW5zKGFycl96aGl3ZWksIHJfemhpd2VpKSl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBhcnJfemhpd2VpLnB1c2gocl96aGl3ZWkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcih2YXIgaj0wO2o8MztqKyspIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXJyX2pvYltqXSsnXycrYXJyX3poaXdlaVtqXSk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHNlbGVjdEpvYjogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdXNlckRhdGEgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckRhdGEnKSk7XHJcbiAgICAgICAgdmFyIHNlbGVjdGpvYiA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd1c2VyZGF0YTonK3VzZXJEYXRhLm5hbWUpXHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdGpvYjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIGdldFByb3BlcnR5OiBmdW5jdGlvbigpe1xyXG4gICAgICAgdmFyIHVzZXJEYXRhID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJEYXRhJykpO1xyXG4gICAgICAgY29uc29sZS5sb2coJ3VzZXJkYXRhOicrdXNlckRhdGEuY2VydGlmaWNhdGUud29yazEpXHJcbiAgICAgICBjb25zb2xlLmxvZygndXNlcmRhdGE6Jyt1c2VyRGF0YS5jZXJ0aWZpY2F0ZS53b3JrMilcclxuICAgICAgIGNvbnNvbGUubG9nKCd1c2VyZGF0YTonK3VzZXJEYXRhLmNlcnRpZmljYXRlLndvcmszKVxyXG4gICAgICAgY29uc29sZS5sb2coXCLmjInpkq7mjInkuItcIilcclxuICAgIH1cclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIHRvU2NlbmU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJ3ZWJcIilcclxuICAgIH1cclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIHRvU2NlbmU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJleHRcIilcclxuICAgIH1cclxuXHJcbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAvLyB9LFxyXG59KTtcclxuIiwiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLCAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIC4uLlxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cclxuICAgIHRvU2NlbmU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJnb25nenVvc2hpXCIpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiIsImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICB0b1NjZW5lOiBmdW5jdGlvbigpe1xyXG4gICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaG9tZVwiKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgdG9TY2VuZTogZnVuY3Rpb24oKXtcclxuICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1hcFwiKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHdpbmRvdy5HbG9iYWwgPSB7XHJcbiAgICAgICAgam9ic2VsZWN0OiBudWxsLFxyXG4gICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBcclxuICAgICBzZXRQcm9wZXJ0eTogZnVuY3Rpb24oKXtcclxuICAgdmFyIHVzZXJEYXRhID0ge1xyXG4gICAgICAgIG5hbWU6ICdUcmFjZXInLFxyXG4gICAgICAgIGxldmVsOiAxLFxyXG4gICAgICAgIGdvbGQ6IDEwMCxcclxuICAgICAgICBwaHlzaWNhbFN0cmVuZ3RoOiAxMDAsXHJcbiAgICAgICAgbW9vZDogMTAwLFxyXG4gICAgICAgIGxvZ2ljOiAxMDAsXHJcbiAgICAgICAgbGFuZ3VhZ2U6IDEwMCxcclxuICAgICAgICB0ZWFtOiAxMDAsXHJcbiAgICAgICAgd29yazogJ3d1JyxcclxuICAgICAgICBzdG9yeTogMSxcclxuICAgICAgICBjYXI6ICd3dScsXHJcbiAgICAgICAgaG91c2U6ICd3dScsXHJcbiAgICAgICAgc3Ryb3kxOiAxLFxyXG4gICAgICAgIHN0cm95MjogMSxcclxuICAgICAgICBjZXJ0aWZpY2F0ZTp7XHJcbiAgICAgICAgICAgIHdvcmsxOiAnd29yazEnLFxyXG4gICAgICAgICAgICB3b3JrMjogJ3dvcmsyJyxcclxuICAgICAgICAgICAgd29yazM6ICd3b3JrMydcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB2YXIgYmFpZHVfZGV2ZWxvcGVyID0ge1xyXG4gICAgICAgIG5hbWU6ICdUcmFjZXInLFxyXG4gICAgICAgIHJhdGU6IDIsXHJcbiAgICAgICAgc2FsYXJ5OiAxMDAwMFxyXG4gICAgfTtcclxuXHJcbiAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJEYXRhJywgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKTtcclxuICAgIGNvbnNvbGUubG9nKFwi5oyJ6ZKu5oyJ5LiLXCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBmdW5jdGlvbiBybmQobWluLCBtYXgpIHsgICAgIHJldHVybiBwYXJzZUludChNYXRoLnJhbmRvbSgpKihtYXggLSBtaW4gKyAxKSArIG1pbik7ICAgfSBcclxuICAgIHJuZDogZnVuY3Rpb24obWluLG1heCl7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KE1hdGgucmFuZG9tKCkqKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGNvbnRhaW5zOmZ1bmN0aW9uKGEsb2JqKXtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGFbaV0gPT0gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBqb2JodW50aW5nOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBjb21wYW55MSA9IFsndGVuY2VudCcsJyBNaWNyb3NvZnQnLCdBbGliYWJhJywnYXBwbGUnXTtcclxuICAgICAgICB2YXIgY29tcGFueTIgPSBbJ2pkJywnbmV0ZWFzeScsJ2N0cmlwJywnc3VuaW5nJywnc29odScsJ3NpbmEnLCdsZXNoaScsJ2RpZGknLCdqdXJlbicsJ3hpYW9taSddOyAvL2N0cmlweGllY2hlbmfmkLrnqItcclxuICAgICAgICB2YXIgY29tcGFueTMgPSBbJ2Vhc3Rtb25leScsJzM2MCcsJ3dlaXBpbmh1aScsJ21laXR1YW4nLCd5b3VrdScsJ2tpbmdzb2Z0Jywnc2hlbmdkYSdcclxuICAgICAgICAsJ3h1bmxlaScsJ2Jhb2ZlbmcnLCdkYW5nZGFuZycsJ2d1b21laScsJ3dhbm1laScsJ3NvdWZhbmcnLCdsaWFuamlhJywneGluZG9uZ2ZhbmcnLCdqdW1laSdcclxuICAgICAgICAsJ3FpY2hlemhpamlhJywncXVuYScsJ3NoaWppaHVsaWFuJywnamlucml0b3V0aWFvJ107XHJcbiAgICAgICAgdmFyIGpvYiA9IFtcImJhaWR1X2RldmVsb3BlclwiLFwiZmVuZ2h1YV9kZXZlbG9wZXJcIixcImFsaV9kZXZlbG9wZXJcIixcInRlbmFudF9kZXZlbG9wZXJcIixcImdvbmdmdV9kZXZlbG9wZXJcIl07XHJcbiAgICAgICAgdmFyIGpvYl9qaXNodSA9IFsncWlhbnRhaXNoZWppJywnbWVpc2h1c2hlamknLCdob3V0YWlzaGVqaScsJ3dhbmdsdW9ndWFubGknLCdjaGFucGluemh1bGknLCdjaGFucGluamluZ2xpJywnamlzaHV6b25namlhbiddO1xyXG4gICAgICAgIHZhciBqb2JfcmVubGkgPSBbJ3JlbnNoaXpodWFueXVhbicsJ3JlbnNoaXpodWxpJywneGluZ3poZW5nemh1bGknLCd4aW5nemhlbmd6aHVhbnl1YW4nLCdyZW5zaGlqaW5nbGknLCd4aW5nemhlbmdqaW5nbGknLCdyZW5saXppeXVhbnpvbmdqaWFuJ107XHJcbiAgICAgICAgdmFyIGpvYl94aWFvc2hvdSA9IFsneGlhb3Nob3VkYWliaWFvJywnc2hpY2hhbmdkaWFvY2hhJywneGlhb3Nob3VndXdlbicsJ3hpYW9zaG91emh1bGknXTtcclxuICAgICAgICB2YXIgYXJyX2pvYiA9IFtdO1xyXG4gICAgICAgIHZhciBhcnJfemhpd2VpID0gW107XHJcbiAgICAgICAgdmFyIGpvYl9jb21wYW55ID0gY29tcGFueTEuY29uY2F0KGNvbXBhbnkyKS5jb25jYXQoY29tcGFueTMpO1xyXG4gICAgICAgIHZhciBqb2Jfemhpd2VpID0gam9iX2ppc2h1LmNvbmNhdChqb2JfcmVubGkpLmNvbmNhdChqb2JfeGlhb3Nob3UpO1xyXG4gICAgICAgIEdsb2JhbC5qb2JzZWxlY3QgPSBbXTtcclxuICAgICAgICB3aGlsZShhcnJfam9iLmxlbmd0aCA8IDMpe1xyXG4gICAgICAgICAgICB2YXIgcmFuZCA9IHRoaXMucm5kKDAsam9iX2NvbXBhbnkubGVuZ3RoKTtcclxuICAgICAgICAgICAgdmFyIHIgPSBqb2JfY29tcGFueVtyYW5kXTtcclxuICAgICAgICAgICAgaWYodGhpcy5jb250YWlucyhhcnJfam9iLCByKSl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBhcnJfam9iLnB1c2gocik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZm9yKHZhciBnPTA7ZzwzO2crKykgXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnYXJyX2pvYjonK2Fycl9qb2JbZ10pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBcclxuICAgICAgICB3aGlsZShhcnJfemhpd2VpLmxlbmd0aCA8IDMpe1xyXG4gICAgICAgICAgICB2YXIgcmFuZF96aGl3ZWkgPSB0aGlzLnJuZCgwLGpvYl96aGl3ZWkubGVuZ3RoKTtcclxuICAgICAgICAgICAgdmFyIHJfemhpd2VpID0gam9iX3poaXdlaVtyYW5kX3poaXdlaV07XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY29udGFpbnMoYXJyX3poaXdlaSwgcl96aGl3ZWkpKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGFycl96aGl3ZWkucHVzaChyX3poaXdlaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZm9yKHZhciBoPTA7aDwzO2grKykgXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnYXJyX3poaXdlaTonK2Fycl96aGl3ZWlbaF0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBcclxuICAgICAgICBmb3IodmFyIGo9MDtqPDM7aisrKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBHbG9iYWwuam9ic2VsZWN0LnB1c2goYXJyX2pvYltqXSsnXycrYXJyX3poaXdlaVtqXSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKEdsb2JhbC5qb2JzZWxlY3Rbal0pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhHbG9iYWwuam9ic2VsZWN0Lmxlbmd0aCk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHNlbGVjdEpvYjogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgdXNlckRhdGEgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckRhdGEnKSk7XHJcbiAgICAgICAgdmFyIHNlbGVjdGpvYiA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd1c2VyZGF0YTonK3VzZXJEYXRhLm5hbWUpXHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdGpvYjtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHRvU2NlbmU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5qb2JodW50aW5nKCk7XHJcbiAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJ5aW5ncGluXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iLCJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXHJcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgIHZhciBsYWJlbDEgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbGFiY1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICB2YXIgdGV4dCA9ICdzdGFydGVkJztcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobGFiZWwxKTtcclxuICAgICAgICAgICAgLy8gQ2hhbmdlIHRoZSB0ZXh0IGluIExhYmVsIENvbXBvbmVudFxyXG4gICAgICAgICAgICBsYWJlbDEuc3RyaW5nID0gdGV4dDtcclxuICAgICAgICBmb3IodmFyIGo9MDtqPDM7aisrKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBsID0gJ2NjLmxhYmVsJytqKzFcclxuICAgICAgICAgICBcclxuICAgICAgICAvLyAgY29uc29sZS5sb2coR2xvYmFsLmpvYnNlbGVjdFtqXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcblxyXG4gICAgLy8gfSxcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
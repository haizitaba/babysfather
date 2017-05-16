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
        var arr = [];
        while (arr.length < 3) {
            var rand = this.rnd(0, job.length);
            if (this.contains(arr, rand)) {} else {
                arr.push(rand);
            }
        }
        for (var j = 0; j < arr.length; j++) {
            var i = j + 1;
            console.log(job[i]);
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
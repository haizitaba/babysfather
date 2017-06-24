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
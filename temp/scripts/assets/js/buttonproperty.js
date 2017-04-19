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
            gold: 100
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
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
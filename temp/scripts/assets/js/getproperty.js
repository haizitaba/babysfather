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
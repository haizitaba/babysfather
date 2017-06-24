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
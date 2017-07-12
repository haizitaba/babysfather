"use strict";
cc._RF.push(module, 'c127cw84/9Np4BflqUBwIaS', 'workLoad');
// js/workLoad.js

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
    onLoad: function onLoad() {
        var label1 = cc.find("Canvas/BtGongsi1/Label1").getComponent(cc.Label);
        var label2 = cc.find("Canvas/BtGongsi2/Label2").getComponent(cc.Label);
        var label3 = cc.find("Canvas/BtGongsi3/Label3").getComponent(cc.Label);

        // Change the text in Label Component
        label1.string = Global.jobselect[0];
        label2.string = Global.jobselect[1];
        label3.string = Global.jobselect[2];
    }

});

cc._RF.pop();
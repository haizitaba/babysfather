"use strict";
cc._RFpush(module, 'f2ee9pCuClBBKAcUq1TZsa0', 'setProperty');
// js\setProperty.js

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
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        clickEventHandler.component = "setProperty"; //这个是代码文件名
        clickEventHandler.handler = "callback";
        clickEventHandler.customEventData = "foobar";

        var button = node.getComponent(cc.Button);
        button.clickEvents.push(clickEventHandler);
    },

    callback: function callback(event, customEventData) {
        //这里 event 是一个 Touch Event 对象，你可以通过 event.target 取到事件的发送节点
        var node = event.target;
        var button = node.getComponent(cc.Button);
        //这里的 customEventData 参数就等于你之前设置的 "foobar"
        userData = {
            name: 'Tracer',
            level: 1,
            gold: 100
        };

        cc.sys.localStorage.setItem('userData', JSON.stringify(userData));
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
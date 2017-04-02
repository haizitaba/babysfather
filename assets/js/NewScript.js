cc.Class({
    extends: cc.Component,

    properties: {
          anim:cc.Animation
    },

    // use this for initialization
    playRun:function(){
        this.anim.play('item')
    }



    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

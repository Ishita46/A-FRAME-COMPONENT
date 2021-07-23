AFRAME.registerComponent("move-box", {
    schema: {
        moveX: {type: "number", default: -5}
    },

    tick: function () {
        this.data.moveX = this.data.moveX + 0.04

        var pos = this.el.getAttribute("position")
        pos.x = this.data.moveX

        this.el.setAttribute("position", {x:pos.x, y:pos.y, z:pos.z})
    }
});

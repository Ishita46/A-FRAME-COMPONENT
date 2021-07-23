AFRAME.registerComponent("rotate-box", {
    schema: {
        rotateX: {type: "number", default: 4}
    },

    tick: function () {
        this.data.rotateX = this.data.rotateX + 4

        var rotate = this.el.getAttribute("rotation")
        rotate.x = this.data.rotateX

        this.el.setAttribute("rotation", {x:rotate.x, y:rotate.y, z:rotate.z})
    }
});

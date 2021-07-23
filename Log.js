// Registering component in log-component.js
AFRAME.registerComponent('log', {
    schema: {
      message: {type: 'string', default: "Hello, I am Ishita!"}
    },

    init: function () {
        console.log(this.data.message);
      }
  });
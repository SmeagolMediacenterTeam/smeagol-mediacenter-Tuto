GollumJS.NS(function() {

    this.TutoPlugin = new GollumJS.Class({

        Extends: Server.Plugin,

        enable: function (done) {
            console.log("Enable Tuto plugin"); // Activation du plugin Tuto

            // Must be call on the end enable process
            // Doit être appelé à la fin de l'execution de l'activation
            done();
        },

        disable: function (done) {
            console.log("Disable Tuto plugin"); // Activation du plugin Tuto

            // Must be call on the end disable process
            // Doit être appelé à la fin de l'execution de la desactivation
            done();
        }

    });

});
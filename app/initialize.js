import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import store from './src/state/store';
import routes from './src/config/routes';

//
// Vue extensions
// Here we tell Vue that we want to add extra functionality to the application.
//

Vue.use(VueRouter);
Vue.use(VueResource);

// 
// Enviromnment
// 

const environment = process.env.NODE_ENV;

// 
// Configure Vue
// Here we will configure Vue based on the environment we are running in.
// 

Vue.config.debug = (environment === 'development');
Vue.config.devtools = (environment === 'development');

// 
// Application
// Here we will create the application instance.
// 

let application = {
    store
};

// 
// Router
// Here we will create the router instance.
// 

let router = new VueRouter({
    history: true
});

// 
// Router mapping.
// Here we will tell VueRouter what routes the application will be using.
// 

router.map(routes);

// 
// Start the application
// 

router.start(application, '#main-container', function() {
    
    if (window) {
        window.App = router.app;
    }

});
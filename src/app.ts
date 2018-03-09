/// <reference path="./declarations/_fix.d.ts" />

import { MainComponent } from './components/index'

module app {

    export class Module {
        
        app: ng.IModule;
        static $inject = ["ngRoute"]
        
        constructor(name:string, modules: Array<string> ){
            this.app = angular.module(name, modules);
        }
        
        addController( name: string, controller ){
            this.app.controller( name, controller )
        }

        addService(name: string, serviceFunc ) {
            this.app.service( name, serviceFunc );

        }        

        addComponent(name: string, component){
            this.app.component(name, component);
        }

        config(){
            this.app.config([ "$routeProvider", function($routeProvider){

                // ROUTING
                $routeProvider
                    .when('/', {
                        template: "<div>Page 1<main-component></main-component></div>"
                    })
                    .when('/page', {
                        template: "<div>Page 2<main-component></main-component></div>"
                    })

            }])
        }

    }
}


module MyTestApp {
    var myApp = new app.Module('myApp', ["ngRoute"]);
    myApp.config();
    myApp.addComponent('mainComponent', new MainComponent);
}


// TABS
// tabs-component holding tab-component


// TABS
/*
- Get width container div
- ng-repeat for items in array, creating tab for each
- Full length of all tabs, overflow-x hidden?

*/ 

// TAB
/*
- 

*/
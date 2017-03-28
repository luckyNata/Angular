"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var data_service_1 = require("./shared/data.service");
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var main_service_1 = require("./shared/main.service");
var app_component_1 = require('./app.component');
var title_component_1 = require('./title/title.component');
var person_component_1 = require('./person/person.component');
var experience_component_1 = require('./experience/experience.component');
var buttons_component_1 = require('./buttons/buttons.component');
var wrapper_component_1 = require('./wrapper/wrapper.component');
var todo_list_component_1 = require('./todoList/todo-list.component');
var knowledge_component_1 = require("./knowledge/knowledge.component");
var router_1 = require('@angular/router');
var app_routing_1 = require('./app.routing');
var person_qualities_component_1 = require("./person/person.qualities.component");
var person_graduation_component_1 = require("./person/person.graduation.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(data_service_1.InMemoryDb), router_1.RouterModule, app_routing_1.routing],
            declarations: [app_component_1.AppComponent, title_component_1.TitleComponent, person_component_1.PersonComponent, knowledge_component_1.KnowledgeComponent, buttons_component_1.ButtonsComponent,
                experience_component_1.ExperienceComponent, wrapper_component_1.WrapperComponent, person_qualities_component_1.PersonQualitiesComponent, person_graduation_component_1.PersonGraguationComponent,
                todo_list_component_1.TodoListComponent
            ],
            providers: [main_service_1.MainService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
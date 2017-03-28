"use strict";
var router_1 = require('@angular/router');
var person_routes_1 = require('./person/person.routes');
var person_component_1 = require('./person/person.component');
var knowledge_component_1 = require('./knowledge/knowledge.component');
var experience_component_1 = require('./experience/experience.component');
var appRoutes = [
    { path: 'about', component: person_component_1.PersonComponent },
    { path: 'about', component: person_component_1.PersonComponent, children: person_routes_1.PERSON_ROUTES },
    { path: 'knowledge', component: knowledge_component_1.KnowledgeComponent },
    { path: 'experience', component: experience_component_1.ExperienceComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
 // http://stackoverflow.com/questions/26223864/meteor-iron-router-to-create-breadcrumbs
 // Template.tBreadcrumbs.path = function() {
 //   return Router.current().path.split('/');
 // };

 Template.tBreadcrumbs.helpers({
   intermediateRoutes: function() {
     if (!Router.current()) {
       return;
     }
     // get rid of both the first item which is always assumed to be "home",
     // and the last item which we won't display as a link
     // peh2 - router didn't work so I put console.log(routes)
     //  and found that I need to kill the detail routes and make sure
     //  the breadcrumb hierarchy is correct (leagues, regions, seasons... etc)
     var routes = Router.parentRoutes().slice(1, -1);
     return _.map(routes, function(route) {
       // extract name and label properties from the route
       return {
         name: route.getName(),
         label: route.options.label
       };
     });
   },
   currentRouteLabel: function() {
     // return the label property from the current route options
     return Router.current() && Router.current().route.options.label;
   }
 });

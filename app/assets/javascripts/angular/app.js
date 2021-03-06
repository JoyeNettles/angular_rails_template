angular.module("app.controllers", []);
angular.module("app.directives", []);
var app = angular.module("app", ["app.controllers", "app.directives", "ngRoute", "templates"]);
app.config(function ($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = "csrftoken";
    $httpProvider.defaults.xsrfHeaderName = "X-CSRFToken";
});

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider.
        when("/", {
            templateUrl: "index.html",
            controller: "IndexController"
        })
}]);

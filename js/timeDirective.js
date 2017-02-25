app.directive('showTime', function ()
{
    return {
        restrict: 'E',
        template: '<div> The current time is {{time}}</div>',
        // scope: {},
        link: function (scope, element, attr)
        {
            scope.time = new Date().toString();
        }
    };
});
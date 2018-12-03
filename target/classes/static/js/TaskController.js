/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var TaskControllerModule = (function (){

    var register = function (user, passwd) {
        var user = {
            "username": user,
            "password": passwd
        };
        var callback = {
            onSuccess: function () {
                alert("User "+ user.username+" has been registered");
            },
            onFailed: function (exception) {
                console.log(exception);
                alert("There is a problem with our servers. We apologize for the inconvince, please try again later");
            }
        };
        RestControllerModule.postUser(user,callback);
    };

    return {
        register: register
    };

})();

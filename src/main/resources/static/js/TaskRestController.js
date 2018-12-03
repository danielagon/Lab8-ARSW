/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var RestControllerModule = (function () {

    var postUser = function (user, callback) {
        axios.post('/users/sign-up', user)
            .then(function (){
                callback.onSuccess();
            })
            .catch(function (error) {
                callback.onFailed(error);
                console.log(error);
            });
    };

    return {
        postUser: postUser
    };
})();
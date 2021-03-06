function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  
  var stayConnected;
  function statusChangeCallback(response) {
    console.log('Facebook login status changed.');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      sessionStorage.setItem(response.status, 'connected');

      if (sessionStorage.getItem(response.status) === 'connected') {
        // Logged into your app and Facebook.
        $('#myModal').modal('hide');
        console.log('Successfully logged in with Facebook');
        FB.api('/me?fields=name,first_name', getName);
      }
    }
  }

  function getName(response) {
    var myName = response.name; 
    sessionStorage.setItem('myName', myName);
    document.getElementById('name').innerHTML = sessionStorage.getItem('myName');
    //$('#name').innerHTML = myName;
    //document.getElementById('name').innerHTML = myName;
  }
  document.getElementById('name').innerHTML = sessionStorage.getItem('myName');


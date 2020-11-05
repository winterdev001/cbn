var app = angular.module('myApp', ['angularUtils.directives.dirPagination']);

// login page
app.controller('loginCtlr', function ($scope, $http, $window) {
  $scope.login = () => {
    if ($scope.username == null || $scope.password == null) {
      swal({
        title: "Fill all fields first."
      });
    }
    else {
      $http({
        method: 'POST',
        url: 'api/auth.php',
        data: {
          'username': $scope.username,
          'password': $scope.password
        }
      }).then((res) => {
        if (res.data == 'done') {
          $window.location.href = "admin.html";
          var auth = 1;
          localStorage.setItem('auth', auth);
        } else {
          swal({
            title: res.data,
            icon: 'warning'
          });
        }
      });
    }
  }
});

// index page
app.controller('indexCtlr', function ($scope, $http, $window) {
  $scope.authenticated = () => {
    var auth = localStorage.getItem('auth');
    if (auth == null || auth == 0) {
      $scope.admin_link = false;
    } else {
      $scope.admin_link = true;
    }
  }

  $scope.authenticated();

  $scope.bookAppointment = () => {
    if ($scope.client_name == null || $scope.client_email == null || $scope.client_service == null) {
      swal({
        title: "Ooops, fill all fields first.",
        icon: 'warning'
      });
    } else {

      $http({
        method: 'POST',
        url: 'api/bookAppointment.php',
        data: {
          'name': $scope.client_name,
          'email': $scope.client_email,
          'phone': $scope.client_phone,
          'service': $scope.client_service
        }
      }).then((response) => {
        console.log(response.data);
        if (response.data == "done") {
          console.log(response.data)
          swal({
            title: 'Data sent successfully! ',
            text: 'Other details to be communicated.',
            icon: 'success',
            buttons: true
          })
            .then((result) => {
              if (result) {
                $window.location.reload();
              } else {
                $window.location.reload();
              }
            });
          // console.log(reponse.data)
        } else {
          swal({
            title: response.data
          });
        }
      });
    }

  }
});

// about page
app.controller('aboutCtlr', function ($scope, $http, $window) {
  $scope.authenticated = () => {
    var auth = localStorage.getItem('auth');
    if (auth == null || auth == 0) {
      $scope.admin_link = false;
    } else {
      $scope.admin_link = true;
    }
  }

  $scope.authenticated();

  $scope.bookAppointment = () => {

    if ($scope.client_name == null || $scope.client_email == null || $scope.client_service == null) {
      swal({
        title: "Ooops, fill all fields first.",
        icon: 'warning'
      });
    }
    else {

      $http({
        method: 'POST',
        url: 'api/bookAppointment.php',
        data: {
          'name': $scope.client_name,
          'email': $scope.client_email,
          'phone': $scope.client_phone,
          'service': $scope.client_service
        }
      }).then((response) => {
        console.log(response.data);
        if (response.data == "done") {
          console.log(response.data)
          swal({
            title: 'Data sent successfully! ',
            text: 'Other details to be communicated.',
            icon: 'success',
            buttons: true
          })
            .then((result) => {
              if (result) {
                $window.location.reload();
              } else {
                $window.location.reload();
              }
            });
          // console.log(reponse.data)
        } else {
          swal({
            title: response.data
          });
        }
      });
    }

  }
});

// contact page
app.controller('contactCtlr', function ($scope, $http, $window) {
  $scope.authenticated = () => {
    var auth = localStorage.getItem('auth');
    if (auth == null || auth == 0) {
      $scope.admin_link = false;
    } else {
      $scope.admin_link = true;
    }
  }

  $scope.authenticated();

  $scope.bookAppointment = () => {

    if ($scope.client_name == null || $scope.client_email == null || $scope.client_service == null) {
      swal({
        title: "Ooops, fill all fields first.",
        icon: 'warning'
      });
    }
    else {

      $http({
        method: 'POST',
        url: 'api/bookAppointment.php',
        data: {
          'name': $scope.client_name,
          'email': $scope.client_email,
          'phone': $scope.client_phone,
          'service': $scope.client_service
        }
      }).then((response) => {
        console.log(response.data);
        if (response.data == "done") {
          console.log(response.data)
          swal({
            title: 'Data sent successfully! ',
            text: 'Other details to be communicated.',
            icon: 'success',
            buttons: true
          })
            .then((result) => {
              if (result) {
                $window.location.reload();
              } else {
                $window.location.reload();
              }
            });
          // console.log(reponse.data)
        } else {
          swal({
            title: response.data
          });
        }
      });
    }
  }

  $scope.sendMessage = () => {

    if ($scope.m_name == null || $scope.m_email == null || $scope.message == null) {
      swal({
        title: "Ooops, fill all fields first.",
        icon: 'warning'
      });
    }
    else {

      $http({
        method: 'POST',
        url: 'api/addMessage.php',
        data: {
          'name': $scope.m_name,
          'email': $scope.m_email,
          'message': $scope.message
        }
      }).then((response) => {
        console.log(response.data);
        if (response.data == "done") {
          // console.log(response.data)
          swal({
            title: 'Message sent successfully! ',
            text: 'Other details to be communicated.',
            icon: 'success',
            buttons: true
          })
            .then((result) => {
              if (result) {
                $window.location.reload();
              } else {
                $window.location.reload();
              }
            });
          // console.log(reponse.data)
        } else {
          swal({
            title: response.data
          });
        }
      });
    }

  }

});

// faq page
app.controller('faqCtlr', function ($scope, $http, $window) {
  $scope.authenticated = () => {
    var auth = localStorage.getItem('auth');
    if (auth == null || auth == 0) {
      $scope.admin_link = false;
    } else {
      $scope.admin_link = true;
    }
  }

  $scope.authenticated();

  $scope.bookAppointment = () => {

    if ($scope.client_name == null || $scope.client_email == null || $scope.client_service == null) {
      swal({
        title: "Ooops, fill all fields first.",
        icon: 'warning'
      });
    }
    else {

      $http({
        method: 'POST',
        url: 'api/bookAppointment.php',
        data: {
          'name': $scope.client_name,
          'email': $scope.client_email,
          'phone': $scope.client_phone,
          'service': $scope.client_service
        }
      }).then((response) => {
        console.log(response.data);
        if (response.data == "done") {
          console.log(response.data)
          swal({
            title: 'Data sent successfully! ',
            text: 'Other details to be communicated.',
            icon: 'success',
            buttons: true
          })
            .then((result) => {
              if (result) {
                $window.location.reload();
              } else {
                $window.location.reload();
              }
            });
          // console.log(reponse.data)
        } else {
          swal({
            title: response.data
          });
        }
      });
    }

  }

});


// services page
app.controller('serviceCtlr', function ($scope, $http, $window) {
  $scope.service1 = true; $scope.service2 = false; $scope.service3 = false; $scope.service4 = false; $scope.service5 = false; $scope.service6 = false; $scope.service7 = false;
  $scope.getService = (service) => {
    if (service == "service1") {
      $scope.service1 = true; $scope.service2 = false; $scope.service3 = false; $scope.service4 = false; $scope.service5 = false; $scope.service6 = false; $scope.service7 = false;
      $('.card-heading').removeClass('active');
      $('.service1').addClass('active');
    } else if (service == "service2") {
      $scope.service1 = false; $scope.service2 = true; $scope.service3 = false; $scope.service4 = false; $scope.service5 = false; $scope.service6 = false; $scope.service7 = false;
      $('.card-heading').removeClass('active');
      $('.service2').addClass('active');
    } else if (service == "service3") {
      $scope.service1 = false; $scope.service2 = false; $scope.service3 = true; $scope.service4 = false; $scope.service5 = false; $scope.service6 = false; $scope.service7 = false;
      $('.card-heading').removeClass('active');
      $('.service3').addClass('active');
    } else if (service == "service4") {
      $scope.service1 = false; $scope.service2 = false; $scope.service3 = false; $scope.service4 = true; $scope.service5 = false; $scope.service6 = false; $scope.service7 = false;
      $('.card-heading').removeClass('active');
      $('.service4').addClass('active');
    } else if (service == "service5") {
      $scope.service1 = false; $scope.service2 = false; $scope.service3 = false; $scope.service4 = false; $scope.service5 = true; $scope.service6 = false; $scope.service7 = false;
      $('.card-heading').removeClass('active');
      $('.service5').addClass('active');
    } else if (service == "service6") {
      $scope.service1 = false; $scope.service2 = false; $scope.service3 = false; $scope.service4 = false; $scope.service5 = false; $scope.service6 = true; $scope.service7 = false;
      $('.card-heading').removeClass('active');
      $('.service6').addClass('active');
    } else if (service == "service7") {
      $scope.service1 = false; $scope.service2 = false; $scope.service3 = false; $scope.service4 = false; $scope.service5 = false; $scope.service6 = false; $scope.service7 = true;
      $('.card-heading').removeClass('active');
      $('.service7').addClass('active');
    }

  }

  $scope.authenticated = () => {
    var auth = localStorage.getItem('auth');
    if (auth == null || auth == 0) {
      $scope.admin_link = false;
    } else {
      $scope.admin_link = true;
    }
  }

  $scope.authenticated();

  $scope.bookAppointment = () => {

    if ($scope.client_name == null || $scope.client_email == null || $scope.client_service == null) {
      swal({
        title: "Ooops, fill all fields first.",
        icon: 'warning'
      });
    }
    else {

      $http({
        method: 'POST',
        url: 'api/bookAppointment.php',
        data: {
          'name': $scope.client_name,
          'email': $scope.client_email,
          'phone': $scope.client_phone,
          'service': $scope.client_service
        }
      }).then((response) => {
        console.log(response.data);
        if (response.data == "done") {
          console.log(response.data)
          swal({
            title: 'Data sent successfully! ',
            text: 'Other details to be communicated.',
            icon: 'success',
            buttons: true
          })
            .then((result) => {
              if (result) {
                $window.location.reload();
              } else {
                $window.location.reload();
              }
            });
          // console.log(reponse.data)
        } else {
          swal({
            title: response.data
          });
        }
      });
    }

  }

});


// admin page
app.controller('adminCtlr', function ($scope, $http, $window) {

  var pageURL = $(location).attr("href");
  // console.log(pageURL);
  $scope.getuser = () => {
    if (pageURL.match("admin").length > 0) {
      $http.get('api/checkUser.php').then((response) => {
        // console.log(response.data)
        if (response.data[0].auth == 0) {
          $window.location.href = "login.html";
        }
      });
    }
  }
  $scope.getuser();


  $scope.appointment = true; $scope.message = false; $scope.settings = false;

  $scope.getLinks = (link) => {
    if (link == "link1") {
      $scope.appointment = true; $scope.message = false; $scope.settings = false;
      $('.card-heading').removeClass('active');
      $('.link1').addClass('active');
    } else if (link == "link2") {
      $scope.appointment = false; $scope.message = true; $scope.settings = false;
      $('.card-heading').removeClass('active');
      $('.link2').addClass('active');
    } else if (link == "link3") {
      $scope.appointment = false; $scope.message = false; $scope.settings = true;
      $('.card-heading').removeClass('active');
      $('.link3').addClass('active');
    }
  }

  $scope.some_appoint = true;
  $scope.no_appoint = false;
  $scope.getAppointments = () => {
    $http.get('api/getAppointments.php').then((response) => {
      if (response.data == 'empty') {
        $scope.empty_appoint = "No appointments yet";
        $scope.some_appoint = false;
        $scope.no_appoint = true;
      } else {
        console.log(response.data)
        $scope.some_appoint = true;
        $scope.no_appoint = false;
        $scope.appointments = response.data;
      }
    });
  }
  $scope.getAppointments();

  $scope.showAppointment = (aid) => {
    $http.get('api/getAppointments.php').then((res) => {
      var appoints = res.data;
      const appointResult = appoints.find(({ id }) => id === aid);
      // console.log(result.id)
      $scope.appoint_name = appointResult.name;
      $scope.appoint_email = appointResult.email
      $scope.appoint_phone = appointResult.phone;
      $scope.appoint_date = appointResult.date;
      $scope.appoint_service = appointResult.service;
      $scope.appoint_status = appointResult.status;
      $scope.appoint_created_at = appointResult.created_at;
      $scope.appoint_id = aid;
      $('#appoint_details').modal('show');
    });
  }

  $scope.deleteAppointment = (aid) => {
    if (aid) {
      swal({
        title: 'Are you sure you want to delete this appointment?',
        icon: 'warning',
        buttons: true
      }).then((res) => {
        if (res) {
          // console.log('yes')
          $http({
            method: 'POST',
            url: 'api/deleteAppointment.php',
            data: {
              id: aid
            }
          }).then((response) => {
            if (response.data == 'done') {
              swal({
                title: 'Appointment deleted successfully!',
                icon: 'success',
                buttons: true
              }).then((result) => {
                if (result) {
                  $window.location.reload();
                } else {
                  $window.location.reload();
                }
              });
            } else {
              swal({
                title: response.data
              });
            }
          });
        }
      });
    }
  }

  $scope.some_mesg = true;
  $scope.no_mesg = false;
  $scope.getMessages = () => {
    $http.get('api/getMessages.php').then((response) => {
      if (response.data == 'empty') {
        $scope.empty_msg = "No messages yet";
        $scope.some_mesg = false;
        $scope.no_mesg = true;
      } else {
        // console.log(response.data)       
        $scope.some_mesg = true;
        $scope.no_mesg = false;
        $scope.messages = response.data;
      }
    });
  }
  $scope.getMessages();

  $scope.userInfo = () => {
    $http.get('api/userInfo.php').then((res) => {
      $scope.username = res.data[0].username;
      $scope.password = res.data[0].password;
      $scope.image = res.data[0].image;
    });
  }
  $scope.userInfo();

  $scope.updateUser = () => {
    // console.log($scope.username, $scope.password)
    if ($scope.username == '' && $scope.password == '') {
      swal({
        title: "Username and password can't be empty."
      });
    } else if ($scope.username == '') {
      swal({
        title: "Username can't be empty."
      });
    } else if ($scope.password == '') {
      swal({
        title: "Password can't be empty."
      });
    } else {
      $http({
        method: 'POST',
        url: 'api/updateUser.php',
        data: {
          'username': $scope.username,
          'password': $scope.password
        }
      }).then((response) => {
        if (response.data == 'done') {
          swal({
            title: 'Profile Updated!.',
            icon: 'success',
            buttons: true
          }).then((result) => {
            if (result) {
              $scope.userInfo();
            }
            $scope.userInfo();
          });
        } else {
          swal({
            title: response.data
          });
        }
      });
    }
  }

  $scope.uploadImage = () => {
    var form_data = new FormData();
    angular.forEach($scope.files, function (file) {
      form_data.append('file', file);
    });
    $http.post('api/upload.php', form_data,
      {
        transformRequest: angular.identity,
        headers: { 'Content-Type': undefined, 'Process-Data': false }
      }).then(function (response) {
        // console.log(response.data);
        if (response != 'File Uploaded But Not Saved' || response != 'Error') {
          swal({
            title: "File uploaded successfully!",
            icon: 'success',
            buttons: true
          }).then((result) => {
            if (result) {
              $scope.userInfo();
            } else {
              $scope.userInfo();
            }
          });
        } else {
          swal({
            title: response,
            icon: 'warning'
          });
        }
      });
  }

  $scope.logout = () => {
    $http.get('api/logout.php').then((response) => {
      if (response.data == 'done') {
        var auth = 0;
        localStorage.setItem('auth', auth);
        $window.location.href = './index.html';
      } else {
        console.log(response.data);
      }
    });
    // console.log('cllicked')
  }

  // navigation
  $scope.authenticated = () => {
    var auth = localStorage.getItem(auth);
    console.log(auth)
    // if()
  }

  $scope.authenticated();

  $scope.bookAppointment = () => {

    if ($scope.client_name == null || $scope.client_email == null || $scope.client_service == null) {
      swal({
        title: "Ooops, fill all fields first.",
        icon: 'warning'
      });
    }
    else {

      $http({
        method: 'POST',
        url: 'api/bookAppointment.php',
        data: {
          'name': $scope.client_name,
          'email': $scope.client_email,
          'phone': $scope.client_phone,
          'service': $scope.client_service
        }
      }).then((response) => {
        console.log(response.data);
        if (response.data == "done") {
          console.log(response.data)
          swal({
            title: 'Data sent successfully! ',
            text: 'Other details to be communicated.',
            icon: 'success',
            buttons: true
          })
            .then((result) => {
              if (result) {
                $window.location.reload();
              } else {
                $window.location.reload();
              }
            });
          // console.log(reponse.data)
        } else {
          swal({
            title: response.data
          });
        }
      });
    }

  }

  $scope.acceptAppointment = (apmt_id) => {
    if (confirm('Do you really want to accept it?')) {
      $http({
        method: 'POST',
        url: 'api/acceptAppointment.php',
        data: {
          id: apmt_id
        }
      }).then((res) => {
        if (res.data == 'done') {
          swal({
            title: 'Status changed.',
            icon: 'success',
            buttons: true
          }).then((result) => {
            if (result) {
              $scope.showAppointment(apmt_id);
            } else {
              $scope.showAppointment(apmt_id);
            }
          });
        } else {
          swla({
            title: res.data
          });
        }
      });
    }
  }

  $scope.rejectAppointment = (apmt_id) => {
    // if (confirm('Do you really want to reject it?')) {
    //   const { value: reason } = await swal({
    //     title: 'Enter a reason',
    //     input: 'text',
    //     inputLabel: 'Reason',
    //     inputPlaceholder: 'Enter your the reason'
    //   })      
      // // if (reason) {
        
      // // }      
      $http({
        method: 'POST',
        url: 'api/rejectAppointment.php',
        data: {
          id: apmt_id,
          reason : reason
        }
      }).then((res) => {
        if (res.data == 'done') {
          swal({
            title: 'Status changed.',
            icon: 'success',
            buttons: true
          }).then((result) => {
            if (result) {
              $scope.showAppointment(apmt_id);
            } else {
              $scope.showAppointment(apmt_id);
            }
          });
        } else {
          swla({
            title: res.data
          });
        }
      });
    }
  }

});

// image uploading
app.directive("fileInput", function ($parse) {
  return {
    link: function ($scope, element, attrs) {
      element.on("change", function (event) {
        var files = event.target.files;
        $parse(attrs.fileInput).assign($scope, element[0].files);
        $scope.$apply();
      });
    }
  }
});

// on image not found
app.directive('onError', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attr) {
      element.on('error', function () {
        element.attr('src', attr.onError);
      })
    }
  }
})


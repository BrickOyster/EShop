$(document).ready(function(){
	   
  // Easing equation based on
  // EaseInOutExpo by Robert Penner (c) 2001
  // robertpenner.com/easing_terms_of_use.html
  
  $.fn.extend( jQuery.easing, {
    eioe: function( ø, t, b, c, d ) {
      if(t==0) return b;
      if(t==d) return b+c;
      if( (t /= d/2) < 1 ) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
      return c/2 * ( -Math.pow( 2, -10 * --t ) + 2 ) + b;
    }
  });
  
  // Toggle disabled
  // http://stackoverflow.com/questions/4702000/jquery-toggle-input-disabled-attribute#comment5189637_4702086
  
  $.fn.toggleDisabled = function() {
    return this.each(function() {
      this.disabled = !this.disabled;
    });
  };
  
  $.fn.toggleAttr = function(a, v1, v2) {
    return this.each(function() {
      var $t = $(this),
          v  = $t.attr(a) === v1 ? v2 : v1;
      $t.attr(a, v)
        });
  };
  
  // Toggle login/register form
  
  $('.register').click(
    function(){
      console.log("Register clicked");
      // Toggle register form and enable inputs
      $('.register-form').slideToggle({
        easing: 'eioe',
        duration: 250
      }).find('input').toggleDisabled();
      
      // Change header
      // Login -> Register
      var $h2 = $('.box h2'),
          headerText = $h2.text() === "Login" 
          ? "Register" 
          : "Login";
      $h2.text(headerText);
      
      // Change submit button value
      // Login -> Register
      $('#submit').toggleAttr('value','Login','Register');
      
      // Change signup link
      // Signup -> Login link
      var $su = $('.register');
      $su.toggleAttr('href','register.htm','login.htm')
        var signupLinkText = $su.text() === "Register!" 
            ? "Login!" 
            : "Register!";
      $su.text(signupLinkText);
      
      // Hide Forgot password link
      $('.forgot-password').toggle();
      
      // Change form action
      // login.php -> register.php
      $('form').toggleAttr('action','login.php','register.php')
        return false;
    }
  );

  var popupprevid = '--';
  $('.navicon').click(
    function() {
      console.log(this.id+popupprevid)
      if(popupprevid !== this.id){
        $('.popup[display="block"]').slideToggle({
          easing: 'eioe',
          duration: 250
        }).toggleAttr('display','block','none');
      }
      
      $('#popon'+ this.id).slideToggle({
        easing: 'eioe',
        duration: 250
      }).toggleAttr('display','block','none');
      popupprevid = this.id;
    }
  );
  
});
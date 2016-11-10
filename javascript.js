$(document).ready(function(){
	

      /*
       * Open the drawer when the menu icon is clicked.
       */
      var menu = document.querySelector('#menuIcon');
      var main = document.querySelector('main');
      var drawer = document.querySelector('#drawer');

      menu.addEventListener('click', function(e) {
        drawer.classList.toggle('open');
        menuIcon.classList.toggle('rotate')
        e.stopPropagation();
      });
      main.addEventListener('click', function() {
        drawer.classList.remove('open');
      });

      var counter = 0;
      
      var startbox = document.querySelector('#startbox');

      function removeHide() {
      	
        startbox.classList.remove('hide');
      };

     
      setTimeout(removeHide, 3000);

});

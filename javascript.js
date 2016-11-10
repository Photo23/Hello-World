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

      //var counter = 0;

      /* 
       * unhides startbox after 3 seconds
       */
      var startbox = document.querySelector('#startbox');
      var photobox = document.querySelector('.photobox');
      var photocontainer = document.querySelector('#photocontainer');

      function removeHide() {
        startbox.classList.remove('hide');
      };

      setTimeout(removeHide, 3000);


      startbox.addEventListener('click', function(){
      		startbox.classList.add('hide');

      		setTimeout(function(){
      			startbox.classList.add('displaynone');
      			photocontainer.classList.remove('displaynone');
      			

      		}, 1000);

      		setTimeout(function(){
      			
      			photocontainer.classList.add('open');
      		}, 2000);
      		


      });

});

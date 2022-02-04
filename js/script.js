
      function scrollToBottom() {
       window.scroll({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth'
       });
      };
     
      function scrollByUnits() {
       window.scrollBy({
        top: 300,
        left: 0,
        behavior: 'smooth'
       });
      };
     
      function scrollToElement() {
       document.querySelector('#test').scrollIntoView({
        behavior: 'smooth'
       });
      };
     
      function scrollToAbout() {
       document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
       });
      };
      function scrollToPortfolio() {
       document.querySelector('#portfolio').scrollIntoView({
        behavior: 'smooth'
       });
      };
      function scrollTocontact() {
       document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
       });
      };
 	  function scrollToTop() {
	   document.querySelector('#home').scrollIntoView({
	    behavior: 'smooth'
	   });
	  };





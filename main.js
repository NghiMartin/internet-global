document.addEventListener('DOMContentLoaded', () => {
  const launchDate = new Date('February 7, 2025 10:00:00').getTime();

  const countdown = function () {
    const presentDate = new Date().getTime(); 
    
    if (presentDate < launchDate) {
      const diffInSeconds = Math.floor((launchDate - presentDate) / 1000);
  
      const days = Math.floor(diffInSeconds / 86400);
  
      let timeValue;
      
      timeValue = diffInSeconds % 86400;
      const hours = Math.floor(timeValue / 3600);
  
      timeValue = timeValue % 3600;
      const minutes = Math.floor(timeValue / 60);
  
      const seconds = timeValue % 60;
  
      document.querySelector('.days').textContent = zeroPadding(days);
      document.querySelector('.hours').textContent = zeroPadding(hours);
      document.querySelector('.minutes').textContent = zeroPadding(minutes);
      document.querySelector('.seconds').textContent = zeroPadding(seconds);
    } else {
      document.querySelector('.days').textContent = zeroPadding(0);
      document.querySelector('.hours').textContent = zeroPadding(0);
      document.querySelector('.minutes').textContent = zeroPadding(0);
      document.querySelector('.seconds').textContent = zeroPadding(0);
      document.querySelector('.caption').textContent = 'Congratulations!!!';
    }
  };
  
  function zeroPadding(time) {
    return time < 10 ? '0' + String(time) : time;
  }
  
  setInterval(countdown, 1000);
  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          const offset = 80; 
          const position = target.offsetTop - offset;
          window.scrollTo({
            top: position,
            behavior: 'smooth' 
          });
        });
      });
      
  });
  
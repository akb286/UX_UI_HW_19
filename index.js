// MENU FUNCTION
  function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }

  // BUTTON FUNCTION
  $(document).ready(function(){
    $(".hover").hover(function(){
      $(this).css("background-color", "pink");
      }, function(){
      $(this).css("background-color", "purple");
    });
  });
  

  // PROGRESS BARS
<<<<<<< Updated upstream
const progressBars = document.querySelectorAll(".progress");
const progressValues = [22, 50, 75, 10, 22, 50, 75, 10]; // Set different progress values for each bar

const changeProgress = (progressBars, progressValues) => {
  progressBars.forEach((progressbar, index) => {
    progressbar.style.width = `${progressValues[index]}%`;
  });
};

/* change progress after 1 second (only for showcase) */
setTimeout(() => changeProgress(progressBars, progressValues), 9000);
=======
  const progressBars = document.querySelectorAll(".progress");
  const progressValues = [22, 50, 75, 10, 22, 50, 75, 10]; // Set different progress values for each bar
  
  const changeProgress = (progressBars, progressValues) => {
    progressBars.forEach((progressbar, index) => {
      progressbar.style.width = `${progressValues[index]}%`;
      progressbar.classList.add('animate-progress'); // Add class to trigger animation
    });
  };
  
  /* change progress after 1 second (only for showcase) */
  setTimeout(() => changeProgress(progressBars, progressValues), 1000);
  
>>>>>>> Stashed changes

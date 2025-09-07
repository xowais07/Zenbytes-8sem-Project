// Handle navigation between pages
function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
  }
  
  // GSAP Animation for Breathing Circle
  gsap.to("#breathe-circle", {
    duration: 5,
    scale: 1.8,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
  
  // Reverse Counting Feature
  let count = 50;
  
  function reverseCount() {
    const countDisplay = document.getElementById('count');
    const interval = setInterval(() => {
      if (count > 0) {
        countDisplay.innerHTML = count;
        count--;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          count++;
          reverseCount();
        }, 500);
      }
    }, 1000);
  }
  
  // Journal Feature
  function saveJournal() {
    const entry = document.getElementById('journal-entry').value;
    if (entry) {
      const previousEntries = document.getElementById('previous-entries');
      const newEntry = document.createElement('div');
      newEntry.classList.add('journal-entry');
      newEntry.textContent = entry;
      previousEntries.appendChild(newEntry);
      document.getElementById('journal-entry').value = '';
    }
  }

  //changes
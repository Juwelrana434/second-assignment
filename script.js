    const openSidebarBtn = document.getElementById("open-sidebar-btn");
    const closeSidebarBtn = document.getElementById("close-sidebar-btn");
    const leftSidebar = document.getElementById("left-sidebar");
    
    openSidebarBtn.addEventListener("click", () => {
        leftSidebar.classList.remove("hidden");
        openSidebarBtn.classList.add("hidden");
        leftSidebar.classList.remove("-translate-x-full"); // Slide in the sidebar
        closeSidebarBtn.classList.remove("hidden"); // Show close button
    });
    
    closeSidebarBtn.addEventListener("click", () => {
        leftSidebar.classList.add("-translate-x-full"); // Slide out the sidebar
        setTimeout(() => {
            leftSidebar.classList.add("hidden"); // Hide sidebar completely after transition
        }, 300); // Wait for the animation to complete
        closeSidebarBtn.classList.add("hidden"); // Hide close button
        openSidebarBtn.classList.remove("hidden");
    });
    
    function searchFunction() {
        let destination = document.getElementById("destination").value;
        let travelTime = document.getElementById("travelTime").value;
        let travelType = document.getElementById("travelType").value;
      
        if (!destination || !travelTime || !travelType) {
          document.getElementById("searchResults").innerHTML = "<p class='text-red-500'>Please select all options!</p>";
          document.getElementById("extraResults").innerHTML = "";
          return;
        }
      
        // Save data to localStorage
        localStorage.setItem("destination", destination);
        localStorage.setItem("travelTime", travelTime);
        localStorage.setItem("travelType", travelType);
      
        // Redirect to the results page
        window.location.href = "results.html";
      }
      
    
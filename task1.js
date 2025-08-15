 
   function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const icon = document.getElementById("toggleIcon");

    sidebar.classList.toggle("active");
    sidebar.classList.toggle("closed");

    
    if (sidebar.classList.contains("closed")) {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    } else {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    }
  }
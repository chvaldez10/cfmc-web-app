function showToast(id) {
  const toast = document.getElementById(id);
  toast.classList.remove("hidden");
  toast.classList.remove("opacity-0");
  toast.classList.add("opacity-100");

  setTimeout(() => {
    toast.classList.remove("opacity-100");
    toast.classList.add("opacity-0");
    setTimeout(() => {
      toast.classList.add("hidden");
    }, 300); // Wait for the fade-out transition to complete before hiding
  }, 3000); // Show for 3 seconds
}

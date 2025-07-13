export function LoadedTheme(): void {
  const themeToggleBtn = document.getElementById("theme-toggle-btn");

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      localStorage.setItem(
        "theme",
        document.documentElement.classList.contains("dark") ? "dark" : "light",
      );
    });
  }

  // Load the saved theme from localStorage
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  }
}

export function getSavedTheme(): boolean {
  return localStorage.getItem("theme") === "dark";
}

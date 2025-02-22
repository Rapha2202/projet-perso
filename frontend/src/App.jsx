import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.removeAttribute("class");
      localStorage.theme = "light";
    }
  }, []);

  function ThemeToggle() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.removeAttribute("class");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  }

  return (
    <div className="bg-primary-light dark:bg-primary-dark text-secondary-light dark:text-secondary-dark border-secondary-light dark:border-secondary-dark font-apercu font-bold">
      <nav className="sticky top-0">
        <Navbar />
      </nav>
      <main className="min-h-screen">
        <Outlet />
        <button
          type="button"
          onClick={ThemeToggle}
          className="fixed right-4 md:right-6 bottom-4 md:bottom-6 border-[1px] rounded-full h-12 md:h-16 w-12 md:w-16 flex justify-center items-center border-primary-dark dark:border-primary text-secondary dark:text-secondary-dark bg-primary-light dark:bg-primary-dark"
        >
          <div>
            <img className="block dark:hidden h-12" src="/sun.svg" alt="sun" />
            <img
              className="hidden dark:block h-12"
              src="/moon.svg"
              alt="moon"
            />
          </div>
        </button>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

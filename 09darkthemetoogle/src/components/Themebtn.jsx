import React from "react";
import useTheme from "../context/Theme.js";

function Themebtn() {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <div className="flex items-center justify-center">
      <label className="relative inline-flex items-center cursor-pointer group">
        {/* Hidden Input */}
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={onChangeBtn}
          checked={themeMode === "dark"}
        />

        {/* The Toggle Track */}
        <div className="w-16 h-9 bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-md rounded-full peer 
                        peer-focus:ring-2 peer-focus:ring-blue-500/50 
                        transition-all duration-500 ease-in-out
                        border border-white/20 dark:border-gray-600/30
                        after:content-[''] after:absolute after:top-[4px] after:left-[4px] 
                        after:bg-white dark:after:bg-blue-500 after:rounded-full after:h-7 after:w-7 
                        after:transition-all after:duration-500 after:shadow-lg
                        peer-checked:after:translate-x-7">
        </div>

        {/* Icons inside the toggle */}
        <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
          {/* Sun Icon */}
          <svg
            className={`w-4 h-4 transition-all duration-500 ${
              themeMode === "dark" ? "opacity-100 text-gray-400" : "opacity-0 text-yellow-500"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
          </svg>

          {/* Moon Icon */}
          <svg
            className={`w-4 h-4 transition-all duration-500 ${
              themeMode === "dark" ? "opacity-0 text-blue-300" : "opacity-100 text-gray-400"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </div>

        {/* Hidden Label for Accessibility */}
        <span className="sr-only">Toggle Theme</span>
      </label>
    </div>
  );
}

export default Themebtn;
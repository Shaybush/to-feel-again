"use client";
import { updateDarkMode } from "@/app/actions/auth/actions";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const DarkModeIcon = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <div className="">
      {isDarkMode ? (
        <SunIcon className="h-6 w-6 text-yellow-400" />
      ) : (
        <MoonIcon className="h-6 w-6 text-primary" />
      )}
    </div>
  );
};

const DarkModeToggle = ({
  isDarkMode: initialIsDarkMode,
}: {
  isDarkMode?: string;
}) => {
  // Use state to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(initialIsDarkMode === "true");

  // Only render after component has mounted to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    setIsDarkMode(initialIsDarkMode === "true");
  }, [initialIsDarkMode]);

  if (!mounted) {
    return null; // Avoid rendering during SSR to prevent hydration mismatch
  }

  return (
    <div className="flex items-center space-x-4">
      <form action={updateDarkMode}>
        <input
          type="hidden"
          name="mode"
          value={isDarkMode ? "true" : "false"}
        />

        <button>
          <DarkModeIcon isDarkMode={isDarkMode} />
        </button>
      </form>
    </div>
  );
};

export default DarkModeToggle;

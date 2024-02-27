import { useTheme } from "../../contexts/themeContext";

const ThemeSwitcher = () => {
  const { toggleTheme, theme } = useTheme();

  const buttonClasses = `text-color-${theme} border-color-${theme} hover:bg-color-${theme}`;

  return (
    <div>
      <button
        onClick={() => {
          toggleTheme("theme-01");
        }}
        className={buttonClasses}
      >
        Theme 01
      </button>
    </div>
  );
};

export default ThemeSwitcher;

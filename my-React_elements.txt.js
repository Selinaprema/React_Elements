import React from "react";
import ReactDOM from "react-dom/client";

const CurrentDateTime = () => {
  const now = new Date();
  const formattedDate = now.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return <h1>Current Date and Time: {formattedDate}</h1>;
};

const AdvantagesList = () => (
  <ul>
    <li>Improves code reusability and maintainability.</li>
    <li>Provides efficient state management and dynamic updates.</li>
    <li>
      Uses JSX which makes it easier for to understand the component hierarchy.
    </li>
    <li>
      The use of a virtual DOM enahances makes rendering components faster and
      more efficient.
    </li>
    <li>Fosters a large community and ecosystem for support and tools.</li>
  </ul>
);

const element = (
  <div>
    <button
      onClick={() =>
        window.open("https://www.linkedin.com/in/selina-prema/", "_blank")
      }
      style={{
        backgroundColor: "#9F2B68",
        fontFamily: "sans-serif",
        color: "white",
        border: "none",
        padding: "10px 20px",
      }}
    >
      Selina's Instagram
    </button>

    <CurrentDateTime />
    <AdvantagesList />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>{element}</React.StrictMode>);

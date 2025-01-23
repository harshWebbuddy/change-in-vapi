import ScaleLoader from "react-spinners/ScaleLoader";

const ButtonVapi = ({ label, onClick, isLoading }) => {
  const Contents = isLoading ? (
    <p style={{ margin: 0, padding: 0 }}>{label}</p>
  ) : (
    <p style={{ margin: 0, padding: 0 }}>{label}</p>
  );

  return (
    <button
      onClick={onClick}
      style={{
        background: "linear-gradient(to right, #7C3AED, #5B21B6)",
        color: "white",
        border: " ",
        borderRadius: "8px",
        padding: "2px ",
        fontSize: "16px",
        outline: "none",

        transition: "all 0.3s ease",
      }}
    >
      {Contents}
    </button>
  );
};

export default ButtonVapi;

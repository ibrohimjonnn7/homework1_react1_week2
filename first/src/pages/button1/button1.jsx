export default function Button1({bgColor, textBtn, col }) {
  return (
    <>
      <button
        style={{
          backgroundColor: bgColor,
          color: col,
          border: "none",
          borderRadius: "10px",
          padding: "10px 20px",
        }}
      >
        {textBtn}
      </button>
    </>
  );
}

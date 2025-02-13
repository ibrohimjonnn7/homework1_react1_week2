export default function Button({ text1 }) {
  return (
    <>
      <button
        style={{
          padding: "18px",
          borderRadius: "50px",
          width: "200px",
          backgroundColor: "#F15525",
          color: "white",
          border: "none",
        }}
      >
        {text1}
      </button>
    </>
  );
}

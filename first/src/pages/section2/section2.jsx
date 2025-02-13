export default function Section2({ img, w, title, bg, text }) {
  return (
    <div
      style={{
        width: w,
        backgroundColor: bg,
        borderRadius: "10px",
        margin: "5px",
        padding: "10px",
      }}
    >
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

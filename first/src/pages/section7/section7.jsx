import Button from "../button/button.jsx";
export default function Section7({ img_section7, text2 }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "90%",
          margin: "auto",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#EAF2F5",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          marginTop: "30px",
        }}
      >
        <img src={img_section7} alt="" />
        <p style={{ width: "35%" }}>{text2}</p>
        <Button text1="Начать обучение" />
      </div>
    </>
  );
}

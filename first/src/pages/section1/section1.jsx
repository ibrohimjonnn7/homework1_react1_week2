import Button from "../button/button.jsx";
export default function Section1({ text2, text3, img_comp }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "90%",
          margin: "auto",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <div style={{ width: "50%" }}>
          <h2>{text2}</h2>
          <p>{text3}</p>
          {/* <Button text1="Пройти тестирование" /> */}
          <Button text1="Пройти тестирование" />
        </div>
        <div>
          <img
            src={img_comp}
            alt=""
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      </div>
    </>
  );
}

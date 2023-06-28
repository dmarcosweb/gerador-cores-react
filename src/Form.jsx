import { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className="container">
      <h4>Gerador de cores hexadecimal</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#FFF048"
        />
        <button
          className="btn"
          type="submit"
          style={{ bacgroundColor: "#CCC" }}
        >
          Gerar 
        </button>
      </form>
    </section>
  );
};

export default Form;

import "./style.scss";

export default function Card({ desc, img }) {
  return (
    <div className="card">
      <img src={img} alt="" />
      <p>{desc}</p>
    </div>
  );
}

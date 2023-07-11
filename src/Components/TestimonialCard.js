export default function TestimonialCard({ card }) {
  console.log(card.name);
  return (
    <div className="box">
      <p>{card.message}</p>

      <div className="testimonial-info">
        <img src={card.imgsrc} alt={card.name} />
        <div className="testiomonial-name">
          <p>{card.name}</p>
          <p>{card.personality} </p>
        </div>
      </div>
    </div>
  );
}

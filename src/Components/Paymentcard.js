import React from "react";

function PaymentCard({ card }) {
  const type = card.paymentType;
  return (
    <>
      <div
        className="card"
        style={
          type === "Pay"
            ? { backgroundColor: "#f2f7f3" }
            : type === "Send"
            ? { backgroundColor: "#ebf3fe" }
            : type === "Receive"
            ? { backgroundColor: "#fdf9ed" }
            : {}
        }
      >
        <h4>{card.paymentType}</h4>
        <p>{card.paymentTypeText}</p>
        <img src={card.photoName} alt="hello" />
      </div>
    </>
  );
}

export default PaymentCard;

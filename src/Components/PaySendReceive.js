import PaymentCard from "./Paymentcard";
import { paymentText } from "../App";

export default function PaySendReceive() {
  return (
    <section className="PaySendReceive">
      <h3>One platform for all your international payments</h3>
      <div className="payments">
        {paymentText.map((paymenttype) => (
          <PaymentCard card={paymenttype} key={paymenttype.paymentType} /> // Corrected component name
        ))}
      </div>
    </section>
  );
}

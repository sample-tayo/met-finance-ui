import "./style/index.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main/Main";
import PaySendReceive from "./Components/PaySendReceive";
import Exchange from "./Components/Exchange";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";

export default function App() {
  const exchangeStyle = {
    flexDirection: "row-reverse",
  };

  const receiveOrRewuestStyle = {
    width: "450px",
    height: "400px",
  };

  const exchaingeImg = {
    padding: "3rem",
  };

  return (
    <div className="App">
      <Navbar />
      <Main />
      <PaySendReceive />
      <Exchange
        h3="Instant Currency exchange"
        message="Enjoy quick and efficient online foreign exchange transactions. Say
          goodbye to bank queues and disapppointments."
        imageSrc="./images/exchange.png"
      />
      {/* <img
        style={{
          margin: " auto",
          maxWidth: "20%",
          height: "auto",
        }}
        src="./images/products-3.png"
        alt="atm"
      /> */}

      <Exchange
        h3="Receive or request money"
        message="Send money requests or share a payment link for your friends and even customers to pay via bank transfers, card or even mobile money."
        imageSrc="./images/products-2.png"
        style={exchangeStyle}
        receiveOrRewuestStyle={receiveOrRewuestStyle}
        exchaingeImg={exchaingeImg}
      />
      <Exchange
        h3="Support available on all platform"
        message="Our simolified messaging brings all your chats together from IG, Whatsapp, Facebook, website and email. So you can easily view and reply on the go."
        receiveOrRewuestStyle={receiveOrRewuestStyle}
        exchaingeImg={exchaingeImg}
        imageSrc="./images/social.png"
      />

      <Testimonial />
      <Footer />
    </div>
  );
}

export const paymentText = [
  {
    paymentType: "Pay",
    paymentTypeText:
      "Pay school fees suppliers/vendors bills Get value for your money at great rates",
    photoName: "./images/piggy.svg",
  },
  {
    paymentType: "Send",
    paymentTypeText:
      "Sending money to your loved ones, supporting friends abroad has never been easier",
    photoName: "./images/btc-gold.png",
  },
  {
    paymentType: "Receive",
    paymentTypeText:
      "Receive payments for services renderer or manage internantional transactions",
    photoName: "./images/piggy.svg",
  },
];

export const testimonial = [
  {
    name: "Martins Adebowale",
    message:
      "I love this app! It's so easy to use and has helped me save money for my future goals. The auto-save feature makes it a breeze to save regularly, and the investment options are great too. Highly recommend!",
    personality: "Founder",
    imgsrc: "./images/piggy.svg",
  },

  {
    name: "Esther Romanus",
    message:
      "I never thought investing could be so simple and accessible, but this app has changed my mind. I can invest easily track my portfolio's performance. Highly recommend for anyone looking to start investing.",
    personality: "Co-Founder",
    imgsrc: "./images/testimonial.jpg",
  },

  {
    name: "Kalistus Oluwafemi",
    message:
      "This app has been a game-changer for me. I used to struggle with managing my finances, but with this app, I can easily track my spending, set budgets, and save for the things that matter most.",
    personality: "User",
    imgsrc: "./images/piggy.svg",
  },
  {
    name: "Martins Adebowale",
    message:
      "I love this app! It's so easy to use and has helped me save money for my future goals. The auto-save feature makes it a breeze to save regularly, and the investment options are great too. Highly recommend!",
    personality: "Founder",
    imgsrc: "./images/piggy.svg",
  },

  {
    name: "Esther Romanus",
    message:
      "I never thought investing could be so simple and accessible, but this app has changed my mind. I can invest easily track my portfolio's performance. Highly recommend for anyone looking to start investing.",
    personality: "Co-Founder",
    imgsrc: "./images/testimonial.jpg",
  },

  {
    name: "Kalistus Oluwafemi",
    message:
      "This app has been a game-changer for me. I used to struggle with managing my finances, but with this app, I can easily track my spending, set budgets, and save for the things that matter most.",
    personality: "User",
    imgsrc: "./images/piggy.svg",
  },
];

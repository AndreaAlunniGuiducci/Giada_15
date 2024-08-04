import frontCard from "./theme/images/front_card.png";
import insideCard from "./theme/images/inside_card.jpg";
import "./App.scss";
import { useEffect, useState } from "react";

function App() {
  const [cardClosed, setCardClosed] = useState(true);
  const [hideFrontCard, setHideFrontCard] = useState(false);

  useEffect(() => {
    if (cardClosed) {
      // setTimeout(() => {
        setHideFrontCard(false);
      // }, 900);
    } else {
      setTimeout(() => {
        setHideFrontCard(true);
      }, 900);
    }
  }, [cardClosed]);
  return (
    <div className={`App ${cardClosed ? "cardClosed" : "cardOpen"}`}>
      <div
        style={{ display: `${hideFrontCard ? "none" : "block"}` }}
        className={`frontCard`}
        onClick={() => setCardClosed(false)}
      >
        <div className="happyBirthday">
          <div className="happy">Happy</div>
          <div className="birthday">Birthday</div>
        </div>
        <img className={`image`} src={frontCard} />
        <span className="name">Giada</span>
      </div>
      <div
        style={{ display: `${hideFrontCard ? "block" : "none"}` }}
        className="insideCard"
        onClick={() => setCardClosed(true)}
      >
        <img className={`image`} src={insideCard} />
        <div className="bestWishes">
          <div>Buon compleanno alla nostra talentuasissima ballerina.</div>
          <div>Siamo molto orgogliosi di te.</div>
          <div>Ti vogliamo un mondo di bene.</div>
        </div>
        <div>Filippo, Alessandra, Papà</div>
      </div>
    </div>
  );
}

export default App;

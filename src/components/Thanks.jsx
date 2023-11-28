import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./Thanks.css";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
}

const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante. Em breve, você receberá um cupom de
        10% de desconto para a sua próxima compra.
      </p>
      <p>Para concluir a sua avaliação, clique no botão de enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação {data.name}:</h3>
      <p className="review-data">
        <span>Satisfação com o produto:</span>
        <p>{emojiData[data.review]}</p>
      </p>
      <p className="review-data">
        <span>Comentário:</span>
        <p>{data.comment}</p>
      </p>
    </div>
  );
};

export default Thanks;

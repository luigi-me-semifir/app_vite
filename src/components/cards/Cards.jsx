import styles from "./Cards.module.css";

const Cards = ({ title, body }) => {
  return (
    <>
      <h1 className={styles.red}>
        Bonjour {title} {body}
      </h1>
      <p className={styles.paragraphe}>Je suis le paragraphe</p>
    </>
  );
};

export default Cards;

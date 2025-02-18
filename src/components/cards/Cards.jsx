import styles from "./Cards.module.css";

const Cards = ({ nom, prenom }) => {
  return (
    <>
      <h1 className={styles.red}>
        Bonjour {nom} {prenom}
      </h1>
    </>
  );
};

export default Cards;

/* eslint-disable react/prop-types */
import styles from "./CountryItem.module.css";
import { convertToEmoji } from "./Form";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;

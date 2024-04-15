import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import homeIcon from "../../../public/home.svg";

export default function Navbar() {
  return (
    <header>
      <nav className={styles.navigation}>
          <Link href="/">
            <Image src={homeIcon} alt="homeIcon" className={styles.icon} />
          </Link>

        <ul className={styles.navlinks}>
          <li>
            <Link href="/characters" className={styles.link}>Characters</Link>
          </li>

          <li>
            <Link href="/episodes" className={styles.link}>Episodes</Link>
          </li>

          <li>
            <Link href="/locations" className={styles.link}>Locations</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
import Link from "next/link";
import { useRouter } from "next/router";
import { constants } from "../../constants";

export const generateNavlink = (styles) => {
  const router = useRouter();

  return constants.path.map((path) => (
    <div className={styles.navlink} key={path.src}>
      <Link href={path.src}>
        <a
          className={`${styles.navlink__anchor} font-dm-sans ${
            router.pathname === path.src && styles.active
          }`}
        >
          {path.name}
        </a>
      </Link>
    </div>
  ));
};

import styles from "./socials.module.css";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/AstarNetwork",
    imageCssVariableName: "--socials-github",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/AstarNetwork",
    imageCssVariableName: "--socials-twitter",
  },
  {
    name: "Telegram",
    href: "https://t.me/PlasmOfficial",
    imageCssVariableName: "--socials-telegram",
  },
  {
    name: "Discord",
    href: "https://discord.gg/astarnetwork",
    imageCssVariableName: "--socials-discord",
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/c/AstarNetwork",
    imageCssVariableName: "--socials-youtube",
  },
];

export function Socials(): JSX.Element {
  return (
    <div className={styles.socialsWrapper}>
      <div className={styles.socialsLinks}>
        {socials.map((social) => (
          <a
            key={social.name}
            className={styles.socialsLink}
            href={social.href}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={styles.socialsIcon}
              style={{ backgroundImage: `var(${social.imageCssVariableName})` }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

import styles from "../Keyboard.module.css";

type KeyboardProps = { 
  disabled?:boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export const Keyboard = ({
  activeLetters,
  disabled=false,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) => {
  const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(75px,1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key)
        const inActive = inactiveLetters.includes(key)
        return (
          <button onClick={()=>addGuessedLetter(key) } className={`${styles.btn} ${isActive?styles.active:''} ${inActive?styles.inactive:''}`} disabled={isActive|| inActive|| disabled}
          key={key}>
            {key}
          </button>
        );
      })}
    </div>
  );
};

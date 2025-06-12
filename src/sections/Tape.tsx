const words = [
  "MERN Stack",
  "Clean Code",
  "Pixel Perfect",
  "Dark Mode Lover",
  "API Wizard",
  "Responsive UI",
  "Terminal Vibes",
  "Production Ready",
  "Code & Chill",
  "Dark Mode Lover",
];

export const TapeSection = () => {
  return (
    <div>
      {words.map((word) => (
        <div key={word}>{word}</div>
      ))}
    </div>
  );
};

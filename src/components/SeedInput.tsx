interface SeedInputProps {
  seed: string;
  onChange: (newSeed: string) => void;
}

export default function SeedInput({ seed, onChange }: SeedInputProps) {
  // Handler for input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  // Handler for random seed generation
  const handleRandomSeed = () => {
    const randomSeed = Math.random().toString(36).substring(2, 15); // Generate random alphanumeric seed
    onChange(randomSeed);
  };

  return (
    <div>
      <label htmlFor="seed-input">Seed Value: </label>
      <input
        id="seed-input"
        type="text"
        value={seed}
        onChange={handleInputChange}
        placeholder="Enter seed value"
      />
      <button onClick={handleRandomSeed}>Random Seed</button>
    </div>
  );
}

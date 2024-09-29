import { FaRandom } from "react-icons/fa";

interface SeedInputProps {
  seed: string;
  onChange: (newSeed: string) => void;
}

export default function SeedInput({ seed, onChange }: SeedInputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleRandomSeed = () => {
    const randomSeed = Math.random().toString(36).substring(2, 15);
    onChange(randomSeed);
  };

  return (
    <div className="flex gap-4 items-center">
      <div>
        <label htmlFor="seed">Seed: </label>
        <input
          id="seed"
          type="text"
          value={seed}
          onChange={handleInputChange}
          placeholder="Enter seed value"
          className="input input-bordered w-[140px]"
        />
      </div>
      <button onClick={handleRandomSeed} className="hover:text-indigo-700">
        <FaRandom />
      </button>
    </div>
  );
}

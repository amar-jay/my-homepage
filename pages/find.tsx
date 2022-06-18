import React, { useState } from "react";

const isPrime = (n: number) => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5, w = 2; i * i <= n; i += w, w = 6 - w) {
    if (n % i === 0) return false;
  }
  return true;
};

const findPrimes = (n: number) => {
  const primes: number[] = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
};

const FindPrimeNumbers: React.FC = () => {
  const [n, setN] = useState(0);
  const [primes, setPrimes] = useState<number[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setN(Number(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const primes = findPrimes(n);
    setPrimes(primes);
  };

  return (
    <div>
      <h1>Find Prime Numbers</h1>
      <form onSubmit={handleSubmit}>
        <label>
          N:
          <input type="number" value={n} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <ul>
        {primes.map((prime, index) => (
          <li key={index}>{prime}</li>
        ))}
      </ul>
    </div>
  );
};

export default FindPrimeNumbers;

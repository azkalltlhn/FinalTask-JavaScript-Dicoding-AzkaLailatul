function fibonacci(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  let sequence = [0, 1];

  for (let i = 2; i <= n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

// Contoh Pengujian
console.log(fibonacci(5)); // Output yang diharapkan: [0, 1, 1, 2, 3, 5]
console.log(fibonacci(10)); // Output yang diharapkan: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// Jangan hapus kode di bawah ini!
export default fibonacci;

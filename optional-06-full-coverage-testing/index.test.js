import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Skenario pengujian
test('sum function should return correct results', () => {
  // Uji dengan dua angka positif
  assert.strictEqual(sum(2, 3), 5, '2 + 3 seharusnya menghasilkan 5');
  assert.strictEqual(sum(10, 15), 25, '10 + 15 seharusnya menghasilkan 25');

  // Uji dengan angka negatif
  assert.strictEqual(sum(-1, 5), 0, 'Bilangan negatif harus mengembalikan 0');
  assert.strictEqual(sum(5, -3), 0, 'Bilangan negatif harus mengembalikan 0');
  assert.strictEqual(sum(-4, -6), 0, 'Dua bilangan negatif harus mengembalikan 0');

  // Uji dengan angka nol
  assert.strictEqual(sum(0, 0), 0, '0 + 0 seharusnya menghasilkan 0');
  assert.strictEqual(sum(0, 10), 10, '0 + 10 seharusnya menghasilkan 10');

  // Uji dengan nilai bukan angka
  assert.strictEqual(sum('5', 5), 0, 'String "5" tidak boleh dianggap sebagai angka');
  assert.strictEqual(sum(7, '3'), 0, 'String "3" tidak boleh dianggap sebagai angka');
  assert.strictEqual(sum(null, 5), 0, 'null tidak boleh dianggap sebagai angka');
  assert.strictEqual(sum(undefined, 5), 0, 'undefined tidak boleh dianggap sebagai angka');
});

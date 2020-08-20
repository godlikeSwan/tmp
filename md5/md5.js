const msg = ''
const s = [
  7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22,
  5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20,
  4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23,
  6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21
]
const k = []
for (let i = 0; i < 64; i += 1) {
  k[i] = Math.floor(2 ** 32 * Math.abs(Math.sin(i + 1))) % 2 ** 32
}

let a0 = 0x67452301
let b0 = 0xefcdab89
let c0 = 0x98badcfe
let d0 = 0x10325476

// TODO: convert
let bin = msg
const len = msg.length
bin += '1'
do {
  bin += '0'
} while (bin.length % 512 !== 448)
bin += (len % 2 ** 64).toString(2).padStart(64, '0')
// console.log(bin.length)
for (let chunk = 0; chunk * 512 < bin.length; chunk += 1) {
  const words = []
  for (let i = 0; i < 16; i += 1) {
    words[i] = bin.slice(chunk * 512 + i, chunk * 512 + i + 32)
  }
  let A = a0
  let B = b0
  let C = c0
  let D = d0

  for (let i = 0; i < 64; i += 1) {
    let F
    let g
    if (i >= 0 && i <= 15) {
      F = D ^ (B & (C ^ D)) // (B & C) | (~B | D)
      g = i
    } else if (i >= 16 && i <= 31) {
      F = C ^ (D & (B & C)) // (D & B) | (~D & C)
      g = (5 * i + 1) % 16
    } else if (i >= 32 && i <= 47) {
      F = B ^ C ^ D
      g = (3 * i + 5) % 16
    } else {
      F = C ^ (B | ~D)
      g = (7 * i) % 16
    }
    F = (F + A + k[i] + words[g]) % 2 ** 32
    A = D
    D = C
    C = B
    B = (B + ((F << s[i]) | (F >> (32 - s[i])))) % 2 ** 32
  }
  a0 = (a0 + A) % 2 ** 32
  b0 = (b0 + B) % 2 ** 32
  c0 = (c0 + C) % 2 ** 32
  d0 = (d0 + D) % 2 ** 32
}
console.log(
  a0.toString(16) +
  b0.toString(16) +
  c0.toString(16) +
  d0.toString(16)
)

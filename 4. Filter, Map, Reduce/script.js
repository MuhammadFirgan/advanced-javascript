const angka = [-1,5,6,4,3,7,-8,4,9]

//filter
const newAngka = angka.filter((a) => {
    return a > 4;
});

//map
const newAngka1 = angka.map((a) => {
    return a * 3;
});

// reduce
const newAngka2 = angka.reduce((acc, curr) => {
    return acc + curr
});

// method chaining
const hasil = angka.filter(a => a > 2)
    .map(a => a * 4)
    .reduce((acc, curr) => acc + curr)



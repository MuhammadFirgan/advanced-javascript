let salam = function(waktu) {
    return function(nama) {
        return `Halo ${nama}, selamat ${waktu}`
    }
}

let pagi = salam("pagi")
let siang = salam("siang")
let malam = salam("malam")

console.log(pagi("Firgan"))
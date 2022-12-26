// prototype adalah penghubung antara suatu object dengan object lain (mirip inheritance)

function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.makan = function(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama} selamat makan`;
}

Mahasiswa.prototype.main = function(jam) {
    this.energi -= jam;
    return `Halo ${this.nama} selamat main`
}

Mahasiswa.prototype.tidur = function(jam) {
    this.energi = (this.energi + jam) * 2;
    return `Halo ${this.nama} selamat tidur`
}

//jika menggunakan class

class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama} selamat makan`;
    }
        
    main(jam) {
        this.energi -= jam;
        return `Halo ${this.nama} selamat main`
    }
        
    tidur(jam) {
        this.energi = (this.energi + jam) * 2;
        return `Halo ${this.nama} selamat tidur`
    }

    
}
let firgan = new Mahasiswa("Firgan", 20);


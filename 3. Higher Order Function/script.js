// higher order function adalah function yang menggunakan function lain sebagai argument atau return value
// contohnya seperti setInterval() setTimeout() map() filter() dll

function salam() {
    return alert("selamat pagi")
}

function sayHello(nama, salam) {
    console.log(`Halo ${nama} selamat datang`)
    salam()
}


function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i)  
    }
}

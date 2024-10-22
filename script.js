console.log('linked');


class Veicolo {

    marca;
    anno;
    colore;
    porte;
    carburante;

    constructor(marca, anno, colore, porte, carburante) {

        this.marca = marca
        this.anno = anno
        this.colore = colore
        this.porte = porte
        this.carburante = carburante
    }

    informazioni() {
        return `${this.marca} ${this.anno} ${this.colore}`
    }

  
    calcolaEta() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.anno;
    }
}


const fiat = new Veicolo('Fiat', 2019, 'blu')


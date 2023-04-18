// Ex 3
// creare, a piacere, due letterali oggetto, che descriveranno rispettivamente:
// - uno studente (avrà nome, cognome, età, voti, un metodo per calcolare e stampare la sua media voti, un metodo per stabilire se è maggiorenne o meno)
// - un'automobile (avrà modello, marca, prezzo e tipoMotore. tipoMotore a sua volta avrà cilindrata, tipo (benzina, diesel o elettrico) e cv. L'automobile avrà un metodo printInfo che stampa in modo correttamente formattato e leggibile le sue feature
// richiamare i metodi dei due oggetti per stampare in output i risultati

const student = {
    name : 'Giulio',
    lastname : 'Broccolo',
    age : 23,
    rate : [8, 10, 3, 7],
    avg : function () {
        let sum = 0
        for (let i = 0; i < this.rate.length; i++) {
            sum += this.rate[i];
        }
        let avg = sum/this.rate.length
        console.log('La media di '+ this.name + ' è ' + avg);
    },
    adult : function () {
        if (this.age > 18){
            console.log(this.name + ' è maggiorenne');
        }
    }
}

const auto = {
    model : 'Aygo',
    brand : 'Toyota',
    price : '9.000€',
    engineType : {
        cc : '998',
        type : ['Fuel', 'Diesel', 'Electric'],
        cv : '72'
    },
    printInfo : function (){
        console.log(`
        Model: ${this.model} 
        Brand: ${this.brand}
        Price: ${this.price} 
        Engine type:  
                    cc: ${this.engineType.cc}
                    type: ${this.engineType.type[0]}
                    cv: ${this.engineType.cv} `);
    }
}

student.avg()
student.adult() 
auto.printInfo()


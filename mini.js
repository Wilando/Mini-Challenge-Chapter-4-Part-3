class Manusia {
	constructor(nama){
    	this.nama = nama;
  }

  perkenalan(){
  		console.log(`Nama saya ${this.nama}`);
  }

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  tebakAngka(angka){
        let angkaAcak = this.getRndInteger(0, 100);
  		if (angka > angkaAcak) {
            console.log(`Angka acak : ${angkaAcak}`);
            console.log(`Angka anda : ${angka}`);
            console.log("Anda Menang");
          }
        
        else if (angka < angkaAcak) {
            console.log(`Angka acak : ${angkaAcak}`);
            console.log(`Angka anda : ${angka}`);
            console.log("Anda Kalah");
        }
         
        else if (angka == angkaAcak) {
            console.log(`Angka acak : ${angkaAcak}`);
            console.log(`Angka anda : ${angka}`);
            console.log("Seri");
        }
    }
  

}

const saya = new Manusia("Wilando");
saya.perkenalan();
saya.tebakAngka(50);




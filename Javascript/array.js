//membuat array penumpang
var penumpang = ['kirana',undefined,'azkia'];
var tambahPenumpang= function(namaPenumpang,penumpang){
//jika angkot kosong
if(penumpang.length == 0){
    //tambah penumpang diawal array
    penumpang.push(namaPenumpang);
    //kembalikan isi aray dan keluar dari function 
    return penumpang;
}else{
    //telusuri seluruh kursi dari awal
    for(var i= 0 ; i< penumpang.length ; i++){
        //jika kursi kosong
        if(penumpang[i] == undefined){
            //tambah penumpang dikursi tersebut
            penumpang[i]= namaPenumpang;
            //kembalikan isi array dan keluar dari function
            return penumpang;
        }
    }
}
};

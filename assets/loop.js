for (let i = 0; i < 5; i++) {
    console.log('Iterasi ke ${i}');
}

do {
    console.log('Iterasi ke ${i}');
    i+=1;
}while (i < 5);

let i = 0;

while (i<5) {
    console.log('Iterasi ke ${i}');
    i++;
}

for (let i = 0; i < 5; i++) {
    if(i=3){
        continue;
    }
    console.log('Iterasi ke ${i}')
}
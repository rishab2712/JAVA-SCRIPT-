//var number = prompt("Enter Number ");
//var temp = number;
//var sum = 0;

//while(temp>0){
   // var digit = temp%10;
    //sum += digit**3;
   // temp = parseInt(temp/10);

//}
//if(sum == number){
  //  document.write("Number Is Armstrong.");


//}else{
 //   document.write(number+"Number Is Not Armstrong.")
//}


// fibbonacci series *********


//var a;
//var b;

//for (  i=0; i<=12; i++){
 //    c= i[0]+i[1];
   // document.write([i]);
   // a=i[0];
   // b=i[1];
   // a=b;
   // b=c;
//}

//function fi(n){
   // fq =[0,1]

  //  if (n <= 1){
        //document.write(fq[0]);
    //}
    //if ( n == 2){
      //  document.write(fq);
    //}
   // if(n >2){
     //   for( var i=1; i<=(n-2); i++){
       //     fq.push(fq[fq.length-1] + fq[fq.length-2])
      //  }

        //document.write(fq);
    //}
//}
//fi(12)

//document.write("<hr>");
//const cities =["new york", "tokyo","delhi"];
//for(c of cities){
  //  document.write("<br/>" +c);

//}

//document.write("<hr>");

//const human ={ FirstName :" Rishab", LastName : "Bhadoriya",age : 25};
//for(let H in  human ){
  //  document.write("<br/>" +H);

//}

//document.write("<hr>");
//for(let H in human){
  //  document.write("<br/>" +human [H]);

//}

//document.write("<hr>");

//let j= 11;
//do{
  //  document.write("<br/>" +j);
    //j++;
//}
//while(j<10);

//document.write("<hr>");
// swap two varriables *****

//let u =10;
//let v =20;

//u = u+v;
//v = u-v;
//u = u-v;

//document.write(u);
//document.write(v);


// print digit ....

let n=5;
let string = "";
let count =1;

for(let i=1; i<=n; i++){
    for( let j = 1; j<= i; j++){
            string += count;
            count++;

    }
        string += "</br>";

}
document.write(string);

document.write("<hr/>");


var a = [1,2,10,16,15,20];
var b=0;
var c=0;
for (var i=0; i<a.length; i++){
    if (a[i]>b){
        b = a[i];
    }

    if (a[i - 1]>c){
        c = a[i -1];
    }
    
}
document.write(b);
document.write("<br/>"+c);
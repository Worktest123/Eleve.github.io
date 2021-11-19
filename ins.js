function verif(){
c1=document.getElementById('code').value;
if((c1=='')||(isNaN(c1))||(c1.length!=6)){
alert('saisir un code de six chiffres!!!');return false;}

c2=document.getElementById('n').value;
nc2=c2.toUpperCase();

p=true;i=0;

while((i<nc2.length)&&(p)){
	if((nc2.charAt(i)>='A')&&(nc2.charAt(i)<='Z')||(nc2.charAt(i)==' ')){i++;}
	
	else{p=false;}
};
if((c2.charAt(0)>'Z')||(c2=='')||!(p)){alert('Le nom doit être alphabétique et commence par une majuscule(°-°)');return  false;}

c3=document.getElementById('np').value;
nc3=c3.toUpperCase();
p=true;i=0;
while((i<nc3.length)&&(p)){
	if((nc3.charAt(i)>='A')&&(nc3.charAt(i)<='Z')||(nc3.charAt(i)==' ')){i++;}
	else{p=false;}
}
if((c3.charAt(0)>'Z')||(c3=='')||!(p)){alert('Le prénom doit être alphabétique et commence par une majuscule(°-°)');return  false;}


s= document.getElementById('lx').selectedIndex;
if(s<=0){alert('choisir un centre');return false;}
c5=document.getElementsByName('ex');
if((c5[0].checked==false)&&(c5[1].checked==false)){alert("choisir un type d'examen");return false;}
}


//fonction pour générer le mot de passe
function pwc(){ 
c1=document.getElementById('code').value;	
pc1=c1.substr(4,2);

	cd=document.getElementById('dn').value;
	j=cd.substr(8,2);
c2=document.getElementById('n').value;	
pc2=c2.substr(0,3);
mot=pc2+pc1+j;
document.getElementById('mp').innerHTML='Votre mot de passe est <u>'+mot+'</u>';
document.getElementById('mp').style.color='red';

document.getElementById('mp').style.fontStyle='italic';
}

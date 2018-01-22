function act(){
tairyoku();
document.getElementById("text_a").innerHTML = ("<h4>"+tuki+"月第"+syu+"週</h4>");
	if(hi==0){
		nyugaku();
	}else if(hi==1){
		nyugaku();
	}else if(hi==2){
		nyugaku();
	}else if(hi==3){
		nyugaku();
	}else if(hi==4){
		nyugaku();
	}else if(hi==5){
	}else if(hi==6){
		document.getElementById("text_s").innerHTML = "";
		nyugaku();
	}else if(hi==1000){
		nomura();
	}else{
		end();
	}
}

function start(){
	var s="START";
	document.getElementById("text_q").innerHTML = ("<h1>"+s+"</h1>");
}
function tairyoku(){
	document.getElementById("power").innerHTML = ("<h4>体力:"+t+"</h4>");
	document.getElementById("y").innerHTML = ("<h4>野獣:"+yaju+"</h4>");
	document.getElementById("k").innerHTML = ("<h4>彼女:"+kanojo+"</h4>");
	if(t>=200){
	t=200;
	}
	if(yaju>=100){
	t=100;
	}
	if(kanojo>=100){
	t=100;
	}
	
}
function pulshi(){
	hi++;
}
function a(){
	if(hi==5){
		an=1,bn=0,cn=0;
		hi=1000;
		act();
	}
}
function b(){
	if(hi==5){
		an=0,bn=1,cn=0;
		hi=1000;
		act();
	}
}
function c(){
	if(hi==5){
		an=0,bn=0,cn=1;
		hi=1000;
		act();
	}
}

function nitijo(){
var wei="yhapaaaaaaaa!!!!!!!!";
document.write("<title>"+wei+"</title>");
}

function nyugaku(){
var hairu1 = "僕の名前は高専太郎。<br>この日、緊張と期待を胸いっぱいにして駅に降り立った";
var hairu2 = "太郎「これから、俺が毎日通うことになる駅か、<br>　　　しかし人が多いな。しかも結構な割合で高専の制服を着た人もいるな。<br>　　　とりあえず高専までは、あの集団についていけば大丈夫か。」";
var hairu3 = "これから通うことになる校舎へと向かい、体育館にて入学式を行うことになった";
var hairu4 = "校長「え―、本日は実にお日柄もよくさらには桜も満開で、まるで新入生の皆様のこれからを祝福するような様子です<br>　　　ね…。」";
var hairu5 = "隣席の人「なあなあ、君どこの中学校からきたの？ちなみに僕はドM中学出身の野村獣雄（のむらししお）、<br>　　　　　　去年まで生徒会長をしていたんだ。」";
var hairu6 = "入学式の時に隣にいた男のことを野獣と呼ぶことにした。<br>とりあえず、俺の高専生活がこの日からスタートしたのであった。";
var sentaku1="　　君に興味は無い";
var sentaku2="　　素直に答える";
var sentaku3="　　黙殺";

	if (count==0){
		document.getElementById("text_q").innerHTML = hairu1;
		pulshi();
		count=1;
	}else if(count==1){
		document.getElementById("text_q").innerHTML = hairu2;
		pulshi();
		count=2;
	}else if(count==2){
		document.getElementById("text_q").innerHTML = hairu3;
		pulshi();
		count=3;
	}else if(count==3){
		document.getElementById("text_q").innerHTML = hairu4;
		pulshi();
		count=4;
	}else if(count==4){
		document.getElementById("text_q").innerHTML = hairu5;
		document.getElementById("text_s1").innerHTML = sentaku1;
		document.getElementById("text_s2").innerHTML = sentaku2;
		document.getElementById("text_s3").innerHTML = sentaku3;
		pulshi();
		count=5;
	}else{
		document.getElementById("text_q").innerHTML = hairu6;
		pulshi();
		count=0;
	}
}
function nomura(){
var nomu="";
var noom="";
	if(an==1){
		ykoukando=50;
		yaju=yaju+ykoukando;
		noom="驚くがすぐにうれしそうにしながら、黙る野村。なぜか背筋がぞっとした。"
		nomu="野村の好感度が"+ykoukando+"上がった！";
		document.getElementById("text_q").innerHTML = noom;
		document.getElementById("text_s").innerHTML = nomu;
		an=0;
		hi=6;
	}
	if(bn==1){
		ykoukando=30;
		yaju=yaju+ykoukando;
		noom="太郎「俺は、平凡中学出身の高専太郎だ。これからよろしく、えーっと。」<br>野獣「野村獣雄、好きに呼んでね。」"
		nomu="野村の好感度が"+ykoukando+"上がった！";
		document.getElementById("text_q").innerHTML = noom;
		document.getElementById("text_s").innerHTML = nomu;
		bn=0;
		hi=6;
	}
	if(cn==1){
		ykoukando=50;
		yaju=yaju+ykoukando;
		noom="野獣「ほ、放置プレイ、これはこれでいいかもしれない。」<br>と隣の席の男が恍惚としながらわけのわからないことを口走っているのでいるのであった。"
		nomu="野村の好感度が"+ykoukando+"上がった！";
		document.getElementById("text_q").innerHTML = noom;
		document.getElementById("text_s").innerHTML = nomu;
		cn=0;
		hi=6;
	}
	document.getElementById("text_s1").innerHTML = "";
	document.getElementById("text_s2").innerHTML = "";
	document.getElementById("text_s3").innerHTML = "";
}
function end(){
	var s="END";
	document.getElementById("text_q").innerHTML = ("<h1>"+s+"</h1>");
	document.getElementById("text_s1").innerHTML = "";
	document.getElementById("text_s2").innerHTML = "";
	document.getElementById("text_s3").innerHTML = "";
	document.getElementById("text_s").innerHTML = "";
}
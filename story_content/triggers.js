function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6otaKZxs9NN":
        Script1();
        break;
      case "5eGEXbFkEuc":
        Script2();
        break;
      case "6THOzvfW7lN":
        Script3();
        break;
      case "5rwbytbgz8O":
        Script4();
        break;
      case "5ijHoKMa8n9":
        Script5();
        break;
      case "5cSCiNFlEyn":
        Script6();
        break;
      case "6aOXwhWaSxL":
        Script7();
        break;
      case "6jjfcqELFsO":
        Script8();
        break;
      case "5YuUXdLDFPS":
        Script9();
        break;
      case "5XM8sof1VNk":
        Script10();
        break;
      case "6QjGdzrdFjE":
        Script11();
        break;
      case "63Y9PP6n6vJ":
        Script12();
        break;
      case "64kjDZ5ieR9":
        Script13();
        break;
      case "65v7DzAnxv2":
        Script14();
        break;
      case "6pb79zIX2o9":
        Script15();
        break;
      case "6X1VeTwij3e":
        Script16();
        break;
      case "5cTyxPnggnZ":
        Script17();
        break;
      case "6bQzaKC8TbM":
        Script18();
        break;
      case "5qJEeZHHscA":
        Script19();
        break;
      case "5wTCSXu9n0z":
        Script20();
        break;
      case "6j1uQ236YVr":
        Script21();
        break;
      case "5dFub7uuAqR":
        Script22();
        break;
      case "5rdoqZysDOr":
        Script23();
        break;
      case "6gP7cEgZpov":
        Script24();
        break;
      case "6g1jANw3pNw":
        Script25();
        break;
      case "61TClAAydVX":
        Script26();
        break;
      case "6pC2dlXtmdx":
        Script27();
        break;
      case "6MG63c4MBe6":
        Script28();
        break;
      case "68hzTvG8xdW":
        Script29();
        break;
      case "5ygldx4oKvf":
        Script30();
        break;
      case "6DG4Fth7vGs":
        Script31();
        break;
      case "6mb25RgNslG":
        Script32();
        break;
      case "5f8oCgj4x9B":
        Script33();
        break;
      case "6GSdsCp80h1":
        Script34();
        break;
      case "6SuOLQbjCOu":
        Script35();
        break;
      case "6G46w6EYJov":
        Script36();
        break;
      case "6BsgNSSEpou":
        Script37();
        break;
      case "6AU1dWsPhZy":
        Script38();
        break;
      case "6a4quMmHMtl":
        Script39();
        break;
      case "67XGJsYHQDP":
        Script40();
        break;
      case "6cYiRh3RVI0":
        Script41();
        break;
      case "6h8IoYw9tk8":
        Script42();
        break;
      case "5q3xgcV4ZCx":
        Script43();
        break;
      case "6PFYUVGNnJp":
        Script44();
        break;
      case "6kkKYJURa5e":
        Script45();
        break;
      case "6gPgXm1mqpC":
        Script46();
        break;
      case "6WQsUEPQ9qI":
        Script47();
        break;
      case "62lHoffhOt8":
        Script48();
        break;
      case "60ygx0VZoiN":
        Script49();
        break;
      case "5h0pry7B62j":
        Script50();
        break;
      case "6OvFy8WVpei":
        Script51();
        break;
      case "5psqLq9zI3K":
        Script52();
        break;
      case "5wH70PFGrb2":
        Script53();
        break;
      case "6B3DRKxFfHL":
        Script54();
        break;
      case "6EVsZwNIBMn":
        Script55();
        break;
      case "67OfqDio5uA":
        Script56();
        break;
      case "6qKAXOiPcyg":
        Script57();
        break;
      case "5kqc8vu2yQZ":
        Script58();
        break;
      case "5VSredim4kC":
        Script59();
        break;
      case "5UweX3SFCKI":
        Script60();
        break;
      case "6mYlGtWHJbw":
        Script61();
        break;
      case "5j8NYi0mDrT":
        Script62();
        break;
      case "66YnIopaOBH":
        Script63();
        break;
      case "60ps8eusjK4":
        Script64();
        break;
      case "6k9pfUlv5ai":
        Script65();
        break;
      case "5wuu7vclupo":
        Script66();
        break;
      case "5cvtpuPDkAS":
        Script67();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('679yA6MMamG');
const duration = 750;
const easing = 'ease-out';
const id = '5zImmEPZELY';
const bounceAmount = 0.5;
const delay = 1250;
addToTimeline(
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('5jjGANNndVX');
const duration = 750;
const easing = 'ease-out';
const id = '5e0ScwQb6vr';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5vpoZDpf3Dx');
const duration = 750;
const easing = 'ease-out';
const id = '60K0oj2668H';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6ayXfMVLv4F');
const duration = 750;
const easing = 'ease-out';
const id = '64hQ4hbQLoz';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6JuvWOCwDBQ');
const duration = 750;
const easing = 'ease-out';
const id = '6XnFCdQFJFl';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6OXscseHTrJ');
const duration = 750;
const easing = 'ease-out';
const id = '67l9rKVvSrh';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('5bpq63TTlNL');
const duration = 750;
const easing = 'ease-out';
const id = '6eIR1gpVbwR';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('5XWkVBtrwaT');
const duration = 750;
const easing = 'ease-out';
const id = '6ki1nT2oPMv';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('5VdYfcrtNse');
const duration = 100;
const easing = 'linear';
const id = '5d6zrLacWYY';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('5VdYfcrtNse');
const duration = 100;
const easing = 'linear';
const id = '5d6zrLacWYY_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('5Whsqih0hcP');
const duration = 100;
const easing = 'linear';
const id = '6EBtM3FVnxK';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('5Whsqih0hcP');
const duration = 100;
const easing = 'linear';
const id = '6EBtM3FVnxK_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('68zdLz3G8VQ');
const duration = 100;
const easing = 'linear';
const id = '5jJgJuu1VeN';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('68zdLz3G8VQ');
const duration = 100;
const easing = 'linear';
const id = '5jJgJuu1VeN_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('5rDXKGX0mtE');
const duration = 100;
const easing = 'linear';
const id = '5hgAM6Hkf5N';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  const target = object('5rDXKGX0mtE');
const duration = 100;
const easing = 'linear';
const id = '5hgAM6Hkf5N_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  const target = object('5edOtHplu8P');
const duration = 100;
const easing = 'linear';
const id = '5e5aSQT1mOO';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  const target = object('5edOtHplu8P');
const duration = 100;
const easing = 'linear';
const id = '5e5aSQT1mOO_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  const target = object('5wX1b2yKKmk');
const duration = 100;
const easing = 'linear';
const id = '6PVSiD6AzFK';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  const target = object('5wX1b2yKKmk');
const duration = 100;
const easing = 'linear';
const id = '6PVSiD6AzFK_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script21 = function()
{
  const target = object('6RbzvMPS2W2');
const duration = 100;
const easing = 'linear';
const id = '6FFmjOiqSDw';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script22 = function()
{
  const target = object('6RbzvMPS2W2');
const duration = 100;
const easing = 'linear';
const id = '6FFmjOiqSDw_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  const target = object('6qk6E5frA3l');
const duration = 100;
const easing = 'linear';
const id = '5kZpec6uHAu';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script24 = function()
{
  const target = object('6qk6E5frA3l');
const duration = 100;
const easing = 'linear';
const id = '5kZpec6uHAu_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  const target = object('6eCYnex5xDa');
const duration = 100;
const easing = 'linear';
const id = '6MHJ9bpk8uW';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script26 = function()
{
  const target = object('6eCYnex5xDa');
const duration = 100;
const easing = 'linear';
const id = '6MHJ9bpk8uW_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  const target = object('6F0aN4BsWI2');
const duration = 100;
const easing = 'linear';
const id = '6ppxeSo0ezZ';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script28 = function()
{
  const target = object('6F0aN4BsWI2');
const duration = 100;
const easing = 'linear';
const id = '6ppxeSo0ezZ_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script29 = function()
{
  const target = object('6eSB4ihxY6X');
const duration = 100;
const easing = 'linear';
const id = '6IMVxuV9a7X';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script30 = function()
{
  const target = object('6eSB4ihxY6X');
const duration = 100;
const easing = 'linear';
const id = '6IMVxuV9a7X_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script31 = function()
{
  const target = object('6h1HpWzlf70');
const duration = 100;
const easing = 'linear';
const id = '6YJ55JDhAVq';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script32 = function()
{
  const target = object('6h1HpWzlf70');
const duration = 100;
const easing = 'linear';
const id = '6YJ55JDhAVq_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script33 = function()
{
  const target = object('6b8rzmPckBH');
const duration = 100;
const easing = 'linear';
const id = '6PShmAiYhs4';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script34 = function()
{
  const target = object('6b8rzmPckBH');
const duration = 100;
const easing = 'linear';
const id = '6PShmAiYhs4_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script35 = function()
{
  const target = object('6JSTmoVB0UN');
const duration = 100;
const easing = 'linear';
const id = '6DTCJmK0sGZ';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script36 = function()
{
  const target = object('6JSTmoVB0UN');
const duration = 100;
const easing = 'linear';
const id = '6DTCJmK0sGZ_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script37 = function()
{
  const target = object('6Eaq7hDWop7');
const duration = 100;
const easing = 'linear';
const id = '6MNoxkE4lZV';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script38 = function()
{
  const target = object('6Eaq7hDWop7');
const duration = 100;
const easing = 'linear';
const id = '6MNoxkE4lZV_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script39 = function()
{
  const target = object('67Qqt9yt6ik');
const duration = 100;
const easing = 'linear';
const id = '5b6PXmzFvKl';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script40 = function()
{
  const target = object('67Qqt9yt6ik');
const duration = 100;
const easing = 'linear';
const id = '5b6PXmzFvKl_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script41 = function()
{
  const target = object('5oTvYvhnlQn');
const duration = 100;
const easing = 'linear';
const id = '6Dj3jKYYFrn';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script42 = function()
{
  const target = object('5oTvYvhnlQn');
const duration = 100;
const easing = 'linear';
const id = '6Dj3jKYYFrn_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script43 = function()
{
  const target = object('68VGVh72r3G');
const duration = 100;
const easing = 'linear';
const id = '6Dj3jKYYFrn';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script44 = function()
{
  const target = object('68VGVh72r3G');
const duration = 100;
const easing = 'linear';
const id = '6Dj3jKYYFrn_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script45 = function()
{
  const target = object('6NaVbbD7jAp');
const duration = 750;
const easing = 'ease-out';
const id = '5e0ScwQb6vr';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script46 = function()
{
  const target = object('5pAIWgNB2sH');
const duration = 750;
const easing = 'ease-out';
const id = '60K0oj2668H';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script47 = function()
{
  player.once(() => {
const target = object('6YTxrwcBlh5');
const duration = 750;
const easing = 'ease-out';
const id = '6ApULxQYkAt';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script48 = function()
{
  player.once(() => {
const target = object('5w00lzRhDuy');
const duration = 750;
const easing = 'ease-out';
const id = '5cjI0O6ALpZ';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script49 = function()
{
  player.once(() => {
const target = object('6I8CkfZhtAU');
const duration = 750;
const easing = 'ease-out';
const id = '64Ozkl7rtx4';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script50 = function()
{
  player.once(() => {
const target = object('6kPtKbSSTsF');
const duration = 750;
const easing = 'ease-out';
const id = '5d2ZmcQy7mg';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script51 = function()
{
  player.once(() => {
const target = object('5wwj1wISmF5');
const duration = 750;
const easing = 'ease-out';
const id = '5h41pAXItFN';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script52 = function()
{
  player.once(() => {
const target = object('6NNReFFAVNj');
const duration = 750;
const easing = 'ease-out';
const id = '5opa3uKUhAx';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script53 = function()
{
  player.once(() => {
const target = object('5cdekWohnDZ');
const duration = 750;
const easing = 'ease-out';
const id = '5zImmEPZELY';
const bounceAmount = 0.5;
const delay = 1250;
addToTimeline(
target.animate(
player.emphasis.bounce(bounceAmount)
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script54 = function()
{
  const target = object('6J8Xa4i8yLn');
const duration = 750;
const easing = 'ease-out';
const id = '5mZCj79zikQ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script55 = function()
{
  const target = object('64ns1L9ktKG');
const duration = 750;
const easing = 'ease-out';
const id = '67ijhgBeXjx';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script56 = function()
{
  const target = object('6pIPclWMizU');
const duration = 750;
const easing = 'ease-out';
const id = '6rMhmEYVxU9';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script57 = function()
{
  const target = object('6gzpqHH9g1u');
const duration = 750;
const easing = 'ease-out';
const id = '5knTXGo9vDt';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script58 = function()
{
  const target = object('5tVbkqguoCP');
const duration = 750;
const easing = 'ease-out';
const id = '6mgbG5qDKoh';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script59 = function()
{
  const target = object('6ZMBQWymHSC');
const duration = 750;
const easing = 'ease-out';
const id = '6AwQV5Ku2VZ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script60 = function()
{
  const target = object('6UzXPh16UqU');
const duration = 750;
const easing = 'ease-out';
const id = '5c1J1SOnGKC';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script61 = function()
{
  const target = object('6ApaJFhOmfy');
const duration = 750;
const easing = 'ease-out';
const id = '6LSfL2kYmLq';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script62 = function()
{
  const target = object('5iFCRSIfkGQ');
const duration = 750;
const easing = 'ease-out';
const id = '5l6v4MtE5o7';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script63 = function()
{
  const target = object('5ZIDRnulFUa');
const duration = 750;
const easing = 'ease-out';
const id = '6GkFgRQ7oER';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script64 = function()
{
  const target = object('5fTVdaruJeH');
const duration = 750;
const easing = 'ease-out';
const id = '5iK3dMmhN0e';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script65 = function()
{
  const target = object('6hf1C1CCFYN');
const duration = 750;
const easing = 'ease-out';
const id = '69pRgrcBOgp';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script66 = function()
{
  const target = object('6iwg7gxXhD3');
const duration = 750;
const easing = 'ease-out';
const id = '6Itd2V3oipl';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script67 = function()
{
  const target = object('61XmeXntXue');
const duration = 750;
const easing = 'ease-out';
const id = '5yLDguriLSJ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};

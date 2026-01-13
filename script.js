let jogador = null;
let ritualIniciado = false;
let infeccao = 0;

const jogadores = {
  Clay:"Azaroth", Kate:"Azaroth", Belo:"Azaroth", Caio:"Azaroth",
  Maju:"Luz", Lia:"Luz", Lukas:"Luz"
};

/* LOGIN */
function login(){
  const n = document.getElementById("nome").value.trim();
  if(!jogadores[n]){
    document.getElementById("erro").textContent="IDENTIDADE NÃO RECONHECIDA.";
    return;
  }
  jogador = n;
  document.getElementById("loginTela").classList.add("hidden");
  document.getElementById("sistema").classList.remove("hidden");
  iniciarLogs();
}

/* LOGS */
function iniciarLogs(){
  const l=document.getElementById("logs");
  l.innerHTML="<strong>LOGS ATIVOS</strong><br><br>";
  setInterval(()=>{
    if(!jogador) return;
    l.innerHTML+=`
      <div class="log">
        [${new Date().toLocaleTimeString()}] ${jogadores[jogador]} observa ${jogador}.
      </div>`;
    l.scrollTop=l.scrollHeight;
  },4500);
}

/* FOLDERS */
function toggle(id){
  document.getElementById(id).classList.toggle("hidden");
}

/* DOCS */
document.addEventListener("click",e=>{
  if(e.target.classList.contains("doc")){
    window.open("arquivos/"+e.target.dataset.arq);
  }
});

/* FITA VHS — GATILHO ABSOLUTO */

function clicarFitaVHS(){
  if(ritualIniciado) return;
  ritualIniciado = true;

  /* 🔊 Música */
  const musica = document.getElementById("musicaVHS");
  musica.volume = 1;
  musica.currentTime = 0;
  musica.play().catch(()=>{});

  /* 🝪 Ritual visual */
  const ritual = document.getElementById("ritualTelopsia");
  ritual.classList.remove("hidden");

  /* ☣ Corrupção global */
  document.body.classList.add("vhs-corrompido");

  inserirLogTelopsia("SINAL DETECTADO.");

  /* ⏱ Tempo-chave */
  setTimeout(()=>{
    inserirLogTelopsia("1:35");
  },3000);

  setTimeout(()=>{
    inserirLogTelopsia("You've gone with the thick rims");
  },9000);

  setTimeout(()=>{
    inserirLogTelopsia("Big look with the lip ring and things");
  },11000);

  setTimeout(()=>{
    inserirLogTelopsia("I'm gonna sleep 'cause you live in my daydreams");
  },13000);

  setTimeout(()=>{
    inserirLogTelopsia("You've gone with the thick rims");
  },15000);

  setTimeout(()=>{
    inserirLogTelopsia("Big look with the lip ring and things");
  },17000);

  setTimeout(()=>{
    inserirLogTelopsia("I'm gonna sleep 'cause you live in my daydreams");
  },19000);

  /* Encerrar ritual visual, mas manter corrupção */
  setTimeout(()=>{
    ritual.classList.add("hidden");
    iniciarCorrupcao();
    ativarTelopsia();
  },12000);
}


function acessarFundacao(){
  const senha = prompt("INSIRA A FRASE:");

  if(!senha) return;

  if(senha.trim().toLowerCase() === "wake me when the bell rings"){
    inserirLogTelopsia("ACESSO CONCEDIDO.");
    window.open("arquivos/OP-H4RD1-FUNDACAO.pdf");
  }else{
    inserirLogTelopsia("ACESSO NEGADO.");
    perderSanidade(5);
  }
}


/* CORRUPÇÃO */
function iniciarCorrupcao(){
  setInterval(()=>{
    infeccao++;
    if(infeccao===15) faseUm();
    if(infeccao===30) faseDois();
    if(infeccao===50) faseTres();
    if(infeccao===75) faseQuatro();
    if(infeccao===95) faseFinal();
  },15000);
}

function faseUm(){
  document.querySelectorAll(".folder,.file").forEach(el=>{
    if(Math.random()<0.3){
      el.textContent=el.textContent.replace(/[A-Z]/g,"█");
    }
  });
}

function faseDois(){document.body.style.filter="hue-rotate(20deg)";}
function faseTres(){inserirLogTelopsia("O SISTEMA NÃO FOI FEITO PARA DURAR.");}
function faseQuatro(){document.body.style.filter="contrast(1.3)";}
function faseFinal(){inserirLogTelopsia("TELÓPSIA: O TERMINAL AGORA É MEU.");}

/* TELOPSIA */
function ativarTelopsia(){
  setInterval(()=>{
    inserirLogTelopsia(`${jogador}, N1NGUÉM P0D3 H4H4H4H4H4 C0NTR0L4R TUD0.`);
  },8000);

    setInterval(()=>{
    inserirLogTelopsia(`${jogador}, SE ENTREGUE AO C40S.`);
  },6000);

    setInterval(()=>{
    inserirLogTelopsia(`H4H4H4H4H4H4H4H4H4H4H4.`);
  },2000);

      setInterval(()=>{
    inserirLogTelopsia(`${jogador}, A LUZ É INEV1TÁV3L.`);
  },10000);

    setInterval(()=>{
    inserirLogTelopsia(`R3B0B1N4R ATR4VÉ$.`);
  },5000);

    setInterval(()=>{
    inserirLogTelopsia(`EXPL0D4 AS R3GR4S`);
  },8000);

    setInterval(()=>{
    inserirLogTelopsia(`1NV3RTA A HI3RARQUI4`);
  },11000);

    setInterval(()=>{
    inserirLogTelopsia(`QUE1M3 TUD0`);
  },9000);

    setInterval(()=>{
    inserirLogTelopsia(`A IMPR0BAB1LIDAD3 PR3CIS4 TR4NSF0RMAR A R3AL1DADE`);
  },14000);

    setInterval(()=>{
    inserirLogTelopsia(`D3STRU4 A ON1PRES3NÇ4 T3MP0RAL D4 M0RT3`);
  },13000);

    setInterval(()=>{
    inserirLogTelopsia(`QU3BRE AS C0RR3NTES D4 R3ALIDADE D0 CONH3C1MENT0`);
  },16000);

    setInterval(()=>{
    inserirLogTelopsia(`🝪`);
  },5000);
}

function inserirLogTelopsia(txt){
  const l=document.getElementById("logs");
  l.innerHTML+=`<div class="log tel">[██:██] ${txt}</div>`;
  l.scrollTop=l.scrollHeight;
}

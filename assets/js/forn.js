function createFornecedorCard(img, link) {
    let fornecedorCenter = document.createElement("div");
    fornecedorCenter.classList.add("center")

      let fornecedorCard = document.createElement("div");
      fornecedorCard.classList.add("article-card");

      let fornecedorLink = document.createElement("a");
      fornecedorLink.href = link;
      fornecedorLink.classList.add("link_fornecedores");
  
      let fornecedorContent = document.createElement("div");
      fornecedorContent.classList.add("content");
  
      let fornecedorImg = document.createElement("img");
      fornecedorImg.src = img;
  
      //fornecedorCard.appendChild(fornecedorContent);
      fornecedorLink.appendChild(fornecedorImg);
      fornecedorCard.appendChild(fornecedorLink);
  
      document.getElementById("fornecedores-container").appendChild(fornecedorCard);
  }
  createFornecedorCard("/logo/fornecedores/3m.png", "https://www.3m.com.br/3M/pt_BR/3m-do-brasil");
  createFornecedorCard("/logo/fornecedores/AAM.png", "https://www.aam.com/pt-br");
  createFornecedorCard("/logo/fornecedores/abc1.jpg","https://abcborracha.com.br/");
  createFornecedorCard("/logo/fornecedores/affinia.jpg","https://affinia.com.br/");
  createFornecedorCard("/logo/fornecedores/anroi.png","https://anroi.com.br/");
  createFornecedorCard("/logo/fornecedores/axel.jpg","");
  createFornecedorCard("/logo/fornecedores/bepo.png","");
  createFornecedorCard("/logo/fornecedores/bosch-logo.jpg","http://www.bosch.com.br/");
  createFornecedorCard("/logo/fornecedores/bovenau.png","http://www.bovenau.com.br/");
  createFornecedorCard("/logo/fornecedores/cinpal.png","http://www.cinpal.com.br/");
  createFornecedorCard("/logo/fornecedores/cofap.jpg","http://www.mmcofap.com.br/");
  createFornecedorCard("/logo/fornecedores/controil.bmp","");
  createFornecedorCard("/logo/fornecedores/corcerama.jpg","http://www.corcerama.com.br/");
  createFornecedorCard("/logo/fornecedores/delphi.png","http://delphi.com/");
  createFornecedorCard("/logo/fornecedores/durex.jpg","");
  createFornecedorCard("/logo/fornecedores/eaton.jpg","http://www.eaton.com.br/");
  createFornecedorCard("/logo/fornecedores/energy.jpg","");
  createFornecedorCard("/logo/fornecedores/florio.jpeg","http://www.florio.com.br/");
  createFornecedorCard("/logo/fornecedores/fras-le.jpg","http://www.fras-le.com/");
  createFornecedorCard("/logo/fornecedores/garrett.jpg","http://www.garrett.com.br/");
  createFornecedorCard("/logo/fornecedores/gauss.jpg","http://www.gauss.ind.br/");
  createFornecedorCard("/logo/fornecedores/hipper freios.jpg","http://www.hipperfreios.com.br/");
  createFornecedorCard("/logo/fornecedores/iguacu.png","http://www.iguacu.ind.br/");
  createFornecedorCard("/logo/fornecedores/jost.jpg","http://www.jost.com.br/");
  createFornecedorCard("/logo/fornecedores/knorr.jpg","http://www.knorr-bremse.com.br/");
  createFornecedorCard("/logo/fornecedores/kobla.jpg","");
  createFornecedorCard("/logo/fornecedores/lemforder.jpg","http://www.zf.com.br/site/zf/pt/home/home.aspx");
  createFornecedorCard("/logo/fornecedores/lonaflex.jpg","");
  createFornecedorCard("/logo/fornecedores/luciflex.png","http://www.luciflex.com.br/");
  createFornecedorCard("/logo/fornecedores/magneti marelli.jpg","http://www.magnetimarelli.com.br/");
  createFornecedorCard("/logo/fornecedores/mahle.png","http://www.mahle.com.br/");
  createFornecedorCard("/logo/fornecedores/max gear.png","http://www.maxgear.com.br/");
  createFornecedorCard("/logo/fornecedores/meritor.jpg","http://meritor.com/products/aftermarket/southamerica/portuguese/default.aspx");
  createFornecedorCard("/logo/fornecedores/moura.jpg","");
  createFornecedorCard("/logo/fornecedores/mte.png","http://www.thomson-net.com.br/");
  createFornecedorCard("/logo/fornecedores/mwm.jpg","http://www.nav-international.com.br/");
  createFornecedorCard("/logo/fornecedores/nakata.gif","http://www.nakata.com.br/");
  createFornecedorCard("/logo/fornecedores/ngk.png","http://www.ngkntk.com.br/");
  createFornecedorCard("/logo/fornecedores/nytron.png","http://www.nytron.com.br/");
  createFornecedorCard("/logo/fornecedores/orbi quimica.jpg","http://www.orbiquimica.com.br/");
  createFornecedorCard("/logo/fornecedores/petrobras.jpg","");
  createFornecedorCard("/logo/fornecedores/petronas.png","");
  createFornecedorCard("/logo/fornecedores/reifor.png","");
  createFornecedorCard("/logo/fornecedores/rinaldi.jpg","http://www.rinaldi.com.br/");
  createFornecedorCard("/logo/fornecedores/robustec.png","http://www.robustec.com.br/");
  createFornecedorCard("/logo/fornecedores/rodafuso.jpg","");
  createFornecedorCard("/logo/fornecedores/sabo.jpg","http://www.sabo.com.br/");
  createFornecedorCard("/logo/fornecedores/sachs.jpg","http://www.sachs.com.br/");
  createFornecedorCard("/logo/fornecedores/schadek.png","http://www.schadek.com.br/");
  createFornecedorCard("/logo/fornecedores/Schaeffler.jpg","http://www.br.schaeffler.com/");
  createFornecedorCard("/logo/fornecedores/spicer.jpg","http://www.spicer.com.br/");
  createFornecedorCard("/logo/fornecedores/stp.png","http://www.stp.com.br/");
  createFornecedorCard("/logo/fornecedores/suporterei.png","http://www.suporterei.com.br/");
  createFornecedorCard("/logo/fornecedores/susin.jpg","http://www.sufran.com.br/");
  createFornecedorCard("/logo/fornecedores/suspensys.jpg","http://www.suspensys.com.br/");
  createFornecedorCard("/logo/fornecedores/tecbril.jpg","http://www.tecbril.com.br/");
  createFornecedorCard("/logo/fornecedores/tecfil.jpg","http://www.tecfil.com.br/");
  createFornecedorCard("/logo/fornecedores/texaco.png","");
  createFornecedorCard("/logo/fornecedores/timken.jpg","http://www.timken.com/pt-br/");
  createFornecedorCard("/logo/fornecedores/toyo.jpg","http://www.koyo.com.br/");
  createFornecedorCard("/logo/fornecedores/trw.jpg","http://www.trw.com.br/");
  createFornecedorCard("/logo/fornecedores/tuba.png","");
  createFornecedorCard("/logo/fornecedores/tuper.jpg","http://www.tuper.com.br/");
  createFornecedorCard("/logo/fornecedores/valeo.jpg","http://www.valeo.com.br/");
  createFornecedorCard("/logo/fornecedores/viemar.jpg","http://www.viemar.com.br/");
  createFornecedorCard("/logo/fornecedores/wabco.jpg","http://www.wabco.com.br/catalogo/");
  createFornecedorCard("/logo/fornecedores/ypf.jpg","http://www.ypf.com.br/");
  createFornecedorCard("/logo/fornecedores/zf.jpg","http://www.zf.com.br/");
  createFornecedorCard("/logo/fornecedores/zm.png","http://www.zm.com.br/");





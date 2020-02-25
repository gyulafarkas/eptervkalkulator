//DINAMIKUS FÜLEK
function openTab(evt, tabNumber) {
				var i, x, tablinks;
				x = document.getElementsByClassName("tab");
				for (i = 0; i < x.length; i++) {
					x[i].style.display = "none";
				}

				tablinks = document.getElementsByClassName("tablink");
				for (i = 0; i < x.length; i++) {
					tablinks[i].className = tablinks[i].className.replace(" active", "");
				}
				document.getElementById(tabNumber).style.display = "block";
				evt.currentTarget.firstElementChild.className += " active";
}



function kalkulal(){
				//INPUT VALIDÁCIÓ, ÜRES INPUT ESETÉN 0 ÉRTÉKRE ÁLLÍTÁS
				const numInputs = document.querySelectorAll('.input-group-text')

				numInputs.forEach(function(input) {
				input.addEventListener('change', function(e) {
					if (e.target.value == '') {
					e.target.value = 0
					}
				})
				})
				//INPUTOK ÉRTÉKEINEK BEOLVASÁSA, ÖSSZNÉGYZETMÉTER SZINTENKÉNT
				//MEGLÉVŐ ÉPÜLETRÉSZ
				var meglevoepuletresz = parseInt(document.getElementById("meglevoepulet").value);
				//PINCE
				var pkozlekedo = parseInt(document.getElementById("pkozlekedo").value);
				var plepcso = parseInt(document.getElementById("plepcso").value);
				var ptarolokamra = parseInt(document.getElementById("ptarolokamra").value);
				var pfurdozuhanyzo = parseInt(document.getElementById("pfurdozuhanyzo").value);
				var pincenegyzetmeter = pkozlekedo+plepcso+ptarolokamra+pfurdozuhanyzo;
                //TERASZ
				var terasz = parseInt(document.getElementById("terasz").value);
                //FÖLDSZINT
				var feloszoba = parseInt(document.getElementById("feloszoba").value);
				var fkozlekedo = parseInt(document.getElementById("fkozlekedo").value);
				var flepcso = parseInt(document.getElementById("flepcso").value);
				var ffurdozuhanyzo = parseInt(document.getElementById("ffurdozuhanyzo").value);
				var fwc = parseInt(document.getElementById("fwc").value);
				var fszoba1 = parseInt(document.getElementById("fszoba1").value);
				var fszoba2 = parseInt(document.getElementById("fszoba2").value);
				var fszoba3 = parseInt(document.getElementById("fszoba3").value);
				var fgarazs = parseInt(document.getElementById("fgarazs").value);
				var fnappali = parseInt(document.getElementById("fnappali").value);
				var fetkezo = parseInt(document.getElementById("fetkezo").value);
				var fkonyha = parseInt(document.getElementById("fkonyha").value);
				var foldszintnegyzetmeter = feloszoba+fkozlekedo+flepcso+ffurdozuhanyzo+fwc+fszoba1+fszoba2+fszoba3+fgarazs+fnappali+fetkezo+fkonyha;
                //EMELET
                var ekozlekedo = parseInt(document.getElementById("ekozlekedo").value);
				var efurdo = parseInt(document.getElementById("efurdo").value);
				var ewc = parseInt(document.getElementById("ewc").value);
				var eszoba1 = parseInt(document.getElementById("eszoba1").value);
				var eszoba2 = parseInt(document.getElementById("eszoba2").value);
				var eszoba3 = parseInt(document.getElementById("eszoba3").value);
				var enappali = parseInt(document.getElementById("enappali").value);
				var eetkezo = parseInt(document.getElementById("eetkezo").value);
				var ekonyha = parseInt(document.getElementById("ekonyha").value);
				var emeletnegyzetmeter = ekozlekedo+efurdo+ewc+eszoba1+eszoba2+eszoba3+enappali+eetkezo+ekonyha;
                //TETŐTÉR
                var tkozlekedo = parseInt(document.getElementById("tkozlekedo").value);
				var tfurdo = parseInt(document.getElementById("tfurdo").value);
				var twc = parseInt(document.getElementById("twc").value);
				var tszoba1 = parseInt(document.getElementById("tszoba1").value);
				var tszoba2 = parseInt(document.getElementById("tszoba2").value);
				var tszoba3 = parseInt(document.getElementById("tszoba3").value);
                var tetoternegyzetmeter = tkozlekedo+tfurdo+twc+tszoba1+tszoba2+tszoba3;
                //ÖRÖKSÉGVÉDELEM ÉS TEREPVISZONYOK
                var oroksegvedelemertek = document.getElementById("oroksegvedelem");
				var oroksegvedelem = oroksegvedelemertek.options[oroksegvedelemertek.selectedIndex].value;
				var terepviszonyokertek = document.getElementById("terepviszonyok");
                var terepviszonyok = terepviszonyokertek.options[terepviszonyokertek.selectedIndex].value;
				//SZÁMÍTÁS
				//ÖSSZNÉGYZETMÉTER ÉS DÍJAK SZÁMÍTÁSA, DÍJAK SZÁMÍTÁSA SZINTENKÉNT
                var ossznegyzetmeter = pincenegyzetmeter+terasz+foldszintnegyzetmeter+emeletnegyzetmeter+tetoternegyzetmeter;
                var pincedij = pincenegyzetmeter*0.8*((ossznegyzetmeter*2500+50000)/ossznegyzetmeter);
				var teraszdij = terasz*0.5*((ossznegyzetmeter*2500+50000)/ossznegyzetmeter);
				var foldszintdij = foldszintnegyzetmeter*1*((ossznegyzetmeter*2500+50000)/ossznegyzetmeter);
				var emeletdij = emeletnegyzetmeter*1*((ossznegyzetmeter*2500+50000)/ossznegyzetmeter);
                var tetoterdij = tetoternegyzetmeter*0.9*((ossznegyzetmeter*2500+50000)/ossznegyzetmeter);
				var tervezesidij = pincedij+teraszdij+foldszintdij+emeletdij+tetoterdij;
				//ÖRÖKSÉGVÉDELEM ÉS LEJTÉS
				var kiemelt = tervezesidij*0.15;
				var tizenotfelett = tervezesidij*0.1;
				if(oroksegvedelem == "kiemelt" && terepviszonyok == "15felett")
				{
					tervezesidij = tervezesidij+kiemelt+tizenotfelett;
				}
				else
				if(oroksegvedelem == "kiemelt" && terepviszonyok == "15alatt")
				{
					tervezesidij = tervezesidij+kiemelt;
				}
				if(oroksegvedelem == "nemkiemelt" && terepviszonyok == "15felett")
				{
					tervezesidij = tervezesidij+tizenotfelett;
				}
				else
				if(oroksegvedelem == "nemkiemelt" && terepviszonyok == "15alatt")
				{
					tervezesidij = tervezesidij;
                }
                //NaN érték helyett 0
				if(isNaN(tervezesidij)){
					tervezesidij = 0;
				}
				if(isNaN(ossznegyzetmeter)){
					ossznegyzetmeter = 0;
				}
				if(isNaN(meglevoepuletresz)){
					meglevoepuletresz = 0;
				}
				//MEGLÉVŐ ÉPÜLETRÉSZ ESETÉN VALÓ SZÁMÍTÁS
				var meglevoepuletreszdij = meglevoepuletresz*950;
				var meglevoepuletreszalapdij = (meglevoepuletresz*950)+50000;
				if(ossznegyzetmeter == 0 && meglevoepuletresz >0)
				{
					tervezesidij = meglevoepuletreszalapdij;
					ossznegyzetmeter = meglevoepuletresz;
				}
				else
				if(ossznegyzetmeter > 0 && meglevoepuletresz >0){
					tervezesidij = tervezesidij+meglevoepuletreszdij;
					ossznegyzetmeter= ossznegyzetmeter+meglevoepuletresz;
				}
				//VÉGEREDMÉNY MEGJELENÍTÉSE

				console.log(ossznegyzetmeter);
				document.getElementById("osszalapterulet").textContent = ossznegyzetmeter;
				document.getElementById("vegeredmeny").textContent = Math.round(tervezesidij);
}
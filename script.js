function dateToText(date) {
    var hours = date.getHours()
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    if (hours < 10) hours = '0'+ hours;
    return hours + ":" + minutes + ":" + seconds;

}
function updateClocks() {
	for (var i = 0; i < window.arrClocks.length; i++) {
		var clock = window.arrClocks[i];
		var offset = window.arrOffsets[i];
		clock.innerHTML = dateToText(new Date(new Date().getTime()+offset));
	}
}
function startClocks() {
	clockElements = document.getElementsByClassName('clock');
	window.arrClocks = []
	window.arrOffsets = [];
	var j = 0;
	for(var i = 0; i < clockElements.length; i++) {
		el = clockElements[i];
		timezone = parseInt(el.getAttribute('timezone'));
		if (!isNaN(timezone)) {
			var tzDifference = timezone * 60 + (new Date()).getTimezoneOffset();
			var offset = tzDifference * 60 * 1000;
			window.arrClocks.push(el);
			window.arrOffsets.push(offset);
		}
	}
	updateClocks();
	clockID = setInterval(updateClocks, 1000);
}
setTimeout(startClocks, 100);


function date(){
    let today = new Date();

    let day = today.getDate(); //dzień miesiąca 21
    let month = today.getMonth(); // 0-11 (+1)
    month = month+1;
    let nday = today.getDay(); // 0-6 (np. 0 - niedziela)
    let year = today.getFullYear();

        switch(nday){
            case 0:
                nday ="Ndz";
            break
            case 1:
                nday = "Pn";
            break
            case 2:
                nday = "Wt";
            break
            case 3:
                nday = "Śr";
            break
            case 4:
                nday = "Czw";
            break
            case 5:
                nday = "Pt";
            break
            case 6:
                nday = "Sob";
            break
        }

    let d = document.querySelector("#date");
    let d1 = document.querySelector("#date1");
    let d2 = document.querySelector("#date2");
    let d3 = document.querySelector("#date3");
    console.log(d)
    d.innerText = `${day}.${month}.${year} ${nday}`;
    d1.innerText = `${day}.${month}.${year} ${nday}`;
    d2.innerText = `${day}.${month}.${year} ${nday}`;
    d3.innerText = `${day}.${month}.${year} ${nday}`;

}

date();

function troll(){
    alert("Sorki na tej Stronie nIE Sprzedajemy takiej wyciecZki")
}


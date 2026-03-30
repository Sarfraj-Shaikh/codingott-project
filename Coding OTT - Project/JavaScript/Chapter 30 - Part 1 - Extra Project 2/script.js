// ### Task: Bulb ON / OFF Project

function bulbOnOff() {

    let bulb = document.getElementById("bulb");
    let btn = document.getElementById("btn");

    if (btn.innerHTML === "Turn ON") {

        bulb.src = "https://png.pngtree.com/png-clipart/20231017/original/pngtree-retro-light-bulb-png-image_13326821.png";
        btn.innerHTML = "Turn OFF";

    } else {

        bulb.src = "https://purepng.com/public/uploads/large/purepng.com-bulbbulblightenergy-bulbbright-lightclipart-1421526485383ixhcs.png";
        btn.innerHTML = "Turn ON";

    }
}





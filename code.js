function minPlanes() {
    let n = parseInt(prompt("Enter the number of airports: "));
    let fuels = [];
    for (let i = 0; i < n; i++) {
        fuels[i] = parseInt(prompt("Enter the units of fuel on airport " + (i + 1) + ": "));
    }
    console.log(fuels)
    let planes = 0;
    let fuel = fuels[0];
    for (let i = 1; i < fuels.length; i++) {
        if (fuel < 1) {
            planes++;
            fuel = fuels[i];
        } else {
            fuel--;
        }
    }
    console.log("Minimum number of planes needed: " + (planes + 1));
}

minPlanes();

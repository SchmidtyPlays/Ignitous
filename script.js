const availableTexts = [
    "students",
    "teachers",
    "professors",
    "you"
];

var text = "";
var i = 0;
var j = 0;

async function changeText() {
    for (i; i <= availableTexts.length; i++) {
        if (i == availableTexts.length) {
            i = 0;
        }
        text = availableTexts[i];

        while (j < text.length) {
            document.getElementById("changingText").innerHTML += text.charAt(j);
            j++;
            await sleep(50);
        }

        await sleep(3000);

        while (j > 0) {
            document.getElementById("changingText").innerHTML = document.getElementById("changingText").innerHTML.slice(0, -1);
            j--;
            await sleep(50);
        }

        console.log(window.innerWidth);
    }
}

async function sleep(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

changeText();
const img = document.getElementById("image");
const heading1 = document.getElementById("heading1");
const heading2 = document.getElementById("heading2");

async function connectionStatus() {
  try {
    const fetchResult = await fetch(
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=" +
        new Date().getTime()
    );

    return fetchResult.status >= 200 && fetchResult.status < 300;
  } catch (e) {
    console.log(e);

    heading1.textContent = "OOPS!!! Your Internet Connection is Down.";
    img.src =
      "https://cdn.iconscout.com/icon/premium/png-256-thumb/no-internet-connection-3355044-2795218.png";
  }
}

// Monitor the connection

setInterval(async () => {
  const result = await connectionStatus();

  if (result) {
    heading1.textContent = "You're ONLINE!!! Connection Looks Good";
  }
}, 5000);

// Check Connection When page Loads

window.addEventListener("load", async (event) => {
  if (connectionStatus()) {
    heading1.textContent = "Online";
  } else {
    heading1.textContent = "Offline";
  }
});

const domain = document.querySelector("#domain");
const fieldset = document.querySelector("#result");
const ipAddress = document.querySelector("#ip-address");

domain.addEventListener("input", async (e) => {
  try {
    let result = await fetchIPAddress(e.target.value);
    fieldset.style.visibility = "visible";
    ipAddress.innerText = result;
  } catch (error) {
    // console.error("Error fetching IP:", error);
    fieldset.style.visibility = "hidden";
    ipAddress.innerText = "";
  }
});

async function fetchIPAddress(domain) {
  const response = await fetch(
    `https://cloudflare-dns.com/dns-query?name=${domain}`,
    {
      headers: {
        accept: "application/dns-json",
      },
    },
  );
  const respObj = await response.json();
  return respObj.Answer[0].data;
}

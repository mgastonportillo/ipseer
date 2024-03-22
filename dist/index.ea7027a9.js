const domain = document.querySelector("#domain");
const fieldset = document.querySelector("#result");
const ipAddress = document.querySelector("#ip-address");
fieldset.style = "visibility: hidden; width: fit-content; margin-top: 1rem;";
fieldset.children[0].style = "font-size: 1.5rem; font-weight: bold;";
fieldset.children[1].style = "text-align: center; font-size: 1.2rem; margin: 1rem 2rem";
domain.addEventListener("input", async (e)=>{
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
const fetchIPAddress = (domain)=>{
    return new Promise((resolve, reject)=>{
        fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=A`, {
            headers: {
                accept: "application/dns-json"
            }
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            resolve(res.Answer[0].data);
        }).catch((err)=>console.error(err));
    });
};

//# sourceMappingURL=index.ea7027a9.js.map

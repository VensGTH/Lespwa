async function bypass(na) {
    var url = document.getElementById("lnk").value;
    url = btoa(url);
    url = encodeURIComponent(url);
    var _0xfb59=["\x31","\x2F\x61\x70\x69\x2F\x62\x79\x70\x61\x73\x73\x3F\x75\x72\x6C\x3D","\x26\x69\x67\x6E\x6F\x72\x65\x41\x72\x63\x68\x69\x76\x65\x3D\x74\x72\x75\x65"];if(na== _0xfb59[0]){var u=_0xfb59[1]+ url+ _0xfb59[2]}else {var u=_0xfb59[1]+ url}
    //let u = btoa(document.getElementById("lnk").value);
    document.getElementById("submit").disabled = true
    document.getElementById("submit").innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span class="visually-hidden">  Loading...</span>'
    document.getElementById("success").style.display = "none";
    document.getElementById("warning").style.display = "none";
    document.getElementById("danger").style.display = "none";
    try {
        const response = await fetch(u, {
            method: 'GET',
        });
        const result = await response.json();
        if (result.success == true && result.url) {
            document.getElementById("success").style.display = "block";
            document.getElementById("success").innerHTML = `<a rel="noopener noreferrer nofollow" target="_blank" href="${result.url}">${result.url}</a>`
            if (result.cache == true) {
                document.getElementById("by").style.display = "none";
                document.getElementById("isCache").style.display = "";
            }
            console.log(result);
        } else if (result.success == false) {
            console.log(result);
            document.getElementById("warning").style.display = "block";
            document.getElementById("warning").innerHTML = result.err.message
        } else if (result.err.message == "Response code 403 (Forbidden)") {
            document.getElementById("warning").style.display = "block";
            document.getElementById("warning").innerHTML = result.err.message + " <b>This may mean that our IP was blocked by the site.</b>";
        }
    } catch {
        document.getElementById("danger").style.display = "block";
        document.getElementById("danger").innerHTML = "Error contacting API"
    }
    document.getElementById("submit").disabled = false
    document.getElementById("submit").innerHTML = 'Bypass!'
    document.getElementById("lnk").value = ''
}
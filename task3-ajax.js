var xhr;
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4){
            if(xhr.status===200){
            }else {
            }
        }
    }
    xhr.open('POST',URL);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send('k1=v1&k2=v2&k3=v3');
}

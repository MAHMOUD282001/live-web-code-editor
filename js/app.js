document.getElementById("htmlCode").value=`${localStorage.length === 0 ? '<div> Write Code Here </div>' : localStorage.getItem('html')}`;
document.getElementById("cssCode").value=`${localStorage.length === 0 ? '<div> Write Code Here </div>' : localStorage.getItem('css')}`;
document.getElementById("jsCode").value=`${localStorage.length === 0 ? '<div> Write Code Here </div>' : localStorage.getItem('js')}`;

// localStorage.clear()
console.log(localStorage)

function showPreview(){
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = ""+document.getElementById("cssCode").value+"";
    var jsCode = ""+document.getElementById("jsCode").value+"";
    var frame = document.getElementById("preview-window").contentWindow.document;
    
    localStorage.setItem('html', htmlCode)
    localStorage.setItem('css', cssCode)
    localStorage.setItem('js', jsCode)
    
    console.log(localStorage)
    
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();
}

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}

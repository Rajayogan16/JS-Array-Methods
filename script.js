function arraytostring()
{
    var text = String(document.getElementById("text").value);
    let array = text.split(",");
    document.getElementById("p1").innerHTML= array.toString();
}   

function joint()
{
    let text = String(document.getElementById("textjoin").value);
    let array = text.split(",");
    let joint = String(document.getElementById("join").value);
    let result = array.join(joint);
    document.getElementById("p2").innerHTML = result;
}

function popmethod()
{
    let text = String(document.getElementById("textpop").value);
    let array = text.split(",");
    let result = array.pop();
    document.getElementById("p3").innerHTML = "Popped Element:"+" "+result+ "<br>"+ "Array after Pop:"+" "+array;
}

function pushmethod()
{
    let text = String(document.getElementById("textpush").value);
    let a = String(document.getElementById("push").value);
    let array = text.split(",");
    let result = array.push(a);
    document.getElementById("p4").innerHTML = "Array length:"+" "+result+"<br>"+ "Array after Push:"+" "+array;
}

function shiftmethod()
{
    let text = String(document.getElementById("textshift").value);
    let array = text.split(",");
    let result = array.shift();
    document.getElementById("p5").innerHTML = array;
}

function unshiftmethod()
{
    let text = String(document.getElementById("textunshift").value);
    let a = String(document.getElementById("unshift").value);
    let array = text.split(",");
    let result = array.unshift(a);
    document.getElementById("p6").innerHTML = "Array length:"+" "+result+"<br>"+ "Array after Unshift:"+" "+array;
}

function delmethod()
{
    let text = String(document.getElementById("textdel").value);
    let a = Number(document.getElementById("del").value);
    let array = text.split(",");
    delete array[a];
    document.getElementById("p7").innerHTML = array;
}

function conmethod()
{
    let text1 = String(document.getElementById("textcon1").value);
    let text2 = String(document.getElementById("textcon2").value);
    let array1 = text1.split(",");
    let array2 = text2.split(",");
    const result = array1.concat(array2);
    document.getElementById("p8").innerHTML = result;
}

function splicemethod()
{
    let text = String(document.getElementById("textspl").value);
    let a = Number(document.getElementById("index").value);
    let b = Number(document.getElementById("Remove").value);
    let c = String(document.getElementById("splice").value);
    const array = text.split(",");
    let result = array.splice(a,b,c);
    document.getElementById("p9").innerHTML = "Removed elements:"+" "+result+"<br>"+"Array after Splice:"+" "+array;
}

function slicemethod()
{
    let text = String(document.getElementById("textsli").value);
    let a = Number(document.getElementById("start").value);
    let b = Number(document.getElementById("stop").value);
    const array = text.split(",");
    let result = array.slice(a,b);
    document.getElementById("p10").innerHTML = "Sliced Array:"+"  "+result;
}

function sortmethod()
{
    let text = String(document.getElementById("textsort").value); 
    const array = text.split(",");
    let result = array.sort();
    document.getElementById("p11").innerHTML = result;
}

function revmethod()
{
    let text = String(document.getElementById("textsort").value); 
    const array = text.split(",");
    let result = array.reverse();
    document.getElementById("p11").innerHTML = result;
}

function ascendmethod()
{
    let text = String(document.getElementById("textsort").value); 
    const array = text.split(",");
    let result = array.sort(function(a, b){return a - b});
    document.getElementById("p12").innerHTML = result+"<br>"+"Min value:"+" "+array[0]+"<br>"+"Max value:"+" "+array[array.length - 1];
}

function descendmethod()
{
    let text = String(document.getElementById("textsort").value); 
    const array = text.split(",");
    let result = array.sort(function(a, b){return b - a});
    document.getElementById("p12").innerHTML = result+"<br>"+"Min value:"+" "+array[0]+"<br>"+"Max value:"+" "+array[array.length - 1];
}

function randmethod()
{
    let text = String(document.getElementById("textsort").value); 
    const array = text.split(",");
    result = array.sort(function(){return 0.5 - Math.random()});
    document.getElementById("p12").innerHTML = result+"<br>"+"Min value:"+" "+array[0]+"<br>"+"Max value:"+" "+array[array.length - 1];
}

function fishmethod()
{
    let text = String(document.getElementById("textsort").value); 
    const points = text.split(",");
    for (let i = points.length -1; i > 0; i--) 
    {
        let j = Math.floor(Math.random() * (i+1));
        let k = points[i];
        points[i] = points[j];
        points[j] = k;
    } 
    document.getElementById("p12").innerHTML = points+"<br>"+"Min value:"+" "+points[0]+"<br>"+"Max value:"+" "+points[points.length - 1];
}

function maxmethod()
{
    let text = String(document.getElementById("textfind").value); 
    const array = text.split(",");
    let result = Math.max.apply(null,array)
    document.getElementById("p13").innerHTML = result;
}

function minmethod()
{
    let text = String(document.getElementById("textfind").value); 
    const array = text.split(",");
    let result = Math.min.apply(null,array)
    document.getElementById("p13").innerHTML = result;
}
console.log("my domain generator")
var pronoun = ['the','our']; 
var adj = ['great', 'big' ]; 
var noun = ['jogger','racoon'];

function createDomainNames (a,b,c) {
    let ol = document.getElementById("domainList");
    for (let i=0; i < a.length; i++) {
        for (let j=0; j < b.length; j++) {
            for (let el=0; el < c.length; el++){
                let domain = a[i] + b[j] + c[el]+".com";
               // console.log(domain);
                let li = document.createElement("li");
                let litxt = document.createTextNode(domain);
                li.appendChild(litxt);
                ol.appendChild(li);
        

            }
        }
    }
}
createDomainNames(pronoun,adj,noun);

document

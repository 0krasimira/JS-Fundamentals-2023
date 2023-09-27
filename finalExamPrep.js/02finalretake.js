function messageEncrypter (data){
    let pattern = /^([\$%])([A-Z][a-z]{2,})\1: ((?:\[[A-Za-z]+\]\|){2}\[[A-Za-z]+\]\|)$/g;
    
    let valid = [];
 
    let inputCounter = data.shift();
 
    for (const line of data) {
 
        let match = pattern.exec(line);
        
        if(match){
            let tag = match[2];
            let charCodes = match[3].match(/A-Za-z+/g);
            let message = String.fromCharCode(...charCodes);
            valid.push(`${tag}: ${message}`);
        }else{
            valid.push("Valid message not found!")
        }
        
    }
    
    valid.forEach(element => {
        console.log(element);
        
    });
 
}

messageEncrypter (["3",
"*Request*: [I]|[s]|[i]|",
"*Taggy@: [73]|[73]|[73]|",
"Should be valid @Taggy@: [v]|[a]|[l]|"])

console.log('-----------')

messageEncrypter (["3",
"@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn't be valid",
"*tAGged*: [i][i][i]|",
"Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|"])
var pronom = ['the','our'];
var adj = ['great', 'big' ];
var nom = ['jogger','racoon'];
var extn = ['.com', '.org'];

for (let a = 0; a < pronom.length; a++) {
    for (let b = 0; b < adj.length; b++) {
        for (let c = 0; c < nom.length; c++) {
            for (let d = 0; d < extn.length; d++) {
                
                console.log(pronom[a] + adj[b] + nom[c] + extn[d] );
                
                
            }
        }
    }
}

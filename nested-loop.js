// Nested Loop

/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5


var row, col, n =4


for( row = 1; row <= n; row++){
    var str = ''
    for(col = 1; col <= row; col++){
        str += col + '  '
        
    }
    console.log(str)
}
*/
/*
* * * * * 
* * * * * 
* * * * * 
* * * * * 
* * * * * 

var row, col, n = 5
for (row = 1; row <= n; row++) {
    var str = ''
    for(col = 1; col <= n; col++){
        str += '* '
    }
    console.log(str)
}
*/


var row, col, n = 5
for (row = 1; row <= n; row++) {
    var str = ''
    for (col = 1; col <= row; col++) {
        str += col + '  '
    }
    console.log(str)
}
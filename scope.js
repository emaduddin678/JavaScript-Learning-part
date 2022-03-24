{
    var x = 55;

    function test(){
        var x = 40
        // console.log(x)

        function nested(){
            var y = 30;
            console.log(x)
        }

        // console.log(y)
        nested()
    }
    test()
}



var a = 11;

function A(){
    var b = 12;
    function B(){
        var c = 23
        console.log(c) 
    }

    function C(){
        var d = 56;
        console.log(d)
    }

    console.log(b)
    D()
    B()
    C()
}

function D(n){
    return n + a
}


// A function has these scope-> B(), C(), a, b, D()
// B function has these scope-> a, b, c, C(), D(), B()
// C function has these scope-> a, b, d, C(), D(), B()
// D function has -> n, a, A()
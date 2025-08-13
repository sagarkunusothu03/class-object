class fname{
    constructor(fname,frollno){
        this.fname=fname;
        this.frollno=frollno;
    }
}
class fname2 extends fname{
    constructor(fname,frollno){
        //this.fname=fname;
        super(fname,frollno);
    }
}
var a=new fname2("sagar",6736);
document.getElementById("hi");
document.writeln("ROLLNO:"+a.frollno)
document.writeln("NAME:"+a.fname)
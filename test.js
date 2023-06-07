//1- classes:
// 2-methodes:insert ,delete,transver||display,searchbyvalue.insertbetwwen
class node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class linked{
    constructor(){
        this.head=null
        this.tail=null
    }
    // methodes
    insert(value){
        if(!this.head)
        {
            this.head=new node(value)
        }else{
            var old=this.tail
            this.tail=new node(value)
            old.next=this.tail
        }
       
    }

}
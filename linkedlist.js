
class Mynode{  
// value
// next
constructor(value){
this.value=value
this.next=null
}

}
class linkedlist{
    constructor(){
        this.head=null 
        this.tail=null 
        }
  display(){
    let node=this.head
    while(node){
          console.log(node)
          node=node.next
    }
  }
  search(value){
    let node=this.head
    while(node){
        if (node.value==value) {
            return node
        } 
          node=node.next
    }
    return null
  }
  insert(newvalue,bvalue=this.tail){
    let newn=new Mynode(newvalue)
    // console.log(newn,bvalue)
    if(!this.head){
        //   empty  
       // console.log(bvalue,this.tail)  
        this.head=newn
        this.tail=newn
        // console.log(this.head,this.tail)
    }
    else if(typeof (bvalue)=="object" ||this.tail.value==bvalue){
        this.tail.next=newn
        this.tail=newn
    }
else{
    let perv=this.search(bvalue)
    let after=perv.next
     perv.next=newn
     newn.next=after
    }
 
  }
  d_pop(){
    if(this.head==this.tail){
     var node=this.head
      this.head=null
      this.tail=null
    }else{
     var node=this.head
      while(node.next){
         if(node.next==this.tail){
            var prv=node
         }
       node=node.next
      }
      prv.next=null
      this.tail=prv
     }
     return node.value
    }
  
  delete(value){
    let node=this.head
    if(value==this.tail.value){
      x.d_pop()
    }else{
      while(node.next){
        if(node.next.value==value){
          var prv=node
          var deleted=node.next
          prv.next=deleted.next
       }
        node=node.next
      }
    }
    
    

  }
}

let x=new linkedlist()
x.insert("nazem")
x.insert("yasser")
x.insert("hager")
x.insert("marwa")
// ------(newvalue,     bvalue)
x.insert("afteryasser","yasser")
x.insert("afterymarwa","marwa")
x.delete("afterymarwa")
// x.insert("maiar")
// console.log(x.d_pop()) 
x.display()

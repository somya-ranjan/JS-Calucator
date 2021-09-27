let ans=document.getElementById("outPut")

let insertData=(e)=>{
    document.formData.display.value = document.formData.display.value + e
    // console.log(e);
};

let back=()=>{
    let del=document.formData.display.value;
    document.formData.display.value=del.substring(0,del.length-1)
}

let clean=()=>{
    document.formData.display.value= null
    ans.innerText= null
}

let equal=()=>{
    ans.innerText=eval(document.formData.display.value)
}

let sqrt=()=>{
    ans.innerText=Math.sqrt(document.formData.display.value)
}

let per=()=>{
    // document.formData.display.value = document.formData.display.value /100
    let val=document.formData.display.value;
    let data=eval(val);
    let percentage = `${data*100 }%`
    ans.innerText = percentage
}

let fact=()=>{
    let n = document.formData.display.value;
    let answer=1;
    if(n==0||n==1){
        return answer
    }else{
        for(var i=n; i>=1;i--){
            answer=answer * i
        }
    }
    ans.innerText = answer
}

let log=()=>{
    let val=document.formData.display.value;
    ans.innerText = Math.log10(val)
}

let sin=()=>{
    let val=document.formData.display.value;
    ans.innerText = Math.sin(val);
}

let cos=()=>{
    let val=document.formData.display.value;
    ans.innerText = Math.cos(val);
}

let tan=()=>{
    let val=document.formData.display.value;
    ans.innerText = Math.tan(val);
}
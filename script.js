const employe=[
    { name: "Alice Johnson", department: "HR" },
    { name: "Bob Smith",     department: "ENGINEERING" },
    { name: "Charlie Brown", department: "MARKETING" },
    { name: "David Wilson",  department: "ENGINEERING" },
    { name: "Eve Adams",     department: "HR" }
]
//console.log(employe);
const dept = document.getElementById("dept");
const employlist=document.getElementById("empdetails");
dept.addEventListener("change",(e)=>{
    console.log(e.target.value)
    renderemploye(e.target.value)
})
const renderemploye=(data)=>{
    employlist.innerHTML="";
    const output= data=="ALL"?employe:employe.filter(emp=>emp.department==data)
    output.forEach(emp=>{
        const li=document.createElement("li");
        li.textContent=`${emp.name}-${emp.department}`
        employlist.appendChild(li);
    })
}
renderemploye("ALL")


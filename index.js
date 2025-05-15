let list  = []



function filterByCharacter(char, list) {
    
return list.filter((i) => {
    if(typeof i === 'string') {
        if(i.includes(char)) return true
    }
})
}


console.log(filterByCharacter("e", ["banana", "pessego"]))
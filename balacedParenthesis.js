function isParenthesisBalanced(inputString){
    const stack = []
    inputString.split('').forEach(element => {
        if(element === '(' || element === '{' || element === '[')
        {
            stack.push(element)
        }
        if((element ===')' && stack[stack.length-1] ==='(') || (element ==='}' && stack[stack.length-1] === '{') || (element ===']' && stack[stack.length-1] === '[')){
            stack.pop()
        }
        console.log(stack)
    });
   
    return stack.length ? false : true
}

console.log(isParenthesisBalanced('(}'))
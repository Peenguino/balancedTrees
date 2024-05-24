interface twoThreeNode
{
    data:number|string
    maxSubSx?:number
    maxSubMid?:number
    sx?:twoThreeNode
    mid?:twoThreeNode
    dx?:twoThreeNode
    childrenCount?:number
}

class twoThreeNode implements twoThreeNode
{
    constructor(content:number|string)
    {
        if(typeof content == "number")
            this.data = content
        if(typeof content == "string")
            this.data = "intermediate"
    }
}

class twoThreeTree
{
    head:twoThreeNode = new twoThreeNode("intermediate")
    constructor(firstNum:number)
    {
        this.head.sx = new twoThreeNode(firstNum)
        this.head.maxSubSx = firstNum
        this.head.childrenCount = 1
    }

    /*
    add(num:number)
    {
        let currentNode:twoThreeNode = this.head

        function recursiveAdd(currentNode)
        {
            if(!(currentNode.sx.sx))
                currentNode.

            if(num <= currentNode.maxSubSx!)
            {
                currentNode = currentNode.sx!
                recursiveAdd(currentNode)
            }
            if(num <= currentNode.maxSubMid!)
            {
                currentNode = currentNode.mid!
                recursiveAdd(currentNode)
            }

        }
    }
    */
}

let tree = new twoThreeTree(5)

console.log(tree)

console.log("commit try")

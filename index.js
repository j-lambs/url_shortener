
// 65-90 A-Z
// 97-122 a-z

// sums ASCII values of string and gets remainder of 52
// 52 is num of upper/lowercase chars
function convertStringToASCII(linkPart)
{
    const numEncodingChars = 52
    let sum = 0
    for (let i = 0; i < linkPart.length; i++)
    {
        sum = sum + linkPart.charCodeAt(i)
    }
    return sum % numEncodingChars
}

function convertStringListToASCII(stringList)
{
    
}

function partitionString(str, max)
{
    let per = Math.floor(str.length / max)
    let arr = []
    for (i = 0; i < str.length; i+=4)
    {
        arr.push(str.slice(i, i+4))
    }
    if (arr.length > max)
    {
        arr.pop()
    }
    return arr
}

const str = 'https://www.twitch.tv/florryworry'
const myList = partitionString(str, 8)
for(let i = 0; i < myList.length; i++)
{
    console.log(myList[i])
}
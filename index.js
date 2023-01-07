
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
    let convertedStr = ''
    for (let i = 0; i < stringList.length; i++)
    {
        let num = convertStringToASCII(stringList[i])
        let char = codeToChar(num)
        convertedStr += char
    }
    return convertedStr
}

// https://stackoverflow.com/a/3145048/20435863
function codeToChar( number ) 
{
    if ( number >= 0 && number <= 25 ) // a-z
      number = number + 97;
    else if ( number >= 26 && number <= 51 ) // A-Z
      number = number + (65-26);
    else
      return false; // range error
    return String.fromCharCode( number );
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
// for (let i = 0; i < myList.length; i++)
// {
//     console.log(myList[i])
// }
let convertedList = convertStringListToASCII(myList)
// for (let i = 0; i < convertedList.length; i++)
// {
//     console.log(convertedList[i])
// }

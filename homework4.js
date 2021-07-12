// xndir 1
function seperateEvenAndOdd (arr) {
    let arr1 = []
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            arr1.push [i]
        } else {
            arr2.push [i]
        }
    } 
}
return arr1, arr2

//xndir 2

function findTheMatch (arr, string) {
    for (let i = 0; i < arr.length; i++) {
        if (string.length === ??? )
    }
}
// ays codov pordzum ei maghel arrayic ayn stringnery voronq unen nuyn erkarutyuny vory trvac e mer stirngin, bayc kisat e stacvel sharunakutyuny chhaskaca


// xndir 3
function removeString (string1, string2) {
    let string1
    let string2
    for (let i = string2; i < string1.length; string1 - i ) {
        
    } return string1
}  //xndiry kisat e stacvel

// xndir 4
const returnUnique = function (arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let isIncluded = false 
        for (let j = 0; j < i; j++) {
            if (arr[i] === arr[j]) {
                isIncluded = true;
                break;
            }
        }
        if (!isIncluded) {
            result.push (arr[i])
        }
    }
    return result;
}

//xndir 5
function changeSymbol (string, symbol1, symbol2) {
    for (let i = 0; i < string.length; i++) {
        if (i === symbol1) {
            symbol1 = symbol2
        }
    }
    return string
}

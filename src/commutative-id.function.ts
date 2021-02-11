
/**
 * returns a 32 byte hash of two guid values using a commutative function, which means
 *  it won't matter what order the two id parameters are passed in, it will return the same result.
 * @param a a guid string, may contain hashes
 * @param b another guid string
 */
export function getCommutativeId(a:string, b:string){
    if(a !== undefined && b !== undefined){
        let aHexArray = a.replace(/-/g, '').split('');
        let bHexArray = b.replace(/-/g, '').split('');
        let commutativeId = [];
        for(var i = 0; i<32; i++){
            let product = (((parseInt(aHexArray[i], 16)+1) * (parseInt(bHexArray[i], 16) + 1) - 1).toString(16)).padStart(2,'0');
            commutativeId.push(product);
        }
        return commutativeId.join('');
    }
    else return '';
}
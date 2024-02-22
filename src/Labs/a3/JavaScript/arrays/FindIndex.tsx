function FindIndex(){
    let numberArray1 = [1, 2, 4, 5, 6];
    let stringArray1 = ['string1', 'string3'];

    const fourIndex = numberArray1.findIndex(a => a === 4);
    const string3Index = stringArray1.findIndex(a => a === 'string3');
    return(
        <div>
            <h2>FindIndex Function</h2>
            <p>numberArray1 = {numberArray1}</p>
            <p>stringArray1 = {stringArray1}</p>
            <p>fourIndex = {fourIndex}</p>
            <p>string3Index = {string3Index}</p>
        </div>
    );
}

export default FindIndex;
function MapFunction(){
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    const square = (a: number) => a * a;

    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(b => b * b * b);

    return(
        <div>
            <h2>Map Function</h2>
            <p>numberArray1 = {numberArray1}</p>
            <p>squares = {squares}</p>
            <p>cubes = {cubes}</p>
        </div>
    );
}

export default MapFunction;
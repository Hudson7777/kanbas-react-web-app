function ImpliedReturn() {

    const add = (a: number, b: number) => a + b;
    const multiply = (a: number, b: number) => a * b;

    return (
        <div>
            <h2>Implied Return</h2>
            <p>add(2, 3) =  {add(2, 3)}</p>
            <p>multiply(2, 3) = {multiply(2, 3)}</p>
        </div>
    );
}

export default ImpliedReturn;
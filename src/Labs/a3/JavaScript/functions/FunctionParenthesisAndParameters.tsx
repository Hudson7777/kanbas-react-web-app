function FunctionParenthesisAndParameters() {
    const square  = (a: number) => a * a;
    const plusOne = (a: number) => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);
    return (
        <div>
            <h2>Function Parenthesis and Parameters</h2>
            <p>twoSquared = {twoSquared}</p>
            <p>threePlusOne = {threePlusOne}</p>
        </div>
    );
}

export default FunctionParenthesisAndParameters
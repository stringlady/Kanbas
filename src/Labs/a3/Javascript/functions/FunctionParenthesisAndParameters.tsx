function FunctionParenthesisAndParameters() {
    const square  = (a: number) => a * a;
    const plusOne = (a: number) => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);

    return (
        <div>
        <p>twoSquared = {twoSquared}</p>
        <p>square2 = {square(2)}</p>
        <p>threePlusOne = {threePlusOne}</p>
        <p>plusOne = {plusOne(3)}</p>
        </div>
    )
}

export default FunctionParenthesisAndParameters;
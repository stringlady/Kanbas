function ImpliedReturn() {
    const multiply = (a: number, b: number) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
    return (
        <div>
            <p>fourTimesFive = {fourTimesFive}</p>
            <p>multiply = {multiply(4,5)}</p>
        </div>
    )
}

export default ImpliedReturn;
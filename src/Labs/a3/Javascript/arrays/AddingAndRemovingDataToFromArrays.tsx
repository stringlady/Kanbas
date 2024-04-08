function AddingAndRemovingDataToFromArrays() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    numberArray1.push(6);         // adding new items
    stringArray1.push('string3');
    numberArray1.splice(2, 1);    // remove 1 item starting at 2
    stringArray1.splice(1, 1);

    return (
        <div>
            <p>numberArray1 = {numberArray1}</p>
            <p>stringArray1 = {stringArray1}</p>
        </div>
    )
}

export default AddingAndRemovingDataToFromArrays;
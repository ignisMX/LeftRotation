function simpleLeftRotation(collection, d){

    //Print collection
    console.log(collection);
    for(var counter = 0; counter < d; counter ++){
        //move first element at end of array
        collection.push(collection[0]);
        //delete first element
        collection.shift();
        //Print collection
        console.log(collection);
    }

    return collection;
}

function withoutTrickLeftRotation(collection, d){

    console.log(collection);
    var rotated = [];
    for(var rotations = 0; rotations < d; rotations ++){
        rotated = [];
        rotated[collection.length - 1] = collection[0];
        for(var counter = collection.length - 2; counter > -1; counter --){
            rotated[counter] = collection[counter + 1];
        }
        console.log(rotated);
        collection = rotated;
    }

    return rotated;
}

function testLeftRotation(){
    var collection = [1,2,3,4,5];
    withoutTrickLeftRotation(collection,54);
    simpleLeftRotation(collection, 54);
}

testLeftRotation();
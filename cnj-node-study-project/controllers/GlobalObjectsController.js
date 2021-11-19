
const arrayObjects = async (req, res, next) => {

    console.log('내장객체')
    /* 구조분해 할당 Swap */
    const array = [1,2,3];
    console.log('array=', array);
    [array[1], array[2]] = [array[2], array[1]];
    console.log('array=', array);

    const [a, b, c=1, d=1] = array;
    console.log(a,b,c, d);


    return res.status(200).json({
        message: "success",
    });
}

module.exports = {
    arrayObjects
}
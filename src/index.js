// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
    return propertyName
};
const createNotEnumerableProperty = (propertyName) => {
    return Symbol(propertyName)
};
const createProtoMagicObject = () => {
    let tmp = function () {
    };
    tmp.prototype = tmp.__proto__;
    return tmp
};

let count = 0;
const incrementor = () => {
    count++;
    return incrementor
};
incrementor.valueOf = function () {
    return count
};

const asyncIncrementor = () => {
};
const createIncrementer = () => {
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {
};
const getDeepPropertiesCount = () => {
};
const createSerializedObject = () => {
};
const toBuffer = () => {
};
const sortByProto = () => {
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
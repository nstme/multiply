module.exports = function multiply(first, second) {
  let result = (parseInt(first) * parseInt(second)).toString();
     if (result > Number.MAX_SAFE_INTEGER) {
    return (BigInt(first) * BigInt(second)).toString();
    } else {
        return result;
    }
}

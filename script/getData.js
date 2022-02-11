const Interface = require('ethers').Interface;

module.exports = (abi, method, params) => {
    const iface = new Interface(abi);
    const functionInfo = iface.functions[method](...params);
    return functionInfo.data;
}



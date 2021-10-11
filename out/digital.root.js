"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.digitalRoot = void 0;
var digitalRoot = function (n) {
    var digitalRootSum = String(n).split('');
    var sum = 0;
    for (var index = 0; index < digitalRootSum.length; index++) {
        sum = sum + (Number(digitalRootSum[index]));
    }
    return sum.toString().split('').length == 1 ? sum : (0, exports.digitalRoot)(sum);
};
exports.digitalRoot = digitalRoot;
var digitalRootSum = (0, exports.digitalRoot)(456);
//# sourceMappingURL=digital.root.js.map
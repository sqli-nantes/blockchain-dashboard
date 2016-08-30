"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var users = [
            {
                address: "0x57c5424aa973c2a5e75286bd",
                balance: 2048
            },
            {
                address: "0x57c5424a5535696aebc2f1a4",
                balance: 3721
            },
            {
                address: "0x57c5424aef7e74aea13a2e30",
                balance: 262
            },
            {
                address: "0x57c5424a1c9cc2f041997ee3",
                balance: 2289
            },
            {
                address: "0x57c5424a90a720962bcd557f",
            }
        ];
        return { users: users };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map
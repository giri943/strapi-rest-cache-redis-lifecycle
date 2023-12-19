//const {flushCache} = require("../../../../redis")
module.exports = {
    async afterCreate() {
        await flushCache();
    },
    async afterUpdate() {
        await flushCache();
    },
    async afterDelete() {
        await flushCache();
    },
    async afterDeleteMany() {
        await flushCache();
    }
};

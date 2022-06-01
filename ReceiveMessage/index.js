module.exports = async function(context, data) {
    context.log(data);
    context.log(JSON.parse(data));
};
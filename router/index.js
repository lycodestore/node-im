const getStaticResource = require('./modules/static')
const appRouter = require('./modules/app')

function router(req, res) {
    let url = req.url
    if (appRouter[url]) {
        let action = appRouter[url]
        action(req, res)
    } else {
        getStaticResource(req, res)
    }
}

module.exports = router
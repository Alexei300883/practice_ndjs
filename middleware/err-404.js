module.exports = (req, res) => {
    res.status(404)
    res.json({statusCode: '404',  statusText: 'страница не найдена'})
}
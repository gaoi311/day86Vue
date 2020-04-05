module.exports = {
    devServer:{
        before:(app, serve)=>{
            app.get('/api/post', (req, res)=>{
                res.json({
                    title: '学习vue-router的数据获取',
                    body: '1.在导航完成之后获取数据'
                })
            })
        }
    }
}
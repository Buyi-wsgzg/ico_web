module.exports = {
  async indexPage(ctx) {
    const title = 'invest page'
    await ctx.render('invest', {
      title,
    })
  },
}

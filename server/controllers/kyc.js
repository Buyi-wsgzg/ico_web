module.exports = {
  async indexPage(ctx) {
    const title = 'kyc page'
    await ctx.render('kyc', {
      title,
    })
  },
}

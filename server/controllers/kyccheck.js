module.exports = {
  async indexPage(ctx) {
    const title = 'kyc check page'
    await ctx.render('kyccheck', {
      title,
    })
  },
}

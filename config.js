const config = {

  port: 3001,

  database: {
    DATABASE: 'ico_web',
    USERNAME: 'root',
    PASSWORD: '1qaz@WSX0927',
    PORT: '3306',
    HOST: 'localhost'
  },

  contract: {
    MOECOIN: '0x3b8f4f2376dc9b433606eefa8851deaa134f20c7',
    MOEFUND: '0x377cef524d0442cfefcfa59bf2dd4f4f672e4678',
    MOECROWD: '0x71a533ba5fe4aca8b0b10db48be5a216ee6a3451',
    GANACHE_URL: 'http://localhost:7545'
  }
}

module.exports = config

import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Layout, Menu, Breadcrumb} from 'antd'
import FormGroup from './../components/form-group.jsx'
import HeadeNav from './../components/header-nav.jsx'
import FooterCommon from './../components/footer-common.jsx'

import 'antd/lib/layout/style/css'

const { Header, Content, Footer } = Layout

class App extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <HeadeNav/>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <div style={{}}>
              <a href="/kyc"><Button>KYC认证</Button></a>
              <a href="/kyccheck"><Button>投资MoeCoin</Button></a>
              <a href="https://moecoin.one/index-zh.html"><Button>访问官网</Button></a>
            </div>
          </div>
        </Content>
        <FooterCommon />
      </Layout>
    )
  }
}


export default App

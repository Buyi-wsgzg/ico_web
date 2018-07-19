import React from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
const {  Footer } = Layout

class FooterCommon extends React.Component {
  render() {
    return (
      <Footer style={{ textAlign: 'center' }}>
        MOECOIN FOUNDATION LTD. ©2018 Created by MoeCoin Team.
      </Footer>
    )
  }
}


export default FooterCommon

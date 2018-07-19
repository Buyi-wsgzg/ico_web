import React from 'react'
import { Tabs } from 'antd'
import CheckWhiteList from './../components/kyc-check-form.jsx'

const TabPane = Tabs.TabPane

class FormGroup extends React.Component {
  render() {
    return (
      <div style={{ width: "640px", margin: "0 auto" }}>
        <Tabs defaultActiveKey="1" size="small">
          <TabPane tab="CheckWhiteList" key="1">
            <CheckWhiteList />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default FormGroup

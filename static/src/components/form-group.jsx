import React from 'react'
import { Tabs } from 'antd'
import KycRegForm from './../components/kyc-reg-form.jsx'

const TabPane = Tabs.TabPane

class FormGroup extends React.Component {
  render() {
    return (
      <div style={{ width: "640px", margin: "0 auto" }}>
        <Tabs defaultActiveKey="1" size="small">
          <TabPane tab="KycVerification" key="1">
            <KycRegForm />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default FormGroup

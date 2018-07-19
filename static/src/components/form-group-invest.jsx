import React from 'react'
import { Tabs } from 'antd'
import InvetorPayEther from './../components/invest-form.jsx'

const TabPane = Tabs.TabPane

class FormGroup extends React.Component {
  render() {
    return (
      <div style={{ width: "640px", margin: "0 auto" }}>
        <Tabs defaultActiveKey="1" size="small">
          <TabPane tab="InvetorPayEther" key="1">
            <InvetorPayEther />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default FormGroup

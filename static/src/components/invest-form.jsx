import React from 'react'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, DatePicker, message } from 'antd'
import { investEthApi } from './../api/invest-eth.js'

const FormItem = Form.Item
const Option = Select.Option


const InvetorPayEther = Form.create()(React.createClass({
  async handleSubmit(e) {
    e.preventDefault()
    let values = await this.getFormValues()

    if(values) {
      let result = await investEthApi(values)
      if(result && result.success === true) {
        message.success('Invest Success! Thanks.')
        window.location.href = '/'
      }else if(result && result.message) {
        message.error(result.message)
      }
    }else {
      message.error('Server is too busy.')
    }
  },

  getFormValues() {
    let that = this
    return new Promise((resolve, reject) => {
      that.props.form.validateFieldsAndScroll((err, values) => {
        if(!err) {
          resolve(values)
        }else {
          reject(false)
        }
      })
    })
  },

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    }
    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 6,
      },
    }
    
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              Ether Address
              <Tooltip title="必须是小写6-16位字母，或数字，或下划线，不能以数字开头">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('addr', {
            rules: [{ required: true, message: '请输入您的Ether地址' }],
          })(
            <Input />
          )}
        </FormItem>
        
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              Invest Quality
              <Tooltip title="必须是数字，包括小数，不支持科学计数法以及分数">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('values', {
            rules: [{ required: true, message: '请输入投资的Ether数量' }],
          })(
            <Input />
          )}
        </FormItem>
        
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">确定</Button>
        </FormItem>
      </Form>
    )
  },
}))

export default InvetorPayEther

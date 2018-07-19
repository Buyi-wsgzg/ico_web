import React from 'react'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, DatePicker, message } from 'antd'
import { kycRegApi } from './../api/kyc-reg.js'

const FormItem = Form.Item
const Option = Select.Option


const KycRegForm = Form.create()(React.createClass({
  async handleSubmit(e) {
    e.preventDefault()
    let values = await this.getFormValues()

    if(values) {
      let result = await kycRegApi(values)
      if(result && result.success === true) {
        message.success('Register Success')
        window.location.href = '/kyc?kycRegSuccess=true'
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
              Full Name
              <Tooltip title="必须是小写6-16位字母，或数字，或下划线，不能以数字开头">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '请输入您的名字' }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={(
            <span>
              Email Address
              <Tooltip title="必须是小写6-16位字母，或数字，或下划线，不能以数字开头">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('email', {
            rules: [{ required: true, message: '请输入您的Email地址' }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={(
            <span>
              Birthday
              <Tooltip title="必须是小写6-16位字母，或数字，或下划线，不能以数字开头">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('birthday', {
            rules: [{ required: true, message: '请输入您的出生日期' }],
          })(
            <DatePicker />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label={(
            <span>
              Country
              <Tooltip title="必须是小写6-16位字母，或数字，或下划线，不能以数字开头">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('country', {
            rules: [{ required: true, message: '请选择您的国籍' }],
          })(
            <Input />
          )}
        </FormItem>

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
        
        <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
          {getFieldDecorator('politically-one', {
            valuePropName: 'checked',
          })(
            <Checkbox>I hereby declare that I am not a "Politically Exposed Person" (PEP), based on the definition of the Financial Action Task Force (FATF) 40 or the EU 3rd AML Directive.</Checkbox>
          )}
        </FormItem>

        <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
          {getFieldDecorator('politically-two', {
            valuePropName: 'checked',
          })(
            <Checkbox>Check here to confirm that you are NOT a U.S. citizen, resident or entity (each a "U.S. Person") nor are you purchasing TOS Tokens or signing on behalf of a U.S. Person.</Checkbox>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">确定</Button>
        </FormItem>
      </Form>
    )
  },
}))

export default KycRegForm

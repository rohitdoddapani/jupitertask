import React from 'react'
import { Layout, Breadcrumb, Form, Button, Switch } from 'antd';

const { Content } = Layout;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

export default function Notifications() {
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Success:', values);
        alert("details captured!");
    };
    const onReset = () => {
        form.resetFields();
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Notifications</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 580 }}>
                    <Form
                        {...layout}
                        form={form}
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item label="Send All Alerts" name="alerts">
                            <Switch />
                        </Form.Item>
                        <Form.Item label="Alerts only task success">
                            <Switch />
                        </Form.Item>
                        <Form.Item label="Alerts only for failed tasks">
                            <Switch />
                        </Form.Item>
                        <Form.Item label="I don't want any alerts">
                            <Switch />
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit" style={{marginRight: '15px'}}>
                            Submit
                            </Button>
                            <Button htmlType="button" onClick={onReset}>
                            Reset
                            </Button>
                            
                        </Form.Item>
                    </Form>
                </div>
            </Content>
        </div>
    )
}

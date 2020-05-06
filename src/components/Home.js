import React from 'react'
import { Breadcrumb, Form, Input, Button, DatePicker } from 'antd';

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

export default function Home() {
    const [form] = Form.useForm();

    const onFinish = values => {
        alert('Values noted check in console')
        console.log('Success:', values);
    };
    const onReset = () => {
        form.resetFields();
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Profile Info</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 540 }}>
                    <Form
                        {...layout}
                        form={form}
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    max:30
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item 
                            label="DOB"
                            name="dob"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <DatePicker />
                        </Form.Item>
                        <Form.Item
                            label="Profession"
                            name="Profession"
                            rules={[
                                {
                                    required: true,
                                    max:30
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Designation"
                            name="Designation"
                            rules={[
                                {
                                    required: true,
                                    max:30
                                },
                            ]}
                        >
                            <Input />
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

        </div>
    )
}

import React from 'react'
import { Input,Layout, Breadcrumb, Form, Button,Select ,Checkbox } from 'antd';

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

export default function Tasks() {
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Success:', values);
        alert("details collected check in console");
    };
    const onReset = () => {
        form.resetFields();
    };
    const onValidate = () => {
        form.validateFields();
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Tasks</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 580 }}>
                    <Form
                        {...layout}
                        form={form}
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item 
                            label="Source Name"
                            name="source"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Select>
                                <Select.Option value="source1">source1</Select.Option>
                                <Select.Option value="source2">source2</Select.Option>
                                <Select.Option value="source3">source3</Select.Option>
                                <Select.Option value="source4">source4</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item  name="checked" label="Enable Logging" valuePropName="checked">
                            <Checkbox />
                        </Form.Item>
                        <Form.Item 
                            name="sqlarea"
                            label="Provide SQL"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Input.TextArea style={{ height: 100 }} />
                        </Form.Item>
                        <Form.Item label="Target Result" name="target" rules={[{required: true,message: 'please select from the dropdown'}]} >
                            <Select placeholder="select" allowClear>
                                <Select.Option value="demo1">Demo1</Select.Option>
                                <Select.Option value="demo2">Demo2</Select.Option>
                                <Select.Option value="demo3">Demo3</Select.Option>
                                <Select.Option value="demo4">Demo4</Select.Option>
                                <Select.Option value="demo5">Demo5</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit" style={{marginRight: '15px'}}>
                            Submit
                            </Button>
                            <Button htmlType="button" type="danger" onClick={onReset} style={{marginRight: '15px'}}>
                            Reset
                            </Button>
                            <Button htmlType="button" style={{background:'green',color: 'white'}} onClick={onValidate}>
                            Validate
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Content>
        </div>
    )
}

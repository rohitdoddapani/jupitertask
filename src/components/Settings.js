import React from 'react'
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;


export default function Settings() {
    
    return (
        <div>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Notifications</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 580 }}>
                    Content here
                </div>
            </Content>
        </div>
    )
}

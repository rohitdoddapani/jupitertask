import React from 'react';
import Title from 'antd/lib/typography/Title';
import { Layout, Avatar } from 'antd';
import {Link} from 'react-router-dom';

const { Header } = Layout;

export default function NavBar() {
    return (
        <Header style={{ padding: 10 }}>
            <Title level={2}><Link  to="/" style={{ float:"left"}} >Logo</Link>
            </Title>
            <Avatar style={{ float: 'right',marginTop:'-6px' }} src='../dp.png'  />
            <Title style={{ color: 'white', float: 'right',marginTop:'-9px' }} level={3}>Jupiter</Title>
        </Header>
    )
}

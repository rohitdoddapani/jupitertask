import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { Layout } from 'antd';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Home from './components/Home';
import Notifications from './components/Notifications';
import Tasks from './components/Tasks';
import Settings from './components/Settings';


const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <NavBar />
          <Layout>
            <SideBar />
            <Layout>
              <Content style={{ padding: '0 50px' }}>
                <Route exact path="/" component={Home} />
                <Route path="/settings" component={Settings} />
                <Route path="/notifications" component={Notifications} />
                <Route path="/Tasks" component={Tasks} />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    );
  }
}



export default App;
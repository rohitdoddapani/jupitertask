import React from 'react'
import { Layout, Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Link } from 'react-router-dom';
import Data from '../localdata.json';

const { Sider } = Layout;



export default function SideBar() {
    return (

        <Sider>
            <Menu
                defaultSelectedKeys={['Dashboard']}
                mode="inline"
            >
                {
                    Data.map((main) =>
                        
                        <SubMenu
                            title={
                                <span>{main.name}</span>
                            }
                        >
                            {main.details.map((sub) => 
                               
                                <Menu.Item key={sub.id}>
                                    <span>{sub.info}</span>
                                    {
                                        main.name==="My Tasks"
                                        ?   <Link to={`/tasks/${sub.info}`} />
                                        :   sub.info==="Home"
                                            ?   <Link to="/" />
                                            :   <Link to={`/${sub.info}`} />
                                    }
                                </Menu.Item>
                            
                            )}
                        </SubMenu>
                    )
                }
            </Menu>
        </Sider>
    )

}

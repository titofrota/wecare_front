  
import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import './styles.scss'
import { Avatar } from 'antd';
import { ReactComponent as Avatar1 } from '../../../../src/assets/avatars/039-man-7.svg';
import { ReactComponent as Logo } from '../../../../src/assets/logo-wecare.svg';
import { UserOutlined } from '@ant-design/icons';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <nav className="navbar-logo" href="/">
                    <Logo/>
                </nav>
                <div className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <div className={item.cName} href={item.url}>
                                {item.title}
                                </div>
                            </li>
                        )
                    })}
                </div>
                <Avatar size={45} icon={<UserOutlined />} />
            </nav>
        )
    }
}

export default Navbar;
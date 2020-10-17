import React, { Component } from 'react';
import './MegaMenu.css';


class MegaMenu extends Component {
    state = {
        currentHover: 0,
    }


    render() {


        const lables = this.props.data.menu.map((lkey, index) => {

            return this.props.data.customLable ?
                <div onMouseOver={() => this.setState({ currentHover: index })} style={{ width: '100%' }}>
                    {this.props.data.customLable(lkey.lable)}
                </div> :
                <div onMouseOver={() => this.setState({ currentHover: index })} style={this.props.data.lableStyle}>
                    {lkey.lable}
                </div>
        })


        const menu = this.props.data.customMenu ?
            this.props.data.customMenu(lables) :
            <div style={this.props.data.menuStyle} className='MegaMenuLables'>
                {lables}
            </div>


        const component = this.props.data.renderAll ?
            <React.Fragment>
                {menu}
                {this.props.data.menu.map((mkey, index) => {
                    return (
                        <div className={`MegaMenuContents ${this.state.currentHover === index ? '' : 'Hidden'}`}>
                            {this.props.data.menu[this.state.currentHover].megaData ?
                                <MegaMenu data={this.props.data.menu[this.state.currentHover].megaData} /> :
                                this.props.data.menu[this.state.currentHover].component}
                        </div>
                    )
                })}
            </React.Fragment> :
            <React.Fragment>
                {menu}
                <div className='MegaMenuContents'>
                    {this.props.data.menu[this.state.currentHover].megaData ?
                        <MegaMenu data={this.props.data.menu[this.state.currentHover].megaData} /> :
                        this.props.data.menu[this.state.currentHover].component}
                </div>
            </React.Fragment>


        const container = this.props.data.customContainer ?
            this.props.data.customContainer(
                component
            ) :
            <div style={this.props.data.containerStyle} className={`MegaMenu ${this.props.data.rtl ? 'RTL' : ''} ${this.props.data.fillParent ? 'Fill' : ''}`}>
                {component}
            </div>


        return container;
    }

}


export default MegaMenu;
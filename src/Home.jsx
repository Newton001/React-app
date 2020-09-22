import React, { Component } from 'react'
import Header from './components/home/Header1'
import Menu from './components/home/Menu1'
import Footer from './components/home/Footer1'
import Content from './components/home/Content'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Menu />
                <Footer />
                <Content />
            </div>
        )
    }
}

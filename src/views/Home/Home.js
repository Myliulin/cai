import React, { Component } from 'react'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Axios from '../../model/Axios';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '贺子航',
            age: 20
        };

        // this.changeName = this.changeName.bind(this);
    }

    // componentDidMount(){
    //     Axios.get('/getuser')  //Promise
    //     .then(res => {
    //         console.log(res)
    //         this.setState(res.data);
    //     })
    //     .catch(err => {
    //         console.error(err); 
    //     })
    //}

    render() {

        return (
            <HeaderMenu/>
              
        )
    }
}

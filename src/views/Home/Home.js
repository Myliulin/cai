import React, { Component } from 'react'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Shouyedibu from '../../components/Shouyedibu/Shouyedibu';
import Cailiao from '../../components/Shouyeneirong/Cailiao/Cailiao';
import Caipu from '../../components/Shouyeneirong/Caipu/Caipu';
import Jiankan from '../../components/Shouyeneirong/Jiankan/Jiankan';
import Jinrituijian from '../../components/Shouyeneirong/Jinrituijian/Jinrituijian';
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
       <div>
            <HeaderMenu/>
            <Jinrituijian/>
            <Caipu/>
            <Cailiao/>
            <Jiankan/>
            <Shouyedibu/>
    
       </div>

        )
    }
}

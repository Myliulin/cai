import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';

export default class About extends Component {
  render() {
    // 获取当前组件路由信息
    console.log(this.props.route);
    return (
      <div>
        关于我们
      <Link to="/about/concat">联系我们</Link>
      <Link to="/about/ryu">公司荣誉</Link>
        <hr />
        {renderRoutes(this.props.route.children1)}
      </div>
    )
  }
}

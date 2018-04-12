/**
 * @module index
 * @description
 * @date 2018-04-11
 **/

import React from 'react';
import Router from 'next/router';


export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      q: ''
    };
  }

  render() {
    return (
      <div className="modal">
        <style jsx>{`
          :after, :before {
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
              box-sizing: border-box;
          }

          * {
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
              box-sizing: border-box;
          }

          html {
              font-family: sans-serif;
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
          }

          .input-group {
              position: relative;
              display: table;
              border-collapse: separate;
          }

          .form-control {
              display: block;
              width: 100%;
              height: 34px;
              padding: 6px 12px;
              font-size: 14px;
              line-height: 1.42857143;
              color: #555;
              background-color: #fff;
              background-image: none;
              border: 1px solid #ccc;
              border-radius: 4px;
              -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
              box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
              -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
              -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
              transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
          }

          .input-group .form-control {
              position: relative;
              z-index: 2;
              float: left;
              width: 100%;
              margin-bottom: 0;
          }

          .input-group-lg > .form-control {
              height: 46px;
              padding: 10px 16px;
              font-size: 18px;
              line-height: 1.3333333;
              border-radius: 6px;
          }

          .input-group .form-control {
              display: table-cell;
          }

          .input-group .form-control:first-child {
              border-top-right-radius: 0;
              border-bottom-right-radius: 0;
          }

          .input-group-btn {
              display: table-cell;
          }

          .input-group-btn {
              width: 1%;
              white-space: nowrap;
              vertical-align: middle;
          }

          .input-group-btn {
              position: relative;
              font-size: 0;
              white-space: nowrap;
          }

          .input-group-btn:last-child > .btn {
              z-index: 2;
              margin-left: -1px;
          }

          .input-group-btn:last-child > .btn {
              border-top-left-radius: 0;
              border-bottom-left-radius: 0;
          }

          .input-group-btn > .btn {
              position: relative;
          }

          .btn {
              display: inline-block;
              padding: 6px 12px;
              margin-bottom: 0;
              font-size: 14px;
              font-weight: 400;
              line-height: 1.42857143;
              text-align: center;
              white-space: nowrap;
              vertical-align: middle;
              -ms-touch-action: manipulation;
              touch-action: manipulation;
              cursor: pointer;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
              background-image: none;
              border: 1px solid transparent;
              border-radius: 4px;
          }

          .btn-default {
              color: #333;
              background-color: #fff;
              border-color: #ccc;
          }

          .modal {
              width: 50%;
              min-width: 200px;
              margin: 200px auto;
              text-align: center;
          }

          .subtitle {
              color: #fff;
          }
          a {
              text-decoration: none;
          }
        `}</style>
        <style global jsx>{`
        body {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            font-family: "Helvetica Neue",Helvetica,sans-serif;
            font-size: 17px;
            line-height: 21px;
            color: #000;
            background-color: #fff;
        }

        body {
            position: relative;
            background-color: #0a1855;
            background-image: -webkit-gradient(linear,left bottom,right top,color-stop(0%,#0a1855),color-stop(100%,#da0024));
            background-image: -webkit-linear-gradient(90deg,#0a1855 0,#da0024 100%);
            background-image: -moz-linear-gradient(90deg,#0a1855 0,#da0024 100%);
            background-image: -ms-linear-gradient(90deg,#0a1855 0,#da0024 100%);
            background-image: -o-linear-gradient(90deg,#0a1855 0,#da0024 100%);
            background-image: linear-gradient(90deg,#0a1855 0,#da0024 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0a1855', endColorstr='#da0024', GradientType=1);
        }
        `}</style>

        <a href="https://github.com/starzou/reactgram" target="_blank">
          <h1 className="subtitle">Reactgram</h1>
        </a>

        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input
              className="form-control"
              placeholder="Search for..."
              onChange={this.handleChange}
              value={this.state.q}/>
            <span className="input-group-btn">
              <button className="btn btn-default">Go!</button>
            </span>
          </div>
        </form>
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({
      q: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let { q } = this.state;

    if (!q.length) {
      return;
    }

    Router.push({
      pathname: '/search',
      query: { q }
    });
  }
}


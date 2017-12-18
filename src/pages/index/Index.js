import React, {Component} from "react";
import PropTypes from 'prop-types';
import Rx from "rxjs/Rx";

export default class Index extends Component {
  constructor(props){
    super(props);
    //
    console.log(props);
  }
  componentDidMount() {
    this.inputPlus.onclick = this.onPlus;
    Rx.Observable
      .fromEvent(this.searchButton, 'click')
      .mapTo(1)
      .subscribe(this.searchUser);
  }
  onPlus() {
    console.log(value => console.log(value));
  }
  searchUser() {

  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-3">
          <h1>Github Search</h1>
          <p className="lead">
            <input type="text"/>
          </p>
          <a className="btn btn-lg btn-primary" role="button" ref={button => this.searchButton = button}>search</a>
          <br/>
          <input type={'button'} value={'1'} name={'plus'} ref={input => this.inputPlus = input}/>
          <input type={'button'} value={'-1'} name={'minus'} ref={input => this.inputMinus = input}/>
        </div>
      </div>
    );
  }
}

Index.propTypes = {
  name: PropTypes.string,
};

Index.defaultProps = {
  name: 'linli',
};



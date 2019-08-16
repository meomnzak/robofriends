import React , { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField , requestRobots } from '../action';
import Header from '../components/Header';
import './App.css';

const mapStateToProbs = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProbs = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }

}


class App extends Component {


  componentDidMount() {
    this.props.onRequestRobots();
  }


  render(){
    const {searchField , onSearchChange, robots , isPending} = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });
    if(isPending) {
      return <h1 className="tc">Loading</h1>
    } else{
      return(
        <div className='tc'>
          <Header />
          <SearchBox searchChange = {onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots = {filteredRobots} />
            </ErrorBoundary>
          </Scroll>

        </div>
      );
    }

  }
}

export default connect(mapStateToProbs, mapDispatchToProbs)(App);

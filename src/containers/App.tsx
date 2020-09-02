import React, { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";
import { AppState } from "../redux/reducers/rootReducer";
import { SearchActions, setSearchField } from "../redux/actions/searchActions";
import { requestRobots } from "../redux/actions/requestActions";

export const App: React.FC = () => {
  // selectors
  const { searchField } = useSelector((state: AppState) => state.searchRobots);
  const { error, isPending, robots } = useSelector(
    (state: AppState) => state.requestRobots
  );

  // dispatch
  const searchDispatch = useDispatch<Dispatch<SearchActions>>();
  const requestDispatch = useDispatch();

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    searchDispatch(setSearchField(e.target.value));

  const onRequestRobots = () => requestDispatch(requestRobots());

  const filteredRobots = () => {
    return robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
  };

  useEffect(() => {
    onRequestRobots();
  }, []);

  if (error) {
    return <h1>Error Loading...</h1>;
  }

  return !isPending ? (
    <div className="tc">
      <Header />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots()} />
      </Scroll>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     searchField: state.searchRobotsReducer.searchField,
//     robots: state.requestRobots.robots,
//     isPending: state.requestRobots.isPending,
//     error: state.requestRobots.error,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
//     onRequestRobots: () => dispatch(requestRobots()),
//   };
// };

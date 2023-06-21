import React from "react";
import PropTypes from 'prop-types';
import axios from "axios";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movies: [],
    };
  };

  getMovies = async () => {
    const {
      data: 
        {data:{movies}
      },
    }  = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
      this.setState({ movies, isLoading: false })
  };

  componentDidMount() {
    this.getMovies();
  };

  render() {
    const {isLoading} = this.state;
    return <div>
      {isLoading ? "Loading..." : "Work!"}
    </div>
  };
}

export default App;
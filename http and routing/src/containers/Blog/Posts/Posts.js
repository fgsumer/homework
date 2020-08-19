import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
// import { Link } from 'react-router-dom';
import axios from 'axios';

class Posts extends Component {
  state = {
    posts: [],
    // selectedPostId: null,
    // error: false,
  };

  selectClickedPostHandler = id => {
    this.props.history.push('/' + id)
    this.props.history.push({pathname: '/' + id} )
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Max',
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(
        error => console.log(error),
        // this.setState({ error: true })
      );
  }
  render() {
    let renderedposts = <p style={{ textAlign: 'center' }}>Something went wrong!! </p>;

    if (!this.state.error) {
      renderedposts = this.state.posts.map(post => {
        return (
          //<Link to={'/' + post.id} key={post.id}>
          // instead of <Link> we can use an alternative approach with selectClickedPostHandler more programatically
          <Post
            key={post.id}
              title={post.title}
              author={post.author}
              clicked={() => this.selectClickedPostHandler(post.id)}
            />
          // </Link>
        );
      });
    }

    return <section className="Posts">{renderedposts}</section>;
  }
}

export default Posts;

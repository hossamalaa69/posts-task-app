import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { loadPosts } from '../store/actions/postActions'
import Post from '../components/Post.js'
import ProgressBar from '../components/ProgressBar'

class Home extends Component {
    render(){
        const posts = this.props.posts;
        const postsList = posts.length ? (
            posts.map(post => {
              return (
                <div className="center" key={post.id} style={{ margin: '30px' }}>
                    <Post post={post}/>
                </div>
              )
            })
            ):(
              <ProgressBar/>
            );

        return (
          <div>
            <div className="container">
              {postsList}
            </div>
          </div>
        );
      }

      
    componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
           .then(response => {
              this.setState({posts: response.data});
              console.log(response);
              this.props.loadPosts(response.data);
          })
           .catch(err => {
              console.log(err);
          });
  }
}

const mapStateToProps = (state) => {
    return {
      posts: state.posts
    }
}  

const mapDispatchToProps = (dispatch) => {
    return {
      loadPosts: (posts) => dispatch(loadPosts(posts))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
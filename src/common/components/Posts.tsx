import * as React from 'react';
import * as PostActions       from '../actions/PostActions';
import Post       from './Post';
import { connect }            from 'react-redux';
import { actions }            from '../utils/Decorators';



export interface PostsProp {
    posts: any[];
    dispatch : any
}
@connect((state,ownProp)  => {return {posts: state.posts} })
@actions([PostActions.fetchPosts])
export default class Posts extends React.Component<PostsProp,any> {
    render() {
        const { posts, dispatch } = this.props;
        if(typeof  window!=="undefined"){
            window['view'] = this;
        }
        return (
            <div>
                <h2>Post LIST</h2>
                <div id="post-list">
                    {
                        posts.map(function (post, index) {
                            return (
                                <Post key={index} post={post}/>
                            );
                        }.bind(this))
                    }
                </div>
            </div>

        );
    }
}

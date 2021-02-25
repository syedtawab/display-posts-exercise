import React, {Component} from 'react'
import Spinner from '../../UI/Spinner/Spinner'
import Post from './Post'


export class PostsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: false
        };
    }

    componentDidMount(){
        this.setState({ loading: true });
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => { 
                //Uncomment this line and comment the next line to see the loading spinner working
                //setTimeout(() => this.setState( { posts: json, loading: false } ) , 2000);
                this.setState( { posts: json, loading: false } ) 
            });
    }

    render(){
        const posts = this.state.posts.map(post => {
            return <Post 
                key={post.id} 
                title={post.title} 
                body={post.body} />;
        });
        return (
            <>
                <h1>Posts</h1>
                {this.state.loading ? <Spinner /> : <div class="container">{posts}</div>}
            </>
        )
    }
}
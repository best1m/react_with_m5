import React, {Component} from 'react';
import mPostAPI from './m5/mPostAPI';
import {config} from './development';
import {Link} from 'react-router-dom';
import './App.css'

class ProductPage extends Component {


    state = {
        posts: null,
    }


    onShowPosts = () => {
        mPostAPI.getPostList(config.boards.product, config.types.product).then(
            res => {
                console.log(res);
                this.setState({posts: res.posts, style : {
                    backgroundColor : 'lightgreen'
                }})
            }, 
            err => {
                console.log(err);

            });
    };

    onDeletePosts = () => {
        this.setState({
            posts : null,
            style : {
                backgroundColor : 'pink'
            }
        })
    }

       


    render() {
        let buttonStyle={marginTop : '50px'};
        let imageStyle = {width : '200px', height : '200px'}
        return (
            <div style={this.state.style} className="kk-panel">
                {this.state.posts == null ? <button style={buttonStyle} onClick={this.onShowPosts}>Show Productlist</button> : ''}
               {this.state.posts != null ? <button style={buttonStyle} onClick={this.onDeletePosts}>Hide</button> : ''}
               <div>
               {this.state.posts != null ? <h1>PRODUCT LIST!</h1> : ''}
                {this.state.posts != null ? this.state.posts.map((post, i) => {
                    return (
                        <div className="kk-product-container" key={i}>
                    <Link to={"/productDetailPage/" + post.id}>
                        <img style={imageStyle} src={mPostAPI.getImageSrc(post, 'main', 'medium')}/>
                        <div>{post.id}</div>
                        <div>{post.title}</div>
                        <div>{post.price.discounted}원</div>
                    </Link>
                        </div>
                    );
                }) : 'If u wanna see productlist. please press this button.'}
               </div>
            </div>

        )
    }
}
export default ProductPage;
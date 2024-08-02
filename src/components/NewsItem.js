import React, { Component } from 'react'
import img from './news.png'
export class NewsItem extends Component {
    
  render() {
    let {imgUrl,newsUrl,discription,title,author,date} = this.props;
    return (
    
        <div className="card mx-4 my-4" style={{width: '21rem', height: 'auto', cursor:'pointer'}}>
  <img style={{height : '12rem'}} src={imgUrl?imgUrl:img} className="card-img-top " alt="image"/>
  <div className="card-body  d-flex flex-column justify-content-between">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{discription}</p>
    <p className="card-text">By : {!author?"Unknown":author}</p>
    <p className="card-text">On : {new Date(date).toGMTString()}</p>
    <a href={newsUrl} target='_blank' rel='noreferrer noopener' className="btn btn-success">read more</a>
  </div>
</div>
    )
  }
}

export default NewsItem

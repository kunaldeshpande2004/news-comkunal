
import React, { Component }  from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
 state = {
  articles:[]
 };
 static defaultProps={
  country: 'in',
  category :'general'
}
    async componentDidMount(){
      document.title=this.props.category;
        let data = await fetch(` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=825c080e0cd242e2b7ccccab8ebac0c3`)
        var orgData= await data.json();
        console.log(orgData.articles);
        this.setState({articles:orgData.articles});
    }
   
    
  render() {
    return (
      
      <>
   
      <h1 className='text-center 'style={{marginTop:'5rem'}} >Top Head Lines</h1>
      <div className='d-flex mx-1  justify-content-evenly flex-wrap'>
        {this.state.articles.map((element,index)=>{
          return (
          <div key={index}  >
          <NewsItem imgUrl={element.urlToImage} newsUrl={element.url} discription={element.description} title ={element.title} author={element.author} date={element.publishedAt} />
          </div>)
        })}
        </div>
      
     </>
    )
  }
}




export default News

import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }

    componentDidMount() {
        const url = "https://newsapi.org/v2/everything?q=techcrunch&from=2019-09-17&sortBy=publishedAt&apiKey=a7e8e064a2854146b91a2ff462757841";
    
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({
                news: data.articles
            })
        })
        .catch((error) => console.log(error));
    }
    renderItems() {
        return this.state.news.map((item ) => (
            <NewSingle key={item.url} item={item} />
        ));
    }
    render() {
        return (
            <div className="row">
                {this.renderItems()}
            </div>
            
        );
    }
}

export default News;
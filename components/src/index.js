import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
           <CommentDetail  
                author="Sam" 
                timeAgo="Today at 3:00PM" 
                blogPost="Great hike up Mountain Bear!"
                avatar={faker.image.avatar()} />
           <CommentDetail  
                author="Alex" 
                timeAgo="Yesterday at 4:00PM" 
                blogPost="Fun times with the family!"
                avatar={faker.image.avatar()} />
           <CommentDetail 
                author="Jane" 
                timeAgo="Yesterday at 2:07PM" 
                blogPost="Today was a great day at the park!"
                avatar={faker.image.avatar()} />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
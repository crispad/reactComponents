import React from 'react';
import ReactDOM from 'react-dom';
//import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
           <CommentDetail  author="Sam" timeAgo="Today at 3:00PM" blogPost="Great hike up Mountain Bear!"/>
           <CommentDetail  author="Alex" timeAgo="Yesterday at 4:00PM" blogPost="Fun times with the family!"/>
           <CommentDetail author="Jane" timeAgo="Yesterday at 2:07PM" blogPost="Today was a great day at the park!"/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
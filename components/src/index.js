import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail  
                    author="Sam" 
                    timeAgo="Today at 3:00PM" 
                    blogPost="Great hike up Mountain Bear!"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail  
                        author="Alex" 
                        timeAgo="Yesterday at 4:00PM" 
                        blogPost="Fun times with the family!"
                        avatar={faker.image.avatar()} />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                        author="Jane" 
                        timeAgo="Yesterday at 2:07PM" 
                        blogPost="Today was a great day at the park!"
                        avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
define(function(require) {    
	var React = require('react');

    require('css!./app');
    var CommentList = require('jsx!components/CommentList/CommentList');
    var CommentForm = require('jsx!components/CommentForm/CommentForm');

    return  React.createClass({
    	getInitialState: function() {
            return {
                comments : [
                    { name : 'Andrey', message : 'hi!'}
                ] 
            };
        },
        addComment : function(comment){
            var newState = React.addons.update(this.state, {
                comments: {$push: [comment]}
            });
              
            this.setState(newState);
        },
		render: function() {
            var list = CommentList({ comments : this.state.comments });
            var form = CommentForm({ onAdd : this.addComment })

			return <div>
                {list}
                {form}
            </div>
		}

	});
});
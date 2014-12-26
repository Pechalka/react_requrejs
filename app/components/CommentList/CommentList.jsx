define(function(require) {    
	var React = require('react');
	require('css!./CommentList')

    return  React.createClass({
		
		render: function() {
			var comments = this.props.comments.map((c) => {
				return <div>
					<h3>{c.name}</h3>
					<p className="commentList__comment-body">{c.message}</p>
					<hr/>
				</div>

			})

			return <div className="commentList">{comments}</div>
		}

	});
});
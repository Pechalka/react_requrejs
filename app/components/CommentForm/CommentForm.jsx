define(function(require) {    
	var React = require('react');
	require('css!./CommentForm')

    return  React.createClass({
    	mixins : [
    		React.addons.LinkedStateMixin
    	],
    	getInitialState: function() {
    		return {
    			name : '',
    			message : ''
    		};
    	},
    	add : function(){
    		this.props.onAdd(this.state)
    		this.setState({
    			name : '',
    			message : ''
    		})
    	},
		render: function() {
			return (
				<div className="CommentForm">
					<label>name:</label><br/> 
					<input type="text" valueLink={this.linkState('name')} /><br/>
					
					<label>comment:</label><br/>
					<textarea valueLink={this.linkState('message')} />
					
					<button className="CommentForm__add-button" onClick={this.add}>add</button>
				</div>
			);
		}

	});
});
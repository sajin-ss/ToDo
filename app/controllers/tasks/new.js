import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addTask : function(){
			var title = this.get('title');
			var date = this.get('date');
			var desc = this.get('desc');
			// alert(title + date + desc);

			this.setProperties({
				title : '',
				date : '',
				desc : ''
			});
		}
	}
});

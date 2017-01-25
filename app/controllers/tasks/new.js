import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addTask : function(){
			var title = this.get('title');
			var date = this.get('date');
			var desc = this.get('desc');
			// alert(title + date + desc);

				var newTask = this.store.createRecord('rr', {
					title: title,
					desc: desc,
					date: date
				});

				var data = this.get('store').findAll('rr');
				// console.log(data);


			this.setProperties({
				title : '',
				date : '',
				desc : ''
			});
		}
	}
});

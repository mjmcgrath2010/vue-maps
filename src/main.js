import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App";
import axios from "axios";

Vue.use(Vuetify, axios);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: "#app",
	template: "<App/>",
	components: { App },
	data() {
		return {
			sampleData: []
		};
	},
	methods: {
		fetchData() {
			// Ensuring we have a refrence to the proper scope for handling response data
			const that = this;
			// Fetching data from mock API (see static/sample-data.json)
			axios
				.get("static/sample-data.json")
				.then(response => {
					if (response && response.data) {
						Vue.set(that, "sampleData", response.data);
					}
				})
				// This should be handled better, chose to leave out setting error states and messgaes for sake of time
				.catch(err => console.log(err));
		}
	},
	mounted() {
		// When the application mounts, fetch the data from mock api
		this.fetchData();
	}
});

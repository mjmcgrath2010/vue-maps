// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
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
	data: {
		sampleData: []
	},
	methods: {
		fetchData() {
			const that = this;
			let newData;
			axios
				.get("static/sample-data.json")
				.then(response => {
					if (response && response.data) {
						newData = response.data;
						Vue.set(that, "sampleData", newData);
					}
				})
				.catch(err => console.log(err));
		}
	},
	mounted() {
		this.fetchData();
	}
});

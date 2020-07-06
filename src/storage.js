/* global my */

module.exports = function () {
	return {
		setItem(key, value) {
			my.setStorage({
				key,
				data: value
			});
		},
		getItem(key) {
			return new Promise((resolve => {
				my.getStorage({
					key,
					success(res) {
						resolve(res.data);
					},
					fail() {
						resolve();
					}
				});
			}));
		},
		removeItem(key) {
			my.removeStorage({key});
		}
	};
};

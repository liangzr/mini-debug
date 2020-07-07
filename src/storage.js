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
			var executor = function (resolve) {
				my.getStorage({
					key,
					success(res) {
						resolve(res.data);
					},
					fail() {
						resolve();
					}
				});
			};

			return new Promise(executor);
		},
		removeItem(key) {
			my.removeStorage({key});
		}
	};
};

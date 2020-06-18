
module.exports = function() {
  return {
    setItem: function(key, value) {
      my.setStorage({
        key,
        data: value,
      })
    },
    getItem: function(key) {
      return new Promise(function(resolve) {
        my.getStorage({
          key,
          success: function(res) {
            resolve(res.data)
          },
          fail: function() {
            resolve()
          }
        })
      }) 
    },
    removeItem: function(key) {
      my.removeStorage({ key })
    },
  }
}

require('less/toast.less')
var $ = require('jquery')

function Toast(mes,time){
	this.mes = mes
	this.dismiss = time || 1000;
	this.createToast()
	this.showToast()
}

Toast.prototype.createToast = function(){
	var tpl = `<div class="toast">${this.mes}</div>`
	this.$toast = $(tpl)
	$('body').append($(tpl))
}
Toast.prototype.showToast = function(){
	this.$toast.fadeIn(300,()=>{
		setTimeout(()=>{
			this.$toast.fadeOut(300,()=>{
				this.$toast.remove()
			})
		},this.dismiss)
	})
}

function toast(mes,time){
	return new Toast(mes,time)
}

module.exports.Toast = toast
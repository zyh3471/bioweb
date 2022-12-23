//获取所有所要改变的元素，点赞按钮+数字
let like = document.getElementsByName(`like`)[0]
console.log(like)
let dislike = document.getElementsByName(`dislike`)[0]
console.log(dislike)
let jishu = document.querySelector(`.jishuqi`)
console.log(jishu)
//写事件改变计数器
let ct = 0
let lovewd = 0
like.addEventListener(`click`, function () {
	ct += 1
	jishu.innerHTML = ct
	lovewd = jishu.clientWidth
	console.log(lovewd)
})
//dislike警示框
dislike.addEventListener(`click`, function () {
	alert(`dislike功能尚未开发（手动狗头^_^）`)
})

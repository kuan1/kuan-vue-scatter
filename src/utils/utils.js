import html2canvas from 'html2canvas'
import loadImages from 'kuan-utils/lib/loadImages'

// dom动画
export function animateTransform(elem, sx, sy, angle, duration) {
	elem.animate(
		[
			{ transform: "rotate(0) translate(0, 0)" },
			{
				transform: "rotate(" + angle + "deg) translate(" + sx + "px," + sy + "px)"
			}
		],
		{
			duration: duration,
			easing: "ease-in"
		}
	);
}

// 获取dom的canvas的数据
export async function getImageData(dom) {
	const canvas = await html2canvas(dom)
	const ctx = canvas.getContext('2d')
	const { width, height } = canvas
	const { data } = ctx.getImageData(
		0,
		0,
		width,
		height
	)
	return {
		data,
		width,
		height
	}
}

export function getListData(data, canvasCount) {
	// 获取透明的canvas数据
	const emptyList = data.slice(0).fill(0)
	// 生成
	const dataArr = Array.from({ length: canvasCount }, () =>
		emptyList.slice(0)
	)
	// 循环当前一组的数据循环塞入
	for (let i = 0; i < data.length; i += 4) {
		// 循环塞入，太丑
		// const listIndex = (i / 4) % canvasCount
		const listIndex = Math.floor(Math.random() * canvasCount)
		const targetData = dataArr[listIndex]
		targetData[i] = data[i]
		targetData[i + 1] = data[i + 1]
		targetData[i + 2] = data[i + 2]
		targetData[i + 3] = data[i + 3]
	}
	return dataArr
}

// 预加载图片
export function preload(dom) {
	const images = dom.getElementsByTagName('img')
	const srcs = [...images].map(item => item.src)
	return loadImages(srcs)
}

// 等待
export function delay(time = 100) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve
		}, time)
	})
}
let rectangleA = {
	top: (Integer),
	left: (Integer),
	width: (Integer),
	height: (Integer)
}
let rectangleB = {
	top: (Integer),
	left: (Integer),
	width: (Integer),
	height: (Integer)
}
function areIntersected(rectangleA, rectangleB) {
	if (rectangleA.top + rectangleA.height) <= rectangleB.top ||
		(rectangleA.left + rectangleA.width) >= rectangleB.left ||
		rectangleA.top <= (rectangleB.top + rectangleB.height) ||
		{
			return true;
		}
	else {
		return false;
	}
}
function filterVisible(rectangleA, [])

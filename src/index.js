function getRectanglesBottom(rectangle) {
	return rectangle.top + rectangle.height;
}
function getRectanglesHeight(rectangle) {
	return rectangle.left + rectangle.width;
}

function areIntersected(rectangleA, rectangleB) {
	if (getRectanglesBottom(rectangleA) > rectangleB.top
		&& rectangleB.top < getRectanglesBottom(rectangleA)
		&& getRectanglesHeight(rectangleA) > rectangleB.left
		&& rectangleA.left < getRectanglesHeight(rectangleB)) {

		return true;
	}
	else {
		return false;
	}
}



function filterVisible(rectangleA, array) {
	return array.filter(function (element) {
		if (element.width !== 0 && element.height !== 0) {
			return areIntersected(rectangleA, element);
		} else {
			return false;
		}
	});
};


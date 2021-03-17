const islands = [
	[0, 0, 0, 0, 1],
	[0, 1, 0, 1, 1],
	[0, 0, 1, 0, 0],
	[0, 1, 0, 1, 0],
	[0, 1, 0, 0, 0],
];

const gridCheck = (grid) => {
	let res = 0;

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === 1) {
				arrayDfs(grid, i, j);
				res++;
			}
		}
	}

	return res;
};

const arrayDfs = (grid, row, col) => {
	// 1. Check necessary conditions
	// if it is out of bounds
	if (
		row < 0 ||
		col < 0 ||
		row > grid.length - 1 ||
		col > grid[0].length - 1
	) {
		return;
	}
	// if it is not eligible for the operation
	if (grid[row][col] === 0) {
		return;
	}

	// 2. Process Cell
	grid[row][col] = 0;

	// 3. Call DFS as needed
	arrayDfs(grid, row, col + 1);
	arrayDfs(grid, row, col - 1);
	arrayDfs(grid, row + 1, col);
	arrayDfs(grid, row + 1, col);
};

console.table(islands);
console.log(gridCheck(islands));

export const treeInitData = [
	{
		name: 'node-1',
		id: 1,
		parent: '',
		children: [2, 3, 4]
	},
	{
		name: 'node-2',
		id: 2,
		parent: 1,
		children: [5, 6, 8]
	},
	{
		name: 'node-3',
		id: 3,
		parent: 1,
		children: [7, 9]
	},
	{
		name: 'node-4',
		id: 4,
		parent: 1,
		children: []
	},
	{
		name: 'node-5',
		id: 5,
		parent: 2,
		children: []
	},
	{
		name: 'node-6',
		id: 6,
		parent: 2,
		children: []
	},
	{
		name: 'node-7',
		id: 7,
		parent: 3,
		children: []
	},
	{
		name: 'node-8',
		id: 8,
		parent: 2,
		children: []
	},
	{
		name: 'node-9',
		id: 9,
		parent: 3,
		children: []
	}
];

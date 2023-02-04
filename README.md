# Spin Wheels

This explorable illustrates some interesting and beautiful properties of oscillators that are spatially arranged on a lattice and interact with their neighbors by phase coupling. It's the [Kuramoto Model](https://en.wikipedia.org/wiki/Kuramoto_model) on a square lattice.

The explorable is part of the [**Complexity Exporables Collection**](https://www.complexity-explorables.org). For more information about the system and its behavior consult the explorable
> [**"Spin Wheels" - Phase-coupled oscillators on a lattice**](https://www.complexity-explorables.org/explorables/spin-wheels/)

## Installation

Out of the box you can use the explorable in a basic `index.html` file like this

```html
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<script src="https://unpkg.com/@explorables/spinwheels"></script>
	</head>
	<body class="avenir pa3 pa5-ns tj">
	<div id="explorable_container"></div>
	</body>
	<script type="text/javascript">
		spinwheels.load("explorable_container")
	</script>
</html>
```

Clone repository:

```shell
git clone https://github.com/dirkbrockmann/spinwheels.git
```
`
Install, Build and Show:

1. `cd spinwheels`
2. `npm install`
3. `npm run build`
4. `npm run show`

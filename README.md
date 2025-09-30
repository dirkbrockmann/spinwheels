[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg

# Spin Wheels

[![CC BY 4.0][cc-by-shield]][cc-by]

This explorable is a spatial implementation of the Kuramoto Model for phase coupled oscillators. It illustrates spatial synchronization and the dynamics of phase singularities.

The explorable is part of the [**Complexity Explorables Collection**](https://www.complexity-explorables.org). For more information about the system and its behavior consult the explorable
> [**“Spin Wheels” - Phase coupled oscillators on a lattice**](https://www.complexity-explorables.org/explorables/spinwheels)

## Usage & Installation

### Just running the explorable

If you just want to run the explorable you can [**Click here.**](https://raw.githack.com/dirkbrockmann/spinwheels/main/dist/index.html)
 

### Running a local copy

If you want to run a local copy without having to rely on the nasty internet, the best way
is to install it via `npm`:

```shell
mkdir spinwheels
cd spinwheels
npm init -y
npm install @explorables/spinwheels
npx http-server node_modules/@explorables/spinwheels/dist/ 
```

### Embedding the explorable in your site

If you want to embed the explorable in your site, you need to do three things:

1. load the explorable package via `<script>` tag in your page header
2. add a `<div>` container element
3. add a `<script>` at the end of the document that loads the explorable
	
like so:

```html
<!doctype html>
<html>
	<head>
		...
		<script src="https://cdn.jsdelivr.net/npm/@explorables/spinwheels/dist/index.umd.js"></script>
		...
	</head>
		...
	<body>
		...
	    <div id="explorable_container"></div>
		...
	</body>
		...
	<script type="text/javascript">
		const explorable_instance = spinwheels.load("explorable_container")
	</script>
		...
</html>
```

The header `<script>` tag loads the bundle, the `<div>` in the document is the container in which the explorable gets anchored when the function `spinwheels("explorable_container")` gets executed at the bottom. This function needs the `<div>` container `id` as an argument. The function returns an instance of the explorable and writes it to `explorable_instance`. That variable contains functions like `halt()`, `reset()` and variables `meta` and `config`.
	
If you want to make use of ES modules instead of UMD, here's a way that will work on modern (ES support) and legacy browsers (UMD only).

```html
<!doctype html>
<html>
	<head>
		...
	    <script type="module">
	  	      import load from 'https://cdn.jsdelivr.net/npm/@explorables/spinwheels/dist/index.es.js';
	  	      const spinwheels = load("explorable_container");
	    </script>
	    <script nomodule src="https://cdn.jsdelivr.net/npm/@explorables/spinwheels/dist/index.umd.js"></script>	  
		...
	</head>
		...
	<body>
		...
	    <div id="explorable_container"></div>
		...
	</body>
		...
	<script nomodule type="text/javascript">
		const explorable_instance = spinwheels.load("explorable_container")
	</script>
		...
</html>
```
	


### Installing the whole package locally

If you want to modify or edit the explorable to make your own version: 

Clone repository:

```shell
git clone https://github.com/dirkbrockmann/spinwheels.git
```


Go to the directory, install, build and show using `npm`:

1. `cd spinwheels`
2. `npm install`
3. `npm run build`
3. `npm run preview`

## License

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]



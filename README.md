# React Bootstrap4 Tree View

![Bootstrap Tree View Default](https://github.com/gooney-zhu/react-bootstrap4-tree/blob/master/screenshot/default.PNG)

## Dependencies

The project has very few dependencies, but you will need the following.
- [React v16.8.6](https://facebook.github.io/react/)
- [Bootstrap v4.3.1 (>= 4.0.0)](http://getbootstrap.com/)

## Getting Started

### Install

Npm: 
```javascript
$ npm install react-bootstrap4-tree
```

### Usage

Include the correct styles, it's mainly just bootstrap but we add a few tweaks as well.

```html
<!-- Required CSS -->
<link href="path/to/bootstrap.css" rel="stylesheet">

Then, a basic initialization would look like.

```javascript
ReactDOM.render(
    <TreeView data={data} />, 
    document.getElementById('root'));
```

### Example

Putting it all together a minimal implementation might look like this.

```html
<html>
  <head>
    <title>React + Bootstrap4 Tree View</title>
    <link href="path/to/bootstrap.css" rel="stylesheet">
  </head>
  <body>
    <div class="container">
      <h1>React + Bootstrap Tree View</h1>
      <br/>
      <div class="row">
        <div id="root"></div>
      </div>
    </div>
    <script type="text/jsx">
    	React.render(
				<TreeView data={data} />,
				document.getElementById('root')
			);
    </script>
  </body>
</html>
```

## Data Structure

In order to define the hierarchical structure needed for the tree it's necessary to provide a nested array of JavaScript objects.

Example

```javascript
let data = [
    {
        text: 'a1',
        nodes: [
            {
                text: 'a1-a1',
                nodes: []
            }
        ]
    },
    {
        text: 'a2',
        nodes: [
            {
                text: 'a2-a1',
                nodes: [
                    {
                        text: 'a2-a1-a1'
                    },
                    {
                        text: 'a2-a1-a2'
                    }
                ]
            }
        ]
    }, 
    {
        text: 'a3',
        nodes: [
            {
                text: 'a3-a1',
                nodes: [
                    {
                        text: 'a2-a1-a1',
                        nodes: [
                            {
                                text: 'a2-a1-a1'
                            },
                            {
                                text: 'a2-a1-a2'
                            }
                        ]
                    },
                    {
                        text: 'a2-a1-a2'
                    }
                ]
            },
            {
                text: 'a3-a2'
            }
        ]
    },
];
```

If you want to do more, here's the full node specification

```javascript
{
  text: "Text 1",
  color: "#000000",
  backgroundColor: "#FFFFFF",
  showBorder: true,
  showSelect: true,
  state: {
  	expanded: true,
  	selected: true
  },
  nodes: [
    {},
    ...
  ]
}
```
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
```

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

### Node Properties

The following properties are defined to allow node level overrides, such as node specific colors and border.

#### text
`String` `Mandatory`

The text value displayed for a given tree node.


#### color
`String` `Optional`

The foreground color used on a given node, overrides global color option.

#### backgroundColor
`String` `Optional`

The background color used on a given node, overrides global color option.

#### state
`Object` `Optional`

Describes a node's initial state.

#### state.expanded
`Boolean` `Default: false`

Whether or not a node is expanded i.e. open.  Takes precedence over global option levels.

#### state.selected
`Boolean` `Default: false`

Whether or not a node is selected.

## Options

Options allow you to customise the treeview's default appearance and behaviour.  They are passed to the react component as properties on initialization.

```javascript
// Example: initializing the treeview
// with a background color of green
React.render(
	<TreeView data={data}
				backgroundColor="green" />,
	document.getElementById('treeview')
);
```

The following is a list of all available options.

#### data
Array of Objects.  No default, expects data

This is the core data to be displayed by the tree view.

#### color
String, [any legal color value](http://www.w3schools.com/cssref/css_colors_legal.asp).  Default: inherits from Bootstrap.css.

Sets the default foreground color used by all nodes, except when overridden on a per node basis in data.

#### backgroundColor
String, [any legal color value](http://www.w3schools.com/cssref/css_colors_legal.asp).  Default: inherits from Bootstrap.css.

Sets the default background color used by all nodes, except when overridden on a per node basis in data.

#### showBorder
Boolean.  Default: true

Whether or not to display a border around nodes.

#### showSelect
Boolean.  Default: true

Whether or not to display a select icon.
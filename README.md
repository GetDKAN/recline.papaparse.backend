Install
-------------------------------------------------------------------------------
Just include recline.backend.papaparse.min.js in your html. See dependencies bellow.

```javascript
<script type"text/javascript" src="dist/recline.backend.papaparse.min.js"></script>
```

Usage
-------------------------------------------------------------------------------

### Parse a csv file from an input file.

```javascript
// Parse csv from local file.
$("#csvfile").on("change", function(){
  var fileDataset = new recline.Model.Dataset({
    file:$("#csvfile").get(0).files[0],
    backend: "papacsv"
  });
  fileDataset
  .fetch()
  .done(function(data){
    console.log(data.records.toJSON());
  });
});
```

### Parse a csv file from a remote server.

```javascript
// Parse csv from a remote file.
var remoteDataset = new recline.Model.Dataset({
  url: "http://demo.getdkan.com/sites/default/files/us_foreclosures_jan_2012_by_state_0.csv",
  backend: "papacsv"
});
remoteDataset
.fetch()
.done(function(data){
  console.log(data);
});
```

###Parse a csv from a string

```javascript
// Parse csv from string.
var csv = '"Jones, Jay",10\n' +
'"Xyz ""ABC"" O\'Brien",11:35\n' +
'"Other, AN",12:35\n';

var stringDataset = new recline.Model.Dataset({
  data: csv,
  backend: "papacsv"
});
stringDataset
.fetch()
.done(function(data){
  console.log(data);
});
```

Dependencies
-------------------------------------------------------------------------------
* underscore
* Papa Parse
* underscore.deferred (optional) - only needed if no jQuery

## Examples

Requirements
-------------------------------------------------------------------------------
* NodeJS
* NPM
* Bower
* Make

Getting started
-------------------------------------------------------------------------------

* Install Grunt globally

```bash
npm install -g grunt-cli
```

* Install node packages

```bash
npm install
```

* Install bower packages

```bash
bower install
```

* Run server

```bash
grunt
```

* Make a build

```bash
grunt build
```

* Lint code

```bash
grunt lint
```

;(function($) {
  "use strict";
  $(document).on("ready", function(){

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

  });
})(jQuery);

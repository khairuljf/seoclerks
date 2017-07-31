var ContactUs = function () {

    return {
        //main function to initiate the module
        init: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
	            lat: 31.225979,
				lng: 121.444639,
			  });
			   var marker = map.addMarker({
		            lat: 31.225979,
					lng: 121.444639,
		            title: 'Element Resources.',
		            infoWindow: {
		                content: "<b>Element Resources.</b> Suite 1903, Jing’an  China Tower<br>1701 West Beijing Road,Shanghai 200040"
		            }
		        });

			   marker.infoWindow.open(map, marker);
			});
        }
    };

}();
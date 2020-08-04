
/*---------------------------------------------- google maps */

var map;
var points = {
  point1: {
    lat: 0,
    lng: 0,
  },
  point2: {
    lat: 0,
    lng: 0,
  },
  point3: {
    lat: -34.397,
    lng: 150.644,
  },
  point4: {
    lat: 0,
    lng: 0,
  },
  point5: {
    lat: 0,
    lng: 0,
  },
  point6: {
    lat: 0,
    lng: 0,
  },
};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
  var marker1 = new google.maps.Marker({position: points.point1, map});
  var marker2 = new google.maps.Marker({position: points.point2, map});
  var marker3 = new google.maps.Marker({position: points.point3, map});
  var marker4 = new google.maps.Marker({position: points.point4, map});
  var marker5 = new google.maps.Marker({position: points.point5, map});
  var marker6 = new google.maps.Marker({position: points.point6, map});
}

$(document).on('click', '.carousel-1-floating-box, .carousel-2-floating-box', function () {
  var thePoint = $(this).attr('data-point');
  $('#mapModal').modal('show');
  if (map && thePoint) {
    map.setCenter(points[thePoint]);
  }
});

/*----------------------------------------------Activities section */

$(document).on('click', '.activity-item', function () {
  const $that = $(this);
  const active = $('.activities-box .activity-item.active');
  if ($that.hasClass('active')) {
    return;
  }
  active.removeClass('active');
  $that.parent().attr('data-active', $that.attr('data-element'))
  $that.addClass('active');
});

$(document).on('scroll', function () {
  if (document.scrollingElement.scrollTop > 0) {
    $('.navbar').addClass('navbar-solid');
  } else {
    $('.navbar').removeClass('navbar-solid');
  }
});
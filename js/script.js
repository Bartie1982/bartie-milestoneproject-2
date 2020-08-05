
/*---------------------------------------------- google maps */

var map;
var points = {
  point1: {
    lat: 28.7381728,
    lng: -13.8710679,
  },
  point2: {
    lat: 28.5000547,
    lng: -13.8630587,
  },
  point3: {
    lat: 28.733043 ,
    lng: -13.8724169,
  },
  point4: {
    lat: 28.7650478,
    lng: -13.8723465,
  },
  point5: {
    lat: 32.3963657,
    lng: -14.9171875,
  },
  point6: {
    lat: 29.733043,
    lng: -14.9171875,
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

/*----------------------------------------------Activities */

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
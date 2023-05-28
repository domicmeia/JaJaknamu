function initMap() {
  
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.453058, lng: 126.561749}, 
  });
}

// 검색
function search() {
  var input = document.getElementById('search-input').value;
 

  // 검색 결과
  var resultsContainer = document.getElementById('search-results');

   // 검색 결과 초기화
   resultsContainer.innerHTML = '';

}

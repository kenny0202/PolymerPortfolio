var pages = document.querySelector('core-pages');
var tabs = document.querySelector('paper-tabs');
tabs.addEventListener('core-select', function() {
	pages.selected = tabs.selected;
});

var panel = document.querySelector('core-header-panel');
var scrollable;

panel.onscroll = function(event) {
  scrollable = event.detail.target;
  var scrollTop = (scrollable.scrollTop || 0);
  var selectedIndex = (pages.selectedIndex < 0 ? 0 : pages.selectedIndex);
  document.querySelectorAll('paper-tabs')[selectedIndex].pos = scrollTop;
}

tabs.addEventListener('core-activate', function(event) {
  scrollable.scrollTop = (event.detail.item.pos || 0);
});
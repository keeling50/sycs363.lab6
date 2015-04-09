Titanium.UI.setBackgroundColor("#000");
var tabGroup = Titanium.UI.createTabGroup();
var calenderWindow = Titanium.UI.createWindow({
	title:"Calendar",
	backgroundColor:"#FFFFFF"
});
var tourTab = Titanium.UI.createTab({
	icon:"myicon.png",
	title:"Calendar",
	window:calenderWindow
});


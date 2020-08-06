var home = {
	x: 0,
	init: function() {
		home.lazyLoad(0);
		home.getJSON();

		window.addEventListener("resize", home.resize);
	},

	lazyLoad: function(i) {
		var img = document.getElementsByClassName('lazyload')[i];
		
		var func=function(){
			this.style.opacity = 1;
		};

		if(img && img.complete) {
			func.call(img);
		} else {
			img.onload=func;
		}
	},

	getJSON: function() {
		var xhr = new XMLHttpRequest();
	    xhr.open('GET', '/data.json', true);
	    xhr.responseType = 'json';
	    xhr.onload = function() {
	    	var status = xhr.status;
	      	if (status === 200) {
	        	home.createTabsMarkup(xhr.response);
	      	} else {
	        	console.log("connection failed.");
	      	}
	    };
	    xhr.send();
	},

	createTabsMarkup: function(data) {
		var markup = '';
		markup += '<ul class="tabs-title">';
			for(var i = 0; i < data.length; i++) {
				if(i == 0) {
					markup += '<li class="clickable selected" onclick="home.setSelected('+i+', this);">';
						markup += data[i].title;
		            markup += '</li>';
		            markup += '<div class="tabs-content hidden-desktop">';
						markup += data[i].content;
					markup += '</div>';
		        } else {
		        	markup += '<li class="clickable" onclick="home.setSelected('+i+', this);">';
						markup += data[i].title;
		            markup += '</li>';
		            markup += '<div class="tabs-content hide hidden-desktop">';
						markup += data[i].content;
					markup += '</div>';
		        }
			}
		markup += '</ul>';

		for(var i = 0; i < data.length; i++) {
			if(i == 0) {
				markup += '<div class="tabs-content hidden-mobile">';
					markup += data[i].content;
				markup += '</div>';
			} else {
				markup += '<div class="tabs-content hide hidden-mobile">';
					markup += data[i].content;
				markup += '</div>';
			}
		}

		document.getElementsByClassName('tabs')[0].innerHTML = markup;
	},

	setSelected: function(x, target) {
		var tabsTitleList = document.getElementsByClassName('clickable');
		home.x = x;
		
		for (var i = 0; i < tabsTitleList.length; i++) {
			if(target == tabsTitleList[i]) {
				if(window.innerWidth <= 568) {
					target.classList.toggle('selected');
					document.getElementsByClassName('tabs-content hidden-desktop')[home.x].classList.toggle("hide");
				} else {
					target.classList.add('selected');
					document.getElementsByClassName('tabs-content hidden-mobile')[home.x].classList.remove("hide");
				}
			} else {
				tabsTitleList[i].classList.remove("selected");
				if(window.innerWidth <= 568) {
					// document.getElementsByClassName('tabs-content')[i].classList.add("hide");
					document.getElementsByClassName('tabs-content hidden-desktop')[i].classList.add("hide");

				} else {
					// document.getElementsByClassName('tabs-content')[i + 4].classList.add("hide");
					document.getElementsByClassName('tabs-content hidden-mobile')[i].classList.add("hide");
				}
			}
		}
	},

	resize: function() {
		var timeout = setTimeout(function() {
			var deskList = document.getElementsByClassName('tabs-content hidden-mobile');
			var mobList = document.getElementsByClassName('tabs-content hidden-desktop');

			for (var i = 0; i < deskList.length; i++) {
				deskList[i].classList.add('hide');
				mobList[i].classList.add('hide');
			}

			if(window.innerWidth > 568) {
				document.getElementsByClassName('tabs-content hidden-mobile')[home.x].classList.remove("hide");
				document.getElementsByClassName('clickable')[home.x].classList.add("selected");
			} else if(window.innerWidth <= 568) {
				document.getElementsByClassName('tabs-content hidden-desktop')[home.x].classList.remove("hide");
			}

			clearTimeout(timeout);
		}, 100);
	}
};
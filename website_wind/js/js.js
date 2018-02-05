function switchpic()
{
	var num = 1;
	var inside;
	inside = document.getElementById("inside");

		var interval = setInterval(
		function()
		{
			inside.style.transition = "all 1s ease";
			num++;
			switch(num) 
			{
					case 1:
						inside.style.transition = "none";
						inside.style.marginLeft = (-700) + "px";
						break;
					case 2:
						inside.style.marginLeft = (-700 - 1400) + "px";
						break;
					case 3:
						inside.style.marginLeft = (-710 - 1400 * 2) + "px";
						break;
					case 4:
						inside.style.marginLeft = (-715 - 1400 * 3) + "px";
						break;
					case 5:
						inside.style.marginLeft = (-720 - 1400 * 4) + "px";
						num = 0;
						break;
					default:
						break;
				}
			}, 3000);
		}
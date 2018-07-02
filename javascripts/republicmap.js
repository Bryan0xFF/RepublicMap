function RepublicMap (id, hoverCallback, clickCallback)
{
	this.svgId = id;
	this.hoverCallback = hoverCallback;
	this.clickCallback = clickCallback;

	var dom = '<polygon id="dep1" points="10,10 40,10 40,20 30,20 30,40 10,40" style="fill:green;stroke:white;stroke-width:2" /><polygon id="dep2" points="40,10 90,10 90,60 30,60 30,20 40,20" style="fill:green;stroke:white;stroke-width:2" /><polygon id="dep3" points="10,40 30,40 30,60 90,60 90,90 10,90" style="fill:green;stroke:white;stroke-width:2" /><polygon id="dep1out" points="10,10 40,10 40,20 30,20 30,40 10,40" style="fill:red;stroke:blue;stroke-width:2" /><polygon id="dep2out" points="40,10 90,10 90,60 30,60 30,20 40,20" style="fill:red;stroke:blue;stroke-width:2" /><polygon id="dep3out" points="10,40 30,40 30,60 90,60 90,90 10,90" style="fill:red;stroke:blue;stroke-width:2" /><text x="5" y="5" style="fill:white;font-size:3pt;" id="label1">Departamento 1</text><text x="5" y="5" style="fill:white;font-size:3pt;" id="label2">Departamento 2</text><text x="5" y="5" style="fill:white;font-size:3pt;" id="label3">Departamento 3</text>';

	$ ('#' + id).html (dom);

	for (var idx = 0; idx < 4; idx++)
	{
		$ ('#label' + idx).hide ();
		$ ('#dep' + idx + 'out').hide ();
		registerMapHandlers (this, idx);
	}
}

RepublicMap.prototype.enterPolygon = function (which)
{
	$ ('#dep' + which + 'out').show ();
	$ ('#label' + which).show ();
	for (var idx = 0; idx < 4; idx++)
	{
		if (idx == which) continue;
		$ ('#label' + idx).hide ();
		$ ('#dep' + idx + 'out').hide ();
	}
	this.hoverCallback (which);
}

RepublicMap.prototype.clickPolygon = function (which)
{
	$ ('#dep' + which + 'out').show ();
	$ ('#label' + which).show ();
	for (var idx = 0; idx < 4; idx++)
	{
		if (idx == which) continue;
		$ ('#label' + idx).hide ();
		$ ('#dep' + idx + 'out').hide ();
	}
	this.clickCallback (which);
}

function registerMapHandlers (map, which)
{
	$ ('#dep' + which).mouseenter (function ()
	{
		map.enterPolygon (which);
	} );
	$ ('#dep' + which + 'out').click (function ()
	{
		map.clickPolygon (which);
	} );
}

$('#menu-toggle').click(function() {
    $('#menu').toggleClass('hide');
    $('#menu-toggle').toggleClass('active');
});

function fancydates(t,e){if(0!==t)for(var a=document.querySelectorAll(".dt-published, .dt-updated, .listdate"),o=a.length,l=0;l<o;l++){var r,i=luxon.DateTime.fromISO(a[l].attributes.datetime.value);r=1===t&&e.preset?i.toLocal().toLocaleString(luxon.DateTime[e.format]):1===t?i.toLocal().toFormat(e.format):i.toRelative(),a[l].innerHTML=r}}


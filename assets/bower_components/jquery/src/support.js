define(["./core","./var/support","./var/document","./core/init","./core/ready"],function(t,e,n){var i;for(i in t(e))break;return e.ownFirst="0"===i,e.inlineBlockNeedsLayout=!1,t(function(){var t,i,r,o;r=n.getElementsByTagName("body")[0],r&&r.style&&(i=n.createElement("div"),o=n.createElement("div"),o.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",r.appendChild(o).appendChild(i),"undefined"!=typeof i.style.zoom&&(i.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",e.inlineBlockNeedsLayout=t=3===i.offsetWidth,t&&(r.style.zoom=1)),r.removeChild(o))}),e});
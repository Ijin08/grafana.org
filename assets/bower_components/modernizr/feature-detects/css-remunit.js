Modernizr.addTest("cssremunit",function(){var t=document.createElement("div");try{t.style.fontSize="3rem"}catch(e){}return/rem/.test(t.style.fontSize)});
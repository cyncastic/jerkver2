// Instagram code
(function(){var e,t;e=function(){function e(e){var t,n;this.options={target:"instafeed",get:"popular",resolution:"thumbnail",links:!0,limit:15};if(typeof e=="object")for(t in e)n=e[t],this.options[t]=n}return e.prototype.run=function(){var t,n;if(typeof this.options.clientId!="string"&&typeof this.options.accessToken!="string")throw new Error("Missing clientId or accessToken.");if(typeof this.options.accessToken!="string"&&typeof this.options.clientId!="string")throw new Error("Missing clientId or accessToken.");return n=document.createElement("script"),n.id="instafeed-fetcher",n.src=this._buildUrl(),t=document.getElementsByTagName("head"),t[0].appendChild(n),window.instafeedCache=new e(this.options),!0},e.prototype.parse=function(e){var t,n,r,i,s,o,u,a;if(typeof e!="object")throw new Error("Invalid JSON response");if(e.meta.code!==200)throw new Error("Problem parsing response: "+e.meta.error_message);if(e.data.length===0)throw new Error("No images were returned from Instagram");n=document.createDocumentFragment(),s=e.data,s.length>this.options.limit&&(s=s.slice(0,this.options.limit+1||9e9));for(u=0,a=s.length;u<a;u++)i=s[u],o=document.createElement("img"),o.src=i.images[this.options.resolution].url,this.options.links===!0?(t=document.createElement("a"),t.href=i.link,t.appendChild(o),n.appendChild(t)):n.appendChild(o);return document.getElementById(this.options.target).appendChild(n),r=document.getElementsByTagName("head")[0],r.removeChild(document.getElementById("instafeed-fetcher")),delete window.instafeedCache,!0},e.prototype._buildUrl=function(){var e,t,n;e="https://api.instagram.com/v1";switch(this.options.get){case"popular":t="media/popular";break;case"tagged":if(typeof this.options.tagName!="string")throw new Error("No tag name specified. Use the 'tagName' option.");t="tags/"+this.options.tagName+"/media/recent";break;case"location":if(typeof this.options.locationId!="number")throw new Error("No location specified. Use the 'locationId' option.");t="locations/"+this.options.locationId+"/media/recent";break;case"user":if(typeof this.options.userId!="number")throw new Error("No user specified. Use the 'userId' option.");if(typeof this.options.accessToken!="string")throw new Error("No access token. Use the 'accessToken' option.");t="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return n=""+e+"/"+t,this.options.accessToken!=null?n+="?access_token="+this.options.accessToken:n+="?client_id="+this.options.clientId,n+="&count="+this.options.limit,n+="&callback=instafeedCache.parse",n},e}(),t=typeof exports!="undefined"&&exports!==null?exports:window,t.Instafeed=e}).call(this);

// Call on page load
$(document).ready(function() {
  instagramPage();
});

// The function
var instagramPage = function(){
  var instaFeed = new Instafeed({
      get: 'tagged',
      tagName: 'jerkfacenyc',
      userId: 46255315,
      accessToken: '408253310.1677ed0.c650b85839fd45c38dc5af6d5ce1db41',
      target: 'instafeed',
      limit: 24
  }); instaFeed.run();
}
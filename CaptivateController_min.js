/*
CaptivateController()
Version 0.9.3, works with Adobe Captivate 2, 3, 4 & 5
Copyright (c) 2009-2011 Philip Hutchison
http://pipwerks.com/lab/captivate
MIT-style license. Full license text can be found at
http://www.opensource.org/licenses/mit-license.php
*/
var CaptivateController=function(n,m){if(typeof n==="undefined"){return false;}var f="cpSkinLoader_mc.",o="rdcmnd",q="cpCmnd",s,A="undefined",z="unknown",p="number",g=true,r=false,h=this,e=null,y="",u=r,d="",b="GetVariable",v="SetVariable",c="CaptivateVersion",a=r,k=r,w=document.getElementById(n);if(!w){return r;}var t=function(){var X=null,B=null,D=null,M=null,T=null,G=null,L=r,aa=r,W=r,Y,E,F,I,Z,S;if(typeof w.cpEIGetValue!==A){try{D=w.cpEIGetValue(c);}catch(R){}try{M=w.cpEIGetValue(f+c);}catch(Q){}}if(typeof w.cpGetValue!==A){try{X=w.cpGetValue(c);}catch(O){}try{B=w.cpGetValue(f+c);}catch(N){}}if(typeof w.GetVariable!==A){try{T=w.GetVariable(c);}catch(K){}try{G=w.GetVariable(f+c);}catch(J){}}Y=typeof T;E=typeof G;F=typeof X;I=typeof B;Z=typeof D;S=typeof M;W=(Y!==A&&Y!==z&&T!==null)||(E!==A&&E!==z&&G!==null)||r;L=((F!==A&&F!==z&&X!==null)||(I!==A&&I!==z&&B!==null))||r;aa=((Z!==A&&Z!==z&&D!==null)||(S!==A&&S!==z&&M!==null))||r;y=(aa)?D||M||r:(L)?X||B||r:T||G||r;u=(y!==r);if(!u){return r;}e=parseInt(y.replace(/v/gi,"").split(".")[0],10);a=(e>4||(e>3&&!W));if(aa){b="cpEIGetValue";v="cpEISetValue";}else{if(L){b="cpGetValue";v="cpSetValue";}}if(!m){var P=(e>3)?"isCPMovie":"rdIsMainMovie",C=r;try{var U=w[b](f+P),H=typeof U;C=(H!==A&&H!==z&&U!==null);}catch(V){}m=C;}d=(m)?f:"";s=(e>3)?q:o;};var x=function(){if(e===null){t();}return u;};var l=function(C,B){if(!x()){return r;}if(typeof B===A){B=1;}switch(C){case"pause":C=o+"Pause";break;case"resume":C=o+"Resume";break;case"next":C=o+"NextSlide";break;case"previous":C=o+"Previous";break;case"rewindAndStop":if(e===5){C=s+"GotoSlide";B=0;}else{C=o+"RewindAndStop";}break;case"rewindAndPlay":C=(e===5)?r:o+"RewindAndPlay";if(e===5){w[v](d+o+"Pause",1);C=o+"GotoFrameAndResume";}else{C=o+"RewindAndPlay";}break;case"gotoSlideAndPlay":if(!k){B=B-1;}w[v](d+s+"GotoSlide",B);C=s+"Resume";B=1;break;case"gotoSlideAndStop":if(!k){B=B-1;}C=s+"GotoSlide";break;case"gotoFrameAndPlay":w[v](d+o+"Pause",1);C=o+"GotoFrameAndResume";break;case"gotoFrameAndStop":C=o+"GotoFrame";break;case"volume":C=q+"Volume";break;case"mute":C=s+"Mute";break;case"unmute":C=s+"Mute";B=0;break;case"muteAndShowCaptions":w[v](d+s+"Mute",1);C=s+"CC";break;case"unmuteAndHideCaptions":w[v](d+s+"Mute",0);C=s+"CC";B=0;break;case"showCaptions":C=s+"CC";break;case"hideCaptions":C=s+"CC";B=0;break;case"info":C=(e===5)?r:o+"Info";break;case"hidePlaybar":C=(e>3)?q+"ShowPlaybar":o+"HidePlaybar";B=(e>3)?0:1;break;case"showPlaybar":C=(e>3)?q+"ShowPlaybar":o+"HidePlaybar";B=(e>3)?1:0;break;case"lockTOC":C=(e>3)?"cpLockTOC":r;break;case"unlockTOC":C=(e>3)?"cpLockTOC":r;B=0;break;case"exit":C=o+"Exit";break;default:C=r;}if(C){w[v](d+C,B);}return h;};var j=function(C,B){if(!x()){return r;}var M=null,L=(typeof B!==A&&B)?"":d;switch(C){case"rdinfoHasPlaybar":try{M=w[b](C);}catch(J){}if(typeof M===A||M===null){try{M=w[b](L+C);}catch(I){}}M=(typeof M!==A)?M:r;break;case"playbarHeight":case"playbarPosition":if(!a){try{M=w.GetVariable(C);}catch(H){try{M=w.GetVariable(L+C);}catch(G){}}}else{if(e===5){L="";}M=w[b](L+C);}break;case"movieXML":case"PlaybarProperties":try{M=w.cpEIXMLGetValue(L+C);}catch(F){}if(typeof M===A||M===null){try{M=w.cpEIXMLGetValue(C);}catch(E){}}break;default:try{M=w[b](L+C);}catch(D){}if(typeof M===A||M===null){try{M=w[b](C);}catch(K){}}}return(typeof M!==A)?M:null;};var i=function(G,D){if(!x()){return r;}var B=null,F=(typeof query_external_skin!==A&&query_external_skin)?"":d;try{w[v](F+G,D);}catch(C){try{w[v](G,D);}catch(E){}}};this.swf=w;this.useZeroIndex=function(B){k=(B)?g:r;};this.pause=function(){return l("pause");};this.resume=function(){return l("resume");};this.next=function(){return l("next");};this.previous=function(){return l("previous");};this.rewindAndStop=function(){return l("rewindAndStop");};this.rewindAndPlay=function(){return l("rewindAndPlay");};this.gotoSlideAndStop=function(B){if(typeof B===p){return l("gotoSlideAndStop",B);}};this.gotoSlideAndPlay=function(B){if(typeof B===p){return l("gotoSlideAndPlay",B);}};this.gotoFrameAndStop=function(B){if(typeof B===p){return l("gotoFrameAndStop",B);}};this.gotoFrameAndPlay=function(B){if(typeof B===p){return l("gotoFrameAndPlay",B);}};this.showInfoBox=function(){return l("info");};this.exit=function(){return l("exit");};this.lockTOC=function(){return l("lockTOC");};this.unlockTOC=function(){return l("unlockTOC");};this.hidePlaybar=function(){return l("hidePlaybar");};this.showPlaybar=function(){return l("showPlaybar");};this.mute=function(){return l("mute");};this.unmute=function(){return l("unmute");};this.muteAndShowCaptions=function(){return l("muteAndShowCaptions");};this.unmuteAndHideCaptions=function(){return l("unmuteAndHideCaptions");};this.showCaptions=function(){return l("showCaptions");};this.hideCaptions=function(){return l("hideCaptions");};this.volume=function(B){if(x()&&(e>3)){if(typeof B===p){l("volume",B);}return j("cpCmndVolume");}return null;};this.query=function(B){return j(B);};this.queryExternalSkin=function(B){return j(B,g);};this.captivateVersion=function(){return(x())?e:r;};this.asVersion=function(){return(x())?(a)?3:2:r;};this.hasSkinSWF=function(){return(x())?m:r;};this.hasTOC=function(){return(x()&&j("NoOfTOCEntries")!==null)?g:r;};this.width=function(){return(x()&&(e>3))?j("cpMovieWidth"):w.TGetProperty("/",8);};this.height=function(){return(x()&&(e>3))?j("cpMovieHeight"):w.TGetProperty("/",9);};this.FPS=function(){if(!x()){return r;}return j("rdinfoFPS")||j("cpInfoFPS")||"";};this.hasPlaybar=function(){if(!x()){return r;}if(e>3){return(j("cpInfoHasPlaybar"))?g:r;}return(j("rdinfoHasPlaybar"))?g:r;};this.set=function(C,B){i(C,B);};this.percentLoaded=function(){return w.PercentLoaded();};this.getname=function(){return w.TGetProperty("/",13);};this.geturl=function(){return w.TGetProperty("/",15);};return this;};
var lf=0,Oc=1,cf=2;var Ys=1,uf=2,Ur=3,Di=0,qe=1,An=2,jn=0,Nr=1,Fr=2,Bc=3,zc=4,hf=5;var Yi=100,ff=101,df=102,pf=103,mf=104,gf=200,_f=201,xf=202,vf=203,kc=204,Vc=205,yf=206,Sf=207,Mf=208,bf=209,wf=210,Ef=211,Af=212,Tf=213,Cf=214,Za=0,Ja=1,Ka=2,wr=3,ja=4,Qa=5,to=6,eo=7,Gc=0,Rf=1,Pf=2,zn=0,Hc=1,Wc=2,Xc=3,qc=4,Yc=5,$c=6,Zc=7;var Jc=300,Ui=301,$i=302,No=303,Fo=304,$s=306,no=1e3,Zn=1001,io=1002,Ee=1003,If=1004;var Zs=1005;var Ue=1006,Oo=1007;var Tn=1008;var Mn=1009,Kc=1010,jc=1011,Or=1012,Bo=1013,kn=1014,pn=1015,Vn=1016,zo=1017,ko=1018,Br=1020,Qc=35902,tu=35899,eu=1021,nu=1022,Cn=1023,Jn=1026,Ni=1027,Vo=1028,Go=1029,Qn=1030,Ho=1031;var Wo=1033,Js=33776,Ks=33777,js=33778,Qs=33779,Xo=35840,qo=35841,Yo=35842,$o=35843,Zo=36196,Jo=37492,Ko=37496,jo=37488,Qo=37489,ta=37490,tl=37491,el=37808,nl=37809,il=37810,rl=37811,sl=37812,al=37813,ol=37814,ll=37815,cl=37816,ul=37817,hl=37818,fl=37819,dl=37820,pl=37821,ml=36492,gl=36494,_l=36495,xl=36283,vl=36284,ea=36285,yl=36286;var ys=2300,ro=2301,qa=2302,Pc=2303,Ic=2400,Lc=2401,Dc=2402;var Lf=3200;var iu=0,Df=1,pi="",Qe="srgb",Ss="srgb-linear",Ms="linear",pe="srgb";var Ya=7680;var Uf=519,Nf=512,Ff=513,Of=514,Sl=515,Bf=516,zf=517,Ml=518,kf=519,ru=35044,su=35048;var au="300 es",Nn=2e3,bs=2001;function Pp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ip(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vf(){let i=Er("canvas");return i.style.display="block",i}var Ih={},Ar=null;function ws(...i){let t="THREE."+i.shift();Ar?Ar("log",t,...i):console.log(t,...i)}function Gf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Nt(...i){i=Gf(i);let t="THREE."+i.shift();if(Ar)Ar("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ot(...i){i=Gf(i);let t="THREE."+i.shift();if(Ar)Ar("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Hi(...i){let t=i.join(" ");t in Ih||(Ih[t]=!0,Nt(...i))}function Hf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Wf={[Za]:Ja,[Ka]:to,[ja]:eo,[wr]:Qa,[Ja]:Za,[to]:Ka,[eo]:ja,[Qa]:wr},Kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lh=1234567,gs=Math.PI/180,Tr=180/Math.PI;function fi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function ou(i,t){return(i%t+t)%t}function Lp(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Dp(i,t,e){return i!==t?(e-i)/(t-i):0}function _s(i,t,e){return(1-e)*i+e*t}function Up(i,t,e,n){return _s(i,t,1-Math.exp(-e*n))}function Np(i,t=1){return t-Math.abs(ou(i,t*2)-t)}function Fp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Op(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Bp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function zp(i,t){return i+Math.random()*(t-i)}function kp(i){return i*(.5-Math.random())}function Vp(i){i!==void 0&&(Lh=i);let t=Lh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gp(i){return i*gs}function Hp(i){return i*Tr}function Wp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Xp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function qp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Yp(i,t,e,n,r){let s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+n)/2),u=a((t+n)/2),f=s((t-n)/2),h=a((t-n)/2),d=s((n-t)/2),m=a((n-t)/2);switch(r){case"XYX":i.set(o*u,c*f,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*f,o*l);break;case"ZXZ":i.set(c*f,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*m,c*d,o*l);break;case"YXY":i.set(c*d,o*u,c*m,o*l);break;case"ZYZ":i.set(c*m,c*d,o*u,o*l);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var lu={DEG2RAD:gs,RAD2DEG:Tr,generateUUID:fi,clamp:Wt,euclideanModulo:ou,mapLinear:Lp,inverseLerp:Dp,lerp:_s,damp:Up,pingpong:Np,smoothstep:Fp,smootherstep:Op,randInt:Bp,randFloat:zp,randFloatSpread:kp,seededRandom:Vp,degToRad:Gp,radToDeg:Hp,isPowerOfTwo:Wp,ceilPowerOfTwo:Xp,floorPowerOfTwo:qp,setQuaternionFromProperEuler:Yp,normalize:xe,denormalize:Un},pu=class pu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};pu.prototype.isVector2=!0;var Lt=pu,vn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3],h=s[a+0],d=s[a+1],m=s[a+2],S=s[a+3];if(f!==S||c!==h||l!==d||u!==m){let g=c*h+l*d+u*m+f*S;g<0&&(h=-h,d=-d,m=-m,S=-S,g=-g);let p=1-o;if(g<.9995){let E=Math.acos(g),T=Math.sin(E);p=Math.sin(p*E)/T,o=Math.sin(o*E)/T,c=c*p+h*o,l=l*p+d*o,u=u*p+m*o,f=f*p+S*o}else{c=c*p+h*o,l=l*p+d*o,u=u*p+m*o,f=f*p+S*o;let E=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=E,l*=E,u*=E,f*=E}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){let o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[a],h=s[a+1],d=s[a+2],m=s[a+3];return t[e]=o*m+u*f+c*d-l*h,t[e+1]=c*m+u*h+l*f-o*d,t[e+2]=l*m+u*d+o*h-c*f,t[e+3]=u*m-o*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),f=o(s/2),h=c(n/2),d=c(r/2),m=c(s/2);switch(a){case"XYZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"YZX":this._x=h*u*f+l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f-h*d*m;break;case"XZY":this._x=h*u*f-l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f+h*d*m;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(u-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},mu=class mu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*n),u=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+c*l+a*f-o*u,this.y=n+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ac.copy(this).projectOnVector(t),this.sub(ac)}reflect(t){return this.sub(ac.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mu.prototype.isVector3=!0;var O=mu,ac=new O,Dh=new vn,gu=class gu{constructor(t,e,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l)}set(t,e,n,r,s,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],m=n[8],S=r[0],g=r[3],p=r[6],E=r[1],T=r[4],y=r[7],M=r[2],w=r[5],P=r[8];return s[0]=a*S+o*E+c*M,s[3]=a*g+o*T+c*w,s[6]=a*p+o*y+c*P,s[1]=l*S+u*E+f*M,s[4]=l*g+u*T+f*w,s[7]=l*p+u*y+f*P,s[2]=h*S+d*E+m*M,s[5]=h*g+d*T+m*w,s[8]=h*p+d*y+m*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,h=o*c-u*s,d=l*s-a*c,m=e*f+n*h+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/m;return t[0]=f*S,t[1]=(r*l-u*n)*S,t[2]=(o*n-r*a)*S,t[3]=h*S,t[4]=(u*e-r*c)*S,t[5]=(r*s-o*e)*S,t[6]=d*S,t[7]=(n*c-l*e)*S,t[8]=(a*e-n*s)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(oc.makeScale(t,e)),this}rotate(t){return Hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(oc.makeRotation(-t)),this}translate(t,e){return Hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(oc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};gu.prototype.isMatrix3=!0;var Ht=gu,oc=new Ht,Uh=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nh=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $p(){let i={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===pe&&(r.r=di(r.r),r.g=di(r.g),r.b=di(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pe&&(r.r=br(r.r),r.g=br(r.g),r.b=br(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pi?Ms:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ss]:{primaries:t,whitePoint:n,transfer:Ms,toXYZ:Uh,fromXYZ:Nh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:Uh,fromXYZ:Nh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}}),i}var ie=$p();function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function br(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ar,so=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ar===void 0&&(ar=Er("canvas")),ar.width=t.width,ar.height=t.height;let r=ar.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=ar}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Er("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=di(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zp=0,Cr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=fi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(lc(r[a].image)):s.push(lc(r[a]))}else s=lc(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function lc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?so.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}var Jp=0,cc=new O,Ge=class i extends Kn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Zn,r=Zn,s=Ue,a=Tn,o=Cn,c=Mn,l=i.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=fi(),this.name="",this.source=new Cr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cc).x}get height(){return this.source.getSize(cc).y}get depth(){return this.source.getSize(cc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case no:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case no:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=Jc;Ge.DEFAULT_ANISOTROPY=1;var _u=class _u{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],m=c[9],S=c[2],g=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(l+1)/2,y=(d+1)/2,M=(p+1)/2,w=(u+h)/4,P=(f+S)/4,v=(m+g)/4;return T>y&&T>M?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=w/n,s=P/n):y>M?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=w/r,s=v/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=P/s,r=v/s),this.set(n,r,s,e),this}let E=Math.sqrt((g-m)*(g-m)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(g-m)/E,this.y=(f-S)/E,this.z=(h-u)/E,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_u.prototype.isVector4=!0;var Yt=_u,ao=class extends Kn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Yt(0,0,t,e),this.scissorTest=!1,this.viewport=new Yt(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new Ge(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ue,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Cr(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},dn=class extends ao{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Es=class extends Ge{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var oo=class extends Ge{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Uo=class Uo{constructor(t,e,n,r,s,a,o,c,l,u,f,h,d,m,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l,u,f,h,d,m,S,g)}set(t,e,n,r,s,a,o,c,l,u,f,h,d,m,S,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=m,p[11]=S,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Uo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/or.setFromMatrixColumn(t,0).length(),s=1/or.setFromMatrixColumn(t,1).length(),a=1/or.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let h=a*u,d=a*f,m=o*u,S=o*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+m*l,e[5]=h-S*l,e[9]=-o*c,e[2]=S-h*l,e[6]=m+d*l,e[10]=a*c}else if(t.order==="YXZ"){let h=c*u,d=c*f,m=l*u,S=l*f;e[0]=h+S*o,e[4]=m*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-m,e[6]=S+h*o,e[10]=a*c}else if(t.order==="ZXY"){let h=c*u,d=c*f,m=l*u,S=l*f;e[0]=h-S*o,e[4]=-a*f,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*u,e[9]=S-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let h=a*u,d=a*f,m=o*u,S=o*f;e[0]=c*u,e[4]=m*l-d,e[8]=h*l+S,e[1]=c*f,e[5]=S*l+h,e[9]=d*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let h=a*c,d=a*l,m=o*c,S=o*l;e[0]=c*u,e[4]=S-h*f,e[8]=m*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=d*f+m,e[10]=h-S*f}else if(t.order==="XZY"){let h=a*c,d=a*l,m=o*c,S=o*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+S,e[5]=a*u,e[9]=d*f-m,e[2]=m*f-d,e[6]=o*u,e[10]=S*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kp,t,jp)}lookAt(t,e,n){let r=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),xi.crossVectors(n,_n),xi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),xi.crossVectors(n,_n)),xi.normalize(),ba.crossVectors(_n,xi),r[0]=xi.x,r[4]=ba.x,r[8]=_n.x,r[1]=xi.y,r[5]=ba.y,r[9]=_n.y,r[2]=xi.z,r[6]=ba.z,r[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],m=n[2],S=n[6],g=n[10],p=n[14],E=n[3],T=n[7],y=n[11],M=n[15],w=r[0],P=r[4],v=r[8],b=r[12],R=r[1],L=r[5],B=r[9],k=r[13],N=r[2],I=r[6],G=r[10],W=r[14],rt=r[3],Z=r[7],et=r[11],nt=r[15];return s[0]=a*w+o*R+c*N+l*rt,s[4]=a*P+o*L+c*I+l*Z,s[8]=a*v+o*B+c*G+l*et,s[12]=a*b+o*k+c*W+l*nt,s[1]=u*w+f*R+h*N+d*rt,s[5]=u*P+f*L+h*I+d*Z,s[9]=u*v+f*B+h*G+d*et,s[13]=u*b+f*k+h*W+d*nt,s[2]=m*w+S*R+g*N+p*rt,s[6]=m*P+S*L+g*I+p*Z,s[10]=m*v+S*B+g*G+p*et,s[14]=m*b+S*k+g*W+p*nt,s[3]=E*w+T*R+y*N+M*rt,s[7]=E*P+T*L+y*I+M*Z,s[11]=E*v+T*B+y*G+M*et,s[15]=E*b+T*k+y*W+M*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],m=t[3],S=t[7],g=t[11],p=t[15],E=c*d-l*h,T=o*d-l*f,y=o*h-c*f,M=a*d-l*u,w=a*h-c*u,P=a*f-o*u;return e*(S*E-g*T+p*y)-n*(m*E-g*M+p*w)+r*(m*T-S*M+p*P)-s*(m*y-S*w+g*P)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-n*(s*u-o*c)+r*(s*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],m=t[12],S=t[13],g=t[14],p=t[15],E=e*o-n*a,T=e*c-r*a,y=e*l-s*a,M=n*c-r*o,w=n*l-s*o,P=r*l-s*c,v=u*S-f*m,b=u*g-h*m,R=u*p-d*m,L=f*g-h*S,B=f*p-d*S,k=h*p-d*g,N=E*k-T*B+y*L+M*R-w*b+P*v;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/N;return t[0]=(o*k-c*B+l*L)*I,t[1]=(r*B-n*k-s*L)*I,t[2]=(S*P-g*w+p*M)*I,t[3]=(h*w-f*P-d*M)*I,t[4]=(c*R-a*k-l*b)*I,t[5]=(e*k-r*R+s*b)*I,t[6]=(g*y-m*P-p*T)*I,t[7]=(u*P-h*y+d*T)*I,t[8]=(a*B-o*R+l*v)*I,t[9]=(n*R-e*B-s*v)*I,t[10]=(m*w-S*y+p*E)*I,t[11]=(f*y-u*w-d*E)*I,t[12]=(o*b-a*L-c*v)*I,t[13]=(e*L-n*b+r*v)*I,t[14]=(S*T-m*M-g*E)*I,t[15]=(u*M-f*T+h*E)*I,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,u=a+a,f=o+o,h=s*l,d=s*u,m=s*f,S=a*u,g=a*f,p=o*f,E=c*l,T=c*u,y=c*f,M=n.x,w=n.y,P=n.z;return r[0]=(1-(S+p))*M,r[1]=(d+y)*M,r[2]=(m-T)*M,r[3]=0,r[4]=(d-y)*w,r[5]=(1-(h+p))*w,r[6]=(g+E)*w,r[7]=0,r[8]=(m+T)*P,r[9]=(g-E)*P,r[10]=(1-(h+S))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let a=or.set(r[0],r[1],r[2]).length(),o=or.set(r[4],r[5],r[6]).length(),c=or.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Pn.copy(this);let l=1/a,u=1/o,f=1/c;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=f,Pn.elements[9]*=f,Pn.elements[10]*=f,e.setFromRotationMatrix(Pn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,r,s,a,o=Nn,c=!1){let l=this.elements,u=2*s/(e-t),f=2*s/(n-r),h=(e+t)/(e-t),d=(n+r)/(n-r),m,S;if(c)m=s/(a-s),S=a*s/(a-s);else if(o===Nn)m=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===bs)m=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Nn,c=!1){let l=this.elements,u=2/(e-t),f=2/(n-r),h=-(e+t)/(e-t),d=-(n+r)/(n-r),m,S;if(c)m=1/(a-s),S=a/(a-s);else if(o===Nn)m=-2/(a-s),S=-(a+s)/(a-s);else if(o===bs)m=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Uo.prototype.isMatrix4=!0;var me=Uo,or=new O,Pn=new me,Kp=new O(0,0,0),jp=new O(1,1,1),xi=new O,ba=new O,_n=new O,Fh=new me,Oh=new vn,wi=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Oh.setFromEuler(this),this.setFromQuaternion(Oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wi.DEFAULT_ORDER="XYZ";var As=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Qp=0,Bh=new O,lr=new vn,oi=new me,wa=new O,us=new O,tm=new O,em=new vn,zh=new O(1,0,0),kh=new O(0,1,0),Vh=new O(0,0,1),Gh={type:"added"},nm={type:"removed"},cr={type:"childadded",child:null},uc={type:"childremoved",child:null},yn=class i extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new wi,n=new vn,r=new O(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new me},normalMatrix:{value:new Ht}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new As,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return lr.setFromAxisAngle(t,e),this.quaternion.multiply(lr),this}rotateOnWorldAxis(t,e){return lr.setFromAxisAngle(t,e),this.quaternion.premultiply(lr),this}rotateX(t){return this.rotateOnAxis(zh,t)}rotateY(t){return this.rotateOnAxis(kh,t)}rotateZ(t){return this.rotateOnAxis(Vh,t)}translateOnAxis(t,e){return Bh.copy(t).applyQuaternion(this.quaternion),this.position.add(Bh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zh,t)}translateY(t){return this.translateOnAxis(kh,t)}translateZ(t){return this.translateOnAxis(Vh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wa.copy(t):wa.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(us,wa,this.up):oi.lookAt(wa,us,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),lr.setFromRotationMatrix(oi),this.quaternion.premultiply(lr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ot("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gh),cr.child=t,this.dispatchEvent(cr),cr.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nm),uc.child=t,this.dispatchEvent(uc),uc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gh),cr.child=t,this.dispatchEvent(cr),cr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,tm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,em,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yn.DEFAULT_UP=new O(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},im={type:"move"},Rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let S of t.hand.values()){let g=e.getJointPose(S,n),p=this._getHandJoint(l,S);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;l.inputState.pinching&&h>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(im)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Fn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function hc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ie.workingColorSpace){if(t=ou(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=hc(a,s,t+1/3),this.g=hc(a,s,t),this.b=hc(a,s,t-1/3)}return ie.colorSpaceToWorking(this,r),this}setStyle(t,e=Qe){function n(s){s!==void 0&&parseFloat(s)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){let n=Xf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return ie.workingToColorSpace(je.copy(this),t),Math.round(Wt(je.r*255,0,255))*65536+Math.round(Wt(je.g*255,0,255))*256+Math.round(Wt(je.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(je.copy(this),e);let n=je.r,r=je.g,s=je.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Qe){ie.workingToColorSpace(je.copy(this),t);let e=je.r,n=je.g,r=je.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(Ea);let n=_s(vi.h,Ea.h,e),r=_s(vi.s,Ea.s,e),s=_s(vi.l,Ea.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},je=new qt;qt.NAMES=Xf;var Ts=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},In=new O,li=new O,fc=new O,ci=new O,ur=new O,hr=new O,Hh=new O,dc=new O,pc=new O,mc=new O,gc=new Yt,_c=new Yt,xc=new Yt,bi=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),In.subVectors(t,e),r.cross(In);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){In.subVectors(r,e),li.subVectors(n,e),fc.subVectors(t,e);let a=In.dot(In),o=In.dot(li),c=In.dot(fc),l=li.dot(li),u=li.dot(fc),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;let h=1/f,d=(l*c-o*u)*h,m=(a*u-o*c)*h;return s.set(1-d-m,m,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ci.x),c.addScaledVector(a,ci.y),c.addScaledVector(o,ci.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return gc.setScalar(0),_c.setScalar(0),xc.setScalar(0),gc.fromBufferAttribute(t,e),_c.fromBufferAttribute(t,n),xc.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(gc,s.x),a.addScaledVector(_c,s.y),a.addScaledVector(xc,s.z),a}static isFrontFacing(t,e,n,r){return In.subVectors(n,e),li.subVectors(t,e),In.cross(li).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),li.subVectors(this.a,this.b),In.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,a,o;ur.subVectors(r,n),hr.subVectors(s,n),dc.subVectors(t,n);let c=ur.dot(dc),l=hr.dot(dc);if(c<=0&&l<=0)return e.copy(n);pc.subVectors(t,r);let u=ur.dot(pc),f=hr.dot(pc);if(u>=0&&f<=u)return e.copy(r);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(ur,a);mc.subVectors(t,s);let d=ur.dot(mc),m=hr.dot(mc);if(m>=0&&d<=m)return e.copy(s);let S=d*l-c*m;if(S<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(hr,o);let g=u*m-d*f;if(g<=0&&f-u>=0&&d-m>=0)return Hh.subVectors(s,r),o=(f-u)/(f-u+(d-m)),e.copy(r).addScaledVector(Hh,o);let p=1/(g+S+h);return a=S*p,o=h*p,e.copy(n).addScaledVector(ur,a).addScaledVector(hr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},sn=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ln):Ln.fromBufferAttribute(s,a),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Aa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Aa.copy(n.boundingBox)),Aa.applyMatrix4(t.matrixWorld),this.union(Aa)}let r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hs),Ta.subVectors(this.max,hs),fr.subVectors(t.a,hs),dr.subVectors(t.b,hs),pr.subVectors(t.c,hs),yi.subVectors(dr,fr),Si.subVectors(pr,dr),zi.subVectors(fr,pr);let e=[0,-yi.z,yi.y,0,-Si.z,Si.y,0,-zi.z,zi.y,yi.z,0,-yi.x,Si.z,0,-Si.x,zi.z,0,-zi.x,-yi.y,yi.x,0,-Si.y,Si.x,0,-zi.y,zi.x,0];return!vc(e,fr,dr,pr,Ta)||(e=[1,0,0,0,1,0,0,0,1],!vc(e,fr,dr,pr,Ta))?!1:(Ca.crossVectors(yi,Si),e=[Ca.x,Ca.y,Ca.z],vc(e,fr,dr,pr,Ta))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ui=[new O,new O,new O,new O,new O,new O,new O,new O],Ln=new O,Aa=new sn,fr=new O,dr=new O,pr=new O,yi=new O,Si=new O,zi=new O,hs=new O,Ta=new O,Ca=new O,ki=new O;function vc(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ki.fromArray(i,s);let o=r.x*Math.abs(ki.x)+r.y*Math.abs(ki.y)+r.z*Math.abs(ki.z),c=t.dot(ki),l=e.dot(ki),u=n.dot(ki);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Pe=new O,Ra=new Lt,rm=0,fn=class extends Kn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ru,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ra.fromBufferAttribute(this,e),Ra.applyMatrix3(t),this.setXY(e,Ra.x,Ra.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Un(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Un(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Un(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),r=xe(r,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Cs=class extends fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Rs=class extends fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ge=class extends fn{constructor(t,e,n){super(new Float32Array(t),e,n)}},sm=new sn,fs=new O,yc=new O,an=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):sm.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fs.subVectors(t,this.center);let e=fs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(fs,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fs.copy(t.center).add(yc)),this.expandByPoint(fs.copy(t.center).sub(yc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},am=0,wn=new me,Sc=new yn,mr=new O,xn=new sn,ds=new sn,ke=new O,Ie=class i extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pp(t)?Rs:Cs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,n){return wn.makeTranslation(t,e,n),this.applyMatrix4(wn),this}scale(t,e,n){return wn.makeScale(t,e,n),this.applyMatrix4(wn),this}lookAt(t){return Sc.lookAt(t),Sc.updateMatrix(),this.applyMatrix4(Sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ge(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(ke.addVectors(xn.min,ds.min),xn.expandByPoint(ke),ke.addVectors(xn.max,ds.max),xn.expandByPoint(ke)):(xn.expandByPoint(ds.min),xn.expandByPoint(ds.max))}xn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)ke.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ke));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)ke.fromBufferAttribute(o,l),c&&(mr.fromBufferAttribute(t,l),ke.add(mr)),r=Math.max(r,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new fn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new O,c[v]=new O;let l=new O,u=new O,f=new O,h=new Lt,d=new Lt,m=new Lt,S=new O,g=new O;function p(v,b,R){l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,R),h.fromBufferAttribute(s,v),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,R),u.sub(l),f.sub(l),d.sub(h),m.sub(h);let L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(S.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(L),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(L),o[v].add(S),o[b].add(S),o[R].add(S),c[v].add(g),c[b].add(g),c[R].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let v=0,b=E.length;v<b;++v){let R=E[v],L=R.start,B=R.count;for(let k=L,N=L+B;k<N;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let T=new O,y=new O,M=new O,w=new O;function P(v){M.fromBufferAttribute(r,v),w.copy(M);let b=o[v];T.copy(b),T.sub(M.multiplyScalar(M.dot(b))).normalize(),y.crossVectors(w,b);let L=y.dot(c[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,L)}for(let v=0,b=E.length;v<b;++v){let R=E[v],L=R.start,B=R.count;for(let k=L,N=L+B;k<N;k+=3)P(t.getX(k+0)),P(t.getX(k+1)),P(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let r=new O,s=new O,a=new O,o=new O,c=new O,l=new O,u=new O,f=new O;if(t)for(let h=0,d=t.count;h<d;h+=3){let m=t.getX(h+0),S=t.getX(h+1),g=t.getX(h+2);r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,S),a.fromBufferAttribute(e,g),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u),d=0,m=0;for(let S=0,g=c.length;S<g;S++){o.isInterleavedBufferAttribute?d=c[S]*o.data.stride+o.offset:d=c[S]*u;for(let p=0;p<u;p++)h[m++]=l[d++]}return new fn(h,u,f)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=t(c,n);e.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){let h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(e))}let s=t.morphAttributes;for(let l in s){let u=[],f=s[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},lo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ru,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},rn=new O,On=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),r=xe(r,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){ws("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new fn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ws("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Mc=new O,om=new O,lm=new Ht,Dn=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Mc.subVectors(n,e).cross(om.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(Mc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(r,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||lm.getNormalMatrix(t),r=this.coplanarPoint(Mc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},cm=0,Ei=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=Nr,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kc,this.blendDst=Vc,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ya,this.stencilZFail=Ya,this.stencilZPass=Ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(e){let s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Dn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var hi=new O,bc=new O,Pa=new O,Ia=new O,Wi=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,e),hi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){bc.copy(t).add(e).multiplyScalar(.5),Pa.copy(e).sub(t).normalize(),Ia.copy(this.origin).sub(bc);let s=t.distanceTo(e)*.5,a=-this.direction.dot(Pa),o=Ia.dot(this.direction),c=-Ia.dot(Pa),l=Ia.lengthSq(),u=Math.abs(1-a*a),f,h,d,m;if(u>0)if(f=a*c-o,h=a*o-c,m=s*u,f>=0)if(h>=-m)if(h<=m){let S=1/u;f*=S,h*=S,d=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h<=-m?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l):h<=m?(f=0,h=Math.min(Math.max(-s,-c),s),d=h*(h+2*c)+l):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(bc).addScaledVector(Pa,h),d}intersectSphere(t,e){if(t.radius<0)return null;hi.subVectors(t.center,this.origin);let n=hi.dot(this.direction),r=hi.dot(hi)-n*n,s=t.radius*t.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,r=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,r=(t.min.x-h.x)*l),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,e,n,r,s){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,f=t.x-a.x,h=t.y-a.y,d=t.z-a.z,m=e.x-a.x,S=e.y-a.y,g=e.z-a.z,p=n.x-a.x,E=n.y-a.y,T=n.z-a.z,y=Math.abs(c),M=Math.abs(l),w=Math.abs(u),P,v,b,R,L,B,k,N,I,G,W,rt;if(y>=M&&y>=w?(b=c,B=f,I=m,rt=p,c>=0?(P=l,v=u,R=h,L=d,k=S,N=g,G=E,W=T):(P=u,v=l,R=d,L=h,k=g,N=S,G=T,W=E)):M>=w?(b=l,B=h,I=S,rt=E,l>=0?(P=u,v=c,R=d,L=f,k=g,N=m,G=T,W=p):(P=c,v=u,R=f,L=d,k=m,N=g,G=p,W=T)):(b=u,B=d,I=g,rt=T,u>=0?(P=c,v=l,R=f,L=h,k=m,N=S,G=p,W=E):(P=l,v=c,R=h,L=f,k=S,N=m,G=E,W=p)),b===0)return null;let Z=P/b,et=v/b,nt=1/b,wt=R-Z*B,xt=L-et*B,ee=k-Z*I,zt=N-et*I,Qt=G-Z*rt,j=W-et*rt,st=Qt*zt-j*ee,bt=wt*j-xt*Qt,Ft=ee*xt-zt*wt;if(r){if(st<0||bt<0||Ft<0)return null}else if((st<0||bt<0||Ft<0)&&(st>0||bt>0||Ft>0))return null;let Mt=st+bt+Ft;if(Mt===0)return null;let Dt=nt*(st*B+bt*I+Ft*rt);return(Mt>0?Dt<0:Dt>0)?null:this.at(Dt/Mt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ai=class extends Ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Wh=new me,Vi=new Wi,La=new an,Xh=new O,Da=new O,Ua=new O,Na=new O,wc=new O,Fa=new O,qh=new O,Oa=new O,Me=class extends yn{constructor(t=new Ie,e=new Ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let o=this.morphTargetInfluences;if(s&&o){Fa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=o[c],f=s[c];u!==0&&(wc.fromBufferAttribute(f,t),a?Fa.addScaledVector(wc,u):Fa.addScaledVector(wc.sub(e),u))}e.add(Fa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(s),Vi.copy(t.ray).recast(t.near),!(La.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(La,Xh)===null||Vi.origin.distanceToSquared(Xh)>(t.far-t.near)**2))&&(Wh.copy(s).invert(),Vi.copy(t.ray).applyMatrix4(Wh),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,S=h.length;m<S;m++){let g=h[m],p=a[g.materialIndex],E=Math.max(g.start,d.start),T=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=E,M=T;y<M;y+=3){let w=o.getX(y),P=o.getX(y+1),v=o.getX(y+2);r=Ba(this,p,t,n,l,u,f,w,P,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let m=Math.max(0,d.start),S=Math.min(o.count,d.start+d.count);for(let g=m,p=S;g<p;g+=3){let E=o.getX(g),T=o.getX(g+1),y=o.getX(g+2);r=Ba(this,a,t,n,l,u,f,E,T,y),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,S=h.length;m<S;m++){let g=h[m],p=a[g.materialIndex],E=Math.max(g.start,d.start),T=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let y=E,M=T;y<M;y+=3){let w=y,P=y+1,v=y+2;r=Ba(this,p,t,n,l,u,f,w,P,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let m=Math.max(0,d.start),S=Math.min(c.count,d.start+d.count);for(let g=m,p=S;g<p;g+=3){let E=g,T=g+1,y=g+2;r=Ba(this,a,t,n,l,u,f,E,T,y),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function um(i,t,e,n,r,s,a,o){let c;if(t.side===qe?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===Di,o),c===null)return null;Oa.copy(o),Oa.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Oa);return l<e.near||l>e.far?null:{distance:l,point:Oa.clone(),object:i}}function Ba(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,Da),i.getVertexPosition(c,Ua),i.getVertexPosition(l,Na);let u=um(i,t,e,n,Da,Ua,Na,qh);if(u){let f=new O;bi.getBarycoord(qh,Da,Ua,Na,f),r&&(u.uv=bi.getInterpolatedAttribute(r,o,c,l,f,new Lt)),s&&(u.uv1=bi.getInterpolatedAttribute(s,o,c,l,f,new Lt)),a&&(u.normal=bi.getInterpolatedAttribute(a,o,c,l,f,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new O,materialIndex:0};bi.getNormal(Da,Ua,Na,h.normal),u.face=h,u.barycoord=f}return u}var Bn=class extends Ge{constructor(t=null,e=1,n=1,r,s,a,o,c,l=Ee,u=Ee,f,h){super(null,a,o,c,l,u,r,s,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ps=class extends fn{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},gr=new me,Yh=new me,za=[],$h=new sn,hm=new me,ps=new Me,ms=new an,Is=class extends Me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ps(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,hm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new sn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gr),$h.copy(t.boundingBox).applyMatrix4(gr),this.boundingBox.union($h)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gr),ms.copy(t.boundingSphere).applyMatrix4(gr),this.boundingSphere.union(ms)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(t,e){let n=this.matrixWorld,r=this.count;if(ps.geometry=this.geometry,ps.material=this.material,ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ms.copy(this.boundingSphere),ms.applyMatrix4(n),t.ray.intersectsSphere(ms)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,gr),Yh.multiplyMatrices(n,gr),ps.matrixWorld=Yh,ps.raycast(t,za);for(let a=0,o=za.length;a<o;a++){let c=za[a];c.instanceId=s,c.object=this,e.push(c)}za.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ps(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bn(new Float32Array(r*this.count),r,this.count,Vo,pn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*t;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Gi=new an,fm=new Lt(.5,.5),ka=new O,Ls=class{constructor(t=new Dn,e=new Dn,n=new Dn,r=new Dn,s=new Dn,a=new Dn){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn,n=!1){let r=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],h=s[6],d=s[7],m=s[8],S=s[9],g=s[10],p=s[11],E=s[12],T=s[13],y=s[14],M=s[15];if(r[0].setComponents(l-a,d-u,p-m,M-E).normalize(),r[1].setComponents(l+a,d+u,p+m,M+E).normalize(),r[2].setComponents(l+o,d+f,p+S,M+T).normalize(),r[3].setComponents(l-o,d-f,p-S,M-T).normalize(),n)r[4].setComponents(c,h,g,y).normalize(),r[5].setComponents(l-c,d-h,p-g,M-y).normalize();else if(r[4].setComponents(l-c,d-h,p-g,M-y).normalize(),e===Nn)r[5].setComponents(l+c,d+h,p+g,M+y).normalize();else if(e===bs)r[5].setComponents(c,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){Gi.center.set(0,0,0);let e=fm.distanceTo(t.center);return Gi.radius=.7071067811865476+e,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(ka.x=r.normal.x>0?t.max.x:t.min.x,ka.y=r.normal.y>0?t.max.y:t.min.y,ka.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ka)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var co=class extends Ei{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zh=new me,Uc=new Wi,Va=new an,Ga=new O,Ds=class extends yn{constructor(t=new Ie,e=new co){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(r),Va.radius+=s,t.ray.intersectsSphere(Va)===!1)return;Zh.copy(r).invert(),Uc.copy(t.ray).applyMatrix4(Zh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){let h=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let m=h,S=d;m<S;m++){let g=l.getX(m);Ga.fromBufferAttribute(f,g),Jh(Ga,g,c,r,t,e,this)}}else{let h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let m=h,S=d;m<S;m++)Ga.fromBufferAttribute(f,m),Jh(Ga,m,c,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Jh(i,t,e,n,r,s,a){let o=Uc.distanceSqToPoint(i);if(o<e){let c=new O;Uc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Us=class extends Ge{constructor(t=[],e=Ui,n,r,s,a,o,c,l,u){super(t,e,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Pr=class extends Ge{constructor(t,e,n,r,s,a,o,c,l){super(t,e,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ti=class extends Ge{constructor(t,e,n=kn,r,s,a,o=Ee,c=Ee,l,u=Jn,f=1){if(u!==Jn&&u!==Ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},uo=class extends Ti{constructor(t,e=kn,n=Ui,r,s,a=Ee,o=Ee,c,l=Jn){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ns=class extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ir=class i extends Ie{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],u=[],f=[],h=0,d=0;m("z","y","x",-1,-1,n,e,t,a,s,0),m("z","y","x",1,-1,n,e,-t,a,s,1),m("x","z","y",1,1,t,n,e,r,a,2),m("x","z","y",1,-1,t,n,-e,r,a,3),m("x","y","z",1,-1,t,e,n,r,s,4),m("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(f,2));function m(S,g,p,E,T,y,M,w,P,v,b){let R=y/P,L=M/v,B=y/2,k=M/2,N=w/2,I=P+1,G=v+1,W=0,rt=0,Z=new O;for(let et=0;et<G;et++){let nt=et*L-k;for(let wt=0;wt<I;wt++){let xt=wt*R-B;Z[S]=xt*E,Z[g]=nt*T,Z[p]=N,l.push(Z.x,Z.y,Z.z),Z[S]=0,Z[g]=0,Z[p]=w>0?1:-1,u.push(Z.x,Z.y,Z.z),f.push(wt/P),f.push(1-et/v),W+=1}}for(let et=0;et<v;et++)for(let nt=0;nt<P;nt++){let wt=h+nt+I*et,xt=h+nt+I*(et+1),ee=h+(nt+1)+I*(et+1),zt=h+(nt+1)+I*et;c.push(wt,xt,zt),c.push(xt,ee,zt),rt+=6}o.addGroup(d,rt,b),d+=rt,h+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Lr=class i extends Ie{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let u=[],f=[],h=[],d=[],m=0,S=[],g=n/2,p=0;E(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new ge(f,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(d,2));function E(){let y=new O,M=new O,w=0,P=(e-t)/n;for(let v=0;v<=s;v++){let b=[],R=v/s,L=R*(e-t)+t;for(let B=0;B<=r;B++){let k=B/r,N=k*c+o,I=Math.sin(N),G=Math.cos(N);M.x=L*I,M.y=-R*n+g,M.z=L*G,f.push(M.x,M.y,M.z),y.set(I,P,G).normalize(),h.push(y.x,y.y,y.z),d.push(k,1-R),b.push(m++)}S.push(b)}for(let v=0;v<r;v++)for(let b=0;b<s;b++){let R=S[b][v],L=S[b+1][v],B=S[b+1][v+1],k=S[b][v+1];(t>0||b!==0)&&(u.push(R,L,k),w+=3),(e>0||b!==s-1)&&(u.push(L,B,k),w+=3)}l.addGroup(p,w,0),p+=w}function T(y){let M=m,w=new Lt,P=new O,v=0,b=y===!0?t:e,R=y===!0?1:-1;for(let B=1;B<=r;B++)f.push(0,g*R,0),h.push(0,R,0),d.push(.5,.5),m++;let L=m;for(let B=0;B<=r;B++){let N=B/r*c+o,I=Math.cos(N),G=Math.sin(N);P.x=b*G,P.y=g*R,P.z=b*I,f.push(P.x,P.y,P.z),h.push(0,R,0),w.x=I*.5+.5,w.y=G*.5*R+.5,d.push(w.x,w.y),m++}for(let B=0;B<r;B++){let k=M+B,N=L+B;y===!0?u.push(N,N+1,k):u.push(N+1,N,k),v+=3}l.addGroup(p,v,y===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fs=class i extends Lr{constructor(t=1,e=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Nt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),r=0,s=n.length,a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);let u=n[r],h=n[r+1]-u,d=(a-u)/h;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new Lt:new O);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new O,r=[],s=[],a=[],o=new O,c=new me;for(let d=0;d<=t;d++){let m=d/t;r[d]=this.getTangentAt(m,new O)}s[0]=new O,a[0]=new O;let l=Number.MAX_VALUE,u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Wt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,m))}a[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(Wt(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let m=1;m<=t;m++)s[m].applyMatrix4(c.makeRotationAxis(r[m],d*m)),a[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Os=class extends En{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new Lt){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);let o=this.aStartAngle+t*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ho=class extends Os{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function cu(){let i=0,t=0,e=0,n=0;function r(s,a,o,c){i=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,f){let h=(a-s)/l-(o-s)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+f)+(c-o)/f;h*=u,d*=u,r(a,o,h,d)},calc:function(s){let a=s*s,o=a*s;return i+t*s+e*a+n*o}}}var Kh=new O,jh=new O,Ec=new cu,Ac=new cu,Tc=new cu,Ci=class extends En{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new O){let n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:(jh.subVectors(r[0],r[1]).add(r[0]),l=jh);let f=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Kh.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Kh),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(f),d),S=Math.pow(f.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(u),d);S<1e-4&&(S=1),m<1e-4&&(m=S),g<1e-4&&(g=S),Ec.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,m,S,g),Ac.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,m,S,g),Tc.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,m,S,g)}else this.curveType==="catmullrom"&&(Ec.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Ac.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Tc.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(Ec.calc(c),Ac.calc(c),Tc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new O().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Qh(i,t,e,n,r){let s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}function dm(i,t){let e=1-i;return e*e*t}function pm(i,t){return 2*(1-i)*i*t}function mm(i,t){return i*i*t}function xs(i,t,e,n){return dm(i,t)+pm(i,e)+mm(i,n)}function gm(i,t){let e=1-i;return e*e*e*t}function _m(i,t){let e=1-i;return 3*e*e*i*t}function xm(i,t){return 3*(1-i)*i*i*t}function vm(i,t){return i*i*i*t}function vs(i,t,e,n,r){return gm(i,t)+_m(i,e)+xm(i,n)+vm(i,r)}var fo=class extends En{constructor(t=new Lt,e=new Lt,n=new Lt,r=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Lt){let n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(vs(t,r.x,s.x,a.x,o.x),vs(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},po=class extends En{constructor(t=new O,e=new O,n=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new O){let n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(vs(t,r.x,s.x,a.x,o.x),vs(t,r.y,s.y,a.y,o.y),vs(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},mo=class extends En{constructor(t=new Lt,e=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},go=class extends En{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_o=class extends En{constructor(t=new Lt,e=new Lt,n=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Lt){let n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(xs(t,r.x,s.x,a.x),xs(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bs=class extends En{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(xs(t,r.x,s.x,a.x),xs(t,r.y,s.y,a.y),xs(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xo=class extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Lt){let n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(Qh(o,c.x,l.x,u.x,f.x),Qh(o,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new Lt().fromArray(r))}return this}},ym=Object.freeze({__proto__:null,ArcCurve:ho,CatmullRomCurve3:Ci,CubicBezierCurve:fo,CubicBezierCurve3:po,EllipseCurve:Os,LineCurve:mo,LineCurve3:go,QuadraticBezierCurve:_o,QuadraticBezierCurve3:Bs,SplineCurve:xo});var zs=class i extends Ie{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,f=t/o,h=e/c,d=[],m=[],S=[],g=[];for(let p=0;p<u;p++){let E=p*h-a;for(let T=0;T<l;T++){let y=T*f-s;m.push(y,-E,0),S.push(0,0,1),g.push(T/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){let T=E+l*p,y=E+l*(p+1),M=E+1+l*(p+1),w=E+1+l*p;d.push(T,y,w),d.push(y,M,w)}this.setIndex(d),this.setAttribute("position",new ge(m,3)),this.setAttribute("normal",new ge(S,3)),this.setAttribute("uv",new ge(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Xi=class i extends Ie{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],f=new O,h=new O,d=[],m=[],S=[],g=[];for(let p=0;p<=n;p++){let E=[],T=p/n,y=a+T*o,M=t*Math.cos(y),w=Math.sqrt(t*t-M*M),P=0;p===0&&a===0?P=.5/e:p===n&&c===Math.PI&&(P=-.5/e);for(let v=0;v<=e;v++){let b=v/e,R=r+b*s;f.x=-w*Math.cos(R),f.y=M,f.z=w*Math.sin(R),m.push(f.x,f.y,f.z),h.copy(f).normalize(),S.push(h.x,h.y,h.z),g.push(b+P,1-T),E.push(l++)}u.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){let T=u[p][E+1],y=u[p][E],M=u[p+1][E],w=u[p+1][E+1];(p!==0||a>0)&&d.push(T,y,w),(p!==n-1||c<Math.PI)&&d.push(y,M,w)}this.setIndex(d),this.setAttribute("position",new ge(m,3)),this.setAttribute("normal",new ge(S,3)),this.setAttribute("uv",new ge(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var qi=class i extends Ie{constructor(t=new Bs(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};let a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new O,c=new O,l=new Lt,u=new O,f=[],h=[],d=[],m=[];S(),this.setIndex(m),this.setAttribute("position",new ge(f,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(d,2));function S(){for(let T=0;T<e;T++)g(T);g(s===!1?e:0),E(),p()}function g(T){u=t.getPointAt(T/e,u);let y=a.normals[T],M=a.binormals[T];for(let w=0;w<=r;w++){let P=w/r*Math.PI*2,v=Math.sin(P),b=-Math.cos(P);c.x=b*y.x+v*M.x,c.y=b*y.y+v*M.y,c.z=b*y.z+v*M.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,f.push(o.x,o.y,o.z)}}function p(){for(let T=1;T<=e;T++)for(let y=1;y<=r;y++){let M=(r+1)*(T-1)+(y-1),w=(r+1)*T+(y-1),P=(r+1)*T+y,v=(r+1)*(T-1)+y;m.push(M,w,v),m.push(w,P,v)}}function E(){for(let T=0;T<=e;T++)for(let y=0;y<=r;y++)l.x=T/e,l.y=y/r,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new ym[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},ks=class extends Ie{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,r=new O,s=new O;if(t.index!==null){let a=t.attributes.position,o=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){let f=c[l],h=f.start,d=f.count;for(let m=h,S=h+d;m<S;m+=3)for(let g=0;g<3;g++){let p=o.getX(m+g),E=o.getX(m+(g+1)%3);r.fromBufferAttribute(a,p),s.fromBufferAttribute(a,E),tf(r,s,n)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}}else{let a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let u=3*o+l,f=3*o+(l+1)%3;r.fromBufferAttribute(a,u),s.fromBufferAttribute(a,f),tf(r,s,n)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new ge(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function tf(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(r)===!0?!1:(e.add(n),e.add(r),!0)}function Zi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(ef(r))r.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(ef(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function tn(i){let t={};for(let e=0;e<i.length;e++){let n=Zi(i[e]);for(let r in n)t[r]=n[r]}return t}function ef(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Sm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function uu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var na={clone:Zi,merge:tn},Mm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ae=class extends Ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mm,this.fragmentShader=bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=Sm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new qt().setHex(r.value);break;case"v2":this.uniforms[n].value=new Lt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new O().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Yt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ht().fromArray(r.value);break;case"m4":this.uniforms[n].value=new me().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},vo=class extends Ae{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var yo=class extends Ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},So=class extends Ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function _r(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Cc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ri=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<r)){for(let o=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=e[++n],t<r)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let a=0;a!==r;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Mo=class extends Ri{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ic,endingEnd:Ic}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,a=t+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Lc:s=t,o=2*e-n;break;case Dc:s=r.length-2,o=e+r[s]-r[s+1];break;default:s=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Lc:a=t,c=2*n-e;break;case Dc:a=1,c=n+r[1]-r[0];break;default:a=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(t,e,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(n-e)/(r-e),S=m*m,g=S*m,p=-h*g+2*h*S-h*m,E=(1+h)*g+(-1.5-2*h)*S+(-.5+h)*m+1,T=(-1-d)*g+(1.5+d)*S+.5*m,y=d*g-d*S;for(let M=0;M!==o;++M)s[M]=p*a[u+M]+E*a[l+M]+T*a[c+M]+y*a[f+M];return s}},bo=class extends Ri{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(r-e),f=1-u;for(let h=0;h!==o;++h)s[h]=a[l+h]*f+a[c+h]*u;return s}},wo=class extends Ri{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},Eo=class extends Ri{interpolate_(t,e,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let m=(n-e)/(r-e),S=1-m;for(let g=0;g!==o;++g)s[g]=a[l+g]*S+a[c+g]*m;return s}let h=o*2,d=t-1;for(let m=0;m!==o;++m){let S=a[l+m],g=a[c+m],p=d*h+m*2,E=f[p],T=f[p+1],y=t*h+m*2,M=u[y],w=u[y+1],P=Em(n,e,E,M,r);s[m]=qf(P,S,T,w,g)}return s}};function qf(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function wm(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function Em(i,t,e,n,r){let s=(i-t)/(r-t);for(let a=0;a<8;a++){let o=qf(s,t,e,n,r)-i;if(Math.abs(o)<1e-10)break;let c=wm(s,t,e,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var Sn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_r(e,this.TimeBufferType),this.values=_r(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:_r(t.times,Array),values:_r(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),Cc(t.settings)&&(n.settings={inTangents:_r(t.settings.inTangents,Array),outTangents:_r(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new wo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new bo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Mo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Eo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ys:e=this.InterpolantFactoryMethodDiscrete;break;case ro:e=this.InterpolantFactoryMethodLinear;break;case qa:e=this.InterpolantFactoryMethodSmooth;break;case Pc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Nt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ys;case this.InterpolantFactoryMethodLinear:return ro;case this.InterpolantFactoryMethodSmooth:return qa;case this.InterpolantFactoryMethodBezier:return Pc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;Cc(this.settings)&&(nf(this.settings.inTangents,t),nf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ot("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Ot("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ot("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Ot("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(r!==void 0&&Ip(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){Ot("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===qa,s=t.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(r)c=!0;else{let f=o*n,h=f-n,d=f+n;for(let m=0;m!==n;++m){let S=e[f+m];if(S!==e[h+m]||S!==e[d+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*n,h=a*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,Cc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function nf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=ro;var Pi=class extends Sn{constructor(t,e,n){super(t,e,n)}};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=ys;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends Sn{constructor(t,e,n,r){super(t,e,n,r)}};Ao.prototype.ValueTypeName="color";var To=class extends Sn{constructor(t,e,n,r){super(t,e,n,r)}};To.prototype.ValueTypeName="number";var Co=class extends Ri{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(r-e),l=t*o;for(let u=l+o;l!==u;l+=4)vn.slerpFlat(s,0,a,l-o,a,l,c);return s}},Vs=class extends Sn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new Co(this.times,this.values,this.getValueSize(),t)}};Vs.prototype.ValueTypeName="quaternion";Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends Sn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=ys;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Ro=class extends Sn{constructor(t,e,n,r){super(t,e,n,r)}};Ro.prototype.ValueTypeName="vector";var $a={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(rf(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!rf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function rf(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Po=class{constructor(t,e,n){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let d=l[f],m=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Yf=new Po,Dr=class{constructor(t){this.manager=t!==void 0?t:Yf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Dr.DEFAULT_MATERIAL_NAME="__DEFAULT";var xr=new WeakMap,Io=class extends Dr{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=$a.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let f=xr.get(a);f===void 0&&(f=[],xr.set(a,f)),f.push({onLoad:e,onError:r})}return a}let o=Er("img");function c(){u(),e&&e(this);let f=xr.get(this)||[];for(let h=0;h<f.length;h++){let d=f[h];d.onLoad&&d.onLoad(this)}xr.delete(this),s.manager.itemEnd(t)}function l(f){u(),r&&r(f),$a.remove(`image:${t}`);let h=xr.get(this)||[];for(let d=0;d<h.length;d++){let m=h[d];m.onError&&m.onError(f)}xr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),$a.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}};var Gs=class extends Dr{constructor(t){super(t)}load(t,e,n,r){let s=new Ge,a=new Io(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};var Ha=new O,Wa=new vn,$n=new O,Hs=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ha,Wa,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ha,Wa,$n.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ha,Wa,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ha,Wa,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Mi=new O,sf=new Lt,af=new Lt,Ve=class extends Hs{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,sf,af),e.subVectors(af,sf)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gs*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ws=class extends Hs{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Xs=class extends Ie{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var vr=-90,yr=1,Lo=class extends yn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ve(vr,yr,t,e);r.layers=this.layers,this.add(r);let s=new Ve(vr,yr,t,e);s.layers=this.layers,this.add(s);let a=new Ve(vr,yr,t,e);a.layers=this.layers,this.add(a);let o=new Ve(vr,yr,t,e);o.layers=this.layers,this.add(o);let c=new Ve(vr,yr,t,e);c.layers=this.layers,this.add(c);let l=new Ve(vr,yr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(let l of e)this.remove(l);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Do=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var hu="\\[\\]\\.:\\/",Am=new RegExp("["+hu+"]","g"),fu="[^"+hu+"]",Tm="[^"+hu.replace("\\.","")+"]",Cm=/((?:WC+[\/:])*)/.source.replace("WC",fu),Rm=/(WCOD+)?/.source.replace("WCOD",Tm),Pm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fu),Im=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fu),Lm=new RegExp("^"+Cm+Rm+Pm+Im+"$"),Dm=["material","materials","bones","map"],Nc=class{constructor(t,e,n){let r=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Am,"")}static parseTrackName(t){let e=Lm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Dm.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[r];if(a===void 0){let l=e.nodeName;Ot("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=Nc;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hy=new Float32Array(1);var Li=class extends lo{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var xu=class xu{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};xu.prototype.isMatrix2=!0;var Fc=xu;var of=new O,Xa=new O,Sr=new O,Mr=new O,Rc=new O,Um=new O,Nm=new O,qs=class{constructor(t=new O,e=new O){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){of.subVectors(t,this.start),Xa.subVectors(this.end,this.start);let n=Xa.dot(Xa);if(n===0)return 0;let s=Xa.dot(of)/n;return e&&(s=Wt(s,0,1)),s}closestPointToPoint(t,e,n){let r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=Um,n=Nm){let r=10000000000000001e-32,s,a,o=this.start,c=t.start,l=this.end,u=t.end;Sr.subVectors(l,o),Mr.subVectors(u,c),Rc.subVectors(o,c);let f=Sr.dot(Sr),h=Mr.dot(Mr),d=Mr.dot(Rc);if(f<=r&&h<=r)return e.copy(o),n.copy(c),e.sub(n),e.dot(e);if(f<=r)s=0,a=d/h,a=Wt(a,0,1);else{let m=Sr.dot(Rc);if(h<=r)a=0,s=Wt(-m/f,0,1);else{let S=Sr.dot(Mr),g=f*h-S*S;g!==0?s=Wt((S*d-m*h)/g,0,1):s=0,a=(S*s+d)/h,a<0?(a=0,s=Wt(-m/f,0,1)):a>1&&(a=1,s=Wt((S-m)/f,0,1))}}return e.copy(o).addScaledVector(Sr,s),n.copy(c).addScaledVector(Mr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function du(i,t,e,n){let r=Fm(n);switch(e){case eu:return i*t;case Vo:return i*t/r.components*r.byteLength;case Go:return i*t/r.components*r.byteLength;case Qn:return i*t*2/r.components*r.byteLength;case Ho:return i*t*2/r.components*r.byteLength;case nu:return i*t*3/r.components*r.byteLength;case Cn:return i*t*4/r.components*r.byteLength;case Wo:return i*t*4/r.components*r.byteLength;case Js:case Ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case js:case Qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qo:case $o:return Math.max(i,16)*Math.max(t,8)/4;case Xo:case Yo:return Math.max(i,8)*Math.max(t,8)/2;case Zo:case Jo:case jo:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ko:case ta:case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ll:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ml:case gl:case _l:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xl:case vl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ea:case yl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fm(i){switch(i){case Mn:case Kc:return{byteLength:1,components:1};case Or:case jc:case Vn:return{byteLength:2,components:1};case zo:case ko:return{byteLength:2,components:4};case kn:case Bo:case pn:return{byteLength:4,components:1};case Qc:case tu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function md(){let i=null,t=!1,e=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),e(s,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Bm(i){let t=new WeakMap;function e(o,c){let l=o.array,u=o.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let u=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){let m=f[h],S=f[d];S.start<=m.start+m.count+1?m.count=Math.max(m.count,S.start+S.count-m.start):(++h,f[h]=S)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){let S=f[d];i.bufferSubData(l,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var zm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,km=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ym=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Km=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,lg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ug=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mg="gl_FragColor = linearToOutputTexel( gl_FragColor );",gg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_g=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ag=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ig=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Lg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ug=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ng=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Og=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Gg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,n0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,r0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,l0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,c0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,m0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,b0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,w0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,E0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,T0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,R0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,D0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,U0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,B0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,z0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,q0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Y0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,t_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,r_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,a_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,o_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,u_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,p_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,__=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:zm,alphahash_pars_fragment:km,alphamap_fragment:Vm,alphamap_pars_fragment:Gm,alphatest_fragment:Hm,alphatest_pars_fragment:Wm,aomap_fragment:Xm,aomap_pars_fragment:qm,batching_pars_vertex:Ym,batching_vertex:$m,begin_vertex:Zm,beginnormal_vertex:Jm,bsdfs:Km,iridescence_fragment:jm,bumpmap_pars_fragment:Qm,clipping_planes_fragment:tg,clipping_planes_pars_fragment:eg,clipping_planes_pars_vertex:ng,clipping_planes_vertex:ig,color_fragment:rg,color_pars_fragment:sg,color_pars_vertex:ag,color_vertex:og,common:lg,cube_uv_reflection_fragment:cg,defaultnormal_vertex:ug,displacementmap_pars_vertex:hg,displacementmap_vertex:fg,emissivemap_fragment:dg,emissivemap_pars_fragment:pg,colorspace_fragment:mg,colorspace_pars_fragment:gg,envmap_fragment:_g,envmap_common_pars_fragment:xg,envmap_pars_fragment:vg,envmap_pars_vertex:yg,envmap_physical_pars_fragment:Ig,envmap_vertex:Sg,fog_vertex:Mg,fog_pars_vertex:bg,fog_fragment:wg,fog_pars_fragment:Eg,gradientmap_pars_fragment:Ag,lightmap_pars_fragment:Tg,lights_lambert_fragment:Cg,lights_lambert_pars_fragment:Rg,lights_pars_begin:Pg,lights_toon_fragment:Lg,lights_toon_pars_fragment:Dg,lights_phong_fragment:Ug,lights_phong_pars_fragment:Ng,lights_physical_fragment:Fg,lights_physical_pars_fragment:Og,lights_fragment_begin:Bg,lights_fragment_maps:zg,lights_fragment_end:kg,lightprobes_pars_fragment:Vg,logdepthbuf_fragment:Gg,logdepthbuf_pars_fragment:Hg,logdepthbuf_pars_vertex:Wg,logdepthbuf_vertex:Xg,map_fragment:qg,map_pars_fragment:Yg,map_particle_fragment:$g,map_particle_pars_fragment:Zg,metalnessmap_fragment:Jg,metalnessmap_pars_fragment:Kg,morphinstance_vertex:jg,morphcolor_vertex:Qg,morphnormal_vertex:t0,morphtarget_pars_vertex:e0,morphtarget_vertex:n0,normal_fragment_begin:i0,normal_fragment_maps:r0,normal_pars_fragment:s0,normal_pars_vertex:a0,normal_vertex:o0,normalmap_pars_fragment:l0,clearcoat_normal_fragment_begin:c0,clearcoat_normal_fragment_maps:u0,clearcoat_pars_fragment:h0,iridescence_pars_fragment:f0,opaque_fragment:d0,packing:p0,premultiplied_alpha_fragment:m0,project_vertex:g0,dithering_fragment:_0,dithering_pars_fragment:x0,roughnessmap_fragment:v0,roughnessmap_pars_fragment:y0,shadowmap_pars_fragment:S0,shadowmap_pars_vertex:M0,shadowmap_vertex:b0,shadowmask_pars_fragment:w0,skinbase_vertex:E0,skinning_pars_vertex:A0,skinning_vertex:T0,skinnormal_vertex:C0,specularmap_fragment:R0,specularmap_pars_fragment:P0,tonemapping_fragment:I0,tonemapping_pars_fragment:L0,transmission_fragment:D0,transmission_pars_fragment:U0,uv_pars_fragment:N0,uv_pars_vertex:F0,uv_vertex:O0,worldpos_vertex:B0,background_vert:z0,background_frag:k0,backgroundCube_vert:V0,backgroundCube_frag:G0,cube_vert:H0,cube_frag:W0,depth_vert:X0,depth_frag:q0,distance_vert:Y0,distance_frag:$0,equirect_vert:Z0,equirect_frag:J0,linedashed_vert:K0,linedashed_frag:j0,meshbasic_vert:Q0,meshbasic_frag:t_,meshlambert_vert:e_,meshlambert_frag:n_,meshmatcap_vert:i_,meshmatcap_frag:r_,meshnormal_vert:s_,meshnormal_frag:a_,meshphong_vert:o_,meshphong_frag:l_,meshphysical_vert:c_,meshphysical_frag:u_,meshtoon_vert:h_,meshtoon_frag:f_,points_vert:d_,points_frag:p_,shadow_vert:m_,shadow_frag:g_,sprite_vert:__,sprite_frag:x_},gt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},on={basic:{uniforms:tn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:tn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:tn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:tn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:tn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:tn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:tn([gt.points,gt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:tn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:tn([gt.common,gt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:tn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:tn([gt.sprite,gt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:tn([gt.common,gt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:tn([gt.lights,gt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};on.physical={uniforms:tn([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var bl={r:0,b:0,g:0},v_=new me,gd=new Ht;gd.set(-1,0,0,0,1,0,0,0,1);function y_(i,t,e,n,r,s){let a=new qt(0),o=r===!0?0:1,c,l,u=null,f=0,h=null;function d(E){let T=E.isScene===!0?E.background:null;if(T&&T.isTexture){let y=E.backgroundBlurriness>0;T=t.get(T,y)}return T}function m(E){let T=!1,y=d(E);y===null?g(a,o):y&&y.isColor&&(g(y,1),T=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(E,T){let y=d(T);y&&(y.isCubeTexture||y.mapping===$s)?(l===void 0&&(l=new Me(new Ir(1,1,1),new Ae({name:"BackgroundCubeMaterial",uniforms:Zi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(v_.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(gd),l.material.toneMapped=ie.getTransfer(y.colorSpace)!==pe,(u!==y||f!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Me(new zs(2,2),new Ae({name:"BackgroundMaterial",uniforms:Zi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=ie.getTransfer(y.colorSpace)!==pe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function g(E,T){E.getRGB(bl,uu(i)),e.buffers.color.setClear(bl.r,bl.g,bl.b,T,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,T=1){a.set(E),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,g(a,o)},render:m,addToRenderList:S,dispose:p}}function S_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,a=!1;function o(L,B,k,N,I){let G=!1,W=f(L,N,k,B);s!==W&&(s=W,l(s.object)),G=d(L,N,k,I),G&&m(L,N,k,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(L,B,k,N),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function f(L,B,k,N){let I=N.wireframe===!0,G=n[B.id];G===void 0&&(G={},n[B.id]=G);let W=L.isInstancedMesh===!0?L.id:0,rt=G[W];rt===void 0&&(rt={},G[W]=rt);let Z=rt[k.id];Z===void 0&&(Z={},rt[k.id]=Z);let et=Z[I];return et===void 0&&(et=h(c()),Z[I]=et),et}function h(L){let B=[],k=[],N=[];for(let I=0;I<e;I++)B[I]=0,k[I]=0,N[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:k,attributeDivisors:N,object:L,attributes:{},index:null}}function d(L,B,k,N){let I=s.attributes,G=B.attributes,W=0,rt=k.getAttributes();for(let Z in rt)if(rt[Z].location>=0){let nt=I[Z],wt=G[Z];if(wt===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(wt=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(wt=L.instanceColor)),nt===void 0||nt.attribute!==wt||wt&&nt.data!==wt.data)return!0;W++}return s.attributesNum!==W||s.index!==N}function m(L,B,k,N){let I={},G=B.attributes,W=0,rt=k.getAttributes();for(let Z in rt)if(rt[Z].location>=0){let nt=G[Z];nt===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(nt=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(nt=L.instanceColor));let wt={};wt.attribute=nt,nt&&nt.data&&(wt.data=nt.data),I[Z]=wt,W++}s.attributes=I,s.attributesNum=W,s.index=N}function S(){let L=s.newAttributes;for(let B=0,k=L.length;B<k;B++)L[B]=0}function g(L){p(L,0)}function p(L,B){let k=s.newAttributes,N=s.enabledAttributes,I=s.attributeDivisors;k[L]=1,N[L]===0&&(i.enableVertexAttribArray(L),N[L]=1),I[L]!==B&&(i.vertexAttribDivisor(L,B),I[L]=B)}function E(){let L=s.newAttributes,B=s.enabledAttributes;for(let k=0,N=B.length;k<N;k++)B[k]!==L[k]&&(i.disableVertexAttribArray(k),B[k]=0)}function T(L,B,k,N,I,G,W){W===!0?i.vertexAttribIPointer(L,B,k,I,G):i.vertexAttribPointer(L,B,k,N,I,G)}function y(L,B,k,N){S();let I=N.attributes,G=k.getAttributes(),W=B.defaultAttributeValues;for(let rt in G){let Z=G[rt];if(Z.location>=0){let et=I[rt];if(et===void 0&&(rt==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),rt==="instanceColor"&&L.instanceColor&&(et=L.instanceColor)),et!==void 0){let nt=et.normalized,wt=et.itemSize,xt=t.get(et);if(xt===void 0)continue;let ee=xt.buffer,zt=xt.type,Qt=xt.bytesPerElement,j=zt===i.INT||zt===i.UNSIGNED_INT||et.gpuType===Bo;if(et.isInterleavedBufferAttribute){let st=et.data,bt=st.stride,Ft=et.offset;if(st.isInstancedInterleavedBuffer){for(let Mt=0;Mt<Z.locationSize;Mt++)p(Z.location+Mt,st.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Mt=0;Mt<Z.locationSize;Mt++)g(Z.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Mt=0;Mt<Z.locationSize;Mt++)T(Z.location+Mt,wt/Z.locationSize,zt,nt,bt*Qt,(Ft+wt/Z.locationSize*Mt)*Qt,j)}else{if(et.isInstancedBufferAttribute){for(let st=0;st<Z.locationSize;st++)p(Z.location+st,et.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let st=0;st<Z.locationSize;st++)g(Z.location+st);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let st=0;st<Z.locationSize;st++)T(Z.location+st,wt/Z.locationSize,zt,nt,wt*Qt,wt/Z.locationSize*st*Qt,j)}}else if(W!==void 0){let nt=W[rt];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(Z.location,nt);break;case 3:i.vertexAttrib3fv(Z.location,nt);break;case 4:i.vertexAttrib4fv(Z.location,nt);break;default:i.vertexAttrib1fv(Z.location,nt)}}}}E()}function M(){b();for(let L in n){let B=n[L];for(let k in B){let N=B[k];for(let I in N){let G=N[I];for(let W in G)u(G[W].object),delete G[W];delete N[I]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;let B=n[L.id];for(let k in B){let N=B[k];for(let I in N){let G=N[I];for(let W in G)u(G[W].object),delete G[W];delete N[I]}}delete n[L.id]}function P(L){for(let B in n){let k=n[B];for(let N in k){let I=k[N];if(I[L.id]===void 0)continue;let G=I[L.id];for(let W in G)u(G[W].object),delete G[W];delete I[L.id]}}}function v(L){for(let B in n){let k=n[B],N=L.isInstancedMesh===!0?L.id:0,I=k[N];if(I!==void 0){for(let G in I){let W=I[G];for(let rt in W)u(W[rt].object),delete W[rt];delete I[G]}delete k[N],Object.keys(k).length===0&&delete n[B]}}}function b(){R(),a=!0,s!==r&&(s=r,l(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:S,enableAttribute:g,disableUnusedAttributes:E}}function M_(i,t,e){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];e.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function b_(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==Cn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let v=P===Vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Mn&&P!==pn&&!v&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Nt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:S,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:y,maxSamples:M,samples:w}}function w_(i){let t=this,e=null,n=0,r=!1,s=!1,a=new Dn,o=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let m=f.clippingPlanes,S=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!r||m===null||m.length===0||s&&!g)s?u(null):l();else{let E=s?0:n,T=E*4,y=p.clippingState||null;c.value=y,y=u(m,h,T,d);for(let M=0;M!==T;++M)y[M]=e[M];p.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,m){let S=f!==null?f.length:0,g=null;if(S!==0){if(g=c.value,m!==!0||g===null){let p=d+S*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,y=d;T!==S;++T,y+=4)a.copy(f[T]).applyMatrix4(E,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,g}}var kr=4,E_=6,A_=20,T_=256,ia=new Ws,$f=new qt,vu=null,yu=0,Su=0,Mu=!1,C_=new O,Ji=new O,El=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:a=256,position:o=C_}=s;vu=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vu,yu,Su),this._renderer.xr.enabled=Mu,t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ui||t.mapping===$i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vu=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),Mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:Vn,format:Cn,colorSpace:Ss,depthBuffer:!1},r=Zf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zf(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=R_(s)),this._blurMaterial=I_(s,t,e),this._ggxMaterial=P_(s,t,e)}return r}_compileMaterial(t){let e=new Me(new Ie,t);this._renderer.compile(e,ia)}_sceneToCubeUV(t,e,n,r,s){let c=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor($f),f.toneMapping=zn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Me(new Ir,new Ai({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,g=S.material,p=!1,E=t.background;E?E.isColor&&(g.color.copy(E),t.background=null,p=!0):(g.color.copy($f),p=!0);for(let T=0;T<6;T++){let y=T%3;y===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[T],s.y,s.z)):y===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[T]));let M=this._cubeSize;zr(r,y*M,T>2?M:0,M,M),f.setRenderTarget(r),p&&f.render(S,c),f.render(t,c)}f.toneMapping=d,f.autoClear=h,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Ui||t.mapping===$i;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jf());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=t;let c=this._cubeSize;zr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ia)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,d=f*h,{_lodMax:m}=this,S=this._sizeLods[n],g=3*S*(n>m-kr?n-m+kr:0),p=4*(this._cubeSize-S);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=m-e,zr(s,g,p,3*S,2*S),r.setRenderTarget(s),r.render(o,ia),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-n,zr(t,g,p,3*S,2*S),r.setRenderTarget(t),r.render(o,ia)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,a),this._blurPass(s,t,n,n,a)}_blurPass(t,e,n,r,s){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],f=3*u*(r>this._lodMax-kr?r-this._lodMax+kr:0),h=4*(this._cubeSize-u);zr(e,f,h,3*u,2*u),a.setRenderTarget(e),a.render(c,ia)}};function R_(i){let t=[],e=[],n=i,r=i-kr+1+E_;for(let s=0;s<r;s++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,d=3,m=new Float32Array(d*h*f),S=new Float32Array(d*h*f);for(let p=0;p<f;p++){let E=p%3*2/3-1,T=p>2?0:-1,y=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];m.set(y,d*h*p);for(let M=0;M<h;M++){let w=u[M*2]*2-1,P=u[M*2+1]*2-1;p===0?Ji.set(1,P,w):p===1?Ji.set(-w,1,-P):p===2?Ji.set(-w,P,1):p===3?Ji.set(-1,P,-w):p===4?Ji.set(-w,-1,P):Ji.set(w,P,-1),Ji.toArray(S,(p*h+M)*d)}}let g=new Ie;g.setAttribute("position",new fn(m,d)),g.setAttribute("outputDirection",new fn(S,d)),e.push(new Me(g,null)),n>kr&&n--}return{lodMeshes:e,sizeLods:t}}function Zf(i,t,e){let n=new dn(i,t,e);return n.texture.mapping=$s,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function P_(i,t,e){return new Ae({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:T_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function I_(i,t,e){return new Ae({name:"SphericalGaussianBlur",defines:{SAMPLES:A_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Cl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Jf(){return new Ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Kf(){return new Ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Cl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Al=class extends dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Us(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ir(5,5,5),s=new Ae({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:jn});s.uniforms.tEquirect.value=e;let a=new Me(r,s),o=e.minFilter;return e.minFilter===Tn&&(e.minFilter=Ue),new Lo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}};function L_(i){let t=new WeakMap,e=new WeakMap,n=null;function r(h,d=!1){return h==null?null:d?a(h):s(h)}function s(h){if(h&&h.isTexture){let d=h.mapping;if(d===No||d===Fo)if(t.has(h)){let m=t.get(h).texture;return o(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let S=new Al(m.height);return S.fromEquirectangularTexture(i,h),t.set(h,S),h.addEventListener("dispose",l),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let d=h.mapping,m=d===No||d===Fo,S=d===Ui||d===$i;if(m||S){let g=e.get(h),p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new El(i)),g=m?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{let E=h.image;return m&&E&&E.height>0||S&&E&&c(E)?(n===null&&(n=new El(i)),g=m?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,d){return d===No?h.mapping=Ui:d===Fo&&(h.mapping=$i),h}function c(h){let d=0,m=6;for(let S=0;S<m;S++)h[S]!==void 0&&d++;return d===m}function l(h){let d=h.target;d.removeEventListener("dispose",l);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function D_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Hi("WebGLRenderer: "+n+" extension not supported."),r}}}function U_(i,t,e,n){let r={},s=new WeakMap;function a(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let m in h.attributes)t.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete r[h.id];let d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let d in h)t.update(h[d],i.ARRAY_BUFFER)}function l(f){let h=[],d=f.index,m=f.attributes.position,S=0;if(m===void 0)return;if(d!==null){let E=d.array;S=d.version;for(let T=0,y=E.length;T<y;T+=3){let M=E[T+0],w=E[T+1],P=E[T+2];h.push(M,w,w,P,P,M)}}else{let E=m.array;S=m.version;for(let T=0,y=E.length/3-1;T<y;T+=3){let M=T+0,w=T+1,P=T+2;h.push(M,w,w,P,P,M)}}let g=new(m.count>=65535?Rs:Cs)(h,1);g.version=S;let p=s.get(f);p&&t.remove(p),s.set(f,g)}function u(f){let h=s.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function N_(i,t,e){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,h){i.drawElements(n,h,s,f*a),e.update(h,n,1)}function l(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,s,f*a,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,d);let S=0;for(let g=0;g<d;g++)S+=h[g];e.update(S,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function F_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:Ot("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function O_(i,t,e){let n=new WeakMap,r=new Yt;function s(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==f){let b=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],T=0;d===!0&&(T=1),m===!0&&(T=2),S===!0&&(T=3);let y=o.attributes.position.count*T,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*M*4*f),P=new Es(w,y,M,f);P.type=pn,P.needsUpdate=!0;let v=T*4;for(let R=0;R<f;R++){let L=g[R],B=p[R],k=E[R],N=y*M*4*R;for(let I=0;I<L.count;I++){let G=I*v;d===!0&&(r.fromBufferAttribute(L,I),w[N+G+0]=r.x,w[N+G+1]=r.y,w[N+G+2]=r.z,w[N+G+3]=0),m===!0&&(r.fromBufferAttribute(B,I),w[N+G+4]=r.x,w[N+G+5]=r.y,w[N+G+6]=r.z,w[N+G+7]=0),S===!0&&(r.fromBufferAttribute(k,I),w[N+G+8]=r.x,w[N+G+9]=r.y,w[N+G+10]=r.z,w[N+G+11]=k.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new Lt(y,M)},n.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let S=0;S<l.length;S++)d+=l[S];let m=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function B_(i,t,e,n,r){let s=new WeakMap;function a(l){let u=r.render.frame,f=l.geometry,h=t.get(l,f);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var z_={[Hc]:"LINEAR_TONE_MAPPING",[Wc]:"REINHARD_TONE_MAPPING",[Xc]:"CINEON_TONE_MAPPING",[qc]:"ACES_FILMIC_TONE_MAPPING",[$c]:"AGX_TONE_MAPPING",[Zc]:"NEUTRAL_TONE_MAPPING",[Yc]:"CUSTOM_TONE_MAPPING"};function k_(i,t,e,n,r,s){let a=new dn(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Ie;l.setAttribute("position",new ge([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ge([0,2,0,0,2,0],2));let u=new vo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Me(l,u),h=new Ws(-1,1,1,-1,0,1),d=null,m=null,S=!1,g,p=null,E=[],T=!1;this.setSize=function(y,M){a.setSize(y,M),o!==null&&o.setSize(y,M),c!==null&&c.setSize(y,M);for(let w=0;w<E.length;w++){let P=E[w];P.setSize&&P.setSize(y,M)}},this.setEffects=function(y){E=y,T=E.length>0&&E[0].isRenderPass===!0;let M=a.width,w=a.height;E.length>0&&o===null&&(o=new dn(M,w,{type:Vn,depthBuffer:!1,stencilBuffer:!1}),c=new dn(M,w,{type:Vn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<E.length;P++){let v=E[P];v.setSize&&v.setSize(M,w)}},this.begin=function(y,M){if(S||y.toneMapping===zn&&E.length===0)return!1;if(p=M,M!==null){let w=M.width,P=M.height;(a.width!==w||a.height!==P)&&this.setSize(w,P)}return T===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=zn,!0},this.hasRenderPass=function(){return T},this.end=function(y,M){y.toneMapping=g,S=!0;let w=a,P=o;for(let v=0;v<E.length;v++){let b=E[v];b.enabled!==!1&&(b.render(y,P,w,M),b.needsSwap!==!1&&(w=P,P=P===o?c:o))}if(d!==y.outputColorSpace||m!==y.toneMapping){d=y.outputColorSpace,m=y.toneMapping,u.defines={},ie.getTransfer(d)===pe&&(u.defines.SRGB_TRANSFER="");let v=z_[m];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(p),y.render(f,h),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var _d=new Ge,Eu=new Ti(1,1),xd=new Es,vd=new oo,yd=new Us,jf=[],Qf=[],td=new Float32Array(16),ed=new Float32Array(9),nd=new Float32Array(4);function Gr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=jf[r];if(s===void 0&&(s=new Float32Array(r),jf[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Rl(i,t){let e=Qf[t];e===void 0&&(e=new Int32Array(t),Qf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function V_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function G_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function H_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function W_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function X_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;nd.set(n),i.uniformMatrix2fv(this.addr,!1,nd),Fe(e,n)}}function q_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;ed.set(n),i.uniformMatrix3fv(this.addr,!1,ed),Fe(e,n)}}function Y_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;td.set(n),i.uniformMatrix4fv(this.addr,!1,td),Fe(e,n)}}function $_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Z_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function J_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function K_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function j_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Q_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function nx(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Eu.compareFunction=e.isReversedDepthBuffer()?Ml:Sl,s=Eu):s=_d,e.setTexture2D(t||s,r)}function ix(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||vd,r)}function rx(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||yd,r)}function sx(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||xd,r)}function ax(i){switch(i){case 5126:return V_;case 35664:return G_;case 35665:return H_;case 35666:return W_;case 35674:return X_;case 35675:return q_;case 35676:return Y_;case 5124:case 35670:return $_;case 35667:case 35671:return Z_;case 35668:case 35672:return J_;case 35669:case 35673:return K_;case 5125:return j_;case 36294:return Q_;case 36295:return tx;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return sx}}function ox(i,t){i.uniform1fv(this.addr,t)}function lx(i,t){let e=Gr(t,this.size,2);i.uniform2fv(this.addr,e)}function cx(i,t){let e=Gr(t,this.size,3);i.uniform3fv(this.addr,e)}function ux(i,t){let e=Gr(t,this.size,4);i.uniform4fv(this.addr,e)}function hx(i,t){let e=Gr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fx(i,t){let e=Gr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function dx(i,t){let e=Gr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function px(i,t){i.uniform1iv(this.addr,t)}function mx(i,t){i.uniform2iv(this.addr,t)}function gx(i,t){i.uniform3iv(this.addr,t)}function _x(i,t){i.uniform4iv(this.addr,t)}function xx(i,t){i.uniform1uiv(this.addr,t)}function vx(i,t){i.uniform2uiv(this.addr,t)}function yx(i,t){i.uniform3uiv(this.addr,t)}function Sx(i,t){i.uniform4uiv(this.addr,t)}function Mx(i,t,e){let n=this.cache,r=t.length,s=Rl(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Fe(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Eu:a=_d;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function bx(i,t,e){let n=this.cache,r=t.length,s=Rl(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Fe(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||vd,s[a])}function wx(i,t,e){let n=this.cache,r=t.length,s=Rl(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Fe(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||yd,s[a])}function Ex(i,t,e){let n=this.cache,r=t.length,s=Rl(e,r);Ne(n,s)||(i.uniform1iv(this.addr,s),Fe(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||xd,s[a])}function Ax(i){switch(i){case 5126:return ox;case 35664:return lx;case 35665:return cx;case 35666:return ux;case 35674:return hx;case 35675:return fx;case 35676:return dx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return _x;case 5125:return xx;case 36294:return vx;case 36295:return yx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Ex}}var Au=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ax(e.type)}},Tu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ax(e.type)}},Cu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(t,e[o.id],n)}}},bu=/(\w+)(\])?(\[|\.)?/g;function id(i,t){i.seq.push(t),i.map[t.id]=t}function Tx(i,t,e){let n=i.name,r=n.length;for(bu.lastIndex=0;;){let s=bu.exec(n),a=bu.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){id(e,l===void 0?new Au(o,i,t):new Tu(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Cu(o),id(e,f)),e=f}}}var Vr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Tx(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){let o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let a=t[r];a.id in e&&n.push(a)}return n}};function rd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Cx=37297,Rx=0;function Px(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var sd=new Ht;function Ix(i){ie._getMatrix(sd,ie.workingColorSpace,i);let t=`mat3( ${sd.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case Ms:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ad(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Px(i.getShaderSource(t),o)}else return s}function Lx(i,t){let e=Ix(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Dx={[Hc]:"Linear",[Wc]:"Reinhard",[Xc]:"Cineon",[qc]:"ACESFilmic",[$c]:"AgX",[Zc]:"Neutral",[Yc]:"Custom"};function Ux(i,t){let e=Dx[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var wl=new O;function Nx(){ie.getLuminanceCoefficients(wl);let i=wl.x.toFixed(4),t=wl.y.toFixed(4),e=wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function Ox(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Bx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),a=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function sa(i){return i!==""}function od(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ld(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ru(i){return i.replace(zx,Vx)}var kx=new Map;function Vx(i,t){let e=Jt[t];if(e===void 0){let n=kx.get(t);if(n!==void 0)e=Jt[n],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ru(e)}var Gx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cd(i){return i.replace(Gx,Hx)}function Hx(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ud(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Wx={[Ys]:"SHADOWMAP_TYPE_PCF",[Ur]:"SHADOWMAP_TYPE_VSM"};function Xx(i){return Wx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var qx={[Ui]:"ENVMAP_TYPE_CUBE",[$i]:"ENVMAP_TYPE_CUBE",[$s]:"ENVMAP_TYPE_CUBE_UV"};function Yx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":qx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var $x={[$i]:"ENVMAP_MODE_REFRACTION"};function Zx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$x[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Jx={[Gc]:"ENVMAP_BLENDING_MULTIPLY",[Rf]:"ENVMAP_BLENDING_MIX",[Pf]:"ENVMAP_BLENDING_ADD"};function Kx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Jx[i.combine]||"ENVMAP_BLENDING_NONE"}function jx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Qx(i,t,e,n){let r=i.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Xx(e),l=Yx(e),u=Zx(e),f=Kx(e),h=jx(e),d=Fx(e),m=Ox(s),S=r.createProgram(),g,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(sa).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(sa).join(`
`),p.length>0&&(p+=`
`)):(g=[ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),p=[ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==zn?Ux("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Lx("linearToOutputTexel",e.outputColorSpace),Nx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sa).join(`
`)),a=Ru(a),a=od(a,e),a=ld(a,e),o=Ru(o),o=od(o,e),o=ld(o,e),a=cd(a),o=cd(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=E+g+a,y=E+p+o,M=rd(r,r.VERTEX_SHADER,T),w=rd(r,r.FRAGMENT_SHADER,y);r.attachShader(S,M),r.attachShader(S,w),e.index0AttributeName!==void 0?r.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function P(L){if(i.debug.checkShaderErrors){let B=r.getProgramInfoLog(S)||"",k=r.getShaderInfoLog(M)||"",N=r.getShaderInfoLog(w)||"",I=B.trim(),G=k.trim(),W=N.trim(),rt=!0,Z=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(rt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,M,w);else{let et=ad(r,M,"vertex"),nt=ad(r,w,"fragment");Ot("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+I+`
`+et+`
`+nt)}else I!==""?Nt("WebGLProgram: Program Info Log:",I):(G===""||W==="")&&(Z=!1);Z&&(L.diagnostics={runnable:rt,programLog:I,vertexShader:{log:G,prefix:g},fragmentShader:{log:W,prefix:p}})}r.deleteShader(M),r.deleteShader(w),v=new Vr(r,S),b=Bx(r,S)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(S,Cx)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rx++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=M,this.fragmentShader=w,this}var tv=0,Pu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Iu(t),e.set(t,n)),n}},Iu=class{constructor(t){this.id=tv++,this.code=t,this.usedTimes=0}};function ev(i){return i===Qn||i===ta||i===ea}function nv(i,t,e,n,r,s){let a=new As,o=new Pu,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function S(v,b,R,L,B,k){let N=L.fog,I=B.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,rt=t.get(v.envMap||G,W),Z=rt&&rt.mapping===$s?rt.image.height:null,et=d[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Nt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let nt=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,wt=nt!==void 0?nt.length:0,xt=0;I.morphAttributes.position!==void 0&&(xt=1),I.morphAttributes.normal!==void 0&&(xt=2),I.morphAttributes.color!==void 0&&(xt=3);let ee,zt,Qt,j;if(et){let de=on[et];ee=de.vertexShader,zt=de.fragmentShader}else{ee=v.vertexShader,zt=v.fragmentShader;let de=o.getVertexShaderStage(v),ae=o.getFragmentShaderStage(v);o.update(v,de,ae),Qt=de.id,j=ae.id}let st=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Ft=B.isInstancedMesh===!0,Mt=B.isBatchedMesh===!0,Dt=!!v.map,Te=!!v.matcap,Zt=!!rt,re=!!v.aoMap,fe=!!v.lightMap,te=!!v.bumpMap&&v.wireframe===!1,ve=!!v.normalMap,we=!!v.displacementMap,ze=!!v.emissiveMap,ye=!!v.metalnessMap,be=!!v.roughnessMap,z=v.anisotropy>0,De=v.clearcoat>0,ue=v.dispersion>0,C=v.retroreflectivity>0,x=v.iridescence>0,H=v.sheen>0,X=v.transmission>0,J=z&&!!v.anisotropyMap,ht=De&&!!v.clearcoatMap,ft=De&&!!v.clearcoatNormalMap,K=De&&!!v.clearcoatRoughnessMap,Q=x&&!!v.iridescenceMap,_t=x&&!!v.iridescenceThicknessMap,Rt=H&&!!v.sheenColorMap,vt=H&&!!v.sheenRoughnessMap,dt=!!v.specularMap,Pt=!!v.specularColorMap,Ut=!!v.specularIntensityMap,kt=X&&!!v.transmissionMap,V=X&&!!v.thicknessMap,pt=!!v.gradientMap,it=!!v.alphaMap,mt=v.alphaTest>0,St=!!v.alphaHash,at=!!v.extensions,It=zn;v.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(It=i.toneMapping);let At={shaderID:et,shaderType:v.type,shaderName:v.name,vertexShader:ee,fragmentShader:zt,defines:v.defines,customVertexShaderID:Qt,customFragmentShaderID:j,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Mt,batchingColor:Mt&&B._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&B.instanceColor!==null,instancingMorph:Ft&&B.morphTexture!==null,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Dt,matcap:Te,envMap:Zt,envMapMode:Zt&&rt.mapping,envMapCubeUVHeight:Z,aoMap:re,lightMap:fe,bumpMap:te,normalMap:ve,displacementMap:we,emissiveMap:ze,normalMapObjectSpace:ve&&v.normalMapType===Df,normalMapTangentSpace:ve&&v.normalMapType===iu,packedNormalMap:ve&&v.normalMapType===iu&&ev(v.normalMap.format),metalnessMap:ye,roughnessMap:be,anisotropy:z,anisotropyMap:J,clearcoat:De,clearcoatMap:ht,clearcoatNormalMap:ft,clearcoatRoughnessMap:K,dispersion:ue,retroreflection:C,iridescence:x,iridescenceMap:Q,iridescenceThicknessMap:_t,sheen:H,sheenColorMap:Rt,sheenRoughnessMap:vt,specularMap:dt,specularColorMap:Pt,specularIntensityMap:Ut,transmission:X,transmissionMap:kt,thicknessMap:V,gradientMap:pt,opaque:v.transparent===!1&&v.blending===Nr&&v.alphaToCoverage===!1,alphaMap:it,alphaTest:mt,alphaHash:St,combine:v.combine,mapUv:Dt&&m(v.map.channel),aoMapUv:re&&m(v.aoMap.channel),lightMapUv:fe&&m(v.lightMap.channel),bumpMapUv:te&&m(v.bumpMap.channel),normalMapUv:ve&&m(v.normalMap.channel),displacementMapUv:we&&m(v.displacementMap.channel),emissiveMapUv:ze&&m(v.emissiveMap.channel),metalnessMapUv:ye&&m(v.metalnessMap.channel),roughnessMapUv:be&&m(v.roughnessMap.channel),anisotropyMapUv:J&&m(v.anisotropyMap.channel),clearcoatMapUv:ht&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ft&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:vt&&m(v.sheenRoughnessMap.channel),specularMapUv:dt&&m(v.specularMap.channel),specularColorMapUv:Pt&&m(v.specularColorMap.channel),specularIntensityMapUv:Ut&&m(v.specularIntensityMap.channel),transmissionMapUv:kt&&m(v.transmissionMap.channel),thicknessMapUv:V&&m(v.thicknessMap.channel),alphaMapUv:it&&m(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ve||z),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!I.attributes.uv&&(Dt||it),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&ve===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:bt,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:xt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:It,decodeVideoTexture:Dt&&v.map.isVideoTexture===!0&&ie.getTransfer(v.map.colorSpace)===pe,decodeVideoTextureEmissive:ze&&v.emissiveMap.isVideoTexture===!0&&ie.getTransfer(v.emissiveMap.colorSpace)===pe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===An,flipSided:v.side===qe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:at&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&v.extensions.multiDraw===!0||Mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function g(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)b.push(R),b.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(p(b,v),E(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function p(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function E(v,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function T(v){let b=d[v.type],R;if(b){let L=on[b];R=na.clone(L.uniforms)}else R=v.uniforms;return R}function y(v,b){let R=u.get(b);return R!==void 0?++R.usedTimes:(R=new Qx(i,b,v,r),l.push(R),u.set(b,R)),R}function M(v){if(--v.usedTimes===0){let b=l.indexOf(v);l[b]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function P(){o.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:T,acquireProgram:y,releaseProgram:M,releaseShaderCache:w,programs:l,dispose:P}}function iv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function rv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function hd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fd(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,m,S,g,p){let E=i[t];return E===void 0?(E={id:h.id,object:h,geometry:d,material:m,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:g,group:p},i[t]=E):(E.id=h.id,E.object=h,E.geometry=d,E.material=m,E.materialVariant=a(h),E.groupOrder=S,E.renderOrder=h.renderOrder,E.z=g,E.group=p),t++,E}function c(h,d,m,S,g,p,E){E.reversedDepth===!0&&(g=-g);let T=o(h,d,m,S,g,p);m.transmission>0?n.push(T):m.transparent===!0?r.push(T):e.push(T)}function l(h,d,m,S,g,p){let E=o(h,d,m,S,g,p);m.transmission>0?n.unshift(E):m.transparent===!0?r.unshift(E):e.unshift(E)}function u(h,d){e.length>1&&e.sort(h||rv),n.length>1&&n.sort(d||hd),r.length>1&&r.sort(d||hd)}function f(){for(let h=t,d=i.length;h<d;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:f,sort:u}}function sv(){let i=new WeakMap;function t(n,r){let s=i.get(n),a;return s===void 0?(a=new fd,i.set(n,[a])):r>=s.length?(a=new fd,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function av(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new qt};break;case"SpotLight":e={position:new O,direction:new O,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function ov(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var lv=0;function cv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function uv(i){let t=new av,e=ov(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);let r=new O,s=new me,a=new me;function o(l){let u=0,f=0,h=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let d=0,m=0,S=0,g=0,p=0,E=0,T=0,y=0,M=0,w=0,P=0,v=0,b=0,R=0;l.sort(cv);for(let B=0,k=l.length;B<k;B++){let N=l[B],I=N.color,G=N.intensity,W=N.distance,rt=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Qn?rt=N.shadow.map.texture:rt=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=I.r*G,f+=I.g*G,h+=I.b*G;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(N.sh.coefficients[Z],G);R++}else if(N.isSunLight){let Z=t.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let et=N.shadow,nt=e.get(N);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[m]=nt,n.sunShadowMap[m]=rt;let wt=et.getViewportCount();for(let xt=0;xt<wt;xt++)n.sunShadowMatrix[S+xt]=et.getMatrix(xt),n.sunShadowCascade[S+xt]=et._cascadeData[xt];S+=wt,m++}n.sun[d]=Z,d++}else if(N.isDirectionalLight){let Z=t.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let et=N.shadow,nt=e.get(N);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,n.directionalShadow[g]=nt,n.directionalShadowMap[g]=rt,n.directionalShadowMatrix[g]=N.shadow.matrix,M++}n.directional[g]=Z,g++}else if(N.isSpotLight){let Z=t.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(I).multiplyScalar(G),Z.distance=W,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,n.spot[E]=Z;let et=N.shadow;if(N.map&&(n.spotLightMap[v]=N.map,v++,et.updateMatrices(N),N.castShadow&&b++),n.spotLightMatrix[E]=et.matrix,N.castShadow){let nt=e.get(N);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,n.spotShadow[E]=nt,n.spotShadowMap[E]=rt,P++}E++}else if(N.isRectAreaLight){let Z=t.get(N);Z.color.copy(I).multiplyScalar(G),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),n.rectArea[T]=Z,T++}else if(N.isPointLight){let Z=t.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){let et=N.shadow,nt=e.get(N);nt.shadowIntensity=et.intensity,nt.shadowBias=et.bias,nt.shadowNormalBias=et.normalBias,nt.shadowRadius=et.radius,nt.shadowMapSize=et.mapSize,nt.shadowCameraNear=et.camera.near,nt.shadowCameraFar=et.camera.far,n.pointShadow[p]=nt,n.pointShadowMap[p]=rt,n.pointShadowMatrix[p]=N.shadow.matrix,w++}n.point[p]=Z,p++}else if(N.isHemisphereLight){let Z=t.get(N);Z.skyColor.copy(N.color).multiplyScalar(G),Z.groundColor.copy(N.groundColor).multiplyScalar(G),n.hemi[y]=Z,y++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let L=n.hash;(L.sunLength!==d||L.directionalLength!==g||L.pointLength!==p||L.spotLength!==E||L.rectAreaLength!==T||L.hemiLength!==y||L.numSunShadows!==m||L.numDirectionalShadows!==M||L.numPointShadows!==w||L.numSpotShadows!==P||L.numSpotMaps!==v||L.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=g,n.spot.length=E,n.rectArea.length=T,n.point.length=p,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+v-b,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,L.sunLength=d,L.directionalLength=g,L.pointLength=p,L.spotLength=E,L.rectAreaLength=T,L.hemiLength=y,L.numSunShadows=m,L.numDirectionalShadows=M,L.numPointShadows=w,L.numSpotShadows=P,L.numSpotMaps=v,L.numLightProbes=R,n.version=lv++)}function c(l,u){let f=0,h=0,d=0,m=0,S=0,g=0,p=u.matrixWorldInverse;for(let E=0,T=l.length;E<T;E++){let y=l[E];if(y.isSunLight){let M=n.sun[f];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),f++}else if(y.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),h++}else if(y.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let M=n.rectArea[S];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),S++}else if(y.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function dd(i){let t=new uv(i),e=[],n=[],r=[];function s(h){f.camera=h,e.length=0,n.length=0,r.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function c(h){r.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function hv(i){let t=new WeakMap;function e(r,s=0){let a=t.get(r),o;return a===void 0?(o=new dd(i),t.set(r,[o])):s>=a.length?(o=new dd(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var fv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,pv=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],mv=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],pd=new me,ra=new O,wu=new O;function gv(i,t,e){let n=new Ls,r=new Lt,s=new Lt,a=new Yt,o=new yo,c=new So,l={},u=e.maxTextureSize,f={[Di]:qe,[qe]:Di,[An]:An},h=new Ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:fv,fragmentShader:dv}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let m=new Ie;m.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Me(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ys;let p=this.type;this.render=function(w,P,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===uf&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ys);let b=i.getRenderTarget(),R=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(jn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let k=p!==this.type;k&&P.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(I=>I.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,I=w.length;N<I;N++){let G=w[N],W=G.shadow;if(W===void 0){Nt("WebGLShadowMap:",G,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);let rt=W.getFrameExtents();r.multiply(rt),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/rt.x),r.x=s.x*rt.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/rt.y),r.y=s.y*rt.y,W.mapSize.y=s.y));let Z=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Z,W.map===null||k===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ur){if(G.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new dn(r.x,r.y,{format:Qn,type:Vn,minFilter:Ue,magFilter:Ue,generateMipmaps:!1}),W.map.texture.name=G.name+".shadowMap",W.map.depthTexture=new Ti(r.x,r.y,pn),W.map.depthTexture.name=G.name+".shadowMapDepth",W.map.depthTexture.format=Jn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ee,W.map.depthTexture.magFilter=Ee}else G.isPointLight?(W.map=new Al(r.x),W.map.depthTexture=new uo(r.x,kn)):(W.map=new dn(r.x,r.y),W.map.depthTexture=new Ti(r.x,r.y,kn)),W.map.depthTexture.name=G.name+".shadowMap",W.map.depthTexture.format=Jn,this.type===Ys?(W.map.depthTexture.compareFunction=Z?Ml:Sl,W.map.depthTexture.minFilter=Ue,W.map.depthTexture.magFilter=Ue):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ee,W.map.depthTexture.magFilter=Ee);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==r.x||W.map.height!==r.y)&&W.map.setSize(r.x,r.y);let et=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();G.isPointLight!==!0&&W.updateMatrices(G,v);for(let nt=0;nt<et;nt++){let wt=W.getCamera(nt);if(G.isPointLight){let xt=W.camera,ee=W.matrix,zt=G.distance||xt.far;zt!==xt.far&&(xt.far=zt,xt.updateProjectionMatrix()),ra.setFromMatrixPosition(G.matrixWorld),xt.position.copy(ra),wu.copy(xt.position),wu.add(pv[nt]),xt.up.copy(mv[nt]),xt.lookAt(wu),xt.updateMatrixWorld(),ee.makeTranslation(-ra.x,-ra.y,-ra.z),pd.multiplyMatrices(xt.projectionMatrix,xt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(pd,xt.coordinateSystem,xt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,nt),i.clear();else{nt===0&&(i.setRenderTarget(W.map),i.clear());let xt=W.getViewport(nt);a.set(s.x*xt.x,s.y*xt.y,s.x*xt.z,s.y*xt.w),B.viewport(a)}n=W.getFrustum(nt),y(P,v,wt,G,this.type)}W.isPointLightShadow!==!0&&this.type===Ur&&E(W,v),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(b,R,L)};function E(w,P){let v=t.update(S);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new dn(r.x,r.y,{format:Qn,type:Vn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(P,null,v,h,S,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(P,null,v,d,S,null)}function T(w,P,v,b){let R=null,L=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)R=L;else if(R=v.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let B=R.uuid,k=P.uuid,N=l[B];N===void 0&&(N={},l[B]=N);let I=N[k];I===void 0&&(I=R.clone(),N[k]=I,P.addEventListener("dispose",M)),R=I}if(R.visible=P.visible,R.wireframe=P.wireframe,b===Ur?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:f[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let B=i.properties.get(R);B.light=v}return R}function y(w,P,v,b,R){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===Ur)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);let k=t.update(w),N=w.material;if(Array.isArray(N)){let I=k.groups;for(let G=0,W=I.length;G<W;G++){let rt=I[G],Z=N[rt.materialIndex];if(Z&&Z.visible){let et=T(w,Z,b,R);w.onBeforeShadow(i,w,P,v,k,et,rt),i.renderBufferDirect(v,null,k,et,w,rt),w.onAfterShadow(i,w,P,v,k,et,rt)}}}else if(N.visible){let I=T(w,N,b,R);w.onBeforeShadow(i,w,P,v,k,I,null),i.renderBufferDirect(v,null,k,I,w,null),w.onAfterShadow(i,w,P,v,k,I,null)}}let B=w.children;for(let k=0,N=B.length;k<N;k++)y(B[k],P,v,b,R)}function M(w){w.target.removeEventListener("dispose",M);for(let v in l){let b=l[v],R=w.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function _v(i,t){function e(){let V=!1,pt=new Yt,it=null,mt=new Yt(0,0,0,0);return{setMask:function(St){it!==St&&!V&&(i.colorMask(St,St,St,St),it=St)},setLocked:function(St){V=St},setClear:function(St,at,It,At,de){de===!0&&(St*=At,at*=At,It*=At),pt.set(St,at,It,At),mt.equals(pt)===!1&&(i.clearColor(St,at,It,At),mt.copy(pt))},reset:function(){V=!1,it=null,mt.set(-1,0,0,0)}}}function n(){let V=!1,pt=!1,it=null,mt=null,St=null;return{setReversed:function(at){if(pt!==at){let It=t.get("EXT_clip_control");at?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),pt=at;let At=St;St=null,this.setClear(At)}},getReversed:function(){return pt},setTest:function(at){at?st(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(at){it!==at&&!V&&(i.depthMask(at),it=at)},setFunc:function(at){if(pt&&(at=Wf[at]),mt!==at){switch(at){case Za:i.depthFunc(i.NEVER);break;case Ja:i.depthFunc(i.ALWAYS);break;case Ka:i.depthFunc(i.LESS);break;case wr:i.depthFunc(i.LEQUAL);break;case ja:i.depthFunc(i.EQUAL);break;case Qa:i.depthFunc(i.GEQUAL);break;case to:i.depthFunc(i.GREATER);break;case eo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=at}},setLocked:function(at){V=at},setClear:function(at){St!==at&&(St=at,pt&&(at=1-at),i.clearDepth(at))},reset:function(){V=!1,it=null,mt=null,St=null,pt=!1}}}function r(){let V=!1,pt=null,it=null,mt=null,St=null,at=null,It=null,At=null,de=null;return{setTest:function(ae){V||(ae?st(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(ae){pt!==ae&&!V&&(i.stencilMask(ae),pt=ae)},setFunc:function(ae,mn,cn){(it!==ae||mt!==mn||St!==cn)&&(i.stencilFunc(ae,mn,cn),it=ae,mt=mn,St=cn)},setOp:function(ae,mn,cn){(at!==ae||It!==mn||At!==cn)&&(i.stencilOp(ae,mn,cn),at=ae,It=mn,At=cn)},setLocked:function(ae){V=ae},setClear:function(ae){de!==ae&&(i.clearStencil(ae),de=ae)},reset:function(){V=!1,pt=null,it=null,mt=null,St=null,at=null,It=null,At=null,de=null}}}let s=new e,a=new n,o=new r,c=new WeakMap,l=new WeakMap,u={},f={},h={},d=new WeakMap,m=[],S=null,g=!1,p=null,E=null,T=null,y=null,M=null,w=null,P=null,v=new qt(0,0,0),b=0,R=!1,L=null,B=null,k=null,N=null,I=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,rt=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=rt>=1):Z.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=rt>=2);let et=null,nt={},wt=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),ee=new Yt().fromArray(wt),zt=new Yt().fromArray(xt);function Qt(V,pt,it,mt){let St=new Uint8Array(4),at=i.createTexture();i.bindTexture(V,at),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<it;It++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(pt+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return at}let j={};j[i.TEXTURE_2D]=Qt(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=Qt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=Qt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=Qt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(wr),te(!1),ve(Oc),st(i.CULL_FACE),re(jn);function st(V){u[V]!==!0&&(i.enable(V),u[V]=!0)}function bt(V){u[V]!==!1&&(i.disable(V),u[V]=!1)}function Ft(V,pt){return h[V]!==pt?(i.bindFramebuffer(V,pt),h[V]=pt,V===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pt),V===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Mt(V,pt){let it=m,mt=!1;if(V){it=d.get(pt),it===void 0&&(it=[],d.set(pt,it));let St=V.textures;if(it.length!==St.length||it[0]!==i.COLOR_ATTACHMENT0){for(let at=0,It=St.length;at<It;at++)it[at]=i.COLOR_ATTACHMENT0+at;it.length=St.length,mt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,mt=!0);mt&&i.drawBuffers(it)}function Dt(V){return S!==V?(i.useProgram(V),S=V,!0):!1}let Te={[Yi]:i.FUNC_ADD,[ff]:i.FUNC_SUBTRACT,[df]:i.FUNC_REVERSE_SUBTRACT};Te[pf]=i.MIN,Te[mf]=i.MAX;let Zt={[gf]:i.ZERO,[_f]:i.ONE,[xf]:i.SRC_COLOR,[kc]:i.SRC_ALPHA,[wf]:i.SRC_ALPHA_SATURATE,[Mf]:i.DST_COLOR,[yf]:i.DST_ALPHA,[vf]:i.ONE_MINUS_SRC_COLOR,[Vc]:i.ONE_MINUS_SRC_ALPHA,[bf]:i.ONE_MINUS_DST_COLOR,[Sf]:i.ONE_MINUS_DST_ALPHA,[Ef]:i.CONSTANT_COLOR,[Af]:i.ONE_MINUS_CONSTANT_COLOR,[Tf]:i.CONSTANT_ALPHA,[Cf]:i.ONE_MINUS_CONSTANT_ALPHA};function re(V,pt,it,mt,St,at,It,At,de,ae){if(V===jn){g===!0&&(bt(i.BLEND),g=!1);return}if(g===!1&&(st(i.BLEND),g=!0),V!==hf){if(V!==p||ae!==R){if((E!==Yi||M!==Yi)&&(i.blendEquation(i.FUNC_ADD),E=Yi,M=Yi),ae)switch(V){case Nr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fr:i.blendFunc(i.ONE,i.ONE);break;case Bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ot("WebGLState: Invalid blending: ",V);break}else switch(V){case Nr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bc:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zc:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",V);break}T=null,y=null,w=null,P=null,v.set(0,0,0),b=0,p=V,R=ae}return}St=St||pt,at=at||it,It=It||mt,(pt!==E||St!==M)&&(i.blendEquationSeparate(Te[pt],Te[St]),E=pt,M=St),(it!==T||mt!==y||at!==w||It!==P)&&(i.blendFuncSeparate(Zt[it],Zt[mt],Zt[at],Zt[It]),T=it,y=mt,w=at,P=It),(At.equals(v)===!1||de!==b)&&(i.blendColor(At.r,At.g,At.b,de),v.copy(At),b=de),p=V,R=!1}function fe(V,pt){V.side===An?bt(i.CULL_FACE):st(i.CULL_FACE);let it=V.side===qe;pt&&(it=!it),te(it),V.blending===Nr&&V.transparent===!1?re(jn):re(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),s.setMask(V.colorWrite);let mt=V.stencilWrite;o.setTest(mt),mt&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ze(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(V){L!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),L=V)}function ve(V){V!==lf?(st(i.CULL_FACE),V!==B&&(V===Oc?i.cullFace(i.BACK):V===cf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),B=V}function we(V){V!==k&&(W&&i.lineWidth(V),k=V)}function ze(V,pt,it){V?(st(i.POLYGON_OFFSET_FILL),(N!==pt||I!==it)&&(N=pt,I=it,a.getReversed()&&(pt=-pt),i.polygonOffset(pt,it))):bt(i.POLYGON_OFFSET_FILL)}function ye(V){V?st(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function be(V){V===void 0&&(V=i.TEXTURE0+G-1),et!==V&&(i.activeTexture(V),et=V)}function z(V,pt,it){it===void 0&&(et===null?it=i.TEXTURE0+G-1:it=et);let mt=nt[it];mt===void 0&&(mt={type:void 0,texture:void 0},nt[it]=mt),(mt.type!==V||mt.texture!==pt)&&(et!==it&&(i.activeTexture(it),et=it),i.bindTexture(V,pt||j[V]),mt.type=V,mt.texture=pt)}function De(){let V=nt[et];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ue(){try{i.compressedTexImage2D(...arguments)}catch(V){Ot("WebGLState:",V)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(V){Ot("WebGLState:",V)}}function x(){try{i.texSubImage2D(...arguments)}catch(V){Ot("WebGLState:",V)}}function H(){try{i.texSubImage3D(...arguments)}catch(V){Ot("WebGLState:",V)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(V){Ot("WebGLState:",V)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(V){Ot("WebGLState:",V)}}function ht(){try{i.texStorage2D(...arguments)}catch(V){Ot("WebGLState:",V)}}function ft(){try{i.texStorage3D(...arguments)}catch(V){Ot("WebGLState:",V)}}function K(){try{i.texImage2D(...arguments)}catch(V){Ot("WebGLState:",V)}}function Q(){try{i.texImage3D(...arguments)}catch(V){Ot("WebGLState:",V)}}function _t(V){return f[V]!==void 0?f[V]:i.getParameter(V)}function Rt(V,pt){f[V]!==pt&&(i.pixelStorei(V,pt),f[V]=pt)}function vt(V){ee.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),ee.copy(V))}function dt(V){zt.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),zt.copy(V))}function Pt(V,pt){let it=l.get(pt);it===void 0&&(it=new WeakMap,l.set(pt,it));let mt=it.get(V);mt===void 0&&(mt=i.getUniformBlockIndex(pt,V.name),it.set(V,mt))}function Ut(V,pt){let mt=l.get(pt).get(V);c.get(pt)!==mt&&(i.uniformBlockBinding(pt,mt,V.__bindingPointIndex),c.set(pt,mt))}function kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},et=null,nt={},h={},d=new WeakMap,m=[],S=null,g=!1,p=null,E=null,T=null,y=null,M=null,w=null,P=null,v=new qt(0,0,0),b=0,R=!1,L=null,B=null,k=null,N=null,I=null,ee.set(0,0,i.canvas.width,i.canvas.height),zt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:st,disable:bt,bindFramebuffer:Ft,drawBuffers:Mt,useProgram:Dt,setBlending:re,setMaterial:fe,setFlipSided:te,setCullFace:ve,setLineWidth:we,setPolygonOffset:ze,setScissorTest:ye,activeTexture:be,bindTexture:z,unbindTexture:De,compressedTexImage2D:ue,compressedTexImage3D:C,texImage2D:K,texImage3D:Q,pixelStorei:Rt,getParameter:_t,updateUBOMapping:Pt,uniformBlockBinding:Ut,texStorage2D:ht,texStorage3D:ft,texSubImage2D:x,texSubImage3D:H,compressedTexSubImage2D:X,compressedTexSubImage3D:J,scissor:vt,viewport:dt,reset:kt}}function xv(i,t,e,n,r,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Lt,u=new WeakMap,f=new Set,h,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,x){return m?new OffscreenCanvas(C,x):Er("canvas")}function g(C,x,H){let X=1,J=ue(C);if((J.width>H||J.height>H)&&(X=H/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ht=Math.floor(X*J.width),ft=Math.floor(X*J.height);h===void 0&&(h=S(ht,ft));let K=x?S(ht,ft):h;return K.width=ht,K.height=ft,K.getContext("2d").drawImage(C,0,0,ht,ft),Nt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ht+"x"+ft+")."),K}else return"data"in C&&Nt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function p(C){return C.generateMipmaps}function E(C){i.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,x,H,X,J,ht=!1){if(C!==null){if(i[C]!==void 0)return i[C];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ft;X&&(ft=t.get("EXT_texture_norm16"),ft||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=x;if(x===i.RED&&(H===i.FLOAT&&(K=i.R32F),H===i.HALF_FLOAT&&(K=i.R16F),H===i.UNSIGNED_BYTE&&(K=i.R8),H===i.UNSIGNED_SHORT&&ft&&(K=ft.R16_EXT),H===i.SHORT&&ft&&(K=ft.R16_SNORM_EXT)),x===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.R8UI),H===i.UNSIGNED_SHORT&&(K=i.R16UI),H===i.UNSIGNED_INT&&(K=i.R32UI),H===i.BYTE&&(K=i.R8I),H===i.SHORT&&(K=i.R16I),H===i.INT&&(K=i.R32I)),x===i.RG&&(H===i.FLOAT&&(K=i.RG32F),H===i.HALF_FLOAT&&(K=i.RG16F),H===i.UNSIGNED_BYTE&&(K=i.RG8),H===i.UNSIGNED_SHORT&&ft&&(K=ft.RG16_EXT),H===i.SHORT&&ft&&(K=ft.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RG8UI),H===i.UNSIGNED_SHORT&&(K=i.RG16UI),H===i.UNSIGNED_INT&&(K=i.RG32UI),H===i.BYTE&&(K=i.RG8I),H===i.SHORT&&(K=i.RG16I),H===i.INT&&(K=i.RG32I)),x===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGB8UI),H===i.UNSIGNED_SHORT&&(K=i.RGB16UI),H===i.UNSIGNED_INT&&(K=i.RGB32UI),H===i.BYTE&&(K=i.RGB8I),H===i.SHORT&&(K=i.RGB16I),H===i.INT&&(K=i.RGB32I)),x===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),H===i.UNSIGNED_INT&&(K=i.RGBA32UI),H===i.BYTE&&(K=i.RGBA8I),H===i.SHORT&&(K=i.RGBA16I),H===i.INT&&(K=i.RGBA32I)),x===i.RGB&&(H===i.UNSIGNED_SHORT&&ft&&(K=ft.RGB16_EXT),H===i.SHORT&&ft&&(K=ft.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),x===i.RGBA){let Q=ht?Ms:ie.getTransfer(J);H===i.FLOAT&&(K=i.RGBA32F),H===i.HALF_FLOAT&&(K=i.RGBA16F),H===i.UNSIGNED_BYTE&&(K=Q===pe?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&ft&&(K=ft.RGBA16_EXT),H===i.SHORT&&ft&&(K=ft.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function M(C,x){let H;return C?x===null||x===kn||x===Br?H=i.DEPTH24_STENCIL8:x===pn?H=i.DEPTH32F_STENCIL8:x===Or&&(H=i.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===kn||x===Br?H=i.DEPTH_COMPONENT24:x===pn?H=i.DEPTH_COMPONENT32F:x===Or&&(H=i.DEPTH_COMPONENT16),H}function w(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ee&&C.minFilter!==Ue?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function P(C){let x=C.target;x.removeEventListener("dispose",P),b(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&f.delete(x)}function v(C){let x=C.target;x.removeEventListener("dispose",v),L(x)}function b(C){let x=n.get(C);if(x.__webglInit===void 0)return;let H=C.source,X=d.get(H);if(X){let J=X[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(C),Object.keys(X).length===0&&d.delete(H)}n.remove(C)}function R(C){let x=n.get(C);i.deleteTexture(x.__webglTexture);let H=C.source,X=d.get(H);delete X[x.__cacheKey],a.memory.textures--}function L(C){let x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let J=0;J<x.__webglFramebuffer[X].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[X][J]);else i.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)i.deleteFramebuffer(x.__webglFramebuffer[X]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let H=C.textures;for(let X=0,J=H.length;X<J;X++){let ht=n.get(H[X]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),a.memory.textures--),n.remove(H[X])}n.remove(C)}let B=0;function k(){B=0}function N(){return B}function I(C){B=C}function G(){let C=B;return C>=r.maxTextures&&Nt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),B+=1,C}function W(C){let x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function rt(C,x){let H=n.get(C);if(C.isVideoTexture&&z(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){let X=C.image;if(X===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(H,C,x);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+x)}function Z(C,x){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){bt(H,C,x);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+x)}function et(C,x){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){bt(H,C,x);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+x)}function nt(C,x){let H=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){Ft(H,C,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+x)}let wt={[no]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[io]:i.MIRRORED_REPEAT},xt={[Ee]:i.NEAREST,[If]:i.NEAREST_MIPMAP_NEAREST,[Zs]:i.NEAREST_MIPMAP_LINEAR,[Ue]:i.LINEAR,[Oo]:i.LINEAR_MIPMAP_NEAREST,[Tn]:i.LINEAR_MIPMAP_LINEAR},ee={[Nf]:i.NEVER,[kf]:i.ALWAYS,[Ff]:i.LESS,[Sl]:i.LEQUAL,[Of]:i.EQUAL,[Ml]:i.GEQUAL,[Bf]:i.GREATER,[zf]:i.NOTEQUAL};function zt(C,x){if(x.type===pn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ue||x.magFilter===Oo||x.magFilter===Zs||x.magFilter===Tn||x.minFilter===Ue||x.minFilter===Oo||x.minFilter===Zs||x.minFilter===Tn)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,wt[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,wt[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,wt[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,xt[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,xt[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ee[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ee||x.minFilter!==Zs&&x.minFilter!==Tn||x.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Qt(C,x){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",P));let X=x.source,J=d.get(X);J===void 0&&(J={},d.set(X,J));let ht=W(x);if(ht!==C.__cacheKey){J[ht]===void 0&&(J[ht]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),J[ht].usedTimes++;let ft=J[C.__cacheKey];ft!==void 0&&(J[C.__cacheKey].usedTimes--,ft.usedTimes===0&&R(x)),C.__cacheKey=ht,C.__webglTexture=J[ht].texture}return H}function j(C,x,H){return Math.floor(Math.floor(C/H)/x)}function st(C,x,H,X){let ht=C.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,H,X,x.data);else{ht.sort((Rt,vt)=>Rt.start-vt.start);let ft=0;for(let Rt=1;Rt<ht.length;Rt++){let vt=ht[ft],dt=ht[Rt],Pt=vt.start+vt.count,Ut=j(dt.start,x.width,4),kt=j(vt.start,x.width,4);dt.start<=Pt+1&&Ut===kt&&j(dt.start+dt.count-1,x.width,4)===Ut?vt.count=Math.max(vt.count,dt.start+dt.count-vt.start):(++ft,ht[ft]=dt)}ht.length=ft+1;let K=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),_t=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Rt=0,vt=ht.length;Rt<vt;Rt++){let dt=ht[Rt],Pt=Math.floor(dt.start/4),Ut=Math.ceil(dt.count/4),kt=Pt%x.width,V=Math.floor(Pt/x.width),pt=Ut,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,kt),e.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,kt,V,pt,it,H,X,x.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,_t)}}function bt(C,x,H){let X=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=i.TEXTURE_3D);let J=Qt(C,x),ht=x.source;e.bindTexture(X,C.__webglTexture,i.TEXTURE0+H);let ft=n.get(ht);if(ht.version!==ft.__version||J===!0){if(e.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let it=ie.getPrimaries(ie.workingColorSpace),mt=x.colorSpace===pi?null:ie.getPrimaries(x.colorSpace),St=x.colorSpace===pi||it===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let Q=g(x.image,!1,r.maxTextureSize);Q=De(x,Q);let _t=s.convert(x.format,x.colorSpace),Rt=s.convert(x.type),vt=y(x.internalFormat,_t,Rt,x.normalized,x.colorSpace,x.isVideoTexture);zt(X,x);let dt,Pt=x.mipmaps,Ut=x.isVideoTexture!==!0,kt=ft.__version===void 0||J===!0,V=ht.dataReady,pt=w(x,Q);if(x.isDepthTexture)vt=M(x.format===Ni,x.type),kt&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,vt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,vt,Q.width,Q.height,0,_t,Rt,null));else if(x.isDataTexture)if(Pt.length>0){Ut&&kt&&e.texStorage2D(i.TEXTURE_2D,pt,vt,Pt[0].width,Pt[0].height);for(let it=0,mt=Pt.length;it<mt;it++)dt=Pt[it],Ut?V&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,dt.width,dt.height,_t,Rt,dt.data):e.texImage2D(i.TEXTURE_2D,it,vt,dt.width,dt.height,0,_t,Rt,dt.data);x.generateMipmaps=!1}else Ut?(kt&&e.texStorage2D(i.TEXTURE_2D,pt,vt,Q.width,Q.height),V&&st(x,Q,_t,Rt)):e.texImage2D(i.TEXTURE_2D,0,vt,Q.width,Q.height,0,_t,Rt,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ut&&kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,vt,Pt[0].width,Pt[0].height,Q.depth);for(let it=0,mt=Pt.length;it<mt;it++)if(dt=Pt[it],x.format!==Cn)if(_t!==null)if(Ut){if(V)if(x.layerUpdates.size>0){let St=du(dt.width,dt.height,x.format,x.type);for(let at of x.layerUpdates){let It=dt.data.subarray(at*St/dt.data.BYTES_PER_ELEMENT,(at+1)*St/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,at,dt.width,dt.height,1,_t,It)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,dt.width,dt.height,Q.depth,_t,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,vt,dt.width,dt.height,Q.depth,0,dt.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,dt.width,dt.height,Q.depth,_t,Rt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,vt,dt.width,dt.height,Q.depth,0,_t,Rt,dt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ut&&kt&&e.texStorage2D(i.TEXTURE_2D,pt,vt,Pt[0].width,Pt[0].height);for(let it=0,mt=Pt.length;it<mt;it++)dt=Pt[it],x.format!==Cn?_t!==null?Ut?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,dt.width,dt.height,_t,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,vt,dt.width,dt.height,0,dt.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?V&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,dt.width,dt.height,_t,Rt,dt.data):e.texImage2D(i.TEXTURE_2D,it,vt,dt.width,dt.height,0,_t,Rt,dt.data)}else if(x.isDataArrayTexture)if(Ut){if(kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,vt,Q.width,Q.height,Q.depth),V)if(x.layerUpdates.size>0){let it=du(Q.width,Q.height,x.format,x.type);for(let mt of x.layerUpdates){let St=Q.data.subarray(mt*it/Q.data.BYTES_PER_ELEMENT,(mt+1)*it/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,mt,Q.width,Q.height,1,_t,Rt,St)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,_t,Rt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,vt,Q.width,Q.height,Q.depth,0,_t,Rt,Q.data);else if(x.isData3DTexture)Ut?(kt&&e.texStorage3D(i.TEXTURE_3D,pt,vt,Q.width,Q.height,Q.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,_t,Rt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,vt,Q.width,Q.height,Q.depth,0,_t,Rt,Q.data);else if(x.isFramebufferTexture){if(kt)if(Ut)e.texStorage2D(i.TEXTURE_2D,pt,vt,Q.width,Q.height);else{let it=Q.width,mt=Q.height;for(let St=0;St<pt;St++)e.texImage2D(i.TEXTURE_2D,St,vt,it,mt,0,_t,Rt,null),it>>=1,mt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),Q.parentNode!==it){it.appendChild(Q),f.add(x),it.onpaint=mt=>{let St=mt.changedElements;for(let at of f)St.includes(at.image)&&(at.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let St=i.RGBA,at=i.RGBA,It=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,St,at,It,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Pt.length>0){if(Ut&&kt){let it=ue(Pt[0]);e.texStorage2D(i.TEXTURE_2D,pt,vt,it.width,it.height)}for(let it=0,mt=Pt.length;it<mt;it++)dt=Pt[it],Ut?V&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,_t,Rt,dt):e.texImage2D(i.TEXTURE_2D,it,vt,_t,Rt,dt);x.generateMipmaps=!1}else if(Ut){if(kt){let it=ue(Q);e.texStorage2D(i.TEXTURE_2D,pt,vt,it.width,it.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Rt,Q)}else e.texImage2D(i.TEXTURE_2D,0,vt,_t,Rt,Q);p(x)&&E(X),ft.__version=ht.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Ft(C,x,H){if(x.image.length!==6)return;let X=Qt(C,x),J=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);let ht=n.get(J);if(J.version!==ht.__version||X===!0){e.activeTexture(i.TEXTURE0+H);let ft=ie.getPrimaries(ie.workingColorSpace),K=x.colorSpace===pi?null:ie.getPrimaries(x.colorSpace),Q=x.colorSpace===pi||ft===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let _t=x.isCompressedTexture||x.image[0].isCompressedTexture,Rt=x.image[0]&&x.image[0].isDataTexture,vt=[];for(let at=0;at<6;at++)!_t&&!Rt?vt[at]=g(x.image[at],!0,r.maxCubemapSize):vt[at]=Rt?x.image[at].image:x.image[at],vt[at]=De(x,vt[at]);let dt=vt[0],Pt=s.convert(x.format,x.colorSpace),Ut=s.convert(x.type),kt=y(x.internalFormat,Pt,Ut,x.normalized,x.colorSpace),V=x.isVideoTexture!==!0,pt=ht.__version===void 0||X===!0,it=J.dataReady,mt=w(x,dt);zt(i.TEXTURE_CUBE_MAP,x);let St;if(_t){V&&pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,kt,dt.width,dt.height);for(let at=0;at<6;at++){St=vt[at].mipmaps;for(let It=0;It<St.length;It++){let At=St[It];x.format!==Cn?Pt!==null?V?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,0,0,At.width,At.height,Pt,At.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,kt,At.width,At.height,0,At.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,0,0,At.width,At.height,Pt,Ut,At.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,kt,At.width,At.height,0,Pt,Ut,At.data)}}}else{if(St=x.mipmaps,V&&pt){St.length>0&&mt++;let at=ue(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,kt,at.width,at.height)}for(let at=0;at<6;at++)if(Rt){V?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,vt[at].width,vt[at].height,Pt,Ut,vt[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,kt,vt[at].width,vt[at].height,0,Pt,Ut,vt[at].data);for(let It=0;It<St.length;It++){let de=St[It].image[at].image;V?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,0,0,de.width,de.height,Pt,Ut,de.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,kt,de.width,de.height,0,Pt,Ut,de.data)}}else{V?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Pt,Ut,vt[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,kt,Pt,Ut,vt[at]);for(let It=0;It<St.length;It++){let At=St[It];V?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,0,0,Pt,Ut,At.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,kt,Pt,Ut,At.image[at])}}}p(x)&&E(i.TEXTURE_CUBE_MAP),ht.__version=J.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Mt(C,x,H,X,J,ht){let ft=s.convert(H.format,H.colorSpace),K=s.convert(H.type),Q=y(H.internalFormat,ft,K,H.normalized,H.colorSpace),_t=n.get(x),Rt=n.get(H);if(Rt.__renderTarget=x,!_t.__hasExternalTextures){let vt=Math.max(1,x.width>>ht),dt=Math.max(1,x.height>>ht);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,ht,Q,vt,dt,x.depth,0,ft,K,null):e.texImage2D(J,ht,Q,vt,dt,0,ft,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),be(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,J,Rt.__webglTexture,0,ye(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,J,Rt.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(C,x,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){let X=x.depthTexture,J=X&&X.isDepthTexture?X.type:null,ht=M(x.stencilBuffer,J),ft=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;be(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye(x),ht,x.width,x.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye(x),ht,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ht,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,C)}else{let X=x.textures;for(let J=0;J<X.length;J++){let ht=X[J],ft=s.convert(ht.format,ht.colorSpace),K=s.convert(ht.type),Q=y(ht.internalFormat,ft,K,ht.normalized,ht.colorSpace);be(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye(x),Q,x.width,x.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye(x),Q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(C,x,H){let X=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",P)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),zt(i.TEXTURE_CUBE_MAP,x.depthTexture);let _t=s.convert(x.depthTexture.format),Rt=s.convert(x.depthTexture.type),vt;x.depthTexture.format===Jn?vt=i.DEPTH_COMPONENT24:x.depthTexture.format===Ni&&(vt=i.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,vt,x.width,x.height,0,_t,Rt,null)}}else rt(x.depthTexture,0);let ht=J.__webglTexture,ft=ye(x),K=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,Q=x.depthTexture.format===Ni?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Jn)be(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,ht,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,ht,0);else if(x.depthTexture.format===Ni)be(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,ht,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Zt(C){let x=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){let X=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=X}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(H)for(let X=0;X<6;X++)Te(x.__webglFramebuffer[X],C,X);else{let X=C.texture.mipmaps;X&&X.length>0?Te(x.__webglFramebuffer[0],C,0):Te(x.__webglFramebuffer,C,0)}else if(H){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=i.createRenderbuffer(),Dt(x.__webglDepthbuffer[X],C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=x.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ht)}}else{let X=C.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Dt(x.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ht)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(C,x,H){let X=n.get(C);x!==void 0&&Mt(X.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Zt(C)}function fe(C){let x=C.texture,H=n.get(C),X=n.get(x);C.addEventListener("dispose",v);let J=C.textures,ht=C.isWebGLCubeRenderTarget===!0,ft=J.length>1;if(ft||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=x.version,a.memory.textures++),ht){H.__webglFramebuffer=[];for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[K]=[];for(let Q=0;Q<x.mipmaps.length;Q++)H.__webglFramebuffer[K][Q]=i.createFramebuffer()}else H.__webglFramebuffer[K]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let K=0;K<x.mipmaps.length;K++)H.__webglFramebuffer[K]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(ft)for(let K=0,Q=J.length;K<Q;K++){let _t=n.get(J[K]);_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&be(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let K=0;K<J.length;K++){let Q=J[K];H.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[K]);let _t=s.convert(Q.format,Q.colorSpace),Rt=s.convert(Q.type),vt=y(Q.internalFormat,_t,Rt,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),dt=ye(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,vt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,H.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),zt(i.TEXTURE_CUBE_MAP,x);for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)Mt(H.__webglFramebuffer[K][Q],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else Mt(H.__webglFramebuffer[K],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(x)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let K=0,Q=J.length;K<Q;K++){let _t=J[K],Rt=n.get(_t),vt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(vt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,Rt.__webglTexture),zt(vt,_t),Mt(H.__webglFramebuffer,C,_t,i.COLOR_ATTACHMENT0+K,vt,0),p(_t)&&E(vt)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,X.__webglTexture),zt(K,x),x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)Mt(H.__webglFramebuffer[Q],C,x,i.COLOR_ATTACHMENT0,K,Q);else Mt(H.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,K,0);p(x)&&E(K),e.unbindTexture()}C.depthBuffer&&Zt(C)}function te(C){let x=C.textures;for(let H=0,X=x.length;H<X;H++){let J=x[H];if(p(J)){let ht=T(C),ft=n.get(J).__webglTexture;e.bindTexture(ht,ft),E(ht),e.unbindTexture()}}}let ve=[],we=[];function ze(C){if(C.samples>0){if(be(C)===!1){let x=C.textures,H=C.width,X=C.height,J=i.COLOR_BUFFER_BIT,ht=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(C),K=x.length>1;if(K)for(let _t=0;_t<x.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);let Q=C.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let _t=0;_t<x.length;_t++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[_t]);let Rt=n.get(x[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Rt,0)}i.blitFramebuffer(0,0,H,X,0,0,H,X,J,i.NEAREST),c===!0&&(ve.length=0,we.length=0,ve.push(i.COLOR_ATTACHMENT0+_t),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ve.push(ht),we.push(ht),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,we)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ve))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let _t=0;_t<x.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,ft.__webglColorRenderbuffer[_t]);let Rt=n.get(x[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ye(C){return Math.min(r.maxSamples,C.samples)}function be(C){let x=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function z(C){let x=a.render.frame;u.get(C)!==x&&(u.set(C,x),C.update())}function De(C,x){let H=C.colorSpace,X=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Ss&&H!==pi&&(ie.getTransfer(H)===pe?(X!==Cn||J!==Mn)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",H)),x}function ue(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=k,this.getTextureUnits=N,this.setTextureUnits=I,this.setTexture2D=rt,this.setTexture2DArray=Z,this.setTexture3D=et,this.setTextureCube=nt,this.rebindTextures=re,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=be,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function vv(i,t){function e(n,r=pi){let s,a=ie.getTransfer(r);if(n===Mn)return i.UNSIGNED_BYTE;if(n===zo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ko)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kc)return i.BYTE;if(n===jc)return i.SHORT;if(n===Or)return i.UNSIGNED_SHORT;if(n===Bo)return i.INT;if(n===kn)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===Vn)return i.HALF_FLOAT;if(n===eu)return i.ALPHA;if(n===nu)return i.RGB;if(n===Cn)return i.RGBA;if(n===Jn)return i.DEPTH_COMPONENT;if(n===Ni)return i.DEPTH_STENCIL;if(n===Vo)return i.RED;if(n===Go)return i.RED_INTEGER;if(n===Qn)return i.RG;if(n===Ho)return i.RG_INTEGER;if(n===Wo)return i.RGBA_INTEGER;if(n===Js||n===Ks||n===js||n===Qs)if(a===pe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Js)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Js)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ks)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===js)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xo||n===qo||n===Yo||n===$o)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Xo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$o)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zo||n===Jo||n===Ko||n===jo||n===Qo||n===ta||n===tl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Zo||n===Jo)return a===pe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ko)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===jo)return s.COMPRESSED_R11_EAC;if(n===Qo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ta)return s.COMPRESSED_RG11_EAC;if(n===tl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===el||n===nl||n===il||n===rl||n===sl||n===al||n===ol||n===ll||n===cl||n===ul||n===hl||n===fl||n===dl||n===pl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===el)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===il)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===al)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ol)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ll)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ul)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pl)return a===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ml||n===gl||n===_l)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ml)return a===pe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_l)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xl||n===vl||n===ea||n===yl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===xl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===vl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var yv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Lu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ns(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ae({vertexShader:yv,fragmentShader:Sv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new zs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Du=class extends Kn{constructor(t,e){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,m=null,S=typeof XRWebGLBinding<"u",g=new Lu,p={},E=e.getContextAttributes(),T=null,y=null,M=[],w=[],P=new Lt,v=null,b=null,R=new Ve;R.viewport=new Yt;let L=new Ve;L.viewport=new Yt;let B=[R,L],k=new Do,N=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let st=M[j];return st===void 0&&(st=new Rr,M[j]=st),st.getTargetRaySpace()},this.getControllerGrip=function(j){let st=M[j];return st===void 0&&(st=new Rr,M[j]=st),st.getGripSpace()},this.getHand=function(j){let st=M[j];return st===void 0&&(st=new Rr,M[j]=st),st.getHandSpace()};function G(j){let st=w.indexOf(j.inputSource);if(st===-1)return;let bt=M[st];bt!==void 0&&(bt.update(j.inputSource,j.frame,l||a),bt.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",rt);for(let j=0;j<M.length;j++){let st=w[j];st!==null&&(w[j]=null,M[j].disconnect(st))}N=null,I=null,g.reset();for(let j in p)delete p[j];if(t.setRenderTarget(T),d=null,h=null,f=null,r=null,y=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(P.width,P.height,!1),b!==null){let j=b.camera;j.fov=b.fov,j.zoom=b.zoom,j.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(T=t.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",W),r.addEventListener("inputsourceschange",rt),E.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(P),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ft=null,Mt=null;E.depth&&(Mt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=E.stencil?Ni:Jn,Ft=E.stencil?Br:kn);let Dt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Dt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new dn(h.textureWidth,h.textureHeight,{format:Cn,type:Mn,depthTexture:new Ti(h.textureWidth,h.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let bt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,bt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new dn(d.framebufferWidth,d.framebufferHeight,{format:Cn,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Qt.setContext(r),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function rt(j){for(let st=0;st<j.removed.length;st++){let bt=j.removed[st],Ft=w.indexOf(bt);Ft>=0&&(w[Ft]=null,M[Ft].disconnect(bt))}for(let st=0;st<j.added.length;st++){let bt=j.added[st],Ft=w.indexOf(bt);if(Ft===-1){for(let Dt=0;Dt<M.length;Dt++)if(Dt>=w.length){w.push(bt),Ft=Dt;break}else if(w[Dt]===null){w[Dt]=bt,Ft=Dt;break}if(Ft===-1)break}let Mt=M[Ft];Mt&&Mt.connect(bt)}}let Z=new O,et=new O;function nt(j,st,bt){Z.setFromMatrixPosition(st.matrixWorld),et.setFromMatrixPosition(bt.matrixWorld);let Ft=Z.distanceTo(et),Mt=st.projectionMatrix.elements,Dt=bt.projectionMatrix.elements,Te=Mt[14]/(Mt[10]-1),Zt=Mt[14]/(Mt[10]+1),re=(Mt[9]+1)/Mt[5],fe=(Mt[9]-1)/Mt[5],te=(Mt[8]-1)/Mt[0],ve=(Dt[8]+1)/Dt[0],we=Te*te,ze=Te*ve,ye=Ft/(-te+ve),be=ye*-te;if(st.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(be),j.translateZ(ye),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Mt[10]===-1)j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let z=Te+ye,De=Zt+ye,ue=we-be,C=ze+(Ft-be),x=re*Zt/De*z,H=fe*Zt/De*z;j.projectionMatrix.makePerspective(ue,C,x,H,z,De),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function wt(j,st){st===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(st.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let st=j.near,bt=j.far;g.texture!==null&&(g.depthNear>0&&(st=g.depthNear),g.depthFar>0&&(bt=g.depthFar)),k.near=L.near=R.near=st,k.far=L.far=R.far=bt,(N!==k.near||I!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),N=k.near,I=k.far),k.layers.mask=j.layers.mask|6,R.layers.mask=k.layers.mask&-5,L.layers.mask=k.layers.mask&-3;let Ft=j.parent,Mt=k.cameras;wt(k,Ft);for(let Dt=0;Dt<Mt.length;Dt++)wt(Mt[Dt],Ft);Mt.length===2?nt(k,R,L):k.projectionMatrix.copy(R.projectionMatrix),b===null&&j.isPerspectiveCamera&&(b={camera:j,fov:j.fov,zoom:j.zoom}),xt(j,k,Ft)};function xt(j,st,bt){bt===null?j.matrix.copy(st.matrixWorld):(j.matrix.copy(bt.matrixWorld),j.matrix.invert(),j.matrix.multiply(st.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Tr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(j){return p[j]};let ee=null;function zt(j,st){if(u=st.getViewerPose(l||a),m=st,u!==null){let bt=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Ft=!1;bt.length!==k.cameras.length&&(k.cameras.length=0,Ft=!0);for(let Zt=0;Zt<bt.length;Zt++){let re=bt[Zt],fe=null;if(d!==null)fe=d.getViewport(re);else{let ve=f.getViewSubImage(h,re);fe=ve.viewport,Zt===0&&(t.setRenderTargetTextures(y,ve.colorTexture,ve.depthStencilTexture),t.setRenderTarget(y))}let te=B[Zt];te===void 0&&(te=new Ve,te.layers.enable(Zt),te.viewport=new Yt,B[Zt]=te),te.matrix.fromArray(re.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(re.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(fe.x,fe.y,fe.width,fe.height),Zt===0&&(k.matrix.copy(te.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ft===!0&&k.cameras.push(te)}let Mt=r.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=n.getBinding();let Zt=f.getDepthInformation(bt[0]);Zt&&Zt.isValid&&Zt.texture&&g.init(Zt,r.renderState)}if(Mt&&Mt.includes("camera-access")&&S){t.state.unbindTexture(),f=n.getBinding();for(let Zt=0;Zt<bt.length;Zt++){let re=bt[Zt].camera;if(re){let fe=p[re];fe||(fe=new Ns,p[re]=fe);let te=f.getCameraImage(re);fe.sourceTexture=te}}}}for(let bt=0;bt<M.length;bt++){let Ft=w[bt],Mt=M[bt];Ft!==null&&Mt!==void 0&&Mt.update(Ft,st,l||a)}ee&&ee(j,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),m=null}let Qt=new md;Qt.setAnimationLoop(zt),this.setAnimationLoop=function(j){ee=j},this.dispose=function(){}}},Mv=new me,Sd=new Ht;Sd.set(-1,0,0,0,1,0,0,0,1);function bv(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,uu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,E,T,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),S(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,E,T):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===qe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===qe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let E=t.get(p),T=E.envMap,y=E.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(Mv.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Sd),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,E,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=T*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,E){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qe&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function S(g,p){let E=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function wv(i,t,e,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){let w=M.program;n.uniformBlockBinding(y,w)}function l(y,M){let w=r[y.id];w===void 0&&(g(y),w=u(y),r[y.id]=w,y.addEventListener("dispose",E));let P=M.program;n.updateUBOMapping(y,P);let v=t.render.frame;s[y.id]!==v&&(h(y),s[y.id]=v)}function u(y){let M=f();y.__bindingPointIndex=M;let w=i.createBuffer(),P=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,P,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let M=r[y.id],w=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let v=0,b=w.length;v<b;v++){let R=w[v];if(Array.isArray(R))for(let L=0,B=R.length;L<B;L++)d(R[L],v,L,P);else d(R,v,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,M,w,P){if(S(y,M,w,P)===!0){let v=y.__offset,b=y.value;if(Array.isArray(b)){let R=0;for(let L=0;L<b.length;L++){let B=b[L],k=p(B);m(B,y.__data,R),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(b,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function m(y,M,w){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,w)}function S(y,M,w,P){let v=y.value,b=M+"_"+w;if(P[b]===void 0)return typeof v=="number"||typeof v=="boolean"?P[b]=v:ArrayBuffer.isView(v)?P[b]=v.slice():P[b]=v.clone(),!0;{let R=P[b];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return P[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function g(y){let M=y.uniforms,w=0,P=16;for(let b=0,R=M.length;b<R;b++){let L=Array.isArray(M[b])?M[b]:[M[b]];for(let B=0,k=L.length;B<k;B++){let N=L[B],I=Array.isArray(N.value)?N.value:[N.value];for(let G=0,W=I.length;G<W;G++){let rt=I[G],Z=p(rt),et=w%P,nt=et%Z.boundary,wt=et+nt;w+=nt,wt!==0&&P-wt<Z.storage&&(w+=P-wt),N.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=Z.storage}}}let v=w%P;return v>0&&(w+=P-v),y.__size=w,y.__cache={},this}function p(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",y),M}function E(y){let M=y.target;M.removeEventListener("dispose",E);let w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function T(){for(let y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:l,dispose:T}}var Ev=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ti=null;function Av(){return ti===null&&(ti=new Bn(Ev,16,16,Qn,Vn),ti.name="DFG_LUT",ti.minFilter=Ue,ti.magFilter=Ue,ti.wrapS=Zn,ti.wrapT=Zn,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}var Tl=class{constructor(t={}){let{canvas:e=Vf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Mn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let S=d,g=new Set([Wo,Ho,Go]),p=new Set([Mn,kn,Or,Br,zo,ko]),E=new Uint32Array(4),T=new Int32Array(4),y=new O,M=null,w=null,P=[],v=[],b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,B=null,k=null,N=null,I=null;this._outputColorSpace=Qe;let G=0,W=0,rt=null,Z=-1,et=null,nt=new Yt,wt=new Yt,xt=null,ee=new qt(0),zt=0,Qt=e.width,j=e.height,st=1,bt=null,Ft=null,Mt=new Yt(0,0,Qt,j),Dt=new Yt(0,0,Qt,j),Te=!1,Zt=new Ls,re=!1,fe=!1,te=new me,ve=new O,we=new Yt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ye=!1;function be(){return rt===null?st:1}let z=n;function De(_,A){return e.getContext(_,A)}let ue,C,x,H,X,J,ht,ft,K,Q,_t,Rt,vt,dt,Pt,Ut,kt,V,pt,it,mt,St,at;try{let _={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",de,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",mn,!1),z===null){let A="webgl2";if(z=De(A,_),z===null)throw De(A)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}It()}catch(_){throw e.removeEventListener("webglcontextlost",de,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",mn,!1),Ot("WebGLRenderer: "+_.message),_}function It(){ue=new D_(z),ue.init(),mt=new vv(z,ue),C=new b_(z,ue,t,mt),x=new _v(z,ue),C.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),k=z.createFramebuffer(),N=z.createFramebuffer(),I=z.createFramebuffer(),H=new F_(z),X=new iv,J=new xv(z,ue,x,X,C,mt,H),ht=new L_(R),ft=new Bm(z),St=new S_(z,ft),K=new U_(z,ft,H,St),Q=new B_(z,K,ft,St,H),V=new O_(z,C,J),Pt=new w_(X),_t=new nv(R,ht,ue,C,St,Pt),Rt=new bv(R,X),vt=new sv,dt=new hv(ue),kt=new y_(R,ht,x,Q,m,c),Ut=new gv(R,Q,C),at=new wv(z,H,C,x),pt=new M_(z,ue,H),it=new N_(z,ue,H),H.programs=_t.programs,R.capabilities=C,R.extensions=ue,R.properties=X,R.renderLists=vt,R.shadowMap=Ut,R.state=x,R.info=H}S!==Mn&&(b=new k_(S,e.width,e.height,o,r,s));let At=new Du(R,z);this.xr=At,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let _=ue.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=ue.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(_){_!==void 0&&(st=_,this.setSize(Qt,j,!1))},this.getSize=function(_){return _.set(Qt,j)},this.setSize=function(_,A,D=!0){if(At.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Qt=_,j=A,e.width=Math.floor(_*st),e.height=Math.floor(A*st),D===!0&&(e.style.width=_+"px",e.style.height=A+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,_,A)},this.getDrawingBufferSize=function(_){return _.set(Qt*st,j*st).floor()},this.setDrawingBufferSize=function(_,A,D){Qt=_,j=A,st=D,e.width=Math.floor(_*D),e.height=Math.floor(A*D),this.setViewport(0,0,_,A)},this.setEffects=function(_){if(S===Mn){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let A=0;A<_.length;A++)if(_[A].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(nt)},this.getViewport=function(_){return _.copy(Mt)},this.setViewport=function(_,A,D,U){_.isVector4?Mt.set(_.x,_.y,_.z,_.w):Mt.set(_,A,D,U),x.viewport(nt.copy(Mt).multiplyScalar(st).round())},this.getScissor=function(_){return _.copy(Dt)},this.setScissor=function(_,A,D,U){_.isVector4?Dt.set(_.x,_.y,_.z,_.w):Dt.set(_,A,D,U),x.scissor(wt.copy(Dt).multiplyScalar(st).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(_){x.setScissorTest(Te=_)},this.setOpaqueSort=function(_){bt=_},this.setTransparentSort=function(_){Ft=_},this.getClearColor=function(_){return _.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor(...arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha(...arguments)},this.clear=function(_=!0,A=!0,D=!0){let U=0;if(_){let F=!1;if(rt!==null){let q=rt.texture.format;F=g.has(q)}if(F){let q=rt.texture.type,Y=p.has(q),$=kt.getClearColor(),tt=kt.getClearAlpha(),ct=$.r,Et=$.g,Tt=$.b;Y?(E[0]=ct,E[1]=Et,E[2]=Tt,E[3]=tt,z.clearBufferuiv(z.COLOR,0,E)):(T[0]=ct,T[1]=Et,T[2]=Tt,T[3]=tt,z.clearBufferiv(z.COLOR,0,T))}else U|=z.COLOR_BUFFER_BIT}A&&(U|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),D&&(U|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&z.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),B=_},this.dispose=function(){e.removeEventListener("webglcontextlost",de,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",mn,!1),kt.dispose(),vt.dispose(),dt.dispose(),X.dispose(),ht.dispose(),Q.dispose(),St.dispose(),at.dispose(),_t.dispose(),At.dispose(),At.removeEventListener("sessionstart",tr),At.removeEventListener("sessionend",er),qn.stop()};function de(_){_.preventDefault(),ws("WebGLRenderer: Context Lost."),L=!0}function ae(){ws("WebGLRenderer: Context Restored."),L=!1;let _=H.autoReset,A=Ut.enabled,D=Ut.autoUpdate,U=Ut.needsUpdate,F=Ut.type;It(),H.autoReset=_,Ut.enabled=A,Ut.autoUpdate=D,Ut.needsUpdate=U,Ut.type=F}function mn(_){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function cn(_){let A=_.target;A.removeEventListener("dispose",cn),Oi(A)}function Oi(_){ss(_),X.remove(_)}function ss(_){let A=X.get(_).programs;A!==void 0&&(A.forEach(function(D){_t.releaseProgram(D)}),_.isShaderMaterial&&_t.releaseShaderCache(_))}this.renderBufferDirect=function(_,A,D,U,F,q){A===null&&(A=ze);let Y=F.isMesh&&F.matrixWorld.determinantAffine()<0,$=ls(_,A,D,U,F);x.setMaterial(U,Y);let tt=D.index,ct=1;if(U.wireframe===!0){if(tt=K.getWireframeAttribute(D),tt===void 0)return;ct=2}let Et=D.drawRange,Tt=D.attributes.position,ot=Et.start*ct,Ct=(Et.start+Et.count)*ct;q!==null&&(ot=Math.max(ot,q.start*ct),Ct=Math.min(Ct,(q.start+q.count)*ct)),tt!==null?(ot=Math.max(ot,0),Ct=Math.min(Ct,tt.count)):Tt!=null&&(ot=Math.max(ot,0),Ct=Math.min(Ct,Tt.count));let Vt=Ct-ot;if(Vt<0||Vt===1/0)return;St.setup(F,U,$,D,tt);let ut,yt=pt;if(tt!==null&&(ut=ft.get(tt),yt=it,yt.setIndex(ut)),F.isMesh)U.wireframe===!0?(x.setLineWidth(U.wireframeLinewidth*be()),yt.setMode(z.LINES)):yt.setMode(z.TRIANGLES);else if(F.isLine){let Gt=U.linewidth;Gt===void 0&&(Gt=1),x.setLineWidth(Gt*be()),F.isLineSegments?yt.setMode(z.LINES):F.isLineLoop?yt.setMode(z.LINE_LOOP):yt.setMode(z.LINE_STRIP)}else F.isPoints?yt.setMode(z.POINTS):F.isSprite&&yt.setMode(z.TRIANGLES);if(F.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))yt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Gt=F._multiDrawStarts,lt=F._multiDrawCounts,Kt=F._multiDrawCount,Bt=tt?ft.get(tt).bytesPerElement:1,Ce=X.get(U).currentProgram.getUniforms();for(let We=0;We<Kt;We++)Ce.setValue(z,"_gl_DrawID",We),yt.render(Gt[We]/Bt,lt[We])}else if(F.isInstancedMesh)yt.renderInstances(ot,Vt,F.count);else if(D.isInstancedBufferGeometry){let Gt=D._maxInstanceCount!==void 0?D._maxInstanceCount:1/0,lt=Math.min(D.instanceCount,Gt);yt.renderInstances(ot,Vt,lt)}else yt.render(ot,Vt)};function un(_,A,D,U){B!==null&&_.isNodeMaterial&&B.setObject(U,_),re===!0&&Pt.setState(_,D,!1),_.transparent===!0&&_.side===An&&_.forceSinglePass===!1?(_.side=qe,_.needsUpdate=!0,rr(_,A,U),_.side=Di,_.needsUpdate=!0,rr(_,A,U),_.side=An):rr(_,A,U)}this.compile=function(_,A,D=null){D===null&&(D=_),B!==null&&B.renderStart(_,A,D),w=dt.get(D),w.init(A),v.push(w),D.traverseVisible(function(F){F.isLight&&F.layers.test(A.layers)&&(w.pushLight(F),F.castShadow&&w.pushShadow(F))}),_!==D&&_.traverseVisible(function(F){F.isLight&&F.layers.test(A.layers)&&(w.pushLight(F),F.castShadow&&w.pushShadow(F))}),w.setupLights(),B!==null&&B.updateLights(w.state.lightsArray),fe=this.localClippingEnabled,re=Pt.init(this.clippingPlanes,fe),re===!0&&Pt.setGlobalState(this.clippingPlanes,A),B!==null&&Ut.render(w.state.shadowsArray,D,A);let U=new Set;return _.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let q=F.material;if(q)if(Array.isArray(q))for(let Y=0;Y<q.length;Y++){let $=q[Y];un($,D,A,F),U.add($)}else un(q,D,A,F),U.add(q)}),w=v.pop(),B!==null&&B.renderEnd(),U},this.compileAsync=function(_,A,D=null){let U=this.compile(_,A,D);return new Promise(F=>{function q(){if(U.forEach(function(Y){let tt=X.get(Y).currentProgram;(tt===void 0||tt.isReady())&&U.delete(Y)}),U.size===0){F(_);return}setTimeout(q,10)}ue.get("KHR_parallel_shader_compile")!==null?q():setTimeout(q,10)})};let gn=null;function sc(_){gn&&gn(_)}function tr(){qn.stop()}function er(){qn.start()}let qn=new md;qn.setAnimationLoop(sc),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(_){gn=_,At.setAnimationLoop(_),_===null?qn.stop():qn.start()},At.addEventListener("sessionstart",tr),At.addEventListener("sessionend",er),this.render=function(_,A){if(A!==void 0&&A.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;B!==null&&B.renderStart(_,A);let D=At.enabled===!0&&At.isPresenting===!0,U=b!==null&&(rt===null||D)&&b.begin(R,rt);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),A.parent===null&&A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(A),A=At.getCamera()),_.isScene===!0&&_.onBeforeRender(R,_,A,rt),w=dt.get(_,v.length),w.init(A),w.state.textureUnits=J.getTextureUnits(),v.push(w),te.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),Zt.setFromProjectionMatrix(te,Nn,A.reversedDepth),fe=this.localClippingEnabled,re=Pt.init(this.clippingPlanes,fe),M=vt.get(_,P.length),M.init(),P.push(M),At.enabled===!0&&At.isPresenting===!0){let Y=R.xr.getDepthSensingMesh();Y!==null&&nr(Y,A,-1/0,R.sortObjects)}nr(_,A,0,R.sortObjects),M.finish(),B!==null&&B.updateLights(w.state.lightsArray),R.sortObjects===!0&&M.sort(bt,Ft),ye=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,ye&&kt.addToRenderList(M,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Pt.beginShadows();let F=w.state.shadowsArray;if(Ut.render(F,_,A),re===!0&&Pt.endShadows(),(U&&b.hasRenderPass())===!1){let Y=M.opaque,$=M.transmissive;if(w.setupLights(),A.isArrayCamera){let tt=A.cameras;if($.length>0)for(let ct=0,Et=tt.length;ct<Et;ct++){let Tt=tt[ct];Yn(Y,$,_,Tt)}ye&&kt.render(_);for(let ct=0,Et=tt.length;ct<Et;ct++){let Tt=tt[ct];as(M,_,Tt,Tt.viewport)}}else $.length>0&&Yn(Y,$,_,A),ye&&kt.render(_),as(M,_,A)}rt!==null&&W===0&&(J.updateMultisampleRenderTarget(rt),J.updateRenderTargetMipmap(rt)),U&&b.end(R),_.isScene===!0&&_.onAfterRender(R,_,A),St.resetDefaultState(),Z=-1,et=null,v.pop(),v.length>0?(w=v[v.length-1],J.setTextureUnits(w.state.textureUnits),re===!0&&Pt.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?M=P[P.length-1]:M=null,B!==null&&B.renderEnd()};function nr(_,A,D,U){if(_.visible===!1)return;if(_.layers.test(A.layers)){if(_.isGroup)D=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(A);else if(_.isLightProbeGrid)w.pushLightProbeGrid(_);else if(_.isLight)w.pushLight(_),_.castShadow&&w.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||_.intersectsFrustum(Zt)){U&&we.setFromMatrixPosition(_.matrixWorld).applyMatrix4(te);let Y=Q.update(_),$=_.material;$.visible&&M.push(_,Y,$,D,we.z,null,A)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||_.intersectsFrustum(Zt))){let Y=Q.update(_),$=_.material;if(U&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),we.copy(_.boundingSphere.center)):(Y.boundingSphere===null&&Y.computeBoundingSphere(),we.copy(Y.boundingSphere.center)),we.applyMatrix4(_.matrixWorld).applyMatrix4(te)),Array.isArray($)){let tt=Y.groups;for(let ct=0,Et=tt.length;ct<Et;ct++){let Tt=tt[ct],ot=$[Tt.materialIndex];ot&&ot.visible&&M.push(_,Y,ot,D,we.z,Tt,A)}}else $.visible&&M.push(_,Y,$,D,we.z,null,A)}}let q=_.children;for(let Y=0,$=q.length;Y<$;Y++)nr(q[Y],A,D,U)}function as(_,A,D,U){let{opaque:F,transmissive:q,transparent:Y}=_;w.setupLightsView(D),re===!0&&Pt.setGlobalState(R.clippingPlanes,D),U&&x.viewport(nt.copy(U)),F.length>0&&gi(F,A,D),q.length>0&&gi(q,A,D),Y.length>0&&gi(Y,A,D),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Yn(_,A,D,U){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[U.id]===void 0){let ot=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[U.id]=new dn(1,1,{generateMipmaps:!0,type:ot?Vn:Mn,minFilter:Tn,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}let q=w.state.transmissionRenderTarget[U.id],Y=U.viewport||nt;q.setSize(Y.z*R.transmissionResolutionScale,Y.w*R.transmissionResolutionScale);let $=R.getRenderTarget(),tt=R.getActiveCubeFace(),ct=R.getActiveMipmapLevel();R.setRenderTarget(q),R.getClearColor(ee),zt=R.getClearAlpha(),zt<1&&R.setClearColor(16777215,.5),R.clear(),ye&&kt.render(D);let Et=R.toneMapping;R.toneMapping=zn;let Tt=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),w.setupLightsView(U),re===!0&&Pt.setGlobalState(R.clippingPlanes,U),gi(_,D,U),J.updateMultisampleRenderTarget(q),J.updateRenderTargetMipmap(q),ue.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Ct=0,Vt=A.length;Ct<Vt;Ct++){let ut=A[Ct],{object:yt,geometry:Gt,material:lt,group:Kt}=ut;if(lt.side===An&&yt.layers.test(U.layers)){let Bt=lt.side;lt.side=qe,lt.needsUpdate=!0,ir(yt,D,U,Gt,lt,Kt),lt.side=Bt,lt.needsUpdate=!0,ot=!0}}ot===!0&&(J.updateMultisampleRenderTarget(q),J.updateRenderTargetMipmap(q))}R.setRenderTarget($,tt,ct),R.setClearColor(ee,zt),Tt!==void 0&&(U.viewport=Tt),R.toneMapping=Et}function gi(_,A,D){let U=A.isScene===!0?A.overrideMaterial:null;for(let F=0,q=_.length;F<q;F++){let Y=_[F],{object:$,geometry:tt,group:ct}=Y,Et=Y.material;Et.allowOverride===!0&&U!==null&&(Et=U),$.layers.test(D.layers)&&ir($,A,D,tt,Et,ct)}}function ir(_,A,D,U,F,q){B!==null&&F.isNodeMaterial&&B.setObject(_,F),_.onBeforeRender(R,A,D,U,F,q),_.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),F.onBeforeRender(R,A,D,U,_,q),F.transparent===!0&&F.side===An&&F.forceSinglePass===!1?(F.side=qe,F.needsUpdate=!0,R.renderBufferDirect(D,A,U,F,_,q),F.side=Di,F.needsUpdate=!0,R.renderBufferDirect(D,A,U,F,_,q),F.side=An):R.renderBufferDirect(D,A,U,F,_,q),_.onAfterRender(R,A,D,U,F,q)}function rr(_,A,D){A.isScene!==!0&&(A=ze);let U=X.get(_),F=w.state.lights,q=w.state.shadowsArray,Y=F.state.version,$=_t.getParameters(_,F.state,q,A,D,w.state.lightProbeGridArray),tt=_t.getProgramCacheKey($),ct=U.programs;U.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,U.fog=A.fog;let Et=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;U.envMap=ht.get(_.envMap||U.environment,Et),U.envMapRotation=U.environment!==null&&_.envMap===null?A.environmentRotation:_.envMapRotation,ct===void 0&&(_.addEventListener("dispose",cn),ct=new Map,U.programs=ct);let Tt=ct.get(tt);if(Tt!==void 0){if(U.currentProgram===Tt&&U.lightsStateVersion===Y)return os(_,$),Tt}else $.uniforms=_t.getUniforms(_),B!==null&&_.isNodeMaterial&&B.build(_,D,$),_.onBeforeCompile($,R),Tt=_t.acquireProgram($,tt),ct.set(tt,Tt),U.uniforms=$.uniforms;let ot=U.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(ot.clippingPlanes=Pt.uniform),os(_,$),U.needsLights=Ma(_),U.lightsStateVersion=Y,U.needsLights&&(ot.ambientLightColor.value=F.state.ambient,ot.lightProbe.value=F.state.probe,ot.sunLights.value=F.state.sun,ot.sunLightShadows.value=F.state.sunShadow,ot.directionalLights.value=F.state.directional,ot.directionalLightShadows.value=F.state.directionalShadow,ot.spotLights.value=F.state.spot,ot.spotLightShadows.value=F.state.spotShadow,ot.rectAreaLights.value=F.state.rectArea,ot.ltc_1.value=F.state.rectAreaLTC1,ot.ltc_2.value=F.state.rectAreaLTC2,ot.pointLights.value=F.state.point,ot.pointLightShadows.value=F.state.pointShadow,ot.hemisphereLights.value=F.state.hemi,ot.sunShadowMatrix.value=F.state.sunShadowMatrix,ot.sunShadowCascade.value=F.state.sunShadowCascade,ot.directionalShadowMatrix.value=F.state.directionalShadowMatrix,ot.spotLightMatrix.value=F.state.spotLightMatrix,ot.spotLightMap.value=F.state.spotLightMap,ot.pointShadowMatrix.value=F.state.pointShadowMatrix),U.lightProbeGrid=w.state.lightProbeGridArray.length>0,U.currentProgram=Tt,U.uniformsList=null,Tt}function Bi(_){if(_.uniformsList===null){let A=_.currentProgram.getUniforms();_.uniformsList=Vr.seqWithValue(A.seq,_.uniforms)}return _.uniformsList}function os(_,A){let D=X.get(_);D.outputColorSpace=A.outputColorSpace,D.batching=A.batching,D.batchingColor=A.batchingColor,D.instancing=A.instancing,D.instancingColor=A.instancingColor,D.instancingMorph=A.instancingMorph,D.skinning=A.skinning,D.morphTargets=A.morphTargets,D.morphNormals=A.morphNormals,D.morphColors=A.morphColors,D.morphTargetsCount=A.morphTargetsCount,D.numClippingPlanes=A.numClippingPlanes,D.numIntersection=A.numClipIntersection,D.vertexAlphas=A.vertexAlphas,D.vertexTangents=A.vertexTangents,D.toneMapping=A.toneMapping}function ya(_,A){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;y.setFromMatrixPosition(A.matrixWorld);for(let D=0,U=_.length;D<U;D++){let F=_[D];if(F.texture!==null&&F.boundingBox.containsPoint(y))return F}return null}function ls(_,A,D,U,F){A.isScene!==!0&&(A=ze),J.resetTextureUnits();let q=A.fog,Y=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?A.environment:null,$=rt===null?R.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ie.workingColorSpace,tt=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,ct=ht.get(U.envMap||Y,tt),Et=U.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,Tt=!!D.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),ot=!!D.morphAttributes.position,Ct=!!D.morphAttributes.normal,Vt=!!D.morphAttributes.color,ut=zn;U.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ut=R.toneMapping);let yt=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Gt=yt!==void 0?yt.length:0,lt=X.get(U),Kt=w.state.lights;if(re===!0&&(fe===!0||_!==et)){let ce=_===et&&U.id===Z;Pt.setState(U,_,ce)}let Bt=!1;U.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==Kt.state.version||lt.outputColorSpace!==$||F.isBatchedMesh&&lt.batching===!1||!F.isBatchedMesh&&lt.batching===!0||F.isBatchedMesh&&lt.batchingColor===!0&&F._colorsTexture===null||F.isBatchedMesh&&lt.batchingColor===!1&&F._colorsTexture!==null||F.isInstancedMesh&&lt.instancing===!1||!F.isInstancedMesh&&lt.instancing===!0||F.isSkinnedMesh&&lt.skinning===!1||!F.isSkinnedMesh&&lt.skinning===!0||F.isInstancedMesh&&lt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&lt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&lt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&lt.instancingMorph===!1&&F.morphTexture!==null||lt.envMap!==ct||U.fog===!0&&lt.fog!==q||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==Pt.numPlanes||lt.numIntersection!==Pt.numIntersection)||lt.vertexAlphas!==Et||lt.vertexTangents!==Tt||lt.morphTargets!==ot||lt.morphNormals!==Ct||lt.morphColors!==Vt||lt.toneMapping!==ut||lt.morphTargetsCount!==Gt||!!lt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Bt=!0):(Bt=!0,lt.__version=U.version);let Ce=lt.currentProgram;Bt===!0&&(Ce=rr(U,A,F),B&&U.isNodeMaterial&&B.onUpdateProgram(U,Ce,lt));let We=!1,Re=!1,hn=!1,he=Ce.getUniforms(),jt=lt.uniforms;if(x.useProgram(Ce.program)&&(We=!0,Re=!0,hn=!0),U.id!==Z&&(Z=U.id,Re=!0),lt.needsLights){let ce=ya(w.state.lightProbeGridArray,F);lt.lightProbeGrid!==ce&&(lt.lightProbeGrid=ce,Re=!0)}if(We||et!==_){x.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),he.setValue(z,"projectionMatrix",_.projectionMatrix),he.setValue(z,"viewMatrix",_.matrixWorldInverse);let _i=he.map.cameraPosition;_i!==void 0&&_i.setValue(z,ve.setFromMatrixPosition(_.matrixWorld)),C.logarithmicDepthBuffer&&he.setValue(z,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&he.setValue(z,"isOrthographic",_.isOrthographicCamera===!0),et!==_&&(et=_,Re=!0,hn=!0)}if(lt.needsLights&&(Kt.state.sunShadowMap.length>0&&he.setValue(z,"sunShadowMap",Kt.state.sunShadowMap,J),Kt.state.directionalShadowMap.length>0&&he.setValue(z,"directionalShadowMap",Kt.state.directionalShadowMap,J),Kt.state.spotShadowMap.length>0&&he.setValue(z,"spotShadowMap",Kt.state.spotShadowMap,J),Kt.state.pointShadowMap.length>0&&he.setValue(z,"pointShadowMap",Kt.state.pointShadowMap,J)),F.isSkinnedMesh){he.setOptional(z,F,"bindMatrix"),he.setOptional(z,F,"bindMatrixInverse");let ce=F.skeleton;ce&&(ce.boneTexture===null&&ce.computeBoneTexture(),he.setValue(z,"boneTexture",ce.boneTexture,J))}F.isBatchedMesh&&(he.setOptional(z,F,"batchingTexture"),he.setValue(z,"batchingTexture",F._matricesTexture,J),he.setOptional(z,F,"batchingIdTexture"),he.setValue(z,"batchingIdTexture",F._indirectTexture,J),he.setOptional(z,F,"batchingColorTexture"),F._colorsTexture!==null&&he.setValue(z,"batchingColorTexture",F._colorsTexture,J));let Xe=D.morphAttributes;if((Xe.position!==void 0||Xe.normal!==void 0||Xe.color!==void 0)&&V.update(F,D,Ce),(Re||lt.receiveShadow!==F.receiveShadow)&&(lt.receiveShadow=F.receiveShadow,he.setValue(z,"receiveShadow",F.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&A.environment!==null&&(jt.envMapIntensity.value=A.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=Av()),Re){if(he.setValue(z,"toneMappingExposure",R.toneMappingExposure),lt.needsLights&&Sa(jt,hn),q&&U.fog===!0&&Rt.refreshFogUniforms(jt,q),Rt.refreshMaterialUniforms(jt,U,st,j,w.state.transmissionRenderTarget[_.id]),lt.needsLights&&lt.lightProbeGrid){let ce=lt.lightProbeGrid;jt.probesSH.value=ce.texture,jt.probesMin.value.copy(ce.boundingBox.min),jt.probesMax.value.copy(ce.boundingBox.max),jt.probesResolution.value.copy(ce.resolution)}Vr.upload(z,Bi(lt),jt,J)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Vr.upload(z,Bi(lt),jt,J),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&he.setValue(z,"center",F.center),he.setValue(z,"modelViewMatrix",F.modelViewMatrix),he.setValue(z,"normalMatrix",F.normalMatrix),he.setValue(z,"modelMatrix",F.matrixWorld),U.uniformsGroups!==void 0){let ce=U.uniformsGroups;for(let _i=0,sr=ce.length;_i<sr;_i++){let Ph=ce[_i];at.update(Ph,Ce),at.bind(Ph,Ce)}}return Ce}function Sa(_,A){_.ambientLightColor.needsUpdate=A,_.lightProbe.needsUpdate=A,_.sunLights.needsUpdate=A,_.sunLightShadows.needsUpdate=A,_.directionalLights.needsUpdate=A,_.directionalLightShadows.needsUpdate=A,_.pointLights.needsUpdate=A,_.pointLightShadows.needsUpdate=A,_.spotLights.needsUpdate=A,_.spotLightShadows.needsUpdate=A,_.rectAreaLights.needsUpdate=A,_.hemisphereLights.needsUpdate=A}function Ma(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(_,A,D){let U=X.get(_);U.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),X.get(_.texture).__webglTexture=A,X.get(_.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:D,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,A){let D=X.get(_);D.__webglFramebuffer=A,D.__useDefaultFramebuffer=A===void 0},this.setRenderTarget=function(_,A=0,D=0){rt=_,G=A,W=D;let U=null,F=!1,q=!1;if(_){let $=X.get(_);if($.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(z.FRAMEBUFFER,$.__webglFramebuffer),nt.copy(_.viewport),wt.copy(_.scissor),xt=_.scissorTest,x.viewport(nt),x.scissor(wt),x.setScissorTest(xt),Z=-1;return}else if($.__webglFramebuffer===void 0)J.setupRenderTarget(_);else if($.__hasExternalTextures)J.rebindTextures(_,X.get(_.texture).__webglTexture,X.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Et=_.depthTexture;if($.__boundDepthTexture!==Et){if(Et!==null&&X.has(Et)&&(_.width!==Et.image.width||_.height!==Et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(_)}}let tt=_.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(q=!0);let ct=X.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(ct[A])?U=ct[A][D]:U=ct[A],F=!0):_.samples>0&&J.useMultisampledRTT(_)===!1?U=X.get(_).__webglMultisampledFramebuffer:Array.isArray(ct)?U=ct[D]:U=ct,nt.copy(_.viewport),wt.copy(_.scissor),xt=_.scissorTest}else nt.copy(Mt).multiplyScalar(st).floor(),wt.copy(Dt).multiplyScalar(st).floor(),xt=Te;if(D!==0&&(U=k),x.bindFramebuffer(z.FRAMEBUFFER,U)&&x.drawBuffers(_,U),x.viewport(nt),x.scissor(wt),x.setScissorTest(xt),F){let $=X.get(_.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+A,$.__webglTexture,D)}else if(q){let $=A;for(let tt=0;tt<_.textures.length;tt++){let ct=X.get(_.textures[tt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+tt,ct.__webglTexture,D,$)}}else if(_!==null&&D!==0){let $=X.get(_.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,$.__webglTexture,D)}Z=-1};function cs(_){let A=X.get(_);return(A.__readFormat!==_.format||A.__readType!==_.type)&&(A.__readFormat=_.format,A.__readType=_.type,A.__formatReadable=C.textureFormatReadable(_.format),A.__typeReadable=C.textureTypeReadable(_.type)),A}this.readRenderTargetPixels=function(_,A,D,U,F,q,Y,$=0){if(!(_&&_.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=X.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Y!==void 0&&(tt=tt[Y]),tt){x.bindFramebuffer(z.FRAMEBUFFER,tt);try{let ct=_.textures[$],Et=ct.format,Tt=ct.type;_.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+$);let ot=cs(ct);if(ot.__formatReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ot.__typeReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}A>=0&&A<=_.width-U&&D>=0&&D<=_.height-F&&z.readPixels(A,D,U,F,mt.convert(Et),mt.convert(Tt),q)}finally{let ct=rt!==null?X.get(rt).__webglFramebuffer:null;x.bindFramebuffer(z.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=async function(_,A,D,U,F,q,Y,$=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=X.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Y!==void 0&&(tt=tt[Y]),tt)if(A>=0&&A<=_.width-U&&D>=0&&D<=_.height-F){x.bindFramebuffer(z.FRAMEBUFFER,tt);let ct=_.textures[$],Et=ct.format,Tt=ct.type;_.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+$);let ot=cs(ct);if(ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ct=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ct),z.bufferData(z.PIXEL_PACK_BUFFER,q.byteLength,z.STREAM_READ),z.readPixels(A,D,U,F,mt.convert(Et),mt.convert(Tt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Vt=rt!==null?X.get(rt).__webglFramebuffer:null;x.bindFramebuffer(z.FRAMEBUFFER,Vt);let ut=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Hf(z,ut,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ct),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,q),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Ct),z.deleteSync(ut),q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,A=null,D=0){let U=Math.pow(2,-D),F=Math.floor(_.image.width*U),q=Math.floor(_.image.height*U),Y=A!==null?A.x:0,$=A!==null?A.y:0;J.setTexture2D(_,0),z.copyTexSubImage2D(z.TEXTURE_2D,D,0,0,Y,$,F,q),x.unbindTexture()},this.copyTextureToTexture=function(_,A,D=null,U=null,F=0,q=0){let Y,$,tt,ct,Et,Tt,ot,Ct,Vt,ut=_.isCompressedTexture?_.mipmaps[q]:_.image;if(D!==null)Y=D.max.x-D.min.x,$=D.max.y-D.min.y,tt=D.isBox3?D.max.z-D.min.z:1,ct=D.min.x,Et=D.min.y,Tt=D.isBox3?D.min.z:0;else{let jt=Math.pow(2,-F);Y=Math.floor(ut.width*jt),$=Math.floor(ut.height*jt),_.isDataArrayTexture?tt=ut.depth:_.isData3DTexture?tt=Math.floor(ut.depth*jt):tt=1,ct=0,Et=0,Tt=0}U!==null?(ot=U.x,Ct=U.y,Vt=U.z):(ot=0,Ct=0,Vt=0);let yt=mt.convert(A.format),Gt=mt.convert(A.type),lt;A.isData3DTexture?(J.setTexture3D(A,0),lt=z.TEXTURE_3D):A.isDataArrayTexture||A.isCompressedArrayTexture?(J.setTexture2DArray(A,0),lt=z.TEXTURE_2D_ARRAY):(J.setTexture2D(A,0),lt=z.TEXTURE_2D),x.activeTexture(z.TEXTURE0),x.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,A.flipY),x.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),x.pixelStorei(z.UNPACK_ALIGNMENT,A.unpackAlignment);let Kt=x.getParameter(z.UNPACK_ROW_LENGTH),Bt=x.getParameter(z.UNPACK_IMAGE_HEIGHT),Ce=x.getParameter(z.UNPACK_SKIP_PIXELS),We=x.getParameter(z.UNPACK_SKIP_ROWS),Re=x.getParameter(z.UNPACK_SKIP_IMAGES);x.pixelStorei(z.UNPACK_ROW_LENGTH,ut.width),x.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ut.height),x.pixelStorei(z.UNPACK_SKIP_PIXELS,ct),x.pixelStorei(z.UNPACK_SKIP_ROWS,Et),x.pixelStorei(z.UNPACK_SKIP_IMAGES,Tt);let hn=_.isDataArrayTexture||_.isData3DTexture,he=A.isDataArrayTexture||A.isData3DTexture;if(_.isDepthTexture){let jt=X.get(_),Xe=X.get(A),ce=X.get(jt.__renderTarget),_i=X.get(Xe.__renderTarget);x.bindFramebuffer(z.READ_FRAMEBUFFER,ce.__webglFramebuffer),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let sr=0;sr<tt;sr++)hn&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,X.get(_).__webglTexture,F,Tt+sr),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,X.get(A).__webglTexture,q,Vt+sr)),z.blitFramebuffer(ct,Et,Y,$,ot,Ct,Y,$,z.DEPTH_BUFFER_BIT,z.NEAREST);x.bindFramebuffer(z.READ_FRAMEBUFFER,null),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(F!==0||_.isRenderTargetTexture||X.has(_)){let jt=X.get(_),Xe=X.get(A);x.bindFramebuffer(z.READ_FRAMEBUFFER,N),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,I);for(let ce=0;ce<tt;ce++)hn?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,jt.__webglTexture,F,Tt+ce):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,jt.__webglTexture,F),he?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xe.__webglTexture,q,Vt+ce):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Xe.__webglTexture,q),F!==0?z.blitFramebuffer(ct,Et,Y,$,ot,Ct,Y,$,z.COLOR_BUFFER_BIT,z.NEAREST):he?z.copyTexSubImage3D(lt,q,ot,Ct,Vt+ce,ct,Et,Y,$):z.copyTexSubImage2D(lt,q,ot,Ct,ct,Et,Y,$);x.bindFramebuffer(z.READ_FRAMEBUFFER,null),x.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else he?_.isDataTexture||_.isData3DTexture?z.texSubImage3D(lt,q,ot,Ct,Vt,Y,$,tt,yt,Gt,ut.data):A.isCompressedArrayTexture?z.compressedTexSubImage3D(lt,q,ot,Ct,Vt,Y,$,tt,yt,ut.data):z.texSubImage3D(lt,q,ot,Ct,Vt,Y,$,tt,yt,Gt,ut):_.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,q,ot,Ct,Y,$,yt,Gt,ut.data):_.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,q,ot,Ct,ut.width,ut.height,yt,ut.data):z.texSubImage2D(z.TEXTURE_2D,q,ot,Ct,Y,$,yt,Gt,ut);x.pixelStorei(z.UNPACK_ROW_LENGTH,Kt),x.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Bt),x.pixelStorei(z.UNPACK_SKIP_PIXELS,Ce),x.pixelStorei(z.UNPACK_SKIP_ROWS,We),x.pixelStorei(z.UNPACK_SKIP_IMAGES,Re),q===0&&A.generateMipmaps&&z.generateMipmap(lt),x.unbindTexture()},this.initRenderTarget=function(_){X.get(_).__webglFramebuffer===void 0&&J.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?J.setTextureCube(_,0):_.isData3DTexture?J.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?J.setTexture2DArray(_,0):J.setTexture2D(_,0),x.unbindTexture()},this.resetState=function(){G=0,W=0,rt=null,x.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var Md=new sn,Pl=new O,Hr=class extends Xs{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new ge(t,3)),this.setAttribute("uv",new ge(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Li(e,6,1);return this.setAttribute("instanceStart",new On(n,3,0)),this.setAttribute("instanceEnd",new On(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Li(e,6,1);return this.setAttribute("instanceColorStart",new On(n,3,0)),this.setAttribute("instanceColorEnd",new On(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new ks(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Md.setFromBufferAttribute(e),this.boundingBox.union(Md))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Pl.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Pl)),Pl.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Pl));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};gt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Lt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};on.line={uniforms:na.merge([gt.common,gt.fog,gt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var Wr=class extends Ae{constructor(t){super({type:"LineMaterial",uniforms:na.clone(on.line.uniforms),vertexShader:on.line.vertexShader,fragmentShader:on.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Uu=new Yt,bd=new O,wd=new O,Ye=new Yt,$e=new Yt,ei=new Yt,Nu=new O,Fu=new me,Ze=new qs,Ed=new O,Il=new sn,Ll=new an,ni=new Yt,ii,Ki;function Ad(i,t,e){return ni.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),ni.multiplyScalar(1/ni.w),ni.x=Ki/e.width,ni.y=Ki/e.height,ni.applyMatrix4(i.projectionMatrixInverse),ni.multiplyScalar(1/ni.w),Math.abs(Math.max(ni.x,ni.y))}function Tv(i,t){let e=i.matrixWorld,n=i.geometry,r=n.attributes.instanceStart,s=n.attributes.instanceEnd,a=Math.min(n.instanceCount,r.count);for(let o=0,c=a;o<c;o++){Ze.start.fromBufferAttribute(r,o),Ze.end.fromBufferAttribute(s,o),Ze.applyMatrix4(e);let l=new O,u=new O;ii.distanceSqToSegment(Ze.start,Ze.end,u,l),u.distanceTo(l)<Ki*.5&&t.push({point:u,pointOnLine:l,distance:ii.origin.distanceTo(u),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function Cv(i,t,e){let n=t.projectionMatrix,s=i.material.resolution,a=i.matrixWorld,o=i.geometry,c=o.attributes.instanceStart,l=o.attributes.instanceEnd,u=Math.min(o.instanceCount,c.count),f=-t.near;ii.at(1,ei),ei.w=1,ei.applyMatrix4(t.matrixWorldInverse),ei.applyMatrix4(n),ei.multiplyScalar(1/ei.w),ei.x*=s.x/2,ei.y*=s.y/2,ei.z=0,Nu.copy(ei),Fu.multiplyMatrices(t.matrixWorldInverse,a);for(let h=0,d=u;h<d;h++){if(Ye.fromBufferAttribute(c,h),$e.fromBufferAttribute(l,h),Ye.w=1,$e.w=1,Ye.applyMatrix4(Fu),$e.applyMatrix4(Fu),Ye.z>f&&$e.z>f)continue;if(Ye.z>f){let T=Ye.z-$e.z,y=(Ye.z-f)/T;Ye.lerp($e,y)}else if($e.z>f){let T=$e.z-Ye.z,y=($e.z-f)/T;$e.lerp(Ye,y)}Ye.applyMatrix4(n),$e.applyMatrix4(n),Ye.multiplyScalar(1/Ye.w),$e.multiplyScalar(1/$e.w),Ye.x*=s.x/2,Ye.y*=s.y/2,$e.x*=s.x/2,$e.y*=s.y/2,Ze.start.copy(Ye),Ze.start.z=0,Ze.end.copy($e),Ze.end.z=0;let S=Ze.closestPointToPointParameter(Nu,!0);Ze.at(S,Ed);let g=lu.lerp(Ye.z,$e.z,S),p=g>=-1&&g<=1,E=Nu.distanceTo(Ed)<Ki*.5;if(p&&E){Ze.start.fromBufferAttribute(c,h),Ze.end.fromBufferAttribute(l,h),Ze.start.applyMatrix4(a),Ze.end.applyMatrix4(a);let T=new O,y=new O;ii.distanceSqToSegment(Ze.start,Ze.end,y,T),e.push({point:y,pointOnLine:T,distance:ii.origin.distanceTo(y),object:i,face:null,faceIndex:h,uv:null,uv1:null})}}}var Dl=class extends Me{constructor(t=new Hr,e=new Wr({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,r=new Float32Array(2*e.count);for(let a=0,o=0,c=e.count;a<c;a++,o+=2)bd.fromBufferAttribute(e,a),wd.fromBufferAttribute(n,a),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+bd.distanceTo(wd);let s=new Li(r,2,1);return t.setAttribute("instanceDistanceStart",new On(s,1,0)),t.setAttribute("instanceDistanceEnd",new On(s,1,1)),this}raycast(t,e){let n=this.material.worldUnits,r=t.camera;if(r===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let s=t.params.Line2!==void 0&&t.params.Line2.threshold||0;ii=t.ray;let a=this.matrixWorld,o=this.geometry,c=this.material;Ki=c.linewidth+s,o.boundingSphere===null&&o.computeBoundingSphere(),Ll.copy(o.boundingSphere).applyMatrix4(a);let l;if(n)l=Ki*.5;else{let f=Math.max(r.near,Ll.distanceToPoint(ii.origin));l=Ad(r,f,c.resolution)}if(Ll.radius+=l,ii.intersectsSphere(Ll)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Il.copy(o.boundingBox).applyMatrix4(a);let u;if(n)u=Ki*.5;else{let f=Math.max(r.near,Il.distanceToPoint(ii.origin));u=Ad(r,f,c.resolution)}Il.expandByScalar(u),ii.intersectsBox(Il)!==!1&&(n?Tv(this,e):Cv(this,r,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Uu),this.material.uniforms.resolution.value.set(Uu.z,Uu.w))}};var mi=6371,Xr=Math.PI/180,Oe=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Gn=(i,t,e)=>{let n=Oe((e-i)/(t-i));return n*n*(3-2*n)},en=(i,t,e=1)=>{let n=i*Xr,r=t*Xr;return new O(Math.cos(n)*Math.sin(r)*e,Math.sin(n)*e,Math.cos(n)*Math.cos(r)*e)},Rv=i=>[Math.asin(Oe(i.y,-1,1))/Xr,Math.atan2(i.x,i.z)/Xr];function ku(i,t,e){i.aspect=t/e;let n=t>900;i.setViewOffset(t,e,n?-t*.2:0,n?0:e*.18,t,e),i.updateProjectionMatrix()}var Td=new O(0,1,0),Pv=new O;function Vu(i,t,e,n,r,s){let a=en(t.lat,t.lon),o=en(e.lat,e.lon),c=a.angleTo(o),l=c<1e-6?a:a.clone().multiplyScalar(Math.sin((1-n)*c)).add(o.clone().multiplyScalar(Math.sin(n*c))).divideScalar(Math.sin(c));l.normalize();let u=c*mi,f=1+Math.min(2.2,u/Math.max(t.alt,e.alt,400)*.35)*Math.sin(Math.PI*n),h=Math.exp(Math.log(t.alt)*(1-n)+Math.log(e.alt)*n)*f*(r/s<.8?1.7:1),d=1+h/mi,m=h<2500?24*(1-h/2500):0,S=((t.tilt??m)*(1-n)+(e.tilt??m)*n)*Xr,g=new O().crossVectors(l,new O().crossVectors(Td,l)).normalize().negate();return i.position.copy(l).multiplyScalar(d).addScaledVector(g,Math.tan(S)*(d-1)*1.2),i.up.copy(Td),i.lookAt(Pv.copy(l).multiplyScalar(1-Gn(2500,6e3,h))),i.near=Math.max(2e-6,(d-1)*.15),i.far=d+3,i.updateProjectionMatrix(),h}var Iv=new an(new O,1),Ou=new Wi,Cd=new O,Bu=new Lt;function zu(i,t,e,n,r){return Bu.set(t/n*2-1,1-e/r*2),Ou.origin.copy(i.position),Ou.direction.set(Bu.x,Bu.y,.5).unproject(i).sub(i.position).normalize(),Ou.intersectSphere(Iv,Cd)?Rv(Cd):null}var Lv=(i,t)=>{let e=en(i[0],i[1]),n=en(t[0],t[1]);return e.angleTo(n)*mi},ji=new Ve(32,1,5e-4,100);function Rd(i,t,e,n=.14){ku(ji,t,e),Vu(ji,i,i,0,t,e),ji.updateMatrixWorld(!0);let r=[],s=12,a=0;for(let M=0;M<=s;M++)for(let w=0;w<=s;w++){let P=zu(ji,w/s*t,M/s*e,t,e);P?r.push(P):a++}let o=en(i.lat,i.lon).project(ji),c=(o.x*.5+.5)*t,l=(.5-o.y*.5)*e,u=zu(ji,c-40,l,t,e),f=zu(ji,c+40,l,t,e),h=u&&f?Lv(u,f)/80:0;if(a||r.length<4)return{box:null,kmPerPx:h};let d=r.map(([,M])=>i.lon+((M-i.lon)%360+540)%360-180),m=r.map(([M])=>M),[S,g,p,E]=[Math.min(...d),Math.max(...d),Math.min(...m),Math.max(...m)],T=(g-S)*n,y=(E-p)*n;return S-=T,g+=T,p=Math.max(-89.5,p-y),E=Math.min(89.5,E+y),{box:[S,p,g,E],kmPerPx:h}}function Pd(i,t,e,n){let r=(i[1]+i[3])/2*Xr,s=(i[2]-i[0])*111.32*Math.cos(r),a=(i[3]-i[1])*110.57,o=s/t,c=a/t,l=Math.min(1,e/Math.max(o,c),Math.sqrt(n/(o*c)));return o=Math.round(Oe(o*l,256,e)),c=Math.round(Oe(c*l,128,e)),{W:o,H:c,texelKm:Math.max(s/o,a/c)}}var Le=class{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){let e=this._partials,n=0;for(let r=0;r<this._n&&r<32;r++){let s=e[r],a=t+s,o=Math.abs(t)<Math.abs(s)?t-(a-s):s-(a-t);o&&(e[n++]=o),t=a}return e[n]=t,this._n=n+1,this}valueOf(){let t=this._partials,e=this._n,n,r,s,a=0;if(e>0){for(a=t[--e];e>0&&(n=a,r=t[--e],a=n+r,s=r-(a-n),!s););e>0&&(s<0&&t[e-1]<0||s>0&&t[e-1]>0)&&(r=s*2,n=a+r,r==n-a&&(a=n))}return a}};function*Dv(i){for(let t of i)yield*t}function qr(i){return Array.from(Dv(i))}var se=1e-6,Id=1e-12,ne=Math.PI,ln=ne/2,Yr=ne/4,Be=ne*2,Je=180/ne,oe=ne/180,le=Math.abs,Ld=Math.atan,nn=Math.atan2,$t=Math.cos;var Xt=Math.sin,Dd=Math.sign||function(i){return i>0?1:i<0?-1:0},He=Math.sqrt;function Ud(i){return i>1?0:i<-1?ne:Math.acos(i)}function Hn(i){return i>1?ln:i<-1?-ln:Math.asin(i)}function Gu(i){return(i=Xt(i/2))*i}function _e(){}function Ul(i,t){i&&Fd.hasOwnProperty(i.type)&&Fd[i.type](i,t)}var Nd={Feature:function(i,t){Ul(i.geometry,t)},FeatureCollection:function(i,t){for(var e=i.features,n=-1,r=e.length;++n<r;)Ul(e[n].geometry,t)}},Fd={Sphere:function(i,t){t.sphere()},Point:function(i,t){i=i.coordinates,t.point(i[0],i[1],i[2])},MultiPoint:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)i=e[n],t.point(i[0],i[1],i[2])},LineString:function(i,t){Hu(i.coordinates,t,0)},MultiLineString:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)Hu(e[n],t,0)},Polygon:function(i,t){Od(i.coordinates,t)},MultiPolygon:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)Od(e[n],t)},GeometryCollection:function(i,t){for(var e=i.geometries,n=-1,r=e.length;++n<r;)Ul(e[n],t)}};function Hu(i,t,e){var n=-1,r=i.length-e,s;for(t.lineStart();++n<r;)s=i[n],t.point(s[0],s[1],s[2]);t.lineEnd()}function Od(i,t){var e=-1,n=i.length;for(t.polygonStart();++e<n;)Hu(i[e],t,1);t.polygonEnd()}function Rn(i,t){i&&Nd.hasOwnProperty(i.type)?Nd[i.type](i,t):Ul(i,t)}var Wu=new Le,Nl=new Le,Bd,zd,Xu,qu,Yu,aa={point:_e,lineStart:_e,lineEnd:_e,polygonStart:function(){Wu=new Le,aa.lineStart=Uv,aa.lineEnd=Nv},polygonEnd:function(){var i=+Wu;Nl.add(i<0?Be+i:i),this.lineStart=this.lineEnd=this.point=_e},sphere:function(){Nl.add(Be)}};function Uv(){aa.point=Fv}function Nv(){kd(Bd,zd)}function Fv(i,t){aa.point=kd,Bd=i,zd=t,i*=oe,t*=oe,Xu=i,qu=$t(t=t/2+Yr),Yu=Xt(t)}function kd(i,t){i*=oe,t*=oe,t=t/2+Yr;var e=i-Xu,n=e>=0?1:-1,r=n*e,s=$t(t),a=Xt(t),o=Yu*a,c=qu*s+o*$t(r),l=o*n*Xt(r);Wu.add(nn(l,c)),Xu=i,qu=s,Yu=a}function Fl(i){return Nl=new Le,Rn(i,aa),Nl*2}function oa(i){return[nn(i[1],i[0]),Hn(i[2])]}function ri(i){var t=i[0],e=i[1],n=$t(e);return[n*$t(t),n*Xt(t),Xt(e)]}function la(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]}function $r(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function Ol(i,t){i[0]+=t[0],i[1]+=t[1],i[2]+=t[2]}function ca(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function ua(i){var t=He(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);i[0]/=t,i[1]/=t,i[2]/=t}function ha(i,t){function e(n,r){return n=i(n,r),t(n[0],n[1])}return i.invert&&t.invert&&(e.invert=function(n,r){return n=t.invert(n,r),n&&i.invert(n[0],n[1])}),e}function $u(i,t){return le(i)>ne&&(i-=Math.round(i/Be)*Be),[i,t]}$u.invert=$u;function Wd(i,t,e){return(i%=Be)?t||e?ha(Gd(i),Hd(t,e)):Gd(i):t||e?Hd(t,e):$u}function Vd(i){return function(t,e){return t+=i,le(t)>ne&&(t-=Math.round(t/Be)*Be),[t,e]}}function Gd(i){var t=Vd(i);return t.invert=Vd(-i),t}function Hd(i,t){var e=$t(i),n=Xt(i),r=$t(t),s=Xt(t);function a(o,c){var l=$t(c),u=$t(o)*l,f=Xt(o)*l,h=Xt(c),d=h*e+u*n;return[nn(f*r-d*s,u*e-h*n),Hn(d*r+f*s)]}return a.invert=function(o,c){var l=$t(c),u=$t(o)*l,f=Xt(o)*l,h=Xt(c),d=h*r-f*s;return[nn(f*r+h*s,u*e+d*n),Hn(d*e-u*n)]},a}function qd(i,t,e,n,r,s){if(e){var a=$t(t),o=Xt(t),c=n*e;r==null?(r=t+n*Be,s=t-c/2):(r=Xd(a,r),s=Xd(a,s),(n>0?r<s:r>s)&&(r+=n*Be));for(var l,u=r;n>0?u>s:u<s;u-=c)l=oa([a,-o*$t(u),-o*Xt(u)]),i.point(l[0],l[1])}}function Xd(i,t){t=ri(t),t[0]-=i,ua(t);var e=Ud(-t[1]);return((-t[2]<0?-e:e)+Be-se)%Be}function Bl(){var i=[],t;return{point:function(e,n,r){t.push([e,n,r])},lineStart:function(){i.push(t=[])},lineEnd:_e,rejoin:function(){i.length>1&&i.push(i.pop().concat(i.shift()))},result:function(){var e=i;return i=[],t=null,e}}}function Zr(i,t){return le(i[0]-t[0])<se&&le(i[1]-t[1])<se}function zl(i,t,e,n){this.x=i,this.z=t,this.o=e,this.e=n,this.v=!1,this.n=this.p=null}function kl(i,t,e,n,r){var s=[],a=[],o,c;if(i.forEach(function(m){if(!((S=m.length-1)<=0)){var S,g=m[0],p=m[S],E;if(Zr(g,p)){if(!g[2]&&!p[2]){for(r.lineStart(),o=0;o<S;++o)r.point((g=m[o])[0],g[1]);r.lineEnd();return}p[0]+=2*se}s.push(E=new zl(g,m,null,!0)),a.push(E.o=new zl(g,null,E,!1)),s.push(E=new zl(p,m,null,!1)),a.push(E.o=new zl(p,null,E,!0))}}),!!s.length){for(a.sort(t),Yd(s),Yd(a),o=0,c=a.length;o<c;++o)a[o].e=e=!e;for(var l=s[0],u,f;;){for(var h=l,d=!0;h.v;)if((h=h.n)===l)return;u=h.z,r.lineStart();do{if(h.v=h.o.v=!0,h.e){if(d)for(o=0,c=u.length;o<c;++o)r.point((f=u[o])[0],f[1]);else n(h.x,h.n.x,1,r);h=h.n}else{if(d)for(u=h.p.z,o=u.length-1;o>=0;--o)r.point((f=u[o])[0],f[1]);else n(h.x,h.p.x,-1,r);h=h.p}h=h.o,u=h.z,d=!d}while(!h.v);r.lineEnd()}}}function Yd(i){if(t=i.length){for(var t,e=0,n=i[0],r;++e<t;)n.n=r=i[e],r.p=n,n=r;n.n=r=i[0],r.p=n}}function Zu(i){return le(i[0])<=ne?i[0]:Dd(i[0])*((le(i[0])+ne)%Be-ne)}function $d(i,t){var e=Zu(t),n=t[1],r=Xt(n),s=[Xt(e),-$t(e),0],a=0,o=0,c=new Le;r===1?n=ln+se:r===-1&&(n=-ln-se);for(var l=0,u=i.length;l<u;++l)if(h=(f=i[l]).length)for(var f,h,d=f[h-1],m=Zu(d),S=d[1]/2+Yr,g=Xt(S),p=$t(S),E=0;E<h;++E,m=y,g=w,p=P,d=T){var T=f[E],y=Zu(T),M=T[1]/2+Yr,w=Xt(M),P=$t(M),v=y-m,b=v>=0?1:-1,R=b*v,L=R>ne,B=g*w;if(c.add(nn(B*b*Xt(R),p*P+B*$t(R))),a+=L?v+b*Be:v,L^m>=e^y>=e){var k=$r(ri(d),ri(T));ua(k);var N=$r(s,k);ua(N);var I=(L^v>=0?-1:1)*Hn(N[2]);(n>I||n===I&&(k[0]||k[1]))&&(o+=L^v>=0?1:-1)}}return(a<-se||a<se&&c<-Id)^o&1}function Vl(i,t,e,n){return function(r){var s=t(r),a=Bl(),o=t(a),c=!1,l,u,f,h={point:d,lineStart:S,lineEnd:g,polygonStart:function(){h.point=p,h.lineStart=E,h.lineEnd=T,u=[],l=[]},polygonEnd:function(){h.point=d,h.lineStart=S,h.lineEnd=g,u=qr(u);var y=$d(l,n);u.length?(c||(r.polygonStart(),c=!0),kl(u,Bv,y,e,r)):y&&(c||(r.polygonStart(),c=!0),r.lineStart(),e(null,null,1,r),r.lineEnd()),c&&(r.polygonEnd(),c=!1),u=l=null},sphere:function(){r.polygonStart(),r.lineStart(),e(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function d(y,M){i(y,M)&&r.point(y,M)}function m(y,M){s.point(y,M)}function S(){h.point=m,s.lineStart()}function g(){h.point=d,s.lineEnd()}function p(y,M){f.push([y,M]),o.point(y,M)}function E(){o.lineStart(),f=[]}function T(){p(f[0][0],f[0][1]),o.lineEnd();var y=o.clean(),M=a.result(),w,P=M.length,v,b,R;if(f.pop(),l.push(f),f=null,!!P){if(y&1){if(b=M[0],(v=b.length-1)>0){for(c||(r.polygonStart(),c=!0),r.lineStart(),w=0;w<v;++w)r.point((R=b[w])[0],R[1]);r.lineEnd()}return}P>1&&y&2&&M.push(M.pop().concat(M.shift())),u.push(M.filter(Ov))}}return h}}function Ov(i){return i.length>1}function Bv(i,t){return((i=i.x)[0]<0?i[1]-ln-se:ln-i[1])-((t=t.x)[0]<0?t[1]-ln-se:ln-t[1])}var Ju=Vl(function(){return!0},zv,Vv,[-ne,-ln]);function zv(i){var t=NaN,e=NaN,n=NaN,r;return{lineStart:function(){i.lineStart(),r=1},point:function(s,a){var o=s>0?ne:-ne,c=le(s-t);le(c-ne)<se?(i.point(t,e=(e+a)/2>0?ln:-ln),i.point(n,e),i.lineEnd(),i.lineStart(),i.point(o,e),i.point(s,e),r=0):n!==o&&c>=ne&&(le(t-n)<se&&(t-=n*se),le(s-o)<se&&(s-=o*se),e=kv(t,e,s,a),i.point(n,e),i.lineEnd(),i.lineStart(),i.point(o,e),r=0),i.point(t=s,e=a),n=o},lineEnd:function(){i.lineEnd(),t=e=NaN},clean:function(){return 2-r}}}function kv(i,t,e,n){var r,s,a=Xt(i-e);return le(a)>se?Ld((Xt(t)*(s=$t(n))*Xt(e)-Xt(n)*(r=$t(t))*Xt(i))/(r*s*a)):(t+n)/2}function Vv(i,t,e,n){var r;if(i==null)r=e*ln,n.point(-ne,r),n.point(0,r),n.point(ne,r),n.point(ne,0),n.point(ne,-r),n.point(0,-r),n.point(-ne,-r),n.point(-ne,0),n.point(-ne,r);else if(le(i[0]-t[0])>se){var s=i[0]<t[0]?ne:-ne;r=e*s/2,n.point(-s,r),n.point(0,r),n.point(s,r)}else n.point(t[0],t[1])}function Zd(i){var t=$t(i),e=2*oe,n=t>0,r=le(t)>se;function s(u,f,h,d){qd(d,i,e,h,u,f)}function a(u,f){return $t(u)*$t(f)>t}function o(u){var f,h,d,m,S;return{lineStart:function(){m=d=!1,S=1},point:function(g,p){var E=[g,p],T,y=a(g,p),M=n?y?0:l(g,p):y?l(g+(g<0?ne:-ne),p):0;if(!f&&(m=d=y)&&u.lineStart(),y!==d&&(T=c(f,E),(!T||Zr(f,T)||Zr(E,T))&&(E[2]=1)),y!==d)S=0,y?(u.lineStart(),T=c(E,f),u.point(T[0],T[1])):(T=c(f,E),u.point(T[0],T[1],2),u.lineEnd()),f=T;else if(r&&f&&n^y){var w;!(M&h)&&(w=c(E,f,!0))&&(S=0,n?(u.lineStart(),u.point(w[0][0],w[0][1]),u.point(w[1][0],w[1][1]),u.lineEnd()):(u.point(w[1][0],w[1][1]),u.lineEnd(),u.lineStart(),u.point(w[0][0],w[0][1],3)))}y&&(!f||!Zr(f,E))&&u.point(E[0],E[1]),f=E,d=y,h=M},lineEnd:function(){d&&u.lineEnd(),f=null},clean:function(){return S|(m&&d)<<1}}}function c(u,f,h){var d=ri(u),m=ri(f),S=[1,0,0],g=$r(d,m),p=la(g,g),E=g[0],T=p-E*E;if(!T)return!h&&u;var y=t*p/T,M=-t*E/T,w=$r(S,g),P=ca(S,y),v=ca(g,M);Ol(P,v);var b=w,R=la(P,b),L=la(b,b),B=R*R-L*(la(P,P)-1);if(!(B<0)){var k=He(B),N=ca(b,(-R-k)/L);if(Ol(N,P),N=oa(N),!h)return N;var I=u[0],G=f[0],W=u[1],rt=f[1],Z;G<I&&(Z=I,I=G,G=Z);var et=G-I,nt=le(et-ne)<se,wt=nt||et<se;if(!nt&&rt<W&&(Z=W,W=rt,rt=Z),wt?nt?W+rt>0^N[1]<(le(N[0]-I)<se?W:rt):W<=N[1]&&N[1]<=rt:et>ne^(I<=N[0]&&N[0]<=G)){var xt=ca(b,(-R+k)/L);return Ol(xt,P),[N,oa(xt)]}}}function l(u,f){var h=n?i:ne-i,d=0;return u<-h?d|=1:u>h&&(d|=2),f<-h?d|=4:f>h&&(d|=8),d}return Vl(a,o,s,n?[0,-i]:[-ne,i-ne])}function Jd(i,t,e,n,r,s){var a=i[0],o=i[1],c=t[0],l=t[1],u=0,f=1,h=c-a,d=l-o,m;if(m=e-a,!(!h&&m>0)){if(m/=h,h<0){if(m<u)return;m<f&&(f=m)}else if(h>0){if(m>f)return;m>u&&(u=m)}if(m=r-a,!(!h&&m<0)){if(m/=h,h<0){if(m>f)return;m>u&&(u=m)}else if(h>0){if(m<u)return;m<f&&(f=m)}if(m=n-o,!(!d&&m>0)){if(m/=d,d<0){if(m<u)return;m<f&&(f=m)}else if(d>0){if(m>f)return;m>u&&(u=m)}if(m=s-o,!(!d&&m<0)){if(m/=d,d<0){if(m>f)return;m>u&&(u=m)}else if(d>0){if(m<u)return;m<f&&(f=m)}return u>0&&(i[0]=a+u*h,i[1]=o+u*d),f<1&&(t[0]=a+f*h,t[1]=o+f*d),!0}}}}}var fa=1e9,Gl=-fa;function Ku(i,t,e,n){function r(l,u){return i<=l&&l<=e&&t<=u&&u<=n}function s(l,u,f,h){var d=0,m=0;if(l==null||(d=a(l,f))!==(m=a(u,f))||c(l,u)<0^f>0)do h.point(d===0||d===3?i:e,d>1?n:t);while((d=(d+f+4)%4)!==m);else h.point(u[0],u[1])}function a(l,u){return le(l[0]-i)<se?u>0?0:3:le(l[0]-e)<se?u>0?2:1:le(l[1]-t)<se?u>0?1:0:u>0?3:2}function o(l,u){return c(l.x,u.x)}function c(l,u){var f=a(l,1),h=a(u,1);return f!==h?f-h:f===0?u[1]-l[1]:f===1?l[0]-u[0]:f===2?l[1]-u[1]:u[0]-l[0]}return function(l){var u=l,f=Bl(),h,d,m,S,g,p,E,T,y,M,w,P={point:v,lineStart:B,lineEnd:k,polygonStart:R,polygonEnd:L};function v(I,G){r(I,G)&&u.point(I,G)}function b(){for(var I=0,G=0,W=d.length;G<W;++G)for(var rt=d[G],Z=1,et=rt.length,nt=rt[0],wt,xt,ee=nt[0],zt=nt[1];Z<et;++Z)wt=ee,xt=zt,nt=rt[Z],ee=nt[0],zt=nt[1],xt<=n?zt>n&&(ee-wt)*(n-xt)>(zt-xt)*(i-wt)&&++I:zt<=n&&(ee-wt)*(n-xt)<(zt-xt)*(i-wt)&&--I;return I}function R(){u=f,h=[],d=[],w=!0}function L(){var I=b(),G=w&&I,W=(h=qr(h)).length;(G||W)&&(l.polygonStart(),G&&(l.lineStart(),s(null,null,1,l),l.lineEnd()),W&&kl(h,o,I,s,l),l.polygonEnd()),u=l,h=d=m=null}function B(){P.point=N,d&&d.push(m=[]),M=!0,y=!1,E=T=NaN}function k(){h&&(N(S,g),p&&y&&f.rejoin(),h.push(f.result())),P.point=v,y&&u.lineEnd()}function N(I,G){var W=r(I,G);if(d&&m.push([I,G]),M)S=I,g=G,p=W,M=!1,W&&(u.lineStart(),u.point(I,G));else if(W&&y)u.point(I,G);else{var rt=[E=Math.max(Gl,Math.min(fa,E)),T=Math.max(Gl,Math.min(fa,T))],Z=[I=Math.max(Gl,Math.min(fa,I)),G=Math.max(Gl,Math.min(fa,G))];Jd(rt,Z,i,t,e,n)?(y||(u.lineStart(),u.point(rt[0],rt[1])),u.point(Z[0],Z[1]),W||u.lineEnd(),w=!1):W&&(u.lineStart(),u.point(I,G),w=!1)}E=I,T=G,y=W}return P}}var ju,Qu,Hl,Wl,Jr={sphere:_e,point:_e,lineStart:Gv,lineEnd:_e,polygonStart:_e,polygonEnd:_e};function Gv(){Jr.point=Wv,Jr.lineEnd=Hv}function Hv(){Jr.point=Jr.lineEnd=_e}function Wv(i,t){i*=oe,t*=oe,Qu=i,Hl=Xt(t),Wl=$t(t),Jr.point=Xv}function Xv(i,t){i*=oe,t*=oe;var e=Xt(t),n=$t(t),r=le(i-Qu),s=$t(r),a=Xt(r),o=n*a,c=Wl*e-Hl*n*s,l=Hl*e+Wl*n*s;ju.add(nn(He(o*o+c*c),l)),Qu=i,Hl=e,Wl=n}function Kd(i){return ju=new Le,Rn(i,Jr),+ju}var th=[null,null],qv={type:"LineString",coordinates:th};function Xl(i,t){return th[0]=i,th[1]=t,Kd(qv)}function ql(i,t){var e=i[0]*oe,n=i[1]*oe,r=t[0]*oe,s=t[1]*oe,a=$t(n),o=Xt(n),c=$t(s),l=Xt(s),u=a*$t(e),f=a*Xt(e),h=c*$t(r),d=c*Xt(r),m=2*Hn(He(Gu(s-n)+a*c*Gu(r-e))),S=Xt(m),g=m?function(p){var E=Xt(p*=m)/S,T=Xt(m-p)/S,y=T*u+E*h,M=T*f+E*d,w=T*o+E*l;return[nn(M,y)*Je,nn(w,He(y*y+M*M))*Je]}:function(){return[e*Je,n*Je]};return g.distance=m,g}var da=i=>i;var eh=new Le,nh=new Le,jd,Qd,ih,rh,Fi={point:_e,lineStart:_e,lineEnd:_e,polygonStart:function(){Fi.lineStart=Yv,Fi.lineEnd=Zv},polygonEnd:function(){Fi.lineStart=Fi.lineEnd=Fi.point=_e,eh.add(le(nh)),nh=new Le},result:function(){var i=eh/2;return eh=new Le,i}};function Yv(){Fi.point=$v}function $v(i,t){Fi.point=tp,jd=ih=i,Qd=rh=t}function tp(i,t){nh.add(rh*i-ih*t),ih=i,rh=t}function Zv(){tp(jd,Qd)}var sh=Fi;var Kr=1/0,Yl=Kr,pa=-Kr,$l=pa,Jv={point:Kv,lineStart:_e,lineEnd:_e,polygonStart:_e,polygonEnd:_e,result:function(){var i=[[Kr,Yl],[pa,$l]];return pa=$l=-(Yl=Kr=1/0),i}};function Kv(i,t){i<Kr&&(Kr=i),i>pa&&(pa=i),t<Yl&&(Yl=t),t>$l&&($l=t)}var jr=Jv;var ah=0,oh=0,ma=0,Zl=0,Jl=0,Qr=0,lh=0,ch=0,ga=0,ip,rp,si,ai,Wn={point:Qi,lineStart:ep,lineEnd:np,polygonStart:function(){Wn.lineStart=ty,Wn.lineEnd=ey},polygonEnd:function(){Wn.point=Qi,Wn.lineStart=ep,Wn.lineEnd=np},result:function(){var i=ga?[lh/ga,ch/ga]:Qr?[Zl/Qr,Jl/Qr]:ma?[ah/ma,oh/ma]:[NaN,NaN];return ah=oh=ma=Zl=Jl=Qr=lh=ch=ga=0,i}};function Qi(i,t){ah+=i,oh+=t,++ma}function ep(){Wn.point=jv}function jv(i,t){Wn.point=Qv,Qi(si=i,ai=t)}function Qv(i,t){var e=i-si,n=t-ai,r=He(e*e+n*n);Zl+=r*(si+i)/2,Jl+=r*(ai+t)/2,Qr+=r,Qi(si=i,ai=t)}function np(){Wn.point=Qi}function ty(){Wn.point=ny}function ey(){sp(ip,rp)}function ny(i,t){Wn.point=sp,Qi(ip=si=i,rp=ai=t)}function sp(i,t){var e=i-si,n=t-ai,r=He(e*e+n*n);Zl+=r*(si+i)/2,Jl+=r*(ai+t)/2,Qr+=r,r=ai*i-si*t,lh+=r*(si+i),ch+=r*(ai+t),ga+=r*3,Qi(si=i,ai=t)}var uh=Wn;function Kl(i){this._context=i}Kl.prototype={_radius:4.5,pointRadius:function(i){return this._radius=i,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(i,t){switch(this._point){case 0:{this._context.moveTo(i,t),this._point=1;break}case 1:{this._context.lineTo(i,t);break}default:{this._context.moveTo(i+this._radius,t),this._context.arc(i,t,this._radius,0,Be);break}}},result:_e};var fh=new Le,hh,ap,op,_a,xa,jl={point:_e,lineStart:function(){jl.point=iy},lineEnd:function(){hh&&lp(ap,op),jl.point=_e},polygonStart:function(){hh=!0},polygonEnd:function(){hh=null},result:function(){var i=+fh;return fh=new Le,i}};function iy(i,t){jl.point=lp,ap=_a=i,op=xa=t}function lp(i,t){_a-=i,xa-=t,fh.add(He(_a*_a+xa*xa)),_a=i,xa=t}var dh=jl;var cp,Ql,up,hp,ts=class{constructor(t){this._append=t==null?fp:ry(t),this._radius=4.5,this._=""}pointRadius(t){return this._radius=+t,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(t,e){switch(this._point){case 0:{this._append`M${t},${e}`,this._point=1;break}case 1:{this._append`L${t},${e}`;break}default:{if(this._append`M${t},${e}`,this._radius!==up||this._append!==Ql){let n=this._radius,r=this._;this._="",this._append`m0,${n}a${n},${n} 0 1,1 0,${-2*n}a${n},${n} 0 1,1 0,${2*n}z`,up=n,Ql=this._append,hp=this._,this._=r}this._+=hp;break}}}result(){let t=this._;return this._="",t.length?t:null}};function fp(i){let t=1;this._+=i[0];for(let e=i.length;t<e;++t)this._+=arguments[t]+i[t]}function ry(i){let t=Math.floor(i);if(!(t>=0))throw new RangeError(`invalid digits: ${i}`);if(t>15)return fp;if(t!==cp){let e=10**t;cp=t,Ql=function(r){let s=1;this._+=r[0];for(let a=r.length;s<a;++s)this._+=Math.round(arguments[s]*e)/e+r[s]}}return Ql}function ph(i,t){let e=3,n=4.5,r,s;function a(o){return o&&(typeof n=="function"&&s.pointRadius(+n.apply(this,arguments)),Rn(o,r(s))),s.result()}return a.area=function(o){return Rn(o,r(sh)),sh.result()},a.measure=function(o){return Rn(o,r(dh)),dh.result()},a.bounds=function(o){return Rn(o,r(jr)),jr.result()},a.centroid=function(o){return Rn(o,r(uh)),uh.result()},a.projection=function(o){return arguments.length?(r=o==null?(i=null,da):(i=o).stream,a):i},a.context=function(o){return arguments.length?(s=o==null?(t=null,new ts(e)):new Kl(t=o),typeof n!="function"&&s.pointRadius(n),a):t},a.pointRadius=function(o){return arguments.length?(n=typeof o=="function"?o:(s.pointRadius(+o),+o),a):n},a.digits=function(o){if(!arguments.length)return e;if(o==null)e=null;else{let c=Math.floor(o);if(!(c>=0))throw new RangeError(`invalid digits: ${o}`);e=c}return t===null&&(s=new ts(e)),a},a.projection(i).digits(e).context(t)}function gh(i){return{stream:es(i)}}function es(i){return function(t){var e=new mh;for(var n in i)e[n]=i[n];return e.stream=t,e}}function mh(){}mh.prototype={constructor:mh,point:function(i,t){this.stream.point(i,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function _h(i,t,e){var n=i.clipExtent&&i.clipExtent();return i.scale(150).translate([0,0]),n!=null&&i.clipExtent(null),Rn(e,i.stream(jr)),t(jr.result()),n!=null&&i.clipExtent(n),i}function xh(i,t,e){return _h(i,function(n){var r=t[1][0]-t[0][0],s=t[1][1]-t[0][1],a=Math.min(r/(n[1][0]-n[0][0]),s/(n[1][1]-n[0][1])),o=+t[0][0]+(r-a*(n[1][0]+n[0][0]))/2,c=+t[0][1]+(s-a*(n[1][1]+n[0][1]))/2;i.scale(150*a).translate([o,c])},e)}function dp(i,t,e){return xh(i,[[0,0],t],e)}function pp(i,t,e){return _h(i,function(n){var r=+t,s=r/(n[1][0]-n[0][0]),a=(r-s*(n[1][0]+n[0][0]))/2,o=-s*n[0][1];i.scale(150*s).translate([a,o])},e)}function mp(i,t,e){return _h(i,function(n){var r=+t,s=r/(n[1][1]-n[0][1]),a=-s*n[0][0],o=(r-s*(n[1][1]+n[0][1]))/2;i.scale(150*s).translate([a,o])},e)}var gp=16,sy=$t(30*oe);function vh(i,t){return+t?oy(i,t):ay(i)}function ay(i){return es({point:function(t,e){t=i(t,e),this.stream.point(t[0],t[1])}})}function oy(i,t){function e(n,r,s,a,o,c,l,u,f,h,d,m,S,g){var p=l-n,E=u-r,T=p*p+E*E;if(T>4*t&&S--){var y=a+h,M=o+d,w=c+m,P=He(y*y+M*M+w*w),v=Hn(w/=P),b=le(le(w)-1)<se||le(s-f)<se?(s+f)/2:nn(M,y),R=i(b,v),L=R[0],B=R[1],k=L-n,N=B-r,I=E*k-p*N;(I*I/T>t||le((p*k+E*N)/T-.5)>.3||a*h+o*d+c*m<sy)&&(e(n,r,s,a,o,c,L,B,b,y/=P,M/=P,w,S,g),g.point(L,B),e(L,B,b,y,M,w,l,u,f,h,d,m,S,g))}}return function(n){var r,s,a,o,c,l,u,f,h,d,m,S,g={point:p,lineStart:E,lineEnd:y,polygonStart:function(){n.polygonStart(),g.lineStart=M},polygonEnd:function(){n.polygonEnd(),g.lineStart=E}};function p(v,b){v=i(v,b),n.point(v[0],v[1])}function E(){f=NaN,g.point=T,n.lineStart()}function T(v,b){var R=ri([v,b]),L=i(v,b);e(f,h,u,d,m,S,f=L[0],h=L[1],u=v,d=R[0],m=R[1],S=R[2],gp,n),n.point(f,h)}function y(){g.point=p,n.lineEnd()}function M(){E(),g.point=w,g.lineEnd=P}function w(v,b){T(r=v,b),s=f,a=h,o=d,c=m,l=S,g.point=T}function P(){e(f,h,u,d,m,S,s,a,r,o,c,l,gp,n),g.lineEnd=y,y()}return g}}var ly=es({point:function(i,t){this.stream.point(i*oe,t*oe)}});function cy(i){return es({point:function(t,e){var n=i(t,e);return this.stream.point(n[0],n[1])}})}function uy(i,t,e,n,r){function s(a,o){return a*=n,o*=r,[t+i*a,e-i*o]}return s.invert=function(a,o){return[(a-t)/i*n,(e-o)/i*r]},s}function _p(i,t,e,n,r,s){if(!s)return uy(i,t,e,n,r);var a=$t(s),o=Xt(s),c=a*i,l=o*i,u=a/i,f=o/i,h=(o*e-a*t)/i,d=(o*t+a*e)/i;function m(S,g){return S*=n,g*=r,[c*S-l*g+t,e-l*S-c*g]}return m.invert=function(S,g){return[n*(u*S-f*g+h),r*(d-f*S-u*g)]},m}function yh(i){return hy(function(){return i})()}function hy(i){var t,e=150,n=480,r=250,s=0,a=0,o=0,c=0,l=0,u,f=0,h=1,d=1,m=null,S=Ju,g=null,p,E,T,y=da,M=.5,w,P,v,b,R;function L(I){return v(I[0]*oe,I[1]*oe)}function B(I){return I=v.invert(I[0],I[1]),I&&[I[0]*Je,I[1]*Je]}L.stream=function(I){return b&&R===I?b:b=ly(cy(u)(S(w(y(R=I)))))},L.preclip=function(I){return arguments.length?(S=I,m=void 0,N()):S},L.postclip=function(I){return arguments.length?(y=I,g=p=E=T=null,N()):y},L.clipAngle=function(I){return arguments.length?(S=+I?Zd(m=I*oe):(m=null,Ju),N()):m*Je},L.clipExtent=function(I){return arguments.length?(y=I==null?(g=p=E=T=null,da):Ku(g=+I[0][0],p=+I[0][1],E=+I[1][0],T=+I[1][1]),N()):g==null?null:[[g,p],[E,T]]},L.scale=function(I){return arguments.length?(e=+I,k()):e},L.translate=function(I){return arguments.length?(n=+I[0],r=+I[1],k()):[n,r]},L.center=function(I){return arguments.length?(s=I[0]%360*oe,a=I[1]%360*oe,k()):[s*Je,a*Je]},L.rotate=function(I){return arguments.length?(o=I[0]%360*oe,c=I[1]%360*oe,l=I.length>2?I[2]%360*oe:0,k()):[o*Je,c*Je,l*Je]},L.angle=function(I){return arguments.length?(f=I%360*oe,k()):f*Je},L.reflectX=function(I){return arguments.length?(h=I?-1:1,k()):h<0},L.reflectY=function(I){return arguments.length?(d=I?-1:1,k()):d<0},L.precision=function(I){return arguments.length?(w=vh(P,M=I*I),N()):He(M)},L.fitExtent=function(I,G){return xh(L,I,G)},L.fitSize=function(I,G){return dp(L,I,G)},L.fitWidth=function(I,G){return pp(L,I,G)},L.fitHeight=function(I,G){return mp(L,I,G)};function k(){var I=_p(e,0,0,h,d,f).apply(null,t(s,a)),G=_p(e,n-I[0],r-I[1],h,d,f);return u=Wd(o,c,l),P=ha(t,G),v=ha(u,P),w=vh(P,M),N()}function N(){return b=R=null,L}return function(){return t=i.apply(this,arguments),L.invert=t.invert&&B,k()}}function tc(i,t){return[i,t]}tc.invert=tc;function Sh(){return yh(tc).scale(152.63)}function Mh(i){return i}function ec(i){if(i==null)return Mh;var t,e,n=i.scale[0],r=i.scale[1],s=i.translate[0],a=i.translate[1];return function(o,c){c||(t=e=0);var l=2,u=o.length,f=new Array(u);for(f[0]=(t+=o[0])*n+s,f[1]=(e+=o[1])*r+a;l<u;)f[l]=o[l],++l;return f}}function xp(i,t){for(var e,n=i.length,r=n-t;r<--n;)e=i[r],i[r++]=i[n],i[n]=e}function Xn(i,t){return typeof t=="string"&&(t=i.objects[t]),t.type==="GeometryCollection"?{type:"FeatureCollection",features:t.geometries.map(function(e){return vp(i,e)})}:vp(i,t)}function vp(i,t){var e=t.id,n=t.bbox,r=t.properties==null?{}:t.properties,s=nc(i,t);return e==null&&n==null?{type:"Feature",properties:r,geometry:s}:n==null?{type:"Feature",id:e,properties:r,geometry:s}:{type:"Feature",id:e,bbox:n,properties:r,geometry:s}}function nc(i,t){var e=ec(i.transform),n=i.arcs;function r(u,f){f.length&&f.pop();for(var h=n[u<0?~u:u],d=0,m=h.length;d<m;++d)f.push(e(h[d],d));u<0&&xp(f,m)}function s(u){return e(u)}function a(u){for(var f=[],h=0,d=u.length;h<d;++h)r(u[h],f);return f.length<2&&f.push(f[0]),f}function o(u){for(var f=a(u);f.length<4;)f.push(f[0]);return f}function c(u){return u.map(o)}function l(u){var f=u.type,h;switch(f){case"GeometryCollection":return{type:f,geometries:u.geometries.map(l)};case"Point":h=s(u.coordinates);break;case"MultiPoint":h=u.coordinates.map(s);break;case"LineString":h=a(u.arcs);break;case"MultiLineString":h=u.arcs.map(a);break;case"Polygon":h=c(u.arcs);break;case"MultiPolygon":h=u.arcs.map(c);break;default:return null}return{type:f,coordinates:h}}return l(t)}function bh(i,t){var e={},n={},r={},s=[],a=-1;t.forEach(function(l,u){var f=i.arcs[l<0?~l:l],h;f.length<3&&!f[1][0]&&!f[1][1]&&(h=t[++a],t[a]=l,t[u]=h)}),t.forEach(function(l){var u=o(l),f=u[0],h=u[1],d,m;if(d=r[f])if(delete r[d.end],d.push(l),d.end=h,m=n[h]){delete n[m.start];var S=m===d?d:d.concat(m);n[S.start=d.start]=r[S.end=m.end]=S}else n[d.start]=r[d.end]=d;else if(d=n[h])if(delete n[d.start],d.unshift(l),d.start=f,m=r[f]){delete r[m.end];var g=m===d?d:m.concat(d);n[g.start=m.start]=r[g.end=d.end]=g}else n[d.start]=r[d.end]=d;else d=[l],n[d.start=f]=r[d.end=h]=d});function o(l){var u=i.arcs[l<0?~l:l],f=u[0],h;return i.transform?(h=[0,0],u.forEach(function(d){h[0]+=d[0],h[1]+=d[1]})):h=u[u.length-1],l<0?[h,f]:[f,h]}function c(l,u){for(var f in l){var h=l[f];delete u[h.start],delete h.start,delete h.end,h.forEach(function(d){e[d<0?~d:d]=1}),s.push(h)}}return c(r,n),c(n,r),t.forEach(function(l){e[l<0?~l:l]||s.push([l])}),s}function ic(i){return nc(i,yp.apply(this,arguments))}function yp(i,t,e){var n,r,s;if(arguments.length>1)n=fy(i,t,e);else for(r=0,n=new Array(s=i.arcs.length);r<s;++r)n[r]=r;return{type:"MultiLineString",arcs:bh(i,n)}}function fy(i,t,e){var n=[],r=[],s;function a(f){var h=f<0?~f:f;(r[h]||(r[h]=[])).push({i:f,g:s})}function o(f){f.forEach(a)}function c(f){f.forEach(o)}function l(f){f.forEach(c)}function u(f){switch(s=f,f.type){case"GeometryCollection":f.geometries.forEach(u);break;case"LineString":o(f.arcs);break;case"MultiLineString":case"Polygon":c(f.arcs);break;case"MultiPolygon":l(f.arcs);break}}return u(t),r.forEach(e==null?function(f){n.push(f[0].i)}:function(f){e(f[0].g,f[f.length-1].g)&&n.push(f[0].i)}),n}var rc=Math.PI/180,is=i=>{let[t,e,n]=i.split("-").map(Number);return Date.UTC(t,e-1,n)/864e5},bn={land:"#2a303d",soviet:"#9b2c35",bloc:"#6e3a3c",west:"#2d4a6e",neutral:"#4b5160",focus:"#a084ee"},my=.72,gy="#151925",Sp=(i,t,e,n,r=.382)=>{i.beginPath();for(let s=0;s<10;s++){let a=-Math.PI/2+s*Math.PI/5,o=s%2?n*r:n;i.lineTo(t+Math.cos(a)*o,e+Math.sin(a)*o)}i.closePath()},_y={us:{aspect:1.9,at:[52.455,13.255,.2,.27],draw(i,t,e,n,r,s){for(let u=0;u<13;u++)i.fillStyle=u%2?"#ffffff":"#b22234",i.fillRect(t,e+u*r/13,n,r/13+.5);let a=.76*r,o=7*r/13,c=.0308*r;i.fillStyle="#3c3b6e",i.fillRect(t,e,a,o),i.fillStyle="#ffffff";let l=s<"1959-07-04"?Array(6).fill(8):s<"1960-07-04"?Array(7).fill(7):[6,5,6,5,6,5,6,5,6];l.forEach((u,f)=>{let h=l.length===9&&f%2,d=l.length===9?6:u;for(let m=0;m<u;m++)Sp(i,t+a*((m+(h?1:.5))/d),e+o*(f+.5)/l.length,c),i.fill()})}},uk:{aspect:2,at:[52.51,13.2,.5,.5],draw(i,t,e,n,r){let s=r/30;i.fillStyle="#012169",i.fillRect(t,e,n,r),i.save(),i.beginPath(),i.rect(t,e,n,r),i.clip(),i.lineCap="butt";for(let[a,o]of[[6*s,"#ffffff"],[2*s,"#c8102e"]])i.strokeStyle=o,i.lineWidth=a,i.beginPath(),i.moveTo(t,e),i.lineTo(t+n,e+r),i.moveTo(t+n,e),i.lineTo(t,e+r),i.stroke();i.restore();for(let[a,o]of[[10*s,"#ffffff"],[6*s,"#c8102e"]])i.fillStyle=o,i.fillRect(t+n/2-a/2,e,a,r),i.fillRect(t,e+r/2-a/2,n,a)}},fr:{aspect:1.5,at:[52.585,13.31,.5,.5],draw(i,t,e,n,r){["#0055a4","#ffffff","#ef4135"].forEach((s,a)=>{i.fillStyle=s,i.fillRect(t+a*n/3,e,n/3+.5,r)})}},su:{aspect:2,at:[52.53,13.475,.135,.3],draw(i,t,e,n,r){i.fillStyle="#cc0000",i.fillRect(t,e,n,r);let s=.24*r,a=t+.27*r,o=e+.36*r,c="#ffd700";i.strokeStyle=c,i.lineWidth=.014*r,i.lineJoin="miter",Sp(i,a,e+.12*r,.065*r),i.stroke(),i.lineCap="round",i.lineWidth=.09*s,i.beginPath(),i.arc(a+.04*s,o-.04*s,.4*s,.75*Math.PI,-.8*Math.PI,!0),i.stroke(),i.beginPath(),i.moveTo(a-.24*s,o+.24*s),i.lineTo(a-.42*s,o+.42*s),i.stroke(),i.beginPath(),i.moveTo(a-.36*s,o+.36*s),i.lineTo(a+.16*s,o-.16*s),i.stroke(),i.lineWidth=.15*s,i.lineCap="butt",i.beginPath(),i.moveTo(a+.06*s,o-.3*s),i.lineTo(a+.3*s,o-.06*s),i.stroke()}}},xy={us:[52.43,13.36,"AMERICAN SECTOR"],uk:[52.49,13.19,"BRITISH SECTOR"],fr:[52.6,13.31,"FRENCH SECTOR"],su:[52.47,13.52,"SOVIET SECTOR"]},vy={focus:.62,soviet:.82,bloc:.8,west:.85,neutral:.8},yy="rgba(44, 52, 70, 0.996)",Sy="rgba(76, 122, 172, 0.996)",My=i=>{let t=parseInt(i.slice(1),16),e=n=>Math.round(n+(255-n)*.38);return`rgb(${e(t>>16)},${e(t>>8&255)},${e(t&255)})`},by="1961-08-13",Mp="1989-11-09",wy="1951-02-01",Ey=i=>Fl(i)>2*Math.PI?{type:"Polygon",coordinates:i.coordinates.map(t=>t.slice().reverse())}:i,ns=i=>{let t=i.geometry;if(!t)return i;let e=n=>Fl({type:"Polygon",coordinates:n})>2*Math.PI?n.map(r=>r.slice().reverse()):n;return t.type==="Polygon"?i.geometry={type:"Polygon",coordinates:e(t.coordinates)}:t.type==="MultiPolygon"&&(i.geometry={type:"MultiPolygon",coordinates:t.coordinates.map(e)}),i};function bp(i){let t=i.objects.cshapes||i.objects.countries,e=Xn(i,t).features.map(s=>ns({...s,from:s.properties.from?is(s.properties.from):-1/0,to:s.properties.to?is(s.properties.to):1/0})),n=i.objects.sectors?{sectors:Xn(i,i.objects.sectors).features.map(ns),wall:Xn(i,i.objects.wall).features,strip:Xn(i,i.objects.strip).features.map(ns),staaken:i.objects.staaken?Xn(i,i.objects.staaken).features.map(ns):[]}:null,r=i.objects.rivers?{rivers:Xn(i,i.objects.rivers).features,lakes:Xn(i,i.objects.lakes).features.map(ns),deep:Xn(i,i.objects.deep).features.map(ns),box:[-26,33,50,72]}:null;return{countries:e,land:Xn(i,i.objects.land),berlin:n,water:r}}var wh=(i,t)=>{let e=is(t==="modern"||!t?"2000-01-01":t);return i.filter(n=>n.from<=e&&e<n.to)};function Ay(i,t,e,n=[-180,-90,180,90],r=0){let s=i.getContext("2d"),a=i.width,o=i.height;s.setTransform(1,0,0,-1,0,o);let c=n[2]-n[0]>=360,l=a/((n[2]-n[0])*rc),u=a/(n[2]-n[0]),f=o/(n[3]-n[1]),h=c?Sh().scale(l).translate([-l*n[0]*rc,l*n[3]*rc]).precision(.1):gh({point(b,R){this.stream.point((b-n[0])*u,(n[3]-R)*f)}}),d=ph(h,s),m=e.fill||{},S=e.borders,g=wh(t.countries,S),p=(n[2]-n[0])*111.32*Math.cos((n[1]+n[3])/2*rc)/a,E=c?0:r||.55,T=!c&&t.water,y=p<.05?11:p<.15?9:p<.4?7:p<1?6:p<2.5?5:4;s.clearRect(0,0,a,o);let M=T&&T.box;if(T&&n[0]<M[2]&&n[2]>M[0]&&n[1]<M[3]&&n[3]>M[1]){let b=Math.max(0,(M[0]-n[0])*u),R=Math.min(a,(M[2]-n[0])*u),L=Math.max(0,(n[3]-M[3])*f),B=Math.min(o,(n[3]-M[1])*f);s.fillStyle=yy,s.fillRect(b,L,R-b,B-L),s.globalCompositeOperation="destination-out";for(let k of T.deep)s.beginPath(),d(k),s.fill("evenodd");s.globalCompositeOperation="source-over"}s.fillStyle=bn.land,s.beginPath(),d(t.land),s.fill("evenodd"),s.save(),s.clip("evenodd");let w=c?1.5:3;for(let b of g){let R=m[b.properties.key];if(!R)continue;let L=bn[R]||bn.land;s.globalAlpha=vy[R]??.8,s.fillStyle=L,s.beginPath(),d(b),s.fill(),s.save(),s.clip(),s.globalAlpha=.5,s.strokeStyle=My(L),s.lineWidth=w*2,s.lineJoin="round",s.stroke(),s.restore()}if(s.globalAlpha=1,e.city==="berlin"&&t.berlin)for(let b of t.berlin.sectors){let R=_y[b.properties.sector],[[L,B],[k,N]]=d.bounds(b),[I,G,W,rt]=R.at,Z=(G-n[0])*u,et=(n[3]-I)*f,nt=Math.max(k-L,(N-B)*R.aspect),wt=nt/R.aspect,xt=Math.min(L,Math.max(k-nt,Z-W*nt)),ee=Math.min(B,Math.max(N-wt,et-rt*wt)),zt=b.properties.sector==="uk"&&S>=wy?t.berlin.staaken:[];s.save(),s.beginPath(),d(b);for(let Qt of zt)d(Qt);s.clip("evenodd"),s.fillStyle=gy,s.fillRect(L,B,k-L,N-B),s.globalAlpha=my,R.draw(s,xt,ee,nt,wt,S),s.restore()}if(s.restore(),T){let b=T.lakes.filter(B=>B.properties.r<=y),R=T.rivers.filter(B=>B.properties.r<=y),L=()=>{for(let B of b)s.beginPath(),d(B),s.fill("evenodd");s.lineJoin=s.lineCap="round";for(let B of R){let k=B.properties.r;s.lineWidth=(k<=3?2.2:k<=6?1.6:k<=9?1.1:.8)/E,s.beginPath(),d(B),s.stroke()}};s.globalCompositeOperation="destination-out",L(),s.globalCompositeOperation="source-over",s.fillStyle=s.strokeStyle=Sy,L()}let P=e.focus||[];if(P.length){s.save(),s.strokeStyle=bn.focus,s.globalAlpha=.85,s.lineWidth=Math.max(1,a/2600),s.lineJoin="round";for(let b of g)P.includes(b.properties.key)&&(s.beginPath(),d(b),s.stroke());s.restore()}if(e.city==="berlin"&&t.berlin){if(S>=by){s.fillStyle="rgba(232, 226, 255, 0.34)";for(let b of t.berlin.strip)s.beginPath(),d(b),s.fill()}s.strokeStyle="rgba(255, 255, 255, 0.28)",s.lineWidth=Math.max(1,a/2400);for(let b of t.berlin.sectors)s.beginPath(),d(b),s.stroke();if(!c){s.textAlign="center",s.textBaseline="middle",s.fillStyle="rgba(255, 255, 255, 0.92)",s.shadowColor="rgba(6, 7, 12, 0.85)";for(let b of t.berlin.sectors){let[R,L,B]=xy[b.properties.sector],k=(L-n[0])*u,N=(n[3]-R)*f;if(k<0||k>a||N<0||N>o)continue;let[[I],[G]]=d.bounds(b),W=Math.min(12/E,.75*(G-I)/(.72*B.length));W*E<6||(s.font=`500 ${W.toFixed(1)}px "Plex Mono", ui-monospace, Menlo, monospace`,s.letterSpacing=`${(W*.12).toFixed(1)}px`,s.shadowBlur=W*.6,s.fillText(B,k,N))}s.letterSpacing="0px",s.shadowBlur=0,s.shadowColor="transparent"}}else if(n[2]-n[0]<360){let b=Math.max(4,Math.round(Math.max(a,o)/220));for(let R of g)(m[R.properties.key]==="focus"||P.includes(R.properties.key))&&(s.save(),s.beginPath(),d(R),s.clip(),s.globalCompositeOperation="lighter",s.filter=`blur(${b}px)`,s.globalAlpha=.35,s.strokeStyle=bn.focus,s.lineWidth=b*2,s.stroke(),s.restore())}for(let b of e.areas||[]){let R=b.points.map(([L,B])=>[B,L]);(R[0][0]!==R.at(-1)[0]||R[0][1]!==R.at(-1)[1])&&R.push(R[0]),s.fillStyle=bn[b.fill]||bn.west,s.beginPath(),d(Ey({type:"Polygon",coordinates:[R]})),s.fill()}}function Ty(i,t,e,n,r){let s=new Uint8Array(n*r*4),a=n/(e[2]-e[0]),o=r/(e[3]-e[1]),c=is(t==="modern"||!t?"2000-01-01":t);return i.countries.forEach((l,u)=>{if(!(l.from<=c&&c<l.to)||!l.geometry)return;let f=u+1,h=f&255,d=f>>8,m=l.geometry.type==="Polygon"?[l.geometry.coordinates]:l.geometry.type==="MultiPolygon"?l.geometry.coordinates:[];for(let S of m){let g=[],p=1/0,E=-1/0,T=1/0,y=-1/0;for(let R of S)for(let L=1;L<R.length;L++){let B=(R[L-1][0]-e[0])*a,k=(R[L-1][1]-e[1])*o,N=(R[L][0]-e[0])*a,I=(R[L][1]-e[1])*o;if(B<T&&(T=B),B>y&&(y=B),k===I)continue;let G=k<I?[k,I,B,(N-B)/(I-k)]:[I,k,N,(B-N)/(k-I)];g.push(G),G[0]<p&&(p=G[0]),G[1]>E&&(E=G[1])}if(!g.length||y<0||T>n||E<0||p>r)continue;g.sort((R,L)=>R[0]-L[0]);let M=Math.max(0,Math.ceil(p-.5)),w=Math.min(r-1,Math.floor(E-.5)),P=0,v=[],b=[];for(let R=M;R<=w;R++){let L=R+.5;for(;P<g.length&&g[P][0]<=L;)v.push(g[P++]);b.length=0;for(let k=v.length-1;k>=0;k--){let N=v[k];if(N[1]<=L){v[k]=v[v.length-1],v.pop();continue}N[0]<=L&&b.push(N[2]+(L-N[0])*N[3])}b.sort((k,N)=>k-N);let B=R*n*4;for(let k=0;k+1<b.length;k+=2){let N=Math.max(0,Math.ceil(b[k]-.5)),I=Math.min(n-1,Math.floor(b[k+1]-.5));for(let G=N;G<=I;G++){let W=B+G*4;s[W]=h,s[W+1]=d,s[W+3]=255}}}}}),s}function Eh(i,t,e){let n=performance.now();if(t.kind==="ids")return{ids:Ty(i,t.date,t.box,t.W,t.H),ms:performance.now()-n};let r=e(t.W,t.H);return Ay(r,i,t.map,t.box,t.css),{canvas:r,ms:performance.now()-n}}var Cy=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Ah={military:"#ff5a4f",people:"#ffd59a",pressure:"#c9b3ff",capital:"#7ef0c2",trade:"#9db7ff"},Ch={"iron-curtain":"#dfe6f2",wall:"#ffffff"},Ry=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wp={sequential:["#14243f","#1d4f6e","#1f8a7a","#58c48b","#e8d867","#f59e4c"],diverging:["#d9662f","#b5603d","#5b4a48","#3a3f4c","#3e5878","#3b78bf","#62a8f0"]},Ep={sequential:0,diverging:1},Py={NGDP_RPCH:[-8,8,"diverging"],PCPIPCH:[0,15,"sequential"],LUR:[0,20,"sequential"],BCA_NGDPD:[-10,10,"diverging"],GGXCNL_NGDP:[-12,12,"diverging"],GGXWDG_NGDP:[0,150,"sequential"],POLICY_RATE:[0,20,"sequential"],GINI:[25,60,"sequential"],CO2_PC:[0,20,"sequential"]},Iy=i=>[1,3,5].map(t=>parseInt(i.slice(t,t+2),16));function va(i){let[t,e,n]=i.domain?[...i.domain,i.scale||"sequential"]:Py[i.id]||[0,100,"sequential"],r=i.scale||n,s=wp[r].map(Iy);return{color:o=>{let c=Oe((o-t)/(e-t))*(s.length-1),l=Math.min(s.length-2,Math.floor(c)),u=c-l,f=s[l].map((h,d)=>Math.round(h+(s[l+1][d]-h)*u));return`rgb(${f[0]},${f[1]},${f[2]})`},d0:t,d1:e,kind:r,stops:wp[r]}}function rs(i,t,e){let n=i&&i[t.id];if(!n)return null;let r=n.values[e];if(!r)return null;if(n.months){let[a,o]=String(t.month||`${t.year}-12`).split("-").map(Number),[c,l]=n.months[0].split("-").map(Number),u=(a-c)*12+(o-l);for(;u>=0&&r[u]==null;)u--;return u>=0?r[u]:null}let s=t.year-n.years[0];if(n.latestOnly){for(;s>=0&&r[s]==null;)s--;return s>=0?r[s]:null}return r[s]??null}var Th=i=>(Math.abs(i)>=100?Math.round(i):+i.toFixed(1)).toLocaleString("en-GB"),Ap=(i,t)=>i&&t&&i.id===t.id&&String(i.domain)===String(t.domain)&&i.scale===t.scale,Tp=`
  varying vec3 vN; varying vec3 vW; varying vec2 vUv;
  void main() {
    vUv = uv; vN = normalize(mat3(modelMatrix) * normal);
    vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz;
    gl_Position = projectionMatrix * viewMatrix * w;
  }`,Ly=`
  uniform sampler2D uGA, uDA, uGB, uDB, uRelW, uRelE, uTA, uTB;
  uniform vec4 uBoxA, uBoxB, uRelBox;
#ifdef HAS_DATA
  uniform sampler2D uIGA, uIDA, uIGB, uIDB, uVal, uRamp;
#endif
  uniform vec4 uSlotA, uSlotB;      // x: value row (< 0: no data layer), y: d0, z: d1, w: ramp row
  uniform float uWA, uWB;           // inside each state, how far its values have moved towards the other state's row
  uniform float uMix, uHatch; uniform vec3 uLight, uOcean, uOceanLift, uRim, uFocus;
  varying vec3 vN; varying vec3 vW; varying vec2 vUv;
  vec2 lonlat() { return vec2(vUv.x * 360.0 - 180.0, vUv.y * 180.0 - 90.0); }
  vec3 lin(vec3 c) { return pow(c, vec3(2.2)); }
#ifdef HAS_DATA
  float idAt(sampler2D t, ivec2 p) { vec4 c = texelFetch(t, p, 0); return floor(c.r * 255.0 + 0.5) + 256.0 * floor(c.g * 255.0 + 0.5); }
  vec2 valAt(float row, float id) { return texelFetch(uVal, ivec2(int(id) - 1, int(row)), 0).rg; }
  vec3 rampAt(float v, vec4 slot) {
    float t = clamp((v - slot.y) / (slot.z - slot.y), 0.0, 1.0);
    return texture2D(uRamp, vec2((t * 255.0 + 0.5) / 256.0, (slot.w + 0.5) / 2.0)).rgb;
  }
  vec3 hatch() {
    float s = step(0.86, fract(dot(vW, vec3(0.71, 0.5, -0.5)) * uHatch));
    return lin(mix(vec3(0.153, 0.173, 0.216), vec3(0.235, 0.259, 0.31), s));
  }
  // colour of one country: its value in this state's row, blended towards the other row by w (same indicator only)
  vec4 dataOf(float id, vec4 own, vec4 other, float w) {
    vec2 a = valAt(own.x, id);
    vec2 b = other.x >= 0.0 && w > 0.0 ? valAt(other.x, id) : a;
    bool ha = a.r > -1e8, hb = b.r > -1e8;
    vec3 c = ha && hb ? rampAt(mix(a.r, b.r, w), own) : mix(ha ? rampAt(a.r, own) : hatch(), hb ? rampAt(b.r, own) : hatch(), w);
    return vec4(c, mix(a.g, b.g, w));
  }
  // four taps, coloured first and filtered after, so borders between colours stay smooth at any zoom
  vec4 dataTex(sampler2D t, vec2 uv, vec4 own, vec4 other, float w, out float cover) {
    vec2 size = vec2(textureSize(t, 0));
    vec2 tc = uv * size - 0.5; vec2 f = fract(tc); ivec2 i0 = ivec2(floor(tc)); ivec2 mx = ivec2(size) - 1;
    vec4 acc = vec4(0.0); cover = 0.0;
    for (int k = 0; k < 4; k++) {
      ivec2 o = ivec2(k & 1, k >> 1);
      float wt = (o.x == 1 ? f.x : 1.0 - f.x) * (o.y == 1 ? f.y : 1.0 - f.y);
      float id = idAt(t, clamp(i0 + o, ivec2(0), mx));
      if (id > 0.5) { acc += dataOf(id, own, other, w) * wt; cover += wt; }
    }
    return cover > 0.0 ? acc / cover : vec4(0.0);
  }
  // a state's data layer over its painted colour
  vec4 withData(vec4 col, sampler2D ig, sampler2D id, vec2 q, float inD, vec4 own, vec4 other, float w, out float focus) {
    focus = 0.0;
    if (own.x < 0.0) return col;
    float cg, cd = 0.0;
    vec4 dg = dataTex(ig, vUv, own, other, w, cg), dd = dg;
    if (inD > 0.0) dd = dataTex(id, q, own, other, w, cd);
    float cover = mix(cg, cd, inD); vec4 dat = mix(dg, dd, inD);
    focus = dat.a * cover;
    return vec4(mix(col.rgb, dat.rgb, cover), max(col.a, cover));
  }
#endif
  // a state = a world texture plus a sharp detail texture over a lon/lat box around the scene
  vec4 state(sampler2D g, sampler2D d, vec4 box, out vec2 q, out float inD) {
    vec4 col = texture2D(g, vUv);
    q = (lonlat() - box.xy) / (box.zw - box.xy);
    float e = min(min(q.x, 1.0 - q.x), min(q.y, 1.0 - q.y));
    inD = e > 0.0 ? smoothstep(0.0, 0.05, e) : 0.0;
    if (inD > 0.0) col = mix(col, texture2D(d, q), inD);
    return col;
  }
  // screen pixels across one texel of a texture sampled at uv (large when the camera is much closer than it was made for)
  float spread(vec2 uv, vec2 size) { vec2 t = uv * size; return 1.0 / max(1e-6, max(length(dFdx(t)), length(dFdy(t)))); }
  // shaded relief, faded to its mean where one of its texels would cover more than ~2\u20134 screen pixels: a
  // blurred blob reads as a smudge, not as terrain
  float relief() {
    vec2 q = (lonlat() - uRelBox.xy) / (uRelBox.zw - uRelBox.xy);
    float e = min(min(q.x, 1.0 - q.x), min(q.y, 1.0 - q.y));
    float w = texture2D(uRelW, vUv).r;
    float r = e > 0.0 ? mix(w, texture2D(uRelE, q).r, smoothstep(0.0, 0.04, e)) : w;
    // the image's mean (its 1 \xD7 1 mip), so fading out flattens the terrain without changing the overall brightness
    float avg = e > 0.0 ? textureLod(uRelE, q, 12.0).r : textureLod(uRelW, vUv, 12.0).r;
    float px = e > 0.0 ? spread(q, vec2(textureSize(uRelE, 0))) : spread(vUv, vec2(textureSize(uRelW, 0)));
    return mix(r, avg, smoothstep(1.5, 4.0, px));
  }
  // the state's own shaded terrain (Copernicus DEM tiles) where it has some, else the base relief. Like the base relief it
  // fades out where one of its texels would cover more than a few screen pixels, and towards the edges of its box
  float terrain(sampler2D t, vec4 box, float base) {
    vec2 q = (lonlat() - box.xy) / (box.zw - box.xy);
    float e = min(min(q.x, 1.0 - q.x), min(q.y, 1.0 - q.y));
    if (e <= 0.0) return base;
    vec4 c = texture2D(t, q);
    float r = mix(c.r, 0.75, smoothstep(2.0, 5.0, spread(q, vec2(textureSize(t, 0)))));
    return mix(base, r, c.a * smoothstep(0.0, 0.03, e));
  }
  void main() {
    float fa = 0.0, fb = 0.0, ia, ib; vec2 qa, qb;
    vec4 a = state(uGA, uDA, uBoxA, qa, ia);
    vec4 b = uMix > 0.0 ? state(uGB, uDB, uBoxB, qb, ib) : a;
#ifdef HAS_DATA
    a = withData(a, uIGA, uIDA, qa, ia, uSlotA, uSlotB, uWA, fa);
    if (uMix > 0.0) b = withData(b, uIGB, uIDB, qb, ib, uSlotB, uSlotA, uWB, fb); else b = a;
#endif
    if (uMix <= 0.0) fb = fa;
    vec4 land = mix(a, b, uMix);
    float focus = mix(fa, fb, uMix);
    vec3 n = normalize(vN), v = normalize(cameraPosition - vW);
    float lit = 0.42 + 0.58 * smoothstep(-0.35, 0.9, dot(n, normalize(uLight)));
    float base = relief();
    float rel = mix(terrain(uTA, uBoxA, base), terrain(uTB, uBoxB, base), uMix);
    float shade = clamp(0.2 + 0.93 * rel, 0.48, 1.24);
    float rim = pow(1.0 - max(dot(n, v), 0.0), 3.0);
    vec3 ocean = mix(uOcean, uOceanLift, 0.5 + 0.5 * n.y) * (0.75 + 0.25 * lit);
    vec3 lc = land.rgb * (1.0 + 0.28 * focus) + uFocus * 0.06 * focus;
    // land (alpha 255) takes the terrain shading; painted water (shelf, lakes, rivers: alpha 254) is lit by the globe only
    float water = step(0.5, land.a) * (1.0 - smoothstep(0.9965, 0.999, land.a));
    vec3 col = mix(ocean, mix(lc * lit * shade, land.rgb * (0.8 + 0.2 * lit), water), clamp(land.a / 0.996, 0.0, 1.0));
    // a fine film grain on land, one device pixel per grain, so large fills read as a surface and not as plastic
    float grain = fract(sin(dot(floor(gl_FragCoord.xy), vec2(12.9898, 78.233))) * 43758.5453);
    col *= 1.0 + (grain - 0.5) * 0.05 * land.a;
    col += uRim * rim * 0.55;
    gl_FragColor = vec4(col, 1.0);
  }`,Dy=`
  uniform vec3 uRim; varying vec3 vN; varying vec3 vW;
  void main() {
    vec3 n = normalize(vN), v = normalize(cameraPosition - vW);
    float f = pow(clamp(1.0 - abs(dot(n, v)), 0.0, 1.0), 2.4);
    gl_FragColor = vec4(uRim, f * 0.9);
  }`,Uy=`
  varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Ny=`
  uniform vec3 uColor; uniform float uDraw, uOpacity, uDash, uTime; varying vec2 vUv;
  void main() {
    if (vUv.x > uDraw) discard;
    if (uDash > 0.0 && fract(vUv.x * uDash - uTime * 0.15) < 0.38) discard;
    float head = smoothstep(uDraw - 0.12, uDraw, vUv.x);
    gl_FragColor = vec4(uColor * (1.0 + head * 0.6), uOpacity * (0.8 + 0.45 * head));
  }`;function Fy(i,t=1.0015){let e=[];for(let r of i)for(let s=1;s<r.length;s++){let a=r[s-1],o=r[s];if(Math.abs(a[0]-o[0])>180)continue;let c=en(a[1],a[0],t),l=en(o[1],o[0],t);e.push(c.x,c.y,c.z,l.x,l.y,l.z)}let n=new Ie;return n.setAttribute("position",new ge(e,3)),n}var Cp=(i,t,e)=>{let n=Fy(i,1).getAttribute("position").array,r=new Wr({color:t,linewidth:e,transparent:!0,opacity:0,depthWrite:!1,worldUnits:!1}),s=new Dl(new Hr().setPositions(n),r);return s.frustumCulled=!1,s},Oy=i=>{let t=i.geometry;return t?(t.type==="Polygon"?[t.coordinates]:t.type==="MultiPolygon"?t.coordinates:[]).flat():[]};function By(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n];if(!n){e.push(en(r[0],r[1],t));continue}let s=i[n-1],a=ql([s[1],s[0]],[r[1],r[0]]),o=Math.max(1,Math.ceil(Xl([s[1],s[0]],[r[1],r[0]])/.002));for(let c=1;c<=o;c++){let[l,u]=a(c/o);e.push(en(u,l,t))}}return e}var Rh=(i,t=0)=>new Ae({uniforms:{uColor:{value:new qt(i)},uDraw:{value:0},uOpacity:{value:0},uDash:{value:t},uTime:{value:0}},vertexShader:Uy,fragmentShader:Ny,transparent:!0,depthWrite:!1,blending:Fr});function Rp(i,t,e,n){let r=[i[1],i[0]],s=[t[1],t[0]],a=ql(r,s),o=Xl(r,s),c=Oe(o*.22,2e-5,.07),l=[];for(let g=0;g<=48;g++){let p=g/48,[E,T]=a(p);l.push(en(T,E,1.002+Math.sin(Math.PI*p)*c))}let u=Oe(n/mi*.0032,6e-5,.004),f=new Ci(l),h=Rh(e),d=new Me(new qi(f,96,u,6,!1),h),m=new Me(new Fs(u*3.2,u*9,10),new Ai({color:e,transparent:!0,opacity:0,depthWrite:!1}));m.position.copy(f.getPointAt(1)),m.quaternion.copy(new vn().setFromUnitVectors(new O(0,1,0),f.getTangentAt(1)));let S=new Fn;return S.add(d,m),S.userData={mat:h,head:m},S}var zy=`
  varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,ky=`
  uniform vec3 uColor; uniform float uDraw, uOpacity, uDash, uTime; varying vec2 vUv;
  void main() {
    if (vUv.x > uDraw) discard;
    if (uDash > 0.0 && fract(vUv.x * uDash - uTime * 0.15) < 0.38) discard;
    float h = vUv.y;
    vec3 c = uColor * (0.45 + 0.55 * h) + vec3(0.35) * smoothstep(0.82, 1.0, h);
    gl_FragColor = vec4(c, uOpacity * (0.7 + 0.3 * h));
  }`;function Vy(i,t,e,n){let r=[],s=[],a=[];for(let u of i){if(u.properties.kind!==t||!u.geometry)continue;let f=u.geometry.type==="LineString"?[u.geometry.coordinates]:u.geometry.type==="MultiLineString"?u.geometry.coordinates:[];for(let h of f){if(h.length<2)continue;let d=[0];for(let g=1;g<h.length;g++)d.push(d[g-1]+Math.hypot((h[g][0]-h[g-1][0])*.61,h[g][1]-h[g-1][1]));let m=d.at(-1)||1,S=r.length/3;h.forEach(([g,p],E)=>{let T=en(p,g,1.000002),y=en(p,g,1+e/mi);if(r.push(T.x,T.y,T.z,y.x,y.y,y.z),s.push(d[E]/m,0,d[E]/m,1),E){let M=S+(E-1)*2;a.push(M,M+1,M+2,M+1,M+3,M+2)}})}}if(!r.length)return null;let o=new Ie;o.setAttribute("position",new ge(r,3)),o.setAttribute("uv",new ge(s,2)),o.setIndex(a);let c=new Ae({uniforms:{uColor:{value:new qt(t==="front"?Ch.wall:"#a99be0")},uDraw:{value:0},uOpacity:{value:0},uDash:{value:n},uTime:{value:0}},vertexShader:zy,fragmentShader:ky,transparent:!0,depthWrite:!1,side:An}),l=new Me(o,c);return l.frustumCulled=!1,l}function Gy(i,t,e){let n=new Map,r=null,s="main";if(!!t&&typeof Worker<"u"&&typeof OffscreenCanvas<"u"&&(()=>{try{return!!new OffscreenCanvas(1,1).getContext("2d")}catch{return!1}})())try{r=new Worker(new URL("./world-paint.js",import.meta.url),{type:"module"}),s="worker",r.onmessage=({data:d})=>{if(d.failed||d.ready){d.failed&&o();return}let m=n.get(d.key);n.delete(d.key),m&&e(m,d.bitmap?{bitmap:d.bitmap}:{ids:d.ids},d.ms,"worker")},r.onerror=o,r.postMessage({type:"init",url:new URL(t,location.href).href,focus:bn.focus})}catch{r=null,s="main"}function o(){if(s!=="main"){s="main";try{r.terminate()}catch{}for(let d of n.values())f(d)}}let c=d=>window.requestIdleCallback?requestIdleCallback(d,{timeout:400}):setTimeout(d,16),l=[],u=!1;function f(d){l.push(d),h()}function h(){u||!l.length||(u=!0,c(()=>{let d=l.shift();if(u=!1,n.has(d.key)){n.delete(d.key);let m=Eh(i,d,(S,g)=>{let p=document.createElement("canvas");return p.width=S,p.height=g,p});e(d,m.ids?{ids:m.ids}:{canvas:m.canvas},m.ms,"main")}h()}))}return{get mode(){return s},has:d=>n.has(d),request(d,m=!1){n.has(d.key)||(n.set(d.key,d),s==="worker"?r.postMessage(d):m?(l.unshift(d),h()):f(d))},now(d){let m=Eh(i,d,(S,g)=>{let p=document.createElement("canvas");return p.width=S,p.height=g,p});e(d,m.ids?{ids:m.ids}:{canvas:m.canvas},m.ms,"main")},destroy(){r&&r.terminate()}}}async function wA(i,{scenes:t,hero:e,data:n,dataUrl:r,relief:s,terrain:a=null,values:o=null,accent:c=null,reduced:l=!1,onFrame:u}={}){c&&(bn.focus=c);let f=document.createElement("canvas");f.className="world__canvas",i.appendChild(f);let h;try{h=new Tl({canvas:f,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{return f.remove(),null}h.setClearColor(329226,1);let d=matchMedia("(max-width: 760px)").matches,m=new Ts,S=new Ve(32,1,5e-4,100),g=new Fn;m.add(g);let p={paints:[],boxes:{},frames:0,skipped:0,frameMs:0,worstFrameMs:0,painter:""},E=!0,T=bp(n),{countries:y,berlin:M}=T,w=new Map(y.filter(_=>_.properties.lat!=null).map(_=>[_.properties.key,_.properties])),P=_=>_<0?e:t[_],v=_=>!!(o&&_&&_.map.data&&o[_.map.data.id]),b=y.length,R=t.length+1,L=new Float32Array(b*R*2).fill(-1e9);[e,...t].forEach((_,A)=>{if(!v(_))return;let D=new Set(_.map.focus||[]);y.forEach((U,F)=>{let q=rs(o,_.map.data,U.properties.key),Y=(A*b+F)*2;L[Y]=q??-1e9,L[Y+1]=D.has(U.properties.key)?1:0})});let B=new Bn(L,b,R,Qn,pn);B.minFilter=B.magFilter=Ee,B.needsUpdate=!0;let k=new Uint8Array(256*2*4);for(let[_,A]of Object.entries(Ep)){let D=va({id:"",domain:[0,255],scale:_});for(let U=0;U<256;U++){let[F,q,Y]=D.color(U).match(/\d+/g).map(Number),$=(A*256+U)*4;k.set([F,q,Y,255],$)}}let N=new Bn(k,256,2);N.colorSpace=Qe,N.minFilter=N.magFilter=Ue,N.needsUpdate=!0;let I=_=>{let A=P(_);if(!v(A))return new Yt(-1,0,1,0);let D=va(A.map.data);return new Yt(_+1,D.d0,D.d1,Ep[D.kind])},G=2048,W=Math.min(d?2048:4096,h.capabilities.maxTextureSize),rt=d?2048*1280:4096*2560,Z=d?.5:.55,et=[i.clientWidth||innerWidth,i.clientHeight||innerHeight],nt=(_,A)=>`${Math.round(_/120)}x${Math.round(A/120)}`,wt=(d?96:320)*2**20,xt=new Map,ee=h.capabilities.getMaxAnisotropy(),zt=(_,A)=>{let D;return A.ids?(D=new Bn(A.ids,_.W,_.H),D.minFilter=D.magFilter=Ee,D.generateMipmaps=!1):(D=A.bitmap?new Ge(A.bitmap):new Pr(A.canvas),D.colorSpace=Qe,D.anisotropy=ee,D.minFilter=Tn,D.generateMipmaps=!0),D.flipY=!1,D.needsUpdate=!0,D},Qt=Gy(T,r,(_,A,D,U)=>{xt.set(_.key,{tex:zt(_,A),used:performance.now(),bytes:_.W*_.H*4*(A.ids?1:4/3)}),p.paints.push({kind:_.kind,ms:Math.round(D),where:U,size:`${_.W}x${_.H}`}),j(),E=!0});p.painter=Qt.mode;function j(){let _=0;for(let A of xt.values())_+=A.bytes;if(!(_<=wt))for(let[A,D]of[...xt.entries()].sort((U,F)=>U[1].used-F[1].used)){if(_<=wt||xt.size<=4)break;D.tex.dispose(),xt.delete(A),_-=D.bytes}}let st=_=>{let A=P(_),D=v(A),U={borders:A.map.borders,fill:A.map.fill,city:D?null:A.map.city,areas:A.map.areas,focus:D?[]:A.map.focus},{lat:F,lon:q}=A.camera,Y=Rd(A.camera,et[0],et[1]),$=Y.box||[q-75,Math.max(-89.5,F-60),q+75,Math.min(89.5,F+60)],tt=Pd($,Math.max(.003,(Y.kmPerPx||40)*Z),W,rt);p.boxes[_]={box:$.map(Ct=>+Ct.toFixed(2)),size:`${tt.W}x${tt.H}`,texelKm:+tt.texelKm.toFixed(3),kmPerPx:+Y.kmPerPx.toFixed(3)};let ct=Ct=>+Ct.toFixed(3),Et=`${$.map(ct).join(",")}|${tt.W}x${tt.H}`,ot={g:{kind:"paint",key:`g|${JSON.stringify({...U,city:null})}`,map:{...U,city:null},box:[-180,-90,180,90],W:G,H:G/2},d:{kind:"paint",key:`d|${JSON.stringify(U)}|${Et}`,map:U,box:$,W:tt.W,H:tt.H,css:tt.texelKm/Math.max(1e-6,Y.kmPerPx||tt.texelKm)}};return D&&(ot.ig={kind:"ids",key:`ig|${U.borders}`,date:U.borders,box:[-180,-90,180,90],W:G,H:G/2},ot.id={kind:"ids",key:`id|${U.borders}|${Et}`,date:U.borders,box:$,W:tt.W,H:tt.H}),{jobs:ot,box:new Yt(...$),kmPerPx:Y.kmPerPx}},bt=new Map,Ft=_=>(bt.has(_)||bt.set(_,st(_)),bt.get(_));function Mt(_,A=!1){let D=Ft(_),U={box:D.box},F=performance.now(),q=!0;for(let[Y,$]of Object.entries(D.jobs)){let tt=xt.get($.key);tt?(tt.used=F,U[Y]=tt.tex):(q=!1,Qt.request($,A))}return q?U:null}let Dt=new Bn(new Uint8Array(4),1,1);Dt.needsUpdate=!0;let Zt=await(async _=>{let A=_?await fetch(_).then(D=>D.ok?D.json():null).catch(()=>null):null;return A?{...A,base:new URL(".",new URL(_,location.href)),levels:A.levels.map(D=>({...D,has:new Set(D.tiles)}))}:null})(a),re=Zt?Zt.levels:[],fe=new Set;async function te(_,A,[D,U,F,q],Y,$){let tt=document.createElement("canvas");tt.width=Y,tt.height=$;let ct=tt.getContext("2d");ct.imageSmoothingQuality="high";let Et=!1,Tt=Y/(F-D);for(let ot of A){if(ot!==A[0]&&ot.ppd>Tt*3)continue;let Ct=[];for(let ut=Math.floor((D+180)/ot.deg);ut<=Math.floor((F+180)/ot.deg);ut++)for(let yt=Math.floor((U+90)/ot.deg);yt<=Math.floor((q+90)/ot.deg);yt++)ot.has.has(`${ut}_${yt}`)&&Ct.push([ut,yt]);let Vt=await Promise.all(Ct.map(([ut,yt])=>fetch(new URL(`${ot.z}/${ut}_${yt}.jpg`,_)).then(Gt=>Gt.blob()).then(Gt=>createImageBitmap(Gt)).catch(()=>null)));Ct.forEach(([ut,yt],Gt)=>{let lt=Vt[Gt];if(!lt)return;let Kt=ut*ot.deg-180,Bt=(yt+1)*ot.deg-90,Ce=Math.floor((Kt-D)/(F-D)*Y),We=Math.ceil((Kt+ot.deg-D)/(F-D)*Y),Re=Math.floor((q-Bt)/(q-U)*$),hn=Math.ceil((q-Bt+ot.deg)/(q-U)*$);ct.drawImage(lt,Ce,Re,We-Ce,hn-Re),lt.close(),Et=!0})}return Et?tt:null}let ve=(_,A,D,U)=>{let F=new Pr(_);F.minFilter=Tn,F.anisotropy=ee,xt.set(A,{tex:F,used:performance.now(),bytes:D*U*4*4/3}),j(),E=!0};function we(_){if(!re.length)return null;let A=P(_),D=Ft(_);if(A.camera.alt>2500)return null;let U=D.kmPerPx&&D.kmPerPx<.45,F=re.filter(ut=>ut.z<=1||U&&ut.z===2).sort((ut,yt)=>ut.ppd-yt.ppd),q=F.at(-1),[Y,$,tt,ct]=D.box.toArray(),Et=Math.min(1,2048/((tt-Y)*q.ppd),2048/((ct-$)*q.ppd)),Tt=Math.max(64,Math.round((tt-Y)*q.ppd*Et)),ot=Math.max(64,Math.round((ct-$)*q.ppd*Et)),Ct=`t|${D.box.toArray().map(ut=>ut.toFixed(3)).join(",")}|${q.z}|${Tt}x${ot}`,Vt=xt.get(Ct);return Vt?(Vt.used=performance.now(),Vt.tex):(fe.has(Ct)||(fe.add(Ct),te(Zt.base,F,[Y,$,tt,ct],Tt,ot).then(ut=>{fe.delete(Ct),ut&&ve(ut,Ct,Tt,ot)})),null)}let ze=new Bn(new Uint8Array([219,219,219,255]),1,1);ze.needsUpdate=!0;let ye=new O(-.6,.55,.9),be=new qt("#8f86ff"),z={uGA:{value:null},uDA:{value:null},uGB:{value:null},uDB:{value:null},uIGA:{value:Dt},uIDA:{value:Dt},uIGB:{value:Dt},uIDB:{value:Dt},uVal:{value:B},uRamp:{value:N},uSlotA:{value:new Yt(-1,0,1,0)},uSlotB:{value:new Yt(-1,0,1,0)},uWA:{value:0},uWB:{value:1},uBoxA:{value:new Yt},uBoxB:{value:new Yt},uRelW:{value:ze},uRelE:{value:ze},uTA:{value:Dt},uTB:{value:Dt},uQA:{value:Dt},uQB:{value:Dt},uQBoxA:{value:new Yt},uQBoxB:{value:new Yt},uRelBox:{value:new Yt(...s?.europeBox||[0,0,1,1])},uMix:{value:0},uHatch:{value:60},uLight:{value:ye},uOcean:{value:new qt("#06080d")},uOceanLift:{value:new qt("#0c1220")},uRim:{value:be},uFocus:{value:new qt(bn.focus)}};if(s){let _=new Gs,A=D=>(D.minFilter=Tn,D.anisotropy=ee,D);_.load(s.world,D=>{z.uRelW.value=A(D),E=!0}),_.load(s.europe,D=>{z.uRelE.value=A(D),E=!0})}let De=new Me(d?new Xi(1,384,192):new Xi(1,512,256),new Ae({uniforms:z,vertexShader:Tp,fragmentShader:Ly,defines:{...o?{HAS_DATA:""}:{}}}));De.rotation.y=-Math.PI/2;let ue=new Me(new Xi(1.06,96,64),new Ae({uniforms:{uRim:{value:be}},vertexShader:Tp,fragmentShader:Dy,side:qe,transparent:!0,blending:Fr,depthWrite:!1}));g.add(De,ue);{let A=new Float32Array(5400);for(let U=0;U<1800;U++){let F=new O().randomDirection().multiplyScalar(30+Math.random()*30);A.set([F.x,F.y,F.z],U*3)}let D=new Ie;D.setAttribute("position",new ge(A,3)),m.add(new Ds(D,new Ae({vertexShader:"void main(){ gl_PointSize = 1.6; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"void main(){ gl_FragColor = vec4(0.75,0.72,1.0,0.35); }",transparent:!0,depthWrite:!1})))}let C=new Map,x=n.objects.cshapes||n.objects.countries,H=_=>{if(C.has(_))return C.get(_);let A=F=>!F.properties||!F.properties.from||!_||_==="modern"||F.properties.from<=_&&_<F.properties.to,D=ic(n,x,(F,q)=>F!==q&&A(F)&&A(q)).coordinates,U=Cp(D,o?"#0b0e15":"#c8cde0",1.25);return g.add(U),C.set(_,U),U},X=new Map,J=new Map,ht=_=>{if(_<0||_>=t.length)return null;if(J.has(_))return J.get(_);let A=t[_],D=new Fn,U=[];if((A.map.arrows||[]).forEach(q=>{let Y=Rp(q.from,q.to,Ah[q.kind]||"#fff",A.camera.alt);D.add(Y),U.push({type:"arrow",m:Y})}),(A.map.flows||[]).forEach(q=>{let Y=w.get(q.from),$=w.get(q.to);if(!Y||!$)return;let tt=Rp([Y.lat,Y.lon],[$.lat,$.lon],Ah[q.kind]||Ah.capital,A.camera.alt);D.add(tt),U.push({type:"arrow",m:tt,flow:!0})}),v(A)&&(A.map.focus||[]).length){let q=wh(y,A.map.borders).filter($=>A.map.focus.includes($.properties.key)).flatMap(Oy),Y=Cp(q,bn.focus,2);D.add(Y),U.push({type:"outline",m:Y,mat:Y.material})}(A.map.lines||[]).forEach(q=>{if(q.kind==="wall"&&M){let ot=A.map.borders>=Mp,Ct=Oe(A.camera.alt*.006,.08,.5);for(let Vt of["front","rear"]){let ut=Vy(M.wall,Vt,Vt==="front"?Ct:Ct*.6,ot?7:0);ut&&(D.add(ut),U.push({type:"line",m:ut,mat:ut.material,k:Vt==="front"?1:.55,dash:ot}))}return}if(q.kind==="iron-curtain"){if(!n.objects.cshapes)return;let ot=is(A.map.borders),Ct=lt=>lt.properties.from<=A.map.borders&&A.map.borders<lt.properties.to,Vt=["FRG","AUT"],ut=["GDR","CSK","HUN"],yt=ic(n,n.objects.cshapes,(lt,Kt)=>lt!==Kt&&Ct(lt)&&Ct(Kt)&&(Vt.includes(lt.properties.key)&&ut.includes(Kt.properties.key)||ut.includes(lt.properties.key)&&Vt.includes(Kt.properties.key))),Gt=Oe(A.camera.alt/mi*.0021,12e-6,.003);for(let lt of yt.coordinates){if(lt.length<2||!ot)continue;let Kt=lt.map(([Re,hn])=>en(hn,Re,1.0008)),Bt=0;for(let Re=1;Re<Kt.length;Re++)Bt+=Kt[Re].distanceTo(Kt[Re-1]);let Ce=Rh(Ch["iron-curtain"],Math.max(6,Bt*1800)),We=new Me(new qi(new Ci(Kt,!1,"centripetal"),Math.min(1600,Kt.length*3),Gt,5,!1),Ce);D.add(We),U.push({type:"line",m:We,mat:Ce,k:1,dash:!0})}return}let Y=q.kind==="wall",$=By(q.points,Y?1.00003:1.0008),tt=q.points[0][0]===q.points.at(-1)[0]&&q.points[0][1]===q.points.at(-1)[1],ct=Oe(A.camera.alt/mi*(Y?.0016:.0021),12e-6,.003),Et=Rh(Ch[q.kind]||"#fff",Y?0:90),Tt=new Me(new qi(new Ci($,tt,"centripetal"),Math.min(1200,$.length*3),ct,5,!1),Et);D.add(Tt),U.push({type:"line",m:Tt,mat:Et,k:1,dash:!Y})}),D.visible=!1,g.add(D);let F={g:D,items:U};return J.set(_,F),F},ft=(_,A,D,U)=>{let F=ht(_);if(!F)return!1;F.g.visible=D>.001;let q=X.has(t[_].panel)?X.get(t[_].panel):1,Y=!1;return F.items.forEach(($,tt)=>{if($.type==="arrow"){let ct=Oe(A*1.25-tt*.12)*($.flow?q:1);$.m.userData.mat.uniforms.uDraw.value=l?$.flow?q>.5?1:0:1:ct,$.m.userData.mat.uniforms.uOpacity.value=D,$.m.userData.head.material.opacity=D*Gn(.92,1,$.m.userData.mat.uniforms.uDraw.value)}else $.type==="outline"?($.mat.opacity=D*.9,$.mat.resolution=tr,$.m.scale.setScalar(er)):($.mat.uniforms.uDraw.value=l?1:Oe(A*1.1),$.mat.uniforms.uOpacity.value=D*.95*$.k,$.mat.uniforms.uTime.value=U,$.dash&&D>.001&&!l&&(Y=!0))}),Y},K=[...w.keys()],Q=new Is(new Lr(1,1,1,10,1,!1).translate(0,.5,0),new Ai({color:"#ffffff",transparent:!0,opacity:.92,depthWrite:!0}),Math.max(1,K.length));Q.instanceMatrix.setUsage(su),Q.frustumCulled=!1,Q.visible=!1,g.add(Q);let _t=K.map(_=>{let A=w.get(_);return en(A.lat,A.lon).normalize()}),Rt=new Map,vt=_=>{if(Rt.has(_))return Rt.get(_);let A=P(_),D=A.map.spikes,U=new Float32Array(K.length);if(D&&o){let q=va(D).d1;K.forEach((Y,$)=>{let tt=rs(o,D,Y);U[$]=tt==null||tt<=0?0:Math.min(1.4,tt/q)})}let F={h:U,on:!!D,alt:A.camera.alt,spec:D};return Rt.set(_,F),F},dt=new me,Pt=new vn,Ut=new O,kt=new O,V=new O(0,1,0),pt=new qt,it=new qt("#ffffff"),mt="";function St(_,A,D,U){let F=vt(_),q=vt(A),Y=(F.on?1-D:0)+(q.on?D:0);if(Q.visible=Y>.01,!Q.visible)return;let $=`${_}|${A}|${D.toFixed(4)}|${Math.round(U)}`;if($===mt)return;mt=$;let tt=.3,ct=Oe(Math.sqrt(U/6e3)*.0032,.0012,.006);K.forEach((Et,Tt)=>{let ot=F.on?F.h[Tt]:0,Ct=q.on?q.h[Tt]:0,Vt=(ot+(Ct-ot)*D)*Y,ut=_t[Tt];Pt.setFromUnitVectors(V,ut),Ut.copy(ut).multiplyScalar(1.0006),kt.set(ct,Math.max(1e-6,Vt*tt),ct),dt.compose(Ut,Pt,kt),Q.setMatrixAt(Tt,dt),pt.set(bn.focus).lerp(it,Oe(Vt/Math.max(Y,.001)/1.2)*.7),Q.setColorAt(Tt,pt)}),Q.instanceMatrix.needsUpdate=!0,Q.instanceColor&&(Q.instanceColor.needsUpdate=!0)}let at=document.createElement("div");at.className="world__legend",i.appendChild(at),at.innerHTML='<div class="world__lg"></div>';let It="",At="",de=[],ae=_=>_.month?`${Ry[+_.month.slice(5)-1]} ${_.month.slice(0,4)}`:String(_.year);function mn(_,A,D){let U=D<.5?_:A,F=U&&(U.map.data||U.map.spikes),q=U&&U.map.data&&U.map.spikes,Y=F&&o&&o[F.id]?`${F.id}|${F.domain}|${q?q.id:""}|${(U.map.focus||[]).join()}`:"";if(Y!==It&&(It=Y,At="",at.classList.toggle("is-on",!!Y),Y)){let ut=o[F.id],yt=va(F),Gt=U.map.data&&U.map.focus||[],lt=at.firstElementChild,Kt=lt.cloneNode(!1);Kt.innerHTML=`<p class="mono world__ind"><span>${ut.label}</span> \xB7 <span class="world__yr"><b></b></span><span class="world__fc"></span></p>
          <div class="world__rampbox"><div class="world__ramp" style="background:linear-gradient(90deg,${yt.stops.join(",")})"></div>
            ${Gt.map(Bt=>`<i class="world__tick" data-k="${Bt}"><span>${Bt}</span></i>`).join("")}</div>
          <div class="world__ticks mono"><span>${yt.d0<0?"":"\u2264 "}${Th(yt.d0)}</span>${yt.kind==="diverging"?"<span>0</span>":""}<span>\u2265 ${Th(yt.d1)}</span></div>
          <p class="mono world__unit">${ut.unit}${U.map.data?' \xB7 <i class="world__nodata"></i> no data':""}</p>
          ${q&&o[q.id]?`<p class="mono world__spk"><i></i>Height \xB7 ${o[q.id].label} \xB7 <span class="world__spkm"></span></p>`:""}
          <p class="world__src">${ut.source}${q&&o[q.id]?". "+o[q.id].source:""}</p>`,lt.classList.add("is-out"),Kt.classList.add("is-in"),at.appendChild(Kt),requestAnimationFrame(()=>Kt.classList.remove("is-in")),setTimeout(()=>lt.remove(),l?0:450),de=Gt.map(Bt=>({k:Bt,el:Kt.querySelector(`[data-k="${Bt}"]`)}))}if(!Y)return;let $=at.lastElementChild,tt=o[F.id],ct=va(F),Et=U.map.data&&Ap(_?.map.data,A?.map.data),Tt=ae(F),ot=tt.forecastFrom&&+String(F.month||F.year).slice(0,4)>=tt.forecastFrom?" \xB7 IMF projection":"";if(Tt!==At){let ut=$.querySelector(".world__yr"),yt=ut.firstElementChild,Gt=document.createElement("b");Gt.textContent=Tt,At&&!l?(Gt.className="is-in",ut.appendChild(Gt),yt.className="is-out",requestAnimationFrame(()=>Gt.classList.remove("is-in")),setTimeout(()=>yt.remove(),400)):ut.replaceChildren(Gt),$.querySelector(".world__fc").textContent=ot,At=Tt}if(q){let ut=$.querySelector(".world__spkm"),yt=ae(q);ut&&ut.textContent!==yt&&(ut.textContent=yt)}for(let ut of de){let yt=_&&_.map.data?rs(o,_.map.data,ut.k):null,Gt=A&&A.map.data?rs(o,A.map.data,ut.k):null,lt=Et&&yt!=null&&Gt!=null?yt+(Gt-yt)*D:D<.5?yt:Gt;ut.x=lt==null?null:Oe((lt-ct.d0)/(ct.d1-ct.d0))*100,ut.el.style.opacity=lt==null?0:1,lt!=null&&(ut.el.style.left=`${ut.x.toFixed(2)}%`)}let Ct=[];for(let ut of de.filter(yt=>yt.x!=null).sort((yt,Gt)=>yt.x-Gt.x)){let yt=0;for(;Ct[yt]!=null&&ut.x-Ct[yt]<11;)yt++;Ct[yt]=ut.x,ut.row!==yt&&(ut.row=yt,ut.el.style.setProperty("--row",Math.min(yt,2)))}let Vt=$.querySelector(".world__rampbox");Vt&&+Vt.dataset.rows!==Ct.length&&(Vt.dataset.rows=Ct.length,Vt.style.setProperty("--rows",Math.max(0,Math.min(Ct.length,3)-1)))}let cn=document.createElement("div");cn.className="world__labels",i.appendChild(cn);let Oi=new Map,ss=_=>{if(Oi.has(_))return Oi.get(_);let A=P(_),D=v(A)?(A.map.focus||[]).map(F=>w.get(F)).filter(Boolean).map(F=>({at:[F.lat,F.lon],label:F.name,key:F.key})):[],U=[...A.map.markers||[],...D].map(F=>{let q=document.createElement("div");return q.className="world__marker",q.innerHTML=`<i></i><span>${F.label}</span>${F.key?'<b class="mono"></b>':""}`,cn.appendChild(q),{el:q,v:en(F.at[0],F.at[1],1.000002),key:F.key,val:F.key?q.querySelector("b"):null,text:""}});return Oi.set(_,U),U},un=1,gn=1,sc=new O,tr=new Lt(1,1),er=1.0015;function qn(){un=i.clientWidth||innerWidth,gn=i.clientHeight||innerHeight,h.setPixelRatio(Math.min(devicePixelRatio||1,d?1.5:1.75)),h.setSize(un,gn,!1),ku(S,un,gn),tr.set(un,gn),nt(un,gn)!==nt(...et)&&(et=[un,gn],bt.clear());for(let _ of Oi.values())_.forEach(A=>{A.w=0});E=!0}let nr=-1,as=NaN,Yn=!1,gi=!0,ir=0,rr=performance.now(),Bi=new O,os=null,ya=null;function ls(_,A,D){ss(_).forEach((U,F)=>{let q=U.v.clone().normalize().dot(sc.copy(S.position).sub(U.v).normalize());Bi.copy(U.v).project(S);let Y=(Bi.x*.5+.5)*un,$=(-Bi.y*.5+.5)*gn,tt=q>.05&&Bi.z<1&&Y>-40&&Y<un+40&&$>-20&&$<gn+20;if(U.el.style.transform=`translate3d(${Y.toFixed(1)}px, ${$.toFixed(1)}px, 0)`,U.el.style.opacity=tt?Oe(A*1.8-F*.14):0,U.key){let Et=D(U.key),Tt=o[P(_).map.data.id].unit.startsWith("%")?"%":"",ot=Et==null?"no data":Th(Et)+Tt;ot!==U.text&&(U.val.textContent=ot,U.text=ot,U.w=0)}tt&&!U.w&&(U.w=U.el.offsetWidth);let ct=(U.w||160)+12;U.el.classList.toggle("is-left",Y+ct>un&&(Y-ct>0||Y>un-Y))})}function Sa(_){if(ir=requestAnimationFrame(Sa),!gi)return;let A=t.length,D=Oe(nr,-1,A-1),U=D<0&&!l;if(!E&&D===as&&!U&&!Yn){p.skipped++;return}let F=performance.now();E=!1,as=D;let q=(_-rr)/1e3,Y=Math.floor(D),$=D-Y,tt=Math.min(Y+1,A-1),ct=P(Y),Et=P(tt),Tt=Y>=0&&ct.panel!=null&&ct.panel===Et.panel,ot=l?$<.5?0:1:Cy(Gn(.08,.92,$)),Ct={...e.camera,lon:e.camera.lon+(l?0:Math.sin(q*.06)*12)},Vt=Vu(S,Y<0?Ct:ct.camera,tt<0?Ct:Et.camera,ot,un,gn);er=1+Oe(Vt/mi*.002,1e-6,.0015);let ut=Mt(Y,!0)||os||ya,yt=Mt(tt,!0)||ut;if(!ut){h.render(m,S);return}os=ut,ya=yt,z.uGA.value=ut.g,z.uDA.value=ut.d,z.uBoxA.value=ut.box,z.uIGA.value=ut.ig||Dt,z.uIDA.value=ut.id||Dt,z.uGB.value=yt.g,z.uDB.value=yt.d,z.uBoxB.value=yt.box,z.uIGB.value=yt.ig||Dt,z.uIDB.value=yt.id||Dt;let Gt=l?$<.5?0:1:Gn(.35,.65,$),lt=l?$<.5?0:1:Tt?Gn(.1,.9,$):Gt,Kt=v(ct)&&v(Et)&&Ap(ct.map.data,Et.map.data);z.uSlotA.value=ut.ig?I(Y):new Yt(-1,0,1,0),z.uSlotB.value=yt.ig?I(tt):new Yt(-1,0,1,0),z.uWA.value=Kt?lt:0,z.uWB.value=Kt?1-lt:0,z.uMix.value=tt===Y?0:Gt,z.uTA.value=we(Y)||Dt,z.uTB.value=tt===Y?z.uTA.value:we(tt)||Dt,z.uHatch.value=12e5/Math.max(60,Vt);let Bt=H(ct.map.borders),Ce=H(Et.map.borders);for(let jt of C.values())jt.material.opacity=0,jt.material.resolution=tr,jt.scale.setScalar(er);let We=ct.map.city?.4:1,Re=Et.map.city?.4:1;Bt.material.opacity+=.28*(1-Gt)*We,Ce.material.opacity+=.28*Gt*Re,St(Y,tt,Gt,Vt),mn(ct,Et,lt),Yn=!1;for(let[jt,Xe]of J)jt!==Y&&jt!==tt&&(Xe.g.visible=!1);if(Tt){if(Yn=ft(Y,1,1,q),tt!==Y){let jt=ht(tt);jt&&(jt.g.visible=!1)}}else Y>=0&&(Yn=ft(Y,1,1-Gn(.05,.4,$),q)||Yn),tt!==Y&&(Yn=ft(tt,Gn(.55,1,$),Gn(.5,.8,$),q)||Yn);let hn=jt=>{let Xe=v(ct)?rs(o,ct.map.data,jt):null,ce=v(Et)?rs(o,Et.map.data,jt):null;return Kt&&Xe!=null&&ce!=null?Xe+(ce-Xe)*lt:lt<.5?Xe:ce};for(let[jt,Xe]of Oi)jt!==Y&&jt!==tt&&Xe.forEach(ce=>{ce.el.style.opacity=0});Tt?(ls(Y,1,hn),tt!==Y&&ss(tt).forEach(jt=>{jt.el.style.opacity=0})):(ls(Y,1-Gn(.1,.45,$),hn),tt!==Y&&ls(tt,Gn(.6,.95,$),hn)),h.render(m,S),u&&u(D);let he=performance.now()-F;p.frames++,p.frameMs+=he,p.worstFrameMs=Math.max(p.worstFrameMs,he)}let Ma=new ResizeObserver(qn);Ma.observe(i);let cs=new IntersectionObserver(([_])=>{gi=_.isIntersecting,E=!0});cs.observe(i),addEventListener("visibilitychange",()=>{gi=!document.hidden,E=!0}),qn();for(let _ of[-1,0])for(let A of Object.values(Ft(_).jobs))xt.has(A.key)||Qt.now(A);return ir=requestAnimationFrame(Sa),{setProgress(_){nr=_},setGate(_,A){X.get(_)!==A&&(X.set(_,A),E=!0)},pointOf:_=>w.get(_),prepare(_){_>=-1&&_<t.length&&(Mt(_),we(_),ht(_),ss(_))},stats:p,destroy(){cancelAnimationFrame(ir),Ma.disconnect(),cs.disconnect(),Qt.destroy(),h.dispose()}}}export{bn as PALETTE,wA as createWorld,Th as fmtValue,en as ll,va as scaleOf,rs as valueOf};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

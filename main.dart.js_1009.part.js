((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_1009",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,E,F,B={rY:function rY(d,e){this.a=d
this.b=e},
nKA(d){var x=B.kAy(),w=x.a
w.toString
A.Cg(w,d,E.c2)
return x},
kAy(){var x=new B.bMq()
x.U()
return x},
bMq:function bMq(){this.a=null},
f3q(d,e){var x,w,v,u,t,s=null,r=" and a width between ",q=" (landscape) or ",p=" (portrait), and each side must be between "
switch(d.a.k(0)){case D.ay8:x=y.g
if(d.a.H(1,x).a.length!==2)A.a6(A.as(A.b1("Expected 2 parameters for image too large",s),s))
x=d.a.H(1,x).a
if(0>=x.length)return A.F(x,0)
x=B.w7y(x[0])
x.toString
return A.b("File size must be "+x+" or smaller",s,"_fileSizeTooLargeMessage",A.a([x],y.h),s)
case D.ay9:x=y.g
if(d.a.H(1,x).a.length!==2)A.a6(A.as(A.b1("Expected 2 parameters for invalid dimensions",s),s))
w=d.a.H(1,x).a
if(0>=w.length)return A.F(w,0)
w=w[0]
x=d.a.H(1,x).a
if(1>=x.length)return A.F(x,1)
x=x[1]
return A.b("Image dimensions must be "+A.D(w)+" px by "+A.D(x)+" px",s,"_exactDimensionsError",A.a([w,x],y.h),s)
case D.aya:x=y.g
if(d.a.H(1,x).a.length!==3)A.a6(A.as(A.b1("Expected 3 parameters for invalid dimension range",s),s))
if(e===C.Rk){w=d.a.H(1,x).a
if(0>=w.length)return A.F(w,0)
w=w[0]
v=d.a.H(1,x).a
if(1>=v.length)return A.F(v,1)
v=v[1]
u=d.a.H(1,x).a
if(2>=u.length)return A.F(u,2)
u=B.c38(u[2],!1)
x=d.a.H(1,x).a
if(2>=x.length)return A.F(x,2)
x=B.c38(x[2],!0)
return A.b("Screenshot aspect ratio can't exceed "+u+q+x+p+A.D(w)+" px and "+A.D(v)+" px",s,"_screenshotDimensionRangeError",A.a([w,v,u,x],y.h),s)}w=d.a.H(1,x).a
if(0>=w.length)return A.F(w,0)
w=w[0]
v=d.a.H(1,x).a
if(1>=v.length)return A.F(v,1)
v=v[1]
u=d.a.H(1,x).a
if(2>=u.length)return A.F(u,2)
u=B.c38(u[2],!1)
x=d.a.H(1,x).a
if(2>=x.length)return A.F(x,2)
x=B.c38(x[2],!0)
return A.b("Image aspect ratio can't exceed "+u+q+x+p+A.D(w)+" px and "+A.D(v)+" px",s,"_genericDimensionRangeError",A.a([w,v,u,x],y.h),s)
case D.HL:return $.uw1()
case D.ayb:x=y.g
if(d.a.H(1,x).a.length!==3)A.a6(A.as(A.b1("Expected 3 parameters for invalid aspect ratio",s),s))
if(e===C.bxu){w=d.a.H(1,x).a
if(2>=w.length)return A.F(w,2)
t=A.WU(w[2])
w=t==null?!0:t>1
v=y.h
u=d.a
if(w){w=u.H(1,x).a
if(0>=w.length)return A.F(w,0)
w=w[0]
u=d.a.H(1,x).a
if(1>=u.length)return A.F(u,1)
u=u[1]
x=d.a.H(1,x).a
if(2>=x.length)return A.F(x,2)
x=B.c38(x[2],!1)
v=A.b("Landscape screenshots must have an aspect ratio of "+x+r+A.D(w)+" px and "+A.D(u)+" px",s,"_landscapeScreenshotAspectRatioInvalidMessage",A.a([w,u,x],v),s)
x=v}else{w=u.H(1,x).a
if(0>=w.length)return A.F(w,0)
w=w[0]
u=d.a.H(1,x).a
if(1>=u.length)return A.F(u,1)
u=u[1]
x=d.a.H(1,x).a
if(2>=x.length)return A.F(x,2)
x=B.c38(x[2],!1)
v=A.b("Portrait screenshots must have an aspect ratio of "+x+r+A.D(w)+" px and "+A.D(u)+" px",s,"_portraitScreenshotAspectRatioInvalidMessage",A.a([w,u,x],v),s)
x=v}return x}w=d.a.H(1,x).a
if(0>=w.length)return A.F(w,0)
w=w[0]
v=d.a.H(1,x).a
if(1>=v.length)return A.F(v,1)
v=v[1]
x=d.a.H(1,x).a
if(2>=x.length)return A.F(x,2)
x=B.c38(x[2],!1)
return A.b("Image must have an aspect ratio of "+x+r+A.D(w)+" px and "+A.D(v)+" px",s,"_aspectRatioInvalidMessage",A.a([w,v,x],y.h),s)
case D.a6Z:throw A.P(A.as("Error without key, "+d.ac(0),s))}throw A.P(A.as("Unknown validation error: "+d.ac(0),s))},
w7y(d){var x=A.WU(d)
if(x==null)return null
return F.l7(x,2)},
c38(d,e){var x=B.w7x(d,e),w=C.f0c.B(0,x)
return w==null?x:w},
w7x(d,e){var x=A.WU(d)
if(x==null)return""
if(e)x=1/x
return x>1?B.osZ(x)+":1":"1:"+B.osZ(1/x)},
osZ(d){return d===E.K.hG(d)?E.K.iE(d,0):E.K.iE(d,2)}},C,D
A=c[0]
E=c[2]
F=c[1262]
B=a.updateHolder(c[1152],B)
C=c[2086]
D=c[1840]
B.rY.prototype={}
B.bMq.prototype={
S(d){var x=B.kAy()
x.T(this)
return x},
gR(){return $.r1A()}}
var z=a.updateTypes(["bMq()","o(A9{imageType:rY?})"]);(function installTearOffs(){var x=a._static_0,w=a.installStaticTearOff
x(B,"xng","kAy",0)
w(B,"kTF",1,function(){return{imageType:null}},["$2$imageType","$1"],["f3q",function(d){return B.f3q(d,null)}],1,0)})();(function inheritance(){var x=a.inherit
x(B.rY,A.ae)
x(B.bMq,A.B)})()
A.ag(b.typeUniverse,JSON.parse('{"rY":{"ae":[]},"bMq":{"B":[]}}'))
var y={h:A.f("t<C>"),g:A.f("o")};(function constants(){C.bxu=new B.rY(12,"IMAGE_TYPE_STORE_LISTING_BATTLESTAR_SCREENSHOT")
C.Rk=new B.rY(5,"IMAGE_TYPE_STORE_LISTING_SCREENSHOT")
C.hNN={"1.78:1":0,"1:1.78":1,"1.33:1":2,"1:1.33":3}
C.f0c=new A.w(C.hNN,["16:9","9:16","4:3","3:4"],A.f("w<o*,o*>"))
C.hPh=new A.dJ("play.console.apps.api.imageupload")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"DS7","r1A",()=>{var w=A.E("ImageUploadResponse",B.xng(),null,C.hPh,null,null)
w.N(1,"uploadedImage",A.ob(),A.f("hB"))
return w})
x($,"GQP","uw1",()=>{var w=null
return A.b("File type must be PNG or JPEG",w,w,w,w)})})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_1009",e:"endPart",h:b})})($__dart_deferred_initializers__,"P/7F6BpinaH6c0XKrFjUtY3E6Ko=");
//# sourceMappingURL=main.dart.js_1009.part.js.map

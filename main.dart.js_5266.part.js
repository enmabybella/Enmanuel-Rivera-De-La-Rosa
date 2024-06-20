((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_5266",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,F,B={
aAW(){var x=new B.aUu()
x.U()
return x},
aUu:function aUu(){this.a=null},
c6T(){var x=null
return new B.bFP(A.aIS(),A.b("Invites paused",x,x,x,x),A.b("All batches paused",x,x,x,x))},
bFP:function bFP(d,e,f){var _=this
_.c=_.b=_.a=null
_.d=d
_.r=_.f=_.e=0
_.w=e
_.x=f},
fds:function fds(){},
fdt:function fdt(){},
fdu:function fdu(){},
fdv:function fdv(){},
fdw:function fdw(){},
fdx:function fdx(){},
c6S:function c6S(d,e){this.a=d
this.b=e},
c6U(d,e){var x,w=new B.cAS(A.a_(d,e,0)),v=$.n8F
w.b=v==null?$.n8F=A.aa(C.a,null):v
x=document.createElement("acquisition-method-summary")
w.c=x
return w},
Ad7(d,e){return new B.dsJ(A.v(d,e,y.u))},
Ad8(d,e){return new B.dsK(A.U(),A.v(d,e,y.u))},
cAS:function cAS(d){var _=this
_.f=_.e=$
_.r=null
_.c=_.b=_.a=$
_.d=d},
dsJ:function dsJ(d){var _=this
_.e=_.d=_.c=_.b=$
_.f=null
_.a=d},
dsK:function dsK(d,e){this.b=d
this.a=e},
kR9(d){var x=null
return A.aF(d,A.a([d],y.h),x,x,x,x,"countriesStatusMessage","1 country / region",""+d+" countries / regions",x,x,x)},
kU6(d){var x=null,w=d.a.k(12),v=d.a.k(2)
switch(w){case C.w2:if(v===C.h2)return B.orJ(d.a.k(2),d.a.k(1).a.O(0))
if(v===C.it){w=d.a.k(1).a.O(0)
return A.b("Release "+w+" in review",x,"_fullReleaseInReviewStatusMessage",A.a([w],y.h),x)}w=d.a.k(1).a.O(0)
return A.b("Staged release "+w+" in review",x,"_stagedReleaseInReviewStatusMessage",A.a([w],y.h),x)
case C.r3:w=d.a.k(1).a.O(0)
return A.b("Release "+w+" rejected",x,"_rejectedReleaseStatusMessage",A.a([w],y.h),x)
case C.tV:if(d.a.k(1).a.O(0).length===0)w=$.ugG()
else{w=d.a.k(1).a.O(0)
w=A.b("Draft release: "+w,x,"_draftReleaseStatusMessageTitled",A.a([w],y.h),x)}return w
default:return B.orJ(d.a.k(2),d.a.k(1).a.O(0))}},
orJ(d,e){var x="Latest release: "+e
return F.ml(d,A.Q(["RELEASE_STATUS_STAGED_ROLLOUT",x,"RELEASE_STATUS_FULLY_ROLLED_OUT",x,"RELEASE_STATUS_HALTED","Release halted ("+e+")","other","unsupported"],y.E,y.w),A.a([d,e],y.h),null,null,"_approvedLatestReleaseStatusMessage")}},D,G
J=c[1]
A=c[0]
C=c[2]
E=c[1260]
F=c[1196]
B=a.updateHolder(c[721],B)
D=c[1778]
G=c[1326]
B.aUu.prototype={
S(d){var x=B.aAW()
x.T(this)
return x},
gR(){return $.tUA()}}
B.bFP.prototype={
sapW(d){var x
if(d==null)return
x=d.a
if(x.length!==0)this.e=new A.L(x,new B.fds(),A.a7(x).n("L<1,z>")).cc(0,new B.fdt())
this.uS()},
sa6W(d){var x
if(d!=null){if(d.gatM().gcpx().gcpy().a.length!==0){x=d.gatM().gcpx().gcpy()
x.toString
x=J.nl(new A.L(x,new B.fdu(),x.$ti.n("L<a2.E,bM>")).cc(0,new B.fdv()))}else x=0
this.f=x
if(d.gatM().gckZ().a.length!==0){x=d.gatM().gckZ()
x.toString
x=J.nl(new A.L(x,new B.fdw(),x.$ti.n("L<a2.E,bM>")).cc(0,new B.fdx()))}else x=0
this.r=x}this.uS()},
uS(){var x=this
if(!x.gcpQ())return
x.d=x.b.a.k(4).a.k(7)
x.a=x.d5E()},
d5E(){var x,w,v,u=this,t=null,s="failed precondition",r="_numberOfUsersJoinedLabel"
switch(u.c){case D.ajM:if(!u.d.a.a7(1)){x=A.b1("Access codes config missing!",s)
x.toString
A.a6(A.aT(x))}x=A.a([],y.x)
w=u.e
if(typeof w!=="number")return w.cf()
if(w>0){w=$.c4t().an(w)
x.push(A.b(w+" codes generated",t,"_numberOfCodesGeneratedLabel",A.a([w],y.h),t))}if(u.d.a.k(1).a.ah(1).aI(0)>0){w=$.c4t().an(u.d.a.k(1).a.ah(1).aI(0))
x.push(A.b(w+" users joined",t,r,A.a([w],y.h),t))}if(!u.d.a.k(1).a.ak(0)){w=u.e
if(typeof w!=="number")return w.cf()
w=w>0}else w=!1
if(w)x.push(u.x)
return A.am(x,y.w)
case D.ajN:if(!u.d.a.a7(0)){x=A.b1("Open access config missing!",s)
x.toString
A.a6(A.aT(x))}x=u.d.a.k(0)
if(J.Z(x.a.ah(0),$.pkp()))v=$.pko()
else{x=$.c4t().an(x.a.ah(0).aI(0))
v=A.b(x+" users eligible",t,"_limitedOpenInviteLabel",A.a([x],y.h),t)}x=A.a([v],y.x)
if(u.d.a.k(0).a.ah(2).aI(0)>0){w=$.c4t().an(u.d.a.k(0).a.ah(2).aI(0))
x.push(A.b(w+" users joined",t,r,A.a([w],y.h),t))}if(!u.d.a.k(0).a.ak(1))x.push(u.w)
return A.am(x,y.w)
case D.ajO:if(!u.d.a.a7(2)){x=A.b1("Pre-reg invites config missing!",s)
x.toString
A.a6(A.aT(x))}x=A.a([],y.x)
w=u.r
if(w>0){w=$.c4t().an(w)
x.push(A.b(w+" eligible users",t,"_numberOfEligibleUsersLabel",A.a([w],y.h),t))}w=u.f
if(w>0){w=$.c4t().an(w)
x.push(A.b(w+" pre-registered users invited",t,"_numberOfPreRegisteredUsersInvitedLabel",A.a([w],y.h),t))}if(!u.d.a.k(2).a.ak(0)&&u.f>0)x.push(u.w)
return A.am(x,y.w)
default:throw A.P(A.as("Invalid acquisition method!",t))}},
gcpQ(){var x=this.b
return x!=null&&x.a.a7(4)&&this.b.a.k(4).a.a7(7)&&this.c!=null}}
B.c6S.prototype={
be(){return"AcquisitionMethod."+this.b}}
B.cAS.prototype={
gv(){return"AcquisitionMethodSummaryComponent"},
t(){var x=this,w=x.e=new A.a4(0,x,A.aj(x.ad())),v=x.d
x.f=new G.cg(w,new A.ac(w,B.wgx()),v.a.i(C.N,v.b))},
A(){var x=this,w=!x.a.gcpQ(),v=x.r!==w
if(v){x.f.sbU(w)
x.r=w}x.e.E()
$.u().G(v)},
C(){this.e.F()}}
B.dsJ.prototype={
gv(){return"AcquisitionMethodSummaryComponent"},
t(){var x=this,w=x.b=E.m8(x,0),v=w.c,u=x.a.c,t=u.gh()
t.toString
u=E.m7(t.i(C.l,u.gj()),v)
x.c=u
t=x.d=new A.a4(1,x,A.bF())
x.e=new A.bn(t,new A.ac(t,B.wgy()))
w.q(u,A.a([A.a([t],y.h)],y.v))
x.M(v)},
A(){var x,w,v=this,u=v.a,t=u.z
if((t&1)!==0)v.c.D()
x=u.a.a
w=v.f!=x
if(w){v.e.sbg(x)
v.f=x}v.e.au()
v.d.E()
v.b.l()
$.u().G(w)},
C(){this.d.F()
this.b.m()
this.c.u()}}
B.dsK.prototype={
gv(){return"AcquisitionMethodSummaryComponent"},
t(){var x=document.createElement("li")
x.appendChild(this.b.b)
this.M(x)},
A(){this.b.a8(this.a.f.B(0,"$implicit"))}}
var z=a.updateTypes(["p<~>(h,z)","z(uF)","bM(yJ)","bM(HQ)","aUu()"])
B.fds.prototype={
$1(d){return d.gf83().aI(0)},
$S:z+1}
B.fdt.prototype={
$2(d,e){if(typeof d!=="number")return d.b8()
if(typeof e!=="number")return A.ay(e)
return d+e},
$S:42}
B.fdu.prototype={
$1(d){return d.gezA()},
$S:z+2}
B.fdv.prototype={
$2(d,e){return d.b8(0,e)},
$S:99}
B.fdw.prototype={
$1(d){return d.gepD()},
$S:z+3}
B.fdx.prototype={
$2(d,e){return d.b8(0,e)},
$S:99};(function installTearOffs(){var x=a._static_0,w=a._static_2
x(B,"A5K","aAW",4)
w(B,"wgx","Ad7",0)
w(B,"wgy","Ad8",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.aUu,A.B)
x(B.bFP,A.C)
w(A.aY,[B.fds,B.fdu,B.fdw])
w(A.ek,[B.fdt,B.fdv,B.fdx])
x(B.c6S,A.e5)
x(B.cAS,A.b9)
w(A.p,[B.dsJ,B.dsK])})()
A.ag(b.typeUniverse,JSON.parse('{"aUu":{"B":[]},"cAS":{"h":[]},"dsJ":{"p":["bFP"],"h":[],"r":[]},"dsK":{"p":["bFP"],"h":[],"r":[]},"HQ":{"B":[]},"yJ":{"B":[]},"aJj":{"B":[]}}'))
var y={u:A.f("bFP"),v:A.f("t<O<C>>"),h:A.f("t<C>"),x:A.f("t<o>"),E:A.f("C"),w:A.f("o")};(function constants(){D.ajM=new B.c6S(0,"inviteCodes")
D.ajN=new B.c6S(1,"openInvites")
D.ajO=new B.c6S(2,"preRegInvites")})();(function staticFields(){$.n8F=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"G_H","tUA",()=>{var w=A.E("UpdateTrackRequest",B.A5K(),null,C.bB,null,null)
w.N(1,"track",A.ajW(),A.f("kg"))
w.N(2,"updateMask",A.jX(),A.f("kz"))
return w})
x($,"BWy","pkp",()=>A.cX(-1))
x($,"BWw","c4t",()=>A.eu(null))
x($,"BWx","pko",()=>{var w=null
return A.b("Unlimited users invited",w,w,w,w)})
x($,"GUO","mQh",()=>{var w=null
return A.b("Active",w,w,w,w)})
x($,"Ht5","mY1",()=>{var w=null
return A.b("Inactive",w,w,w,w)})
x($,"Gyc","ugG",()=>{var w=null
return A.b("Draft release",w,w,w,w)})})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_5266",e:"endPart",h:b})})($__dart_deferred_initializers__,"87uxgzOoT4do68V1q0yX+7jRhJI=");
//# sourceMappingURL=main.dart.js_5266.part.js.map

import{S as h,P as u,W as g,M as p,O as L,B as b,a as y,A as r}from"./OBJLoader-c0df76fe.js";let n,t,o,e;async function x(){n=new h,t=new u(75,window.innerWidth/window.innerHeight,.1,1e3),o=new g({alpha:!0}),o.setSize(window.innerWidth,window.innerHeight),document.getElementById("3d-model").appendChild(o.domElement),t.position.z=9,t.position.y+=1;let m=new p,i=new L;m.load("models/ducks/Duck.mtl",function(d){d.preload(),i.setMaterials(d),i.load("models/ducks/Duck.obj",function(c){e=c,e.scale.set(.2,.2,.2);const s=new b().setFromObject(e),l=s.max.y-s.min.y;e.position.y=l/2,e.rotation.y+=Math.PI,e.rotation.x+=y.degToRad(25);const w=new r(16777215,1);n.add(w);const f=new r(16448210,1);n.add(f),n.add(e)})});function a(){requestAnimationFrame(a),o.render(n,t)}a()}x();

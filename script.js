(()=>{"use strict";let e;console.log("Script started successfully");const o=[{zone:"needHelp",message:"Do you need some guidance? We are happy to help you out.",cta:[{label:"Meet us",className:"primary",callback:()=>WA.openTab("https://play.staging.workadventu.re/@/tcm/workadventure/wa-village")}]},{zone:"followUs",message:"Hey! Have you already started following us?",cta:[{label:"LinkedIn",className:"primary",callback:()=>WA.openTab("https://www.linkedin.com/company/workadventu-re")},{label:"Twitter",className:"primary",callback:()=>WA.openTab("https://twitter.com/workadventure_")}]}];function a(e,a){const n=o.find((o=>o.zone==e));void 0!==n&&(currentPopup=WA.openPopup(a,n.message,n.cta))}function n(){void 0!==typeof currentPopup&&(currentPopup.close(),currentPopup=void 0)}WA.onEnterZone("needHelp",(()=>{e="needHelp",a(e,e+"Popup")})),WA.onLeaveZone("needHelp",n),WA.onEnterZone("followUs",(()=>{e="followUs",a(e,e+"Popup")})),WA.onLeaveZone("followUs",n)})();
//# sourceMappingURL=script.js.map
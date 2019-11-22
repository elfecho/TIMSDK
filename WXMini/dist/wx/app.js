require("./common/manifest.js")
require("./debug/GenerateTestUserSig.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([1],{"17x+":function(e,t,n){"use strict";var o={state:{isSdkReady:!1},getters:{isSdkReady:function(e){return e.isSdkReady}},mutations:{showToast:function(e,t){wx.showToast({title:t.title,icon:t.icon||"none",duration:t.duration||800})},setSdkReady:function(e,t){e.isSdkReady=t}},action:{kickedReset:function(e){e.commit("resetGroup"),e.commit("resetUser"),e.commit("resetCurrentConversation"),e.commit("resetAllConversation")}}};t.a=o},Bbwh:function(e,t,n){"use strict";t.a={MSG_TEXT:"TIMTextElem",MSG_IMAGE:"TIMImageElem",MSG_SOUND:"TIMSoundElem",MSG_FILE:"TIMFileElem",MSG_FACE:"TIMFaceElem",MSG_VIDEO:"TIMVideoElem",MSG_GEO:"TIMLocationElem",MSG_GRP_TIP:"TIMGroupTipElem",MSG_GRP_SYS_NOTICE:"TIMGroupSystemNoticeElem",MSG_CUSTOM:"TIMCustomElem",CONV_C2C:"C2C",CONV_GROUP:"GROUP",CONV_SYSTEM:"@TIM#SYSTEM",GRP_PRIVATE:"Private",GRP_PUBLIC:"Public",GRP_CHATROOM:"ChatRoom",GRP_AVCHATROOM:"AVChatRoom",GRP_MBR_ROLE_OWNER:"Owner",GRP_MBR_ROLE_ADMIN:"Admin",GRP_MBR_ROLE_MEMBER:"Member",GRP_TIP_MBR_JOIN:1,GRP_TIP_MBR_QUIT:2,GRP_TIP_MBR_KICKED_OUT:3,GRP_TIP_MBR_SET_ADMIN:4,GRP_TIP_MBR_CANCELED_ADMIN:5,GRP_TIP_GRP_PROFILE_UPDATED:6,GRP_TIP_MBR_PROFILE_UPDATED:7,MSG_REMIND_ACPT_AND_NOTE:"AcceptAndNotify",MSG_REMIND_ACPT_NOT_NOTE:"AcceptNotNotify",MSG_REMIND_DISCARD:"Discard",GENDER_UNKNOWN:"Gender_Type_Unknown",GENDER_FEMALE:"Gender_Type_Female",GENDER_MALE:"Gender_Type_Male",KICKED_OUT_MULT_ACCOUNT:"mutipleAccount",KICKED_OUT_MULT_DEVICE:"mutipleDevice",ALLOW_TYPE_ALLOW_ANY:"AllowType_Type_AllowAny",ALLOW_TYPE_NEED_CONFIRM:"AllowType_Type_NeedConfirm",ALLOW_TYPE_DENY_ANY:"AllowType_Type_DenyAny",FORBID_TYPE_NONE:"AdminForbid_Type_None",FORBID_TYPE_SEND_OUT:"AdminForbid_Type_SendOut",JOIN_OPTIONS_FREE_ACCESS:"FreeAccess",JOIN_OPTIONS_NEED_PERMISSION:"NeedPermission",JOIN_OPTIONS_DISABLE_APPLY:"DisableApply",JOIN_STATUS_SUCCESS:"JoinedSuccess",JOIN_STATUS_WAIT_APPROVAL:"WaitAdminApproval"}},IcnI:function(e,t,n){"use strict";var o=n("5nAL"),r=n.n(o),a=n("NYxO"),s=n("tn05"),i=n("xTcS"),u=n("bREw"),c=n("17x+");r.a.use(a.a),t.a=new a.a.Store({modules:{conversation:s.a,group:i.a,user:u.a,global:c.a}})},M93x:function(e,t,n){"use strict";var o=n("Mw+1");var r=function(e){n("OYdO")},a=n("ybqe")(o.a,null,r,null,null);t.a=a.exports},"Mw+1":function(e,t,n){"use strict";t.a={created:function(){}}},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("5nAL"),r=n.n(o),a=n("M93x"),s=n("PDEy"),i=n.n(s),u=n("IcnI"),c=n("h1dT"),E=n.n(c),_=n("dutN"),I=n("Bbwh"),M=i.a.create({SDKAppID:_.a});M.setLogLevel(0),wx.$app=M,wx.$app.registerPlugin({"cos-wx-sdk":E.a});var T=new r.a;function l(e){var t=e.name===i.a.EVENT.SDK_READY;t&&(wx.hideLoading(),wx.switchTab({url:"../index/main"})),u.a.commit("setSdkReady",t)}r.a.prototype.TIM=i.a,r.a.prototype.$type=I.a,r.a.prototype.$store=u.a,r.a.prototype.$bus=T,M.on(i.a.EVENT.SDK_READY,l,this),M.on(i.a.EVENT.SDK_NOT_READY,l,this),M.on(i.a.EVENT.KICKED_OUT,function(e){u.a.commit("resetGroup"),u.a.commit("resetUser"),u.a.commit("resetCurrentConversation"),u.a.commit("resetAllConversation"),wx.showToast({title:"你已被踢下线",icon:"none",duration:1500}),setTimeout(function(){wx.reLaunch({url:"../login/main"})},1500)}),M.on(i.a.EVENT.ERROR,function(e){2800!==e.data.code&&2999!==e.data.code&&u.a.commit("showToast",{title:e.data.message,duration:2e3})}),M.on(i.a.EVENT.MESSAGE_RECEIVED,function(e){u.a.dispatch("onMessageEvent",e)}),M.on(i.a.EVENT.CONVERSATION_LIST_UPDATED,function(e){u.a.commit("updateAllConversation",e.data)}),M.on(i.a.EVENT.GROUP_LIST_UPDATED,function(e){u.a.commit("updateGroupList",e.data)}),M.on(i.a.EVENT.BLACKLIST_UPDATED,function(e){u.a.commit("updateBlacklist",e.data)}),M.on(i.a.EVENT.GROUP_SYSTEM_NOTICE_RECEIVED,function(e){console.log("system message",e)}),new r.a({TIMApp:a.a}).$mount()},OYdO:function(e,t){},Srkd:function(e,t,n){"use strict";t.a=function(e){switch(e.type){case"TIMTextElem":return function(e){var t=[],n=e.payload.text,r=-1,a=-1;for(;""!==n;)switch(r=n.indexOf("["),a=n.indexOf("]"),r){case 0:if(-1===a)t.push({name:"span",text:n}),n="";else{var s=n.slice(0,a+1);o.a[s]?(t.push({name:"img",src:o.c+o.a[s]}),n=n.substring(a+1)):(t.push({name:"span",text:"["}),n=n.slice(1))}break;case-1:t.push({name:"span",text:n}),n="";break;default:t.push({name:"span",text:n.slice(0,r)}),n=n.substring(r)}return t}(e);case"TIMGroupSystemNoticeElem":return function(e){var t=e.payload,n=t.groupProfile.groupName||t.groupProfile.groupID,o=void 0;switch(t.operationType){case r.JOIN_GROUP_REQUEST:o=t.operatorID+" 申请加入群组："+n;break;case r.JOIN_GROUP_ACCEPT:o="成功加入群组："+n;break;case r.JOIN_GROUP_REFUSE:o="申请加入群组："+n+"被拒绝";break;case r.KICKED_OUT:o="被管理员"+t.operatorID+"踢出群组："+n;break;case r.GROUP_DISMISSED:o="群："+n+" 已被"+t.operatorID+"解散";break;case r.GROUP_CREATED:o=t.operatorID+"创建群："+n;break;case r.INVITED_JOIN_GROUP_REQUEST:o=t.operatorID+"邀请你加群："+n;break;case r.QUIT:o="你退出群组："+n;break;case r.SET_ADMIN:o="你被"+t.operatorID+"设置为群："+n+"的管理员";break;case r.CANCELED_ADMIN:o="你被"+t.operatorID+"撤销群："+n+"的管理员身份";break;case r.REVOKE:o="群："+n+"被"+t.operatorID+"回收";break;case r.INVITED_JOIN_GROUP_REQUEST_AGREE:o=t.operatorID+"同意入群："+n+"邀请";break;case r.CUSTOM:o="自定义群系统通知："+t.userDefinedField}return[{name:"system",text:o}]}(e);case"TIMGroupTipElem":return function(e){var t=e.payload,n=void 0;switch(t.operationType){case a.MEMBER_JOIN:n="新成员加入："+t.userIDList.join(",");break;case a.MEMBER_QUIT:n="群成员退群："+t.userIDList.join(",");break;case a.MEMBER_KICKED_OUT:n="群成员被踢："+t.userIDList.join(",");break;case a.MEMBER_SET_ADMIN:n=t.operatorID+"将"+t.userIDList.join(",")+"设置为管理员";break;case a.MEMBER_CANCELED_ADMIN:n=t.operatorID+"将"+t.userIDList.join(",")+"取消作为管理员";break;case a.GROUP_INFO_MODIFIED:n="群资料修改";break;case a.MEMBER_INFO_MODIFIED:n="群成员资料修改"}return[{name:"groupTip",text:n}]}(e);default:return[]}};var o=n("lRgn"),r={JOIN_GROUP_REQUEST:1,JOIN_GROUP_ACCEPT:2,JOIN_GROUP_REFUSE:3,KICKED_OUT:4,GROUP_DISMISSED:5,GROUP_CREATED:6,INVITED_JOIN_GROUP_REQUEST:7,QUIT:8,SET_ADMIN:9,CANCELED_ADMIN:10,REVOKE:11,INVITED_JOIN_GROUP_REQUEST_AGREE:12,READED:15,CUSTOM:255},a={MEMBER_JOIN:1,MEMBER_QUIT:2,MEMBER_KICKED_OUT:3,MEMBER_SET_ADMIN:4,MEMBER_CANCELED_ADMIN:5,GROUP_INFO_MODIFIED:6,MEMBER_INFO_MODIFIED:7}},bREw:function(e,t,n){"use strict";t.a={state:{myInfo:{},userProfile:{},blacklist:[]},getters:{myInfo:function(e){return e.myInfo},userProfile:function(e){return e.userProfile}},mutations:{updateMyInfo:function(e,t){e.myInfo=t},updateUserProfile:function(e,t){e.userProfile=t},setBlacklist:function(e,t){e.blacklist=t},updateBlacklist:function(e,t){e.blacklist.push(t)},resetUser:function(e){e.blacklist=[],e.userProfile={},e.myInfo={}}}}},tn05:function(e,t,n){"use strict";var o=n("Gu7T"),r=n.n(o),a=n("0xDb"),s=n("Srkd"),i={state:{allConversation:[],currentConversationID:"",currentConversation:{},currentMessageList:[],nextReqMessageID:"",isCompleted:!1,isLoading:!1},getters:{allConversation:function(e){return e.allConversation},toAccount:function(e){return 0===e.currentConversationID.indexOf("C2C")?e.currentConversationID.substring(3):0===e.currentConversationID.indexOf("GROUP")?e.currentConversationID.substring(5):void 0},toName:function(e){return"C2C"===e.currentConversation.type?e.currentConversation.userProfile.userID:"GROUP"===e.currentConversation.type?e.currentConversation.groupProfile.name:void 0},currentConversationType:function(e){return 0===e.currentConversationID.indexOf("C2C")?"C2C":0===e.currentConversationID.indexOf("GROUP")?"GROUP":""},currentConversation:function(e){return e.currentConversation},currentMessageList:function(e){return e.currentMessageList}},mutations:{unshiftMessageList:function(e,t){for(var n=[].concat(r()(t)),o=0;o<n.length;o++){var i=n[o];n[o].virtualDom=Object(s.a)(i);var u=new Date(1e3*i.time);n[o].newtime=Object(a.a)(u)}e.currentMessageList=[].concat(r()(n),r()(e.currentMessageList))},receiveMessage:function(e,t){for(var n=[].concat(r()(t)),o=0;o<n.length;o++){var i=n[o];n[o].virtualDom=Object(s.a)(i);var u=new Date(1e3*i.time);n[o].newtime=Object(a.a)(u)}e.currentMessageList=[].concat(r()(e.currentMessageList),r()(n))},sendMessage:function(e,t){t.virtualDom=Object(s.a)(t);var n=new Date(1e3*t.time);t.newtime=Object(a.a)(n),e.currentMessageList.push(t),setTimeout(function(){wx.pageScrollTo({scrollTop:99999})},800)},updateCurrentConversation:function(e,t){e.currentConversation=t,e.currentConversationID=t.conversationID},updateAllConversation:function(e,t){for(var n=0;n<t.length;n++)if(t[n].lastMessage&&"number"==typeof t[n].lastMessage.lastTime){var o=new Date(1e3*t[n].lastMessage.lastTime);t[n].lastMessage._lastTime=Object(a.a)(o)}e.allConversation=t},resetCurrentConversation:function(e){e.currentConversationID="",e.currentConversation={},e.currentMessageList=[],e.nextReqMessageID="",e.isCompleted=!1,e.isLoading=!1},resetAllConversation:function(e){e.allConversation=[]},removeMessage:function(e,t){e.currentMessageList.splice(e.currentMessageList.findIndex(function(e){return e.ID===t.ID}),1)},changeMessageStatus:function(e,t){e.currentMessageList[t].status="fail"}},actions:{onMessageEvent:function(e,t){if("onMessageReceived"===t.name){var n=e.state.currentConversationID;if(!n)return;var o=[];t.data.forEach(function(e){e.conversationID===n&&o.push(e)}),e.commit("receiveMessage",o)}},getMessageList:function(e){var t=e.state,n=t.currentConversationID,o=t.nextReqMessageID;e.state.isCompleted?wx.showToast({title:"没有更多啦",icon:"none",duration:1500}):e.state.isLoading?wx.showToast({title:"你拉的太快了",icon:"none",duration:500}):(e.state.isLoading=!0,wx.$app.getMessageList({conversationID:n,nextReqMessageID:o,count:15}).then(function(t){e.state.nextReqMessageID=t.data.nextReqMessageID,e.commit("unshiftMessageList",t.data.messageList),t.data.isCompleted&&(e.state.isCompleted=!0,wx.showToast({title:"更新成功",icon:"none",duration:1500})),e.state.isLoading=!1}).catch(function(e){console.log(e)}))}}};t.a=i},xTcS:function(e,t,n){"use strict";var o=n("Gu7T"),r=n.n(o),a={state:{groupList:[],currentGroupProfile:{},currentGroupMemberList:[],offset:0,count:15,isLoading:!1},getters:{hasGroupList:function(e){return e.groupList.length>0}},mutations:{updateOffset:function(e){e.offset+=e.count},updateGroupList:function(e,t){e.groupList=t},updateCurrentGroupMemberList:function(e,t){e.currentGroupMemberList=[].concat(r()(e.currentGroupMemberList),r()(t))},updateCurrentGroupProfile:function(e,t){e.currentGroupProfile=t},resetGroup:function(e){e.currentGroupProfile={},e.currentGroupMemberList=[],e.offset=0},setCurrentGroupMemberList:function(e,t){e.currentGroupMemberList=[].concat(r()(t))}},actions:{getGroupMemberList:function(e){var t=e.state,n=t.offset,o=t.count,r=t.isLoading,a=t.currentGroupProfile,s=a.memberNum,i=a.groupID;n<s?r?wx.showToast({title:"你拉的太快了",icon:"none",duration:500}):(e.state.isLoading=!0,wx.$app.getGroupMemberList({groupID:i,offset:n,count:o}).then(function(t){e.commit("updateCurrentGroupMemberList",t.data.memberList),e.commit("updateOffset"),e.state.isLoading=!1}).catch(function(e){console.log(e)})):wx.showToast({title:"没有更多啦",icon:"none",duration:1500})}}};t.a=a}},["NHnr"]);
/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2015 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual property laws,
* including trade secret and or copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/
function dependOn(){"use strict";return[require("util"),require("communicate"),require("analytics"),require("common"),require("proxy")]}var def;require=function(e){"use strict";return e},def=window.define?window.define:function(e,t){"use strict";return t.apply(null,[{ajax:$.ajax.bind($)}])};var exports=acom_analytics={};def(dependOn(),(function(e,t,i,n,s){"use strict";const _={SIGNED_IN:"signed_in",LIMITS:"limits",COMPLETE_CONVERSION:"complete_conversion"},r={SEARCH:"search",TREFOIL:"trefoil"},o={PRE_PROCESSING_ERROR:"pre-processing-error",PROCESSING_ERROR:"processing-error",FILE_UPLOAD_START:"file-upload-start",DROPZONE_DISPLAYED:"dropzone-displayed",STARTUP_ERROR:"startup-error"},a={DISMISS:"dismiss",NONE:"none"},l={LOAD_FRICTIONLESS:"load-frictionless",SEND_EXTERNAL_MESSAGE:"send-external-msg",SHOW_FRICTIONLESS_ERROR:"show-frictionless-error",CLEAR_FRICTIONLESS_ERROR:"clear-frictionless-error"},c={LIMITS_TIME:"limits_time",SIGNED_IN_TIME:"signed_in_time",DROPZONE_DISPLAY_TIME:"dropzone_display_time",STARTUP_TO_FRAME_LOAD:"startup_to_iframe_load"},p="word-to-pdf",d="ppt-to-pdf",f="jpg-to-pdf",E="excel-to-pdf",m="createpdf",u="compress-pdf",S="pdf-to-word",R="pdf-to-excel",I="pdf-to-ppt",O="pdf-to-image",T={CREATE_PDF:"create_pdf",COMPRESS_PDF:"compress_pdf",EXPORT_PDF:"export_pdf"};let N=null;N||(N=new function(){const N={};function L(){this.received_limits=!1,this.limits_time=null,this.received_signedin=!1,this.signed_in_time=null,this.signed_in=!1,this.received_display=!1,this.dropzone_display_time=null,this.received_error=!1,this.error_title=null,this.error_description=null,this.pdf_action=null,this.workflow=null,this.startup_time=null,this.iframe_onload_time=null,this.iframe_call_time=null}function g(e){return N[e]||(N[e]=new L),N[e]}this.proxy=s.proxy.bind(this),this.LOG=n.LOG;const D=function(e,t,n,s){const _=g(e);if(1==_.received_limits&&1==_.received_signedin&&1==_.received_display){if(n===r.SEARCH){if(0==_.signed_in&&1==_.has_free_ops){let _=t.panel_op;F(e,t),P(e,t),t.panel_op=_;let r=s?s.toUpperCase().replace(/\-/g,"_"):"UNKNOWN";i.event(i.e.FRICTIONLESS_WIDGET_LOADED,{TOOL:r,WORKFLOW:n})}}else if(C(e,t),0==_.signed_in&&1==_.has_free_ops){let e=t.pdf_action?t.pdf_action.toUpperCase().replace(/\-/g,"_"):"UNKNOWN";i.event(i.e.FRICTIONLESS_WIDGET_LOADED,{TOOL:e,WORKFLOW:t.frictionless_workflow})}!function(e){delete N[e]}(e)}},h=function(e,t,n,s,_){const o=g(e);o.received_limits=!0,o.limits_time=_.timeStamp;const a=t.limits;if(!n||!a)return!1;o.has_free_ops=function(e,t){let i=null;switch(e){case p:case d:case f:case E:case m:i=T.CREATE_PDF;break;case u:i=T.COMPRESS_PDF;break;case S:case R:case I:case O:i=T.EXPORT_PDF}if(null===i)return!1;let n=t[i];return n&&n.can_process||!1}(n,a);const l=o.has_free_ops?"UnderLimit":"OverLimit";i.event(i.e.FRICTIONLESS_CONVERSION_LIMITS,{WORKFLOW:s,RESULT:l}),M(e,_,c.LIMITS_TIME),s!==r.SEARCH||o.has_free_ops?D(e,_,s,n):A(e,_)},A=function(e,i){i.content_op=a.DISMISS,t.sendMessage(i,!1)},M=function(i,n,s){if("false"===e.getCookie("logAnalytics"))return;const _=g(i),r=n.panel_op;let o={content:"timing_info"};o.workflow=n.frictionless_workflow,function(e,t,i){switch(i){case c.STARTUP_TO_FRAME_LOAD:t.startup_time&&(t.iframe_onload_time&&(e.startup_to_iframe_load=t.iframe_onload_time-t.startup_time),t.iframe_call_time&&(e.startup_to_iframe_call=t.iframe_call_time-t.startup_time));break;case c.SIGNED_IN_TIME:t.startup_time&&t.signed_in_time&&(e.startup_to_signin=t.signed_in_time-t.startup_time);break;case c.LIMITS_TIME:t.startup_time&&t.limits_time&&(e.startup_to_limits=t.limits_time-t.startup_time);break;case c.DROPZONE_DISPLAY_TIME:t.startup_time&&t.dropzone_display_time&&(e.startup_to_display=t.dropzone_display_time-t.startup_time)}}(o,_,s),n.data=o,n.panel_op=l.SEND_EXTERNAL_MESSAGE,t.sendMessage(n,!1),n.panel_op=r},C=function(e,i){i.panel_op=l.LOAD_FRICTIONLESS,i.content_op=a.NONE,i.hide_spinner=!0,t.sendMessage(i,!1),i.hide_spinner=void 0},F=function(e,i){i.panel_op=l.SEND_EXTERNAL_MESSAGE,i.data={valid:"true"},t.sendMessage(i,!1)},P=function(e,i){i.content_op=a.NONE,i.panel_op=l.LOAD_FRICTIONLESS,i.frame_visibility="visible",t.sendMessage(i)};this.startNewInteraction=function(e){return N[e]=new L,N[e]},this.externalMsgHandler=function(n,s,p){const d=n.data,f=s.tab.id,E=t.getTabLastMessage(f);let m=!1;switch(d.content_op){case _.SIGNED_IN:!function(e,t,n,s,_){const o=g(e);o.received_signedin=!0,o.signed_in_time=_.timeStamp,o.signed_in=t.is_signed_in;const a=o.signed_in?"SignedIn":"SignedOut";i.event(i.e.FRICTIONLESS_USER_SIGNEDIN,{WORKFLOW:s,RESULT:a}),M(e,_,c.SIGNED_IN_TIME),s===r.SEARCH&&o.signed_in?A(e,_):D(e,_,s,n)}(f,d,E.pdf_action,E.frictionless_workflow,n),m=!0;break;case _.LIMITS:h(f,d,E.pdf_action,E.frictionless_workflow,n),m=!0;break;case _.COMPLETE_CONVERSION:!function(t,n,s,_){if(!n||!n.conversion_url)return!1;e.createTab(n.conversion_url),i.event(i.e.FRICTIONLESS_SWITCH_TAB,{WORKFLOW:s}),A(t,_)}(f,d,E.frictionless_workflow,n),m=!0}if(!m&&d.dc_hosted_event){const e=d.dc_hosted_event.event,s=d.dc_hosted_event.event_data;switch(e){case o.PRE_PROCESSING_ERROR:case o.PROCESSING_ERROR:!function(e,i,n,s){s.panel_op=l.SHOW_FRICTIONLESS_ERROR,s.content_op=a.NONE,s.error_title=i,s.error_description=n,t.sendMessage(s,!1)}(0,s.title,s.description,n);break;case o.FILE_UPLOAD_START:!function(e,i){const n=i.panel_op;i.panel_op=l.CLEAR_FRICTIONLESS_ERROR,t.sendMessage(i,!1),i.panel_op=n}(0,n);break;case o.DROPZONE_DISPLAYED:!function(e,t,i,n){const s=g(e);s.received_display=!0,s.dropzone_display_time=n.timeStamp,M(e,n,c.DROPZONE_DISPLAY_TIME),D(e,n,i,t)}(f,E.pdf_action,E.frictionless_workflow,n);break;case o.STARTUP_ERROR:!function(e,t,i){t===r.SEARCH?A(e,i):t===r.TREFOIL&&C(e,i)}(f,workflow,E);const e=E.pdf_action?E.pdf_action.toUpperCase().replace(/\-/g,"_"):"UNKNOWN";i.event(i.e.FRICTIONLESS_WIDGET_STARTUP_ERROR,{TOOL:e})}}delete E.timeStamp},this.sendFrictionlessURL=function(e,i,s){e.panel_op=l.LOAD_FRICTIONLESS,e.frictionless_uri=n.getFrictionlessUri(),e.env=n.getEnv();let _=g(e.tabId);!e.startup_time||_.startup_time&&_.startup_time===e.startup_time||(_=this.startNewInteraction(e.tabId),_.startup_time=e.startup_time),t.sendMessage(e,!1)},this.handleTimingInformationFromWidget=function(e,i,n){let s=g(e.tabId);const _=e.timing_op;if(delete e.timing_op,t.getTabLastMessage(e.tabId)){t.updateTabMessage(e.tabId,e);const i=t.getTabLastMessage(e.tabId);s.startup_time=s.startup_time||e.startup_time,s.iframe_onload_time=s.onload_time||e.iframe_onload_time,s.iframe_call_time=s.iframe_call_time||e.iframe_call_time,_&&M(e.tabId,i,_)}}},t.registerHandlers({"get-frictionless-url":N.proxy(N.sendFrictionlessURL),external_msg:N.proxy(N.externalMsgHandler),timing_info:N.proxy(N.handleTimingInformationFromWidget)}));for(const e in N)N.hasOwnProperty(e)&&("function"==typeof N[e]?exports[e]=N[e].bind(N):exports[e]=N[e]);return N}));
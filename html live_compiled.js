if(!lt.util.load.provided_QMARK_('lt.plugins.html.live')) {
goog.provide('lt.plugins.html.live');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('crate.core');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.console');
goog.require('crate.core');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('crate.binding');
goog.require('lt.objs.editor');
lt.plugins.html.live.start_browser = (function start_browser(path){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"add-browser-tab","add-browser-tab",3663273910),[cljs.core.str("file://"),cljs.core.str(path)].join(''));
});
lt.plugins.html.live.get_browser_client_BANG_ = (function get_browser_client_BANG_(editor){return lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.html","editor.eval.html",3156465134),new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"create","create",3956577390),(function (opts){return lt.plugins.html.live.start_browser.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));
}),new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"live-frame","live-frame",783876286)], null));
});
lt.plugins.html.live.__BEH__eval_on_change = (function __BEH__eval_on_change(editor){var temp__4092__auto__ = lt.plugins.html.live.get_browser_client_BANG_.call(null,editor);if(cljs.core.truth_(temp__4092__auto__))
{var client = temp__4092__auto__;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255),new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))))
{var iframe_doc = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"iframe","iframe",4117657110),lt.object.__GT_content.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)))).contentDocument;return lt.util.dom.html.call(null,iframe_doc.documentElement,lt.objs.editor.__GT_val.call(null,editor));
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.html.live","eval-on-change","lt.plugins.html.live/eval-on-change",2048643728),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.html.live.__BEH__eval_on_change,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change","change",3947235106),null], null), null));
lt.plugins.html.live.live_toggler = (function live_toggler(this$){var e__8100__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#instarepl","div#instarepl",2561476298),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),crate.binding.bound.call(null,this$,(function (p1__8310_SHARP_){return [cljs.core.str("livetoggler "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(p1__8310_SHARP_))?null:"off"))].join('');
}))], null),"live"], null)], null));var seq__8317_8323 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (e){lt.util.dom.prevent.call(null,e);
return lt.object.raise.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"live.toggle!","live.toggle!",4497782717));
})], null)));var chunk__8318_8324 = null;var count__8319_8325 = 0;var i__8320_8326 = 0;while(true){
if((i__8320_8326 < count__8319_8325))
{var vec__8321_8327 = cljs.core._nth.call(null,chunk__8318_8324,i__8320_8326);var ev__8101__auto___8328 = cljs.core.nth.call(null,vec__8321_8327,0,null);var func__8102__auto___8329 = cljs.core.nth.call(null,vec__8321_8327,1,null);lt.util.dom.on.call(null,e__8100__auto__,ev__8101__auto___8328,func__8102__auto___8329);
{
var G__8330 = seq__8317_8323;
var G__8331 = chunk__8318_8324;
var G__8332 = count__8319_8325;
var G__8333 = (i__8320_8326 + 1);
seq__8317_8323 = G__8330;
chunk__8318_8324 = G__8331;
count__8319_8325 = G__8332;
i__8320_8326 = G__8333;
continue;
}
} else
{var temp__4092__auto___8334 = cljs.core.seq.call(null,seq__8317_8323);if(temp__4092__auto___8334)
{var seq__8317_8335__$1 = temp__4092__auto___8334;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8317_8335__$1))
{var c__7486__auto___8336 = cljs.core.chunk_first.call(null,seq__8317_8335__$1);{
var G__8337 = cljs.core.chunk_rest.call(null,seq__8317_8335__$1);
var G__8338 = c__7486__auto___8336;
var G__8339 = cljs.core.count.call(null,c__7486__auto___8336);
var G__8340 = 0;
seq__8317_8323 = G__8337;
chunk__8318_8324 = G__8338;
count__8319_8325 = G__8339;
i__8320_8326 = G__8340;
continue;
}
} else
{var vec__8322_8341 = cljs.core.first.call(null,seq__8317_8335__$1);var ev__8101__auto___8342 = cljs.core.nth.call(null,vec__8322_8341,0,null);var func__8102__auto___8343 = cljs.core.nth.call(null,vec__8322_8341,1,null);lt.util.dom.on.call(null,e__8100__auto__,ev__8101__auto___8342,func__8102__auto___8343);
{
var G__8344 = cljs.core.next.call(null,seq__8317_8335__$1);
var G__8345 = null;
var G__8346 = 0;
var G__8347 = 0;
seq__8317_8323 = G__8344;
chunk__8318_8324 = G__8345;
count__8319_8325 = G__8346;
i__8320_8326 = G__8347;
continue;
}
}
} else
{}
}
break;
}
return e__8100__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.html.live","live-toggler","lt.plugins.html.live/live-toggler",783016384),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.html.live","live-toggler","lt.plugins.html.live/live-toggler",783016384),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"Live Mode Toggler",new cljs.core.Keyword(null,"live","live",1017226334),true,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,editor){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor","editor",4001043679),editor], null));
var editor_content = lt.object.__GT_content.call(null,editor);var frame = lt.util.dom.parent.call(null,editor_content);var toggler = lt.plugins.html.live.live_toggler.call(null,this$);lt.util.dom.append.call(null,toggler,editor_content);
return lt.util.dom.append.call(null,frame,toggler);
}));
lt.plugins.html.live.live_off = (function live_off(editor){lt.object.remove_tags.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.html.live","editor.html.live",603666816)], null));
var temp__4092__auto__ = new cljs.core.Keyword("lt.plugins.html.live","live-toggler","lt.plugins.html.live/live-toggler",783016384).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));if(cljs.core.truth_(temp__4092__auto__))
{var toggler = temp__4092__auto__;return lt.object.merge_BANG_.call(null,toggler,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"live","live",1017226334),false], null));
} else
{return null;
}
});
lt.plugins.html.live.live_on = (function live_on(editor){lt.plugins.html.live.get_browser_client_BANG_.call(null,editor);
if(cljs.core.truth_(new cljs.core.Keyword("lt.plugins.html.live","live-toggler","lt.plugins.html.live/live-toggler",783016384).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))))
{} else
{lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.html.live","live-toggler","lt.plugins.html.live/live-toggler",783016384),lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.html.live","live-toggler","lt.plugins.html.live/live-toggler",783016384),editor)], null));
}
lt.object.add_tags.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.html.live","editor.html.live",603666816)], null));
return lt.object.merge_BANG_.call(null,new cljs.core.Keyword("lt.plugins.html.live","live-toggler","lt.plugins.html.live/live-toggler",783016384).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"live","live",1017226334),true], null));
});
lt.plugins.html.live.__BEH__live_toggle = (function __BEH__live_toggle(editor){if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,editor,new cljs.core.Keyword(null,"editor.html.live","editor.html.live",603666816))))
{lt.plugins.html.live.live_off.call(null,editor);
} else
{lt.plugins.html.live.live_on.call(null,editor);
}
return lt.objs.editor.focus.call(null,editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.html.live","live-toggle","lt.plugins.html.live/live-toggle",668018280),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.html.live.__BEH__live_toggle,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"live.toggle!","live.toggle!",4497782717),null], null), null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"html.toggle-live","html.toggle-live",2592118132),new cljs.core.Keyword(null,"desc","desc",1016984067),"HTML: Toggle live mode",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"live.toggle!","live.toggle!",4497782717));
} else
{return null;
}
})], null));
}

//# sourceMappingURL=html live_compiled.js.map
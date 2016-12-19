// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('pi_clock.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('pi_clock.hardware');
goog.require('pi_clock.clock');
goog.require('pi_clock.bridge');
cljs.nodejs.enable_util_print_BANG_.call(null);
pi_clock.core.update_led_BANG_ = (function pi_clock$core$update_led_BANG_(p__8729){
var map__8732 = p__8729;
var map__8732__$1 = ((((!((map__8732 == null)))?((((map__8732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8732.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8732):map__8732);
var pin = cljs.core.get.call(null,map__8732__$1,new cljs.core.Keyword(null,"pin","pin",-2111774834));
var on_QMARK_ = cljs.core.get.call(null,map__8732__$1,new cljs.core.Keyword(null,"on","on",173873944));
if(cljs.core.truth_(on_QMARK_)){
return pi_clock.hardware.set_high_BANG_.call(null,pin);
} else {
return pi_clock.hardware.set_low_BANG_.call(null,pin);
}
});
pi_clock.core.init_pins_BANG_ = (function pi_clock$core$init_pins_BANG_(){
var seq__8738 = cljs.core.seq.call(null,pi_clock.bridge.ALL_PINS);
var chunk__8739 = null;
var count__8740 = (0);
var i__8741 = (0);
while(true){
if((i__8741 < count__8740)){
var p = cljs.core._nth.call(null,chunk__8739,i__8741);
pi_clock.hardware.open_pin_BANG_.call(null,p);

var G__8742 = seq__8738;
var G__8743 = chunk__8739;
var G__8744 = count__8740;
var G__8745 = (i__8741 + (1));
seq__8738 = G__8742;
chunk__8739 = G__8743;
count__8740 = G__8744;
i__8741 = G__8745;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__8738);
if(temp__6753__auto__){
var seq__8738__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8738__$1)){
var c__7991__auto__ = cljs.core.chunk_first.call(null,seq__8738__$1);
var G__8746 = cljs.core.chunk_rest.call(null,seq__8738__$1);
var G__8747 = c__7991__auto__;
var G__8748 = cljs.core.count.call(null,c__7991__auto__);
var G__8749 = (0);
seq__8738 = G__8746;
chunk__8739 = G__8747;
count__8740 = G__8748;
i__8741 = G__8749;
continue;
} else {
var p = cljs.core.first.call(null,seq__8738__$1);
pi_clock.hardware.open_pin_BANG_.call(null,p);

var G__8750 = cljs.core.next.call(null,seq__8738__$1);
var G__8751 = null;
var G__8752 = (0);
var G__8753 = (0);
seq__8738 = G__8750;
chunk__8739 = G__8751;
count__8740 = G__8752;
i__8741 = G__8753;
continue;
}
} else {
return null;
}
}
break;
}
});
pi_clock.core.update_time_BANG_ = (function pi_clock$core$update_time_BANG_(){
var seq__8758 = cljs.core.seq.call(null,pi_clock.bridge.time__GT_leds.call(null,pi_clock.clock.get_time_BANG_.call(null)));
var chunk__8759 = null;
var count__8760 = (0);
var i__8761 = (0);
while(true){
if((i__8761 < count__8760)){
var led = cljs.core._nth.call(null,chunk__8759,i__8761);
pi_clock.core.update_led_BANG_.call(null,led);

var G__8762 = seq__8758;
var G__8763 = chunk__8759;
var G__8764 = count__8760;
var G__8765 = (i__8761 + (1));
seq__8758 = G__8762;
chunk__8759 = G__8763;
count__8760 = G__8764;
i__8761 = G__8765;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__8758);
if(temp__6753__auto__){
var seq__8758__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8758__$1)){
var c__7991__auto__ = cljs.core.chunk_first.call(null,seq__8758__$1);
var G__8766 = cljs.core.chunk_rest.call(null,seq__8758__$1);
var G__8767 = c__7991__auto__;
var G__8768 = cljs.core.count.call(null,c__7991__auto__);
var G__8769 = (0);
seq__8758 = G__8766;
chunk__8759 = G__8767;
count__8760 = G__8768;
i__8761 = G__8769;
continue;
} else {
var led = cljs.core.first.call(null,seq__8758__$1);
pi_clock.core.update_led_BANG_.call(null,led);

var G__8770 = cljs.core.next.call(null,seq__8758__$1);
var G__8771 = null;
var G__8772 = (0);
var G__8773 = (0);
seq__8758 = G__8770;
chunk__8759 = G__8771;
count__8760 = G__8772;
i__8761 = G__8773;
continue;
}
} else {
return null;
}
}
break;
}
});
pi_clock.core._main = (function pi_clock$core$_main(var_args){
var args__8308__auto__ = [];
var len__8301__auto___8775 = arguments.length;
var i__8302__auto___8776 = (0);
while(true){
if((i__8302__auto___8776 < len__8301__auto___8775)){
args__8308__auto__.push((arguments[i__8302__auto___8776]));

var G__8777 = (i__8302__auto___8776 + (1));
i__8302__auto___8776 = G__8777;
continue;
} else {
}
break;
}

var argseq__8309__auto__ = ((((0) < args__8308__auto__.length))?(new cljs.core.IndexedSeq(args__8308__auto__.slice((0)),(0),null)):null);
return pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__8309__auto__);
});

pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.println.call(null,"Initializing all pins");

pi_clock.core.init_pins_BANG_.call(null);

cljs.core.println.call(null,"Starting clock");

return setInterval((function (){
return pi_clock.core.update_time_BANG_.call(null).call(null);
}),(1000));
});

pi_clock.core._main.cljs$lang$maxFixedArity = (0);

pi_clock.core._main.cljs$lang$applyTo = (function (seq8774){
return pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8774));
});

cljs.core._STAR_main_cli_fn_STAR_ = pi_clock.core._main;

//# sourceMappingURL=core.js.map
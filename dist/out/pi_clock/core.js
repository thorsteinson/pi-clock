// Compiled by ClojureScript 1.9.293 {:target :nodejs}
goog.provide('pi_clock.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('pi_clock.hardware');
goog.require('pi_clock.clock');
goog.require('pi_clock.bridge');
cljs.nodejs.enable_util_print_BANG_.call(null);
pi_clock.core.update_led_BANG_ = (function pi_clock$core$update_led_BANG_(p__8722){
var map__8725 = p__8722;
var map__8725__$1 = ((((!((map__8725 == null)))?((((map__8725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8725.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8725):map__8725);
var pin = cljs.core.get.call(null,map__8725__$1,new cljs.core.Keyword(null,"pin","pin",-2111774834));
var on_QMARK_ = cljs.core.get.call(null,map__8725__$1,new cljs.core.Keyword(null,"on","on",173873944));
if(cljs.core.truth_(on_QMARK_)){
return pi_clock.hardware.set_high_BANG_.call(null,pin);
} else {
return pi_clock.hardware.set_low_BANG_.call(null,pin);
}
});
pi_clock.core.init_pins_BANG_ = (function pi_clock$core$init_pins_BANG_(){
var seq__8731 = cljs.core.seq.call(null,pi_clock.bridge.ALL_PINS);
var chunk__8732 = null;
var count__8733 = (0);
var i__8734 = (0);
while(true){
if((i__8734 < count__8733)){
var p = cljs.core._nth.call(null,chunk__8732,i__8734);
pi_clock.hardware.open_pin_BANG_.call(null,p);

var G__8735 = seq__8731;
var G__8736 = chunk__8732;
var G__8737 = count__8733;
var G__8738 = (i__8734 + (1));
seq__8731 = G__8735;
chunk__8732 = G__8736;
count__8733 = G__8737;
i__8734 = G__8738;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__8731);
if(temp__6753__auto__){
var seq__8731__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8731__$1)){
var c__7991__auto__ = cljs.core.chunk_first.call(null,seq__8731__$1);
var G__8739 = cljs.core.chunk_rest.call(null,seq__8731__$1);
var G__8740 = c__7991__auto__;
var G__8741 = cljs.core.count.call(null,c__7991__auto__);
var G__8742 = (0);
seq__8731 = G__8739;
chunk__8732 = G__8740;
count__8733 = G__8741;
i__8734 = G__8742;
continue;
} else {
var p = cljs.core.first.call(null,seq__8731__$1);
pi_clock.hardware.open_pin_BANG_.call(null,p);

var G__8743 = cljs.core.next.call(null,seq__8731__$1);
var G__8744 = null;
var G__8745 = (0);
var G__8746 = (0);
seq__8731 = G__8743;
chunk__8732 = G__8744;
count__8733 = G__8745;
i__8734 = G__8746;
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
var seq__8751 = cljs.core.seq.call(null,pi_clock.bridge.time__GT_leds.call(null,pi_clock.clock.get_time_BANG_.call(null)));
var chunk__8752 = null;
var count__8753 = (0);
var i__8754 = (0);
while(true){
if((i__8754 < count__8753)){
var led = cljs.core._nth.call(null,chunk__8752,i__8754);
pi_clock.core.update_led_BANG_.call(null,led);

var G__8755 = seq__8751;
var G__8756 = chunk__8752;
var G__8757 = count__8753;
var G__8758 = (i__8754 + (1));
seq__8751 = G__8755;
chunk__8752 = G__8756;
count__8753 = G__8757;
i__8754 = G__8758;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__8751);
if(temp__6753__auto__){
var seq__8751__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8751__$1)){
var c__7991__auto__ = cljs.core.chunk_first.call(null,seq__8751__$1);
var G__8759 = cljs.core.chunk_rest.call(null,seq__8751__$1);
var G__8760 = c__7991__auto__;
var G__8761 = cljs.core.count.call(null,c__7991__auto__);
var G__8762 = (0);
seq__8751 = G__8759;
chunk__8752 = G__8760;
count__8753 = G__8761;
i__8754 = G__8762;
continue;
} else {
var led = cljs.core.first.call(null,seq__8751__$1);
pi_clock.core.update_led_BANG_.call(null,led);

var G__8763 = cljs.core.next.call(null,seq__8751__$1);
var G__8764 = null;
var G__8765 = (0);
var G__8766 = (0);
seq__8751 = G__8763;
chunk__8752 = G__8764;
count__8753 = G__8765;
i__8754 = G__8766;
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
var len__8301__auto___8768 = arguments.length;
var i__8302__auto___8769 = (0);
while(true){
if((i__8302__auto___8769 < len__8301__auto___8768)){
args__8308__auto__.push((arguments[i__8302__auto___8769]));

var G__8770 = (i__8302__auto___8769 + (1));
i__8302__auto___8769 = G__8770;
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
return pi_clock.core.update_time_BANG_.call(null);
}),(1000));
});

pi_clock.core._main.cljs$lang$maxFixedArity = (0);

pi_clock.core._main.cljs$lang$applyTo = (function (seq8767){
return pi_clock.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8767));
});

cljs.core._STAR_main_cli_fn_STAR_ = pi_clock.core._main;

//# sourceMappingURL=core.js.map